# AGL Construcciones SAS

Sitio web corporativo para AGL Construcciones SAS - Especialistas en remodelación y construcción de espacios residenciales, comerciales y de oficina.

## 🚀 Stack Tecnológico

- **Framework**: Next.js 15.2.4 (App Router)
- **Lenguaje**: TypeScript 5
- **Estilos**: Tailwind CSS v4.1.9
- **Componentes UI**: shadcn/ui + Radix UI
- **Iconos**: Lucide React v0.454.0
- **Data Fetching**: SWR
- **Fuentes**: Geist (Vercel)
- **Animaciones**: tailwindcss-animate

## ✨ Características

### 🎨 Diseño y UX
- ✅ Diseño responsive y pixel-perfect
- ✅ Dark theme moderno y profesional
- ✅ Animaciones suaves y transiciones
- ✅ Componentes modulares reutilizables

### 🔧 Funcionalidades
- ✅ **Páginas principales**: Inicio, Servicios, Proyectos, Quiénes Somos
- ✅ **Páginas de servicios dinámicas**: 9 servicios con páginas detalladas
- ✅ **Sistema de proyectos**: Galería de proyectos con filtros
- ✅ **Formularios de contacto**: Contacto general y cotizaciones
- ✅ **Páginas legales**: Términos y Condiciones, Política de Privacidad
- ✅ **Navegación breadcrumb**: Para mejor UX en páginas internas

### ⚡ Rendimiento y SEO
- ✅ Optimización SEO avanzada
- ✅ Metadata dinámica por página
- ✅ Imágenes optimizadas con Next.js Image
- ✅ Core Web Vitals optimizados
- ✅ Lazy loading automático

### 🛡️ Calidad y Mantenibilidad
- ✅ TypeScript para type safety
- ✅ Accesibilidad (WCAG AA)
- ✅ Estructura de datos tipada
- ✅ API integration ready
- ✅ Componentes shadcn/ui

## 🛠️ Instalación y Desarrollo

### Prerrequisitos

- Node.js 18+
- npm, yarn o pnpm
- Git

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/ferchoba/v0-agl-construcciones-sas.git
   cd v0-agl-construcciones-sas
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

### Scripts disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build para producción
- `npm run start` - Servidor de producción
- `npm run lint` - Linter ESLint
- `npm run type-check` - Verificación de tipos TypeScript

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

## 📁 Estructura del Proyecto

