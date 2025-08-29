"use client"

import * as React from "react"
import { useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel"
import type { ProjectDetail } from "@/types/project-detail"

// Interfaz para imágenes del carrusel según especificaciones del informe
interface CarouselImage {
  src: string
  alt: string
  width: number
  height: number
  isHero?: boolean
}

// Interfaz del componente según especificaciones del informe
interface ProjectCarouselProps {
  project: ProjectDetail
  slug: string
  tx: (key: string) => any
}

// Función para combinar heroImage + thumbnails según el informe técnico
function createCarouselImages(project: ProjectDetail): CarouselImage[] {
  return [
    { ...project.heroImage, isHero: true },
    ...project.thumbnails.map(thumb => ({ ...thumb, isHero: false }))
  ]
}

export function ProjectCarousel({ project, slug, tx }: ProjectCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  // Crear estructura unificada de imágenes
  const images = createCarouselImages(project)

  // Inicializar estado cuando no hay API disponible
  React.useEffect(() => {
    if (images.length > 0) {
      setCount(images.length)
      // Solo establecer current si no se ha inicializado
      setCurrent(prev => prev === 0 ? 0 : prev)
    }
  }, [images])

  // Configurar API del carrusel
  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  // Optimización de rendimiento: Preload de imagen siguiente
  useEffect(() => {
    if (current < images.length - 1) {
      const nextImage = new window.Image()
      nextImage.src = images[current + 1].src
    }
  }, [current, images])

  // Navegación por miniaturas
  const scrollToImage = useCallback((index: number) => {
    if (api) {
      api.scrollTo(index)
      setCurrent(index) // Actualizar estado inmediatamente para feedback visual
    }
  }, [api])

  // Obtener alt text traducido
  const getTranslatedAlt = (image: CarouselImage, index: number) => {
    if (image.isHero) {
      return tx(`projects.details.${slug}.heroImage.alt`) ?? image.alt
    } else {
      // Para thumbnails, el índice debe ajustarse ya que heroImage es index 0
      const thumbnailIndex = index - 1
      const thumbsAlt = tx(`projects.details.${slug}.thumbnails.${thumbnailIndex}.alt`)
      return thumbsAlt ?? image.alt
    }
  }

  return (
    <div className="w-full space-y-4">
      {/* Carrusel principal - mantiene diseño responsive del informe */}
      <div className="relative aspect-[16/9] max-w-5xl mx-auto rounded-lg overflow-hidden">
        <Carousel
          setApi={setApi}
          className="w-full h-full"
          opts={{
            align: "center",
            loop: false,
            skipSnaps: false,
            dragFree: false
          }}
        >
          <CarouselContent className="h-full">
            {images.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative w-full h-full">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={getTranslatedAlt(image, index)}
                    fill
                    className="object-cover"
                    priority={image.isHero} // Primera imagen con priority
                    loading={image.isHero ? undefined : "lazy"} // Lazy loading para el resto
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Botones de navegación */}
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
        </Carousel>

        {/* Indicador de posición */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {current + 1} / {count}
        </div>
      </div>

      {/* Galería de miniaturas clickeables */}
      <div className="flex gap-3 justify-center flex-wrap max-w-5xl mx-auto">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => scrollToImage(index)}
            className={`relative w-20 h-16 rounded-md overflow-hidden border-2 transition-all duration-200 hover:border-primary ${
              current === index
                ? "border-primary ring-2 ring-primary/20"
                : "border-gray-600 hover:border-gray-400"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={getTranslatedAlt(image, index)}
              fill
              className="object-cover"
              loading="lazy"
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
