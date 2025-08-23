# AGL Construcciones SAS

Sitio web corporativo para AGL Construcciones SAS - Especialistas en remodelación y construcción de espacios residenciales, comerciales y de oficina.

## Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4
- **Componentes UI**: shadcn/ui
- **Iconos**: Lucide React
- **Data Fetching**: SWR

## Características

- ✅ Diseño responsive y pixel-perfect
- ✅ Optimización SEO
- ✅ Accesibilidad (WCAG AA)
- ✅ Rendimiento optimizado
- ✅ TypeScript para type safety
- ✅ Componentes modulares
- ✅ API integration ready

## Instalación y Desarrollo

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
   \`\`\`bash
   git clone <repository-url>
   cd agl-construcciones-sas
   \`\`\`

2. **Instalar dependencias**
   \`\`\`bash
   npm install
   \`\`\`

3. **Ejecutar en desarrollo**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Abrir en el navegador**
   \`\`\`
   http://localhost:3000
   \`\`\`

## Deployment en Vercel

### Opción 1: Git Integration (Recomendado)

1. **Push a GitHub**
   \`\`\`bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   \`\`\`

2. **Conectar a Vercel**
   - Ir a [vercel.com](https://vercel.com)
   - Importar proyecto desde GitHub
   - Configurar variables de entorno si es necesario
   - Deploy automático

### Opción 2: Vercel CLI

\`\`\`bash
npm i -g vercel
vercel --prod
\`\`\`

### Variables de Entorno

Crear `.env.local` para desarrollo:

\`\`\`env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000
\`\`\`

Para producción en Vercel:

\`\`\`env
NEXT_PUBLIC_API_URL=https://v0-agl-construcciones-sas.vercel.app/api
NEXT_PUBLIC_SITE_URL=https://v0-agl-construcciones-sas.vercel.app
\`\`\`

## Estructura del Proyecto

\`\`\`
├── app/
│   ├── api/mock/          # Mock API endpoints
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Homepage
├── components/
│   ├── ui/                # Componentes shadcn/ui
│   ├── Header.tsx         # Componente header
│   ├── Hero.tsx           # Sección hero
│   ├── Services.tsx       # Sección servicios
│   ├── Statistics.tsx     # Sección estadísticas
│   ├── CTA.tsx            # Call-to-action
│   └── Footer.tsx         # Footer
├── lib/
│   ├── api.ts             # Funciones API
│   ├── hooks.ts           # Custom hooks
│   └── utils.ts           # Utilidades
├── types/
│   └── index.ts           # Definiciones TypeScript
└── public/
    └── assets/            # Imágenes y assets
\`\`\`

## Testing Manual

### Checklist de QA

- [ ] **Responsive Design**
  - [ ] Mobile (320px+)
  - [ ] Tablet (768px+) 
  - [ ] Desktop (1024px+)
  - [ ] Wide (1440px+)

- [ ] **Accesibilidad**
  - [ ] Navegación por teclado
  - [ ] Contraste de colores (WCAG AA)
  - [ ] Screen reader compatibility
  - [ ] ARIA labels y roles

- [ ] **Performance**
  - [ ] Lighthouse score 90+
  - [ ] Imágenes optimizadas
  - [ ] Lazy loading
  - [ ] Core Web Vitals

- [ ] **Funcionalidad**
  - [ ] Enlaces de navegación
  - [ ] Botones CTA
  - [ ] Formularios (si aplica)
  - [ ] WhatsApp integration

## Personalización

### Colores

Editar `app/globals.css` para cambiar la paleta de colores:

\`\`\`css
:root {
  --primary: #16a34a;    /* Verde principal */
  --secondary: #111827;   /* Gris oscuro */
  --accent: #22c55e;      /* Verde claro */
}
\`\`\`

### Contenido

Editar los componentes en `components/` para modificar textos, imágenes y estructura.

### API Integration

Reemplazar los mock endpoints en `app/api/mock/` con llamadas a tu API real.

## Soporte

Para soporte técnico o consultas sobre el proyecto, contactar:

- **Email**: hencho.bas@gmail.com
- **WhatsApp**: +57 301 257 1215

## Licencia

© 2025 AGL Construcciones SAS. Todos los derechos reservados.
