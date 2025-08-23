import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { LanguageProvider } from "@/lib/LanguageProvider"
import "./globals.css"

export const metadata: Metadata = {
  title: "AGL Construcciones SAS - Transformamos sus espacios con calidad excepcional",
  description: "Especialistas en remodelación y construcción de espacios residenciales, comerciales y de oficina.",
  generator: "v0.app",
  alternates: {
    languages: {
      "es": "/",
      "en": "/"
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
