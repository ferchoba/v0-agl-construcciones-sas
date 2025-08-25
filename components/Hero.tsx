"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/LanguageProvider"

interface HeroProps {
  className?: string
}

export default function Hero({ className = "" }: HeroProps) {
  const { t, locale } = useLanguage()

  // Imagen del hero desde Cloudinary con transformaciones recomendadas
  const heroImageSrc = "https://res.cloudinary.com/dq5joejf7/image/upload/f_auto,q_auto,c_fill,ar_16:9,w_1600/v1756161960/ImagenHero_o5iyx5.png"

  return (
    <section className={`py-16 md:py-20 px-4 bg-background ${className}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Columna izquierda: título */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              {t("hero.title")}
            </h1>
          </div>

          {/* Columna derecha: descripción y botones */}
          <div>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
              {t("hero.description")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={`/${locale}/cotizacion`}>
                <Button className="px-8 py-3 text-base">
                  {t("hero.cta_quote")}
                </Button>
              </Link>
              <Link href={`/${locale}/proyectos`}>
                <Button variant="outline" className="px-8 py-3 text-base">
                  {t("hero.cta_projects")}
                </Button>
              </Link>
            </div>
          </div>

          {/* Fila inferior: imagen a todo el ancho */}
          <div className="md:col-span-2">
            <div className="relative w-full overflow-hidden rounded-lg aspect-[16/9]">
              <Image
                src={heroImageSrc}
                alt={t("hero.title")}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
