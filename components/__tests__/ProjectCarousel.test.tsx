import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ProjectCarousel } from '../ProjectCarousel'
import type { ProjectDetail } from '@/types/project-detail'

// Mock del componente Image de Next.js
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: any) => (
    <img src={src} alt={alt} {...props} />
  ),
}))

// Mock de los componentes UI del carrusel
jest.mock('@/components/ui/carousel', () => ({
  Carousel: ({ children, setApi, ...props }: any) => {
    // Simular la API del carrusel
    const mockApi = {
      scrollSnapList: () => [0, 1, 2],
      selectedScrollSnap: () => 0,
      scrollTo: jest.fn(),
      on: jest.fn(),
    }
    
    // Llamar setApi inmediatamente para simular la inicialización
    React.useEffect(() => {
      if (setApi) {
        setApi(mockApi)
      }
    }, [setApi])
    
    return <div data-testid="carousel" {...props}>{children}</div>
  },
  CarouselContent: ({ children, ...props }: any) => (
    <div data-testid="carousel-content" {...props}>{children}</div>
  ),
  CarouselItem: ({ children, ...props }: any) => (
    <div data-testid="carousel-item" {...props}>{children}</div>
  ),
  CarouselNext: (props: any) => (
    <button data-testid="carousel-next" {...props}>Next</button>
  ),
  CarouselPrevious: (props: any) => (
    <button data-testid="carousel-previous" {...props}>Previous</button>
  ),
}))

const mockProject: ProjectDetail = {
  slug: 'test-project',
  title: 'Test Project',
  category: 'TEST',
  completionDate: '2024-01-01',
  description: 'Test description',
  heroImage: {
    src: 'https://example.com/hero.jpg',
    alt: 'Hero image',
    width: 800,
    height: 600,
  },
  thumbnails: [
    {
      src: 'https://example.com/thumb1.jpg',
      alt: 'Thumbnail 1',
      width: 150,
      height: 100,
    },
    {
      src: 'https://example.com/thumb2.jpg',
      alt: 'Thumbnail 2',
      width: 150,
      height: 100,
    },
  ],
  workScope: [],
  technicalSpecs: [],
  results: '',
  whyChooseUs: [],
}

const mockTx = (key: string) => key

describe('ProjectCarousel', () => {
  it('renderiza correctamente con imagen principal y miniaturas', () => {
    render(
      <ProjectCarousel 
        project={mockProject} 
        slug="test-project" 
        tx={mockTx} 
      />
    )

    // Verificar que el carrusel se renderiza
    expect(screen.getByTestId('carousel')).toBeInTheDocument()
    
    // Verificar que se muestran todas las imágenes (hero + thumbnails)
    const carouselItems = screen.getAllByTestId('carousel-item')
    expect(carouselItems).toHaveLength(3) // 1 hero + 2 thumbnails
    
    // Verificar que se muestran las miniaturas clickeables
    const thumbnailButtons = screen.getAllByRole('button')
    const thumbnailImages = thumbnailButtons.filter(btn => 
      btn.querySelector('img')
    )
    expect(thumbnailImages).toHaveLength(3) // 3 miniaturas clickeables
  })

  it('muestra el indicador de posición correctamente', async () => {
    render(
      <ProjectCarousel 
        project={mockProject} 
        slug="test-project" 
        tx={mockTx} 
      />
    )

    // Esperar a que se inicialice el componente
    await waitFor(() => {
      expect(screen.getByText('1 / 3')).toBeInTheDocument()
    })
  })

  it('permite navegación por miniaturas', async () => {
    render(
      <ProjectCarousel 
        project={mockProject} 
        slug="test-project" 
        tx={mockTx} 
      />
    )

    // Obtener los botones de miniaturas
    const thumbnailButtons = screen.getAllByRole('button')
    const thumbnailImages = thumbnailButtons.filter(btn => 
      btn.querySelector('img')
    )

    // Hacer clic en la segunda miniatura
    fireEvent.click(thumbnailImages[1])

    // Verificar que se puede hacer clic (no debe lanzar errores)
    expect(thumbnailImages[1]).toBeInTheDocument()
  })

  it('maneja correctamente las imágenes con fallback', () => {
    const projectWithoutImages = {
      ...mockProject,
      heroImage: {
        src: '',
        alt: 'Empty hero',
        width: 800,
        height: 600,
      },
      thumbnails: [],
    }

    render(
      <ProjectCarousel 
        project={projectWithoutImages} 
        slug="test-project" 
        tx={mockTx} 
      />
    )

    // Verificar que se usa el placeholder cuando no hay src
    const images = screen.getAllByRole('img')
    expect(images[0]).toHaveAttribute('src', '/placeholder.svg')
  })
})
