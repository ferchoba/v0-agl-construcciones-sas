# Análisis de Paleta de Colores Actual - AGL Construcciones SAS

## Resumen Ejecutivo

Este documento presenta un análisis exhaustivo de todos los colores y tipografías utilizados actualmente en el proyecto AGL Construcciones SAS. El proyecto utiliza Next.js 15 con Tailwind CSS v4 y un sistema de diseño basado en shadcn/ui.

## 1. Sistema de Colores Actual

### 1.1 Variables CSS Principales (formato OKLCH)

**Tema Claro (:root)**
```css
--background: oklch(1 0 0);                    /* Blanco puro */
--foreground: oklch(0.145 0 0);               /* Negro/gris muy oscuro */
--card: oklch(1 0 0);                         /* Blanco puro */
--card-foreground: oklch(0.145 0 0);          /* Negro/gris muy oscuro */
--primary: oklch(0.205 0 0);                  /* Gris muy oscuro */
--primary-foreground: oklch(0.985 0 0);       /* Blanco casi puro */
--secondary: oklch(0.97 0 0);                 /* Gris muy claro */
--secondary-foreground: oklch(0.205 0 0);     /* Gris muy oscuro */
--muted: oklch(0.97 0 0);                     /* Gris muy claro */
--muted-foreground: oklch(0.556 0 0);         /* Gris medio */
--border: oklch(0.922 0 0);                   /* Gris claro */
--input: oklch(0.922 0 0);                    /* Gris claro */
--destructive: oklch(0.577 0.245 27.325);     /* Rojo destructivo */
```

**Tema Oscuro (.dark)**
```css
--background: oklch(0.145 0 0);               /* Negro/gris muy oscuro */
--foreground: oklch(0.985 0 0);               /* Blanco casi puro */
--card: oklch(0.145 0 0);                     /* Negro/gris muy oscuro */
--primary: oklch(0.985 0 0);                  /* Blanco casi puro */
--secondary: oklch(0.269 0 0);                /* Gris oscuro */
--muted: oklch(0.269 0 0);                    /* Gris oscuro */
--border: oklch(0.269 0 0);                   /* Gris oscuro */
```

### 1.2 Colores de Marca AGL

```css
--agl-green: oklch(0.646 0.222 142.5);        /* Verde principal AGL */
--agl-green-hover: oklch(0.576 0.222 142.5);  /* Verde hover AGL */
--agl-dark: oklch(0.145 0 0);                 /* Oscuro AGL */
--agl-gray: oklch(0.269 0 0);                 /* Gris AGL */
--agl-gray-light: oklch(0.374 0 0);           /* Gris claro AGL */
```

### 1.3 Clases Tailwind CSS Utilizadas

**Fondos más comunes:**
- `bg-gray-900` - Fondo principal oscuro
- `bg-gray-800` - Fondo secundario oscuro
- `bg-gray-800/50` - Fondo con transparencia
- `bg-green-600` - Botones primarios
- `bg-green-700` - Estado hover de botones
- `bg-background` - Fondo usando variable CSS
- `bg-card` - Fondo de tarjetas

**Textos más comunes:**
- `text-white` - Texto principal en fondos oscuros
- `text-gray-300` - Texto secundario
- `text-gray-400` - Texto terciario/metadatos
- `text-foreground` - Texto usando variable CSS
- `text-muted-foreground` - Texto silenciado

**Bordes más comunes:**
- `border-gray-800` - Bordes principales
- `border-gray-700` - Bordes de tarjetas
- `border-gray-600` - Bordes de inputs
- `border-border` - Bordes usando variable CSS

## 2. Sistema Tipográfico Actual

### 2.1 Fuentes Principales

**Geist Sans (Principal)**
```typescript
import { GeistSans } from "geist/font/sans"
font-family: ${GeistSans.style.fontFamily}
```

**Geist Mono (Monoespaciada)**
```typescript
import { GeistMono } from "geist/font/mono"
```

**Fuentes de Respaldo (Tailwind CSS)**
```css
--font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
--font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
--font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
```

### 2.2 Jerarquía Tipográfica Utilizada

**Encabezados:**
- `text-4xl md:text-5xl lg:text-6xl` - H1 principal (Hero)
- `text-4xl md:text-5xl` - H1 secundario
- `text-3xl md:text-4xl` - H2 principal
- `text-xl` - H3 y títulos de sección
- `font-bold` - Peso principal para encabezados