```
├── app/                          # App Router de Next.js
│   ├── api/                      # API Routes
│   ├── contacto/                 # Página de contacto
│   ├── cotizacion/               # Página de cotización
│   ├── privacidad/               # Página de política de privacidad
│   ├── proyectos/                # Páginas de proyectos
│   │   └── [slug]/               # Páginas dinámicas de proyectos
│   ├── quienes-somos/            # Página quiénes somos
│   ├── servicios/                # Páginas de servicios
│   │   └── [slug]/               # Páginas dinámicas de servicios
│   ├── terminos/                 # Página de términos y condiciones
│   ├── globals.css               # Estilos globales
│   ├── layout.tsx                # Layout principal
│   └── page.tsx                  # Homepage
├── components/                   # Componentes React
│   ├── ui/                       # Componentes shadcn/ui base
│   ├── AlternativeContact.tsx    # Contacto alternativo
│   ├── BenefitsSection.tsx       # Sección de beneficios
│   ├── Breadcrumb.tsx            # Navegación breadcrumb
│   ├── CTA.tsx                   # Call-to-action
│   ├── CTASidebar.tsx            # Sidebar con CTA
│   ├── CompanyOverview.tsx       # Resumen de empresa
│   ├── ContactForm.tsx           # Formulario de contacto
│   ├── DevelopmentNote.tsx       # Nota de desarrollo
│   ├── Footer.tsx                # Footer del sitio
│   ├── Header.tsx                # Header y navegación
│   ├── Hero.tsx                  # Sección hero
│   ├── PrivacyPolicy.tsx         # Componente política privacidad
│   ├── ProjectCard.tsx           # Tarjeta de proyecto
│   ├── ProjectContent.tsx        # Contenido de proyecto
│   ├── ProjectFilter.tsx         # Filtros de proyectos
│   ├── ProjectHero.tsx           # Hero de proyecto
│   ├── ProjectSidebar.tsx        # Sidebar de proyecto
│   ├── ProjectsGrid.tsx          # Grid de proyectos
│   ├── QuoteForm.tsx             # Formulario de cotización
│   ├── ServiceCard.tsx           # Tarjeta de servicio
│   ├── ServiceDetails.tsx        # Detalles de servicio
│   ├── ServiceHero.tsx           # Hero de servicio
│   ├── Services.tsx              # Sección servicios (home)
│   ├── ServicesGrid.tsx          # Grid de servicios
│   ├── Statistics.tsx            # Sección estadísticas
│   ├── TermsAndConditions.tsx    # Componente términos
│   └── theme-provider.tsx        # Proveedor de tema
├── lib/                          # Utilidades y datos
│   ├── api.ts                    # Funciones API
│   ├── company-data.ts           # Datos de empresa
│   ├── contact-api.ts            # API de contacto
│   ├── form-validation.ts        # Validación de formularios
│   ├── hooks.ts                  # Custom hooks
│   ├── projects-content.ts       # Contenido de proyectos
│   ├── projects-data.ts          # Datos de proyectos
│   ├── quote-api.ts              # API de cotización
│   ├── services-content.ts       # Contenido de servicios
│   ├── services-data.ts          # Datos de servicios
│   └── utils.ts                  # Utilidades generales
├── types/                        # Definiciones TypeScript
│   ├── company.ts                # Tipos de empresa
│   ├── contact.ts                # Tipos de contacto
│   ├── index.ts                  # Tipos generales
│   ├── project-detail.ts         # Tipos de detalle proyecto
│   ├── projects.ts               # Tipos de proyectos
│   ├── quote.ts                  # Tipos de cotización
│   ├── service-detail.ts         # Tipos de detalle servicio
│   └── services.ts               # Tipos de servicios
├── public/                       # Assets estáticos
│   ├── projects/                 # Imágenes de proyectos
│   ├── services/                 # Imágenes de servicios
│   └── *.png, *.svg              # Imágenes generales
└── styles/                       # Estilos adicionales
    └── globals.css               # Estilos globales adicionales
```

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

## 📦 Dependencias Principales

### Producción
- **next**: 15.2.4 - Framework React
- **react**: ^19 - Biblioteca de UI
- **typescript**: ^5 - Lenguaje tipado
- **tailwindcss**: ^4.1.9 - Framework CSS
- **lucide-react**: ^0.454.0 - Iconos
- **@radix-ui/react-slot**: ^1.0.2 - Primitivos UI
- **swr**: latest - Data fetching
- **geist**: latest - Fuente tipográfica

### Desarrollo
- **@tailwindcss/postcss**: ^4.1.12 - PostCSS para Tailwind
- **eslint**: ^8.0.0 - Linter
- **critters**: ^0.0.23 - Optimización CSS crítico

## 🌐 Páginas Disponibles

### Páginas Principales
- **`/`** - Página de inicio
- **`/servicios`** - Lista de servicios
- **`/proyectos`** - Galería de proyectos
- **`/quienes-somos`** - Información de la empresa
- **`/contacto`** - Formulario de contacto
- **`/cotizacion`** - Formulario de cotización

### Páginas Dinámicas
- **`/servicios/[slug]`** - Páginas individuales de servicios
  - `/servicios/demoliciones`
  - `/servicios/cimentacion`
  - `/servicios/estructura`
  - `/servicios/mamposteria`
  - `/servicios/panetes`
  - `/servicios/acabados`
  - `/servicios/estuco-pintura`
  - `/servicios/drywall`
  - `/servicios/enchapes`
- **`/proyectos/[slug]`** - Páginas individuales de proyectos

### Páginas Legales
- **`/terminos`** - Términos y Condiciones
- **`/privacidad`** - Política de Privacidad

## 📞 Contacto y Soporte

### Información de Contacto AGL Construcciones SAS
- **Email**: fercho.ba@gmail.com
- **WhatsApp**: +57 301 291 1219

### Soporte Técnico
Para consultas sobre el desarrollo del sitio web, contactar al desarrollador.

## 📄 Licencia

© 2025 AGL Construcciones SAS. Todos los derechos reservados.

---

**Desarrollado con ❤️ usando Next.js 15 y TypeScript**