**Texto de cuerpo:**
- `text-lg md:text-xl` - Texto destacado/lead
- `text-lg` - Texto principal grande
- `text-base` - Texto base (16px)
- `text-sm` - Texto pequeño
- `md:text-sm` - Texto responsivo

## 3. Mapeo de Uso por Componentes

### 3.1 Header.tsx
```typescript
// Fondo: bg-gray-900
// Bordes: border-gray-800
// Logo: text-white (AGL), text-gray-400 (CONSTRUCCIONES)
// Navegación: text-gray-300, hover:text-green-400
```

### 3.2 Hero.tsx
```typescript
// Fondo: bg-gray-900
// Título: text-white (text-4xl md:text-5xl lg:text-6xl font-bold)
// Descripción: text-gray-300 (text-lg md:text-xl)
// Botón primario: bg-green-600 hover:bg-green-700 text-white
```

### 3.3 Footer.tsx
```typescript
// Fondo: bg-gray-900
// Bordes: border-gray-800
// Títulos: text-white
// Texto: text-gray-400
// Enlaces: hover:text-green-400
// Botón: bg-green-600 hover:bg-green-700
```

### 3.4 CTA.tsx
```typescript
// Fondo: bg-gray-800/50
// Título: text-white (text-3xl md:text-4xl font-bold)
// Descripción: text-gray-300
// Botón: bg-green-600 hover:bg-green-700
```

### 3.5 Componentes UI (shadcn/ui)

**Button.tsx:**
- Usa variables CSS: `bg-primary`, `text-primary-foreground`
- Estados: `hover:bg-primary/90`
- Variantes: `destructive`, `outline`, `secondary`, `ghost`

**Input.tsx:**
- Bordes: `border-input`
- Placeholder: `placeholder:text-muted-foreground`
- Focus: `focus-visible:border-ring`

**Card.tsx:**
- Fondo: `bg-card`
- Texto: `text-card-foreground`
- Bordes: `border-border`

## 4. Patrones de Color Identificados

### 4.1 Esquema Principal
- **Fondo base:** Gray-900 (#111827 aprox.)
- **Fondo secundario:** Gray-800 (#1F2937 aprox.)
- **Texto principal:** White (#FFFFFF)
- **Texto secundario:** Gray-300 (#D1D5DB aprox.)
- **Texto terciario:** Gray-400 (#9CA3AF aprox.)
- **Acento principal:** Green-600 (#059669 aprox.)
- **Acento hover:** Green-700 (#047857 aprox.)

### 4.2 Inconsistencias Detectadas

1. **Duplicación de archivos CSS:** Existe tanto `app/globals.css` como `styles/globals.css` con contenido similar
2. **Mezcla de sistemas:** Uso simultáneo de variables CSS (OKLCH) y clases Tailwind (RGB/HSL)
3. **Variables AGL no utilizadas:** Las variables `--agl-*` están definidas pero no se usan en los componentes
4. **Falta de estandarización:** Algunos componentes usan clases directas, otros variables CSS

## 5. Archivos de Configuración

### 5.1 Tailwind CSS
- **Configuración:** `components.json` (shadcn/ui)
- **Estilo base:** "new-york"
- **Color base:** "neutral"
- **Variables CSS:** Habilitadas

### 5.2 PostCSS
- **Configuración:** `postcss.config.mjs`
- **Plugins:** @tailwindcss/postcss

## 6. Dependencias Relacionadas

### 6.1 Tipografía
- `geist` - Fuentes Geist Sans y Mono
- `@next/font` - Sistema de fuentes de Next.js

### 6.2 Estilos
- `tailwindcss` v4.1.9 - Framework CSS principal
- `class-variance-authority` - Variantes de componentes
- `clsx` - Utilidad para clases condicionales

## 7. Recomendaciones Inmediatas

1. **Consolidar archivos CSS:** Eliminar duplicación entre `app/globals.css` y `styles/globals.css`
2. **Estandarizar sistema de colores:** Decidir entre variables CSS o clases Tailwind
3. **Implementar variables AGL:** Usar las variables de marca definidas
4. **Documentar patrones:** Crear guía de uso para desarrolladores
5. **Auditar accesibilidad:** Verificar contrastes WCAG AA/AAA

---

**Fecha de análisis:** 2025-08-25  
**Versión del proyecto:** Next.js 15.2.4, Tailwind CSS 4.1.9  
**Rama:** feature/nueva-paleta-colores
