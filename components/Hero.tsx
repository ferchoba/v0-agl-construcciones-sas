"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/LanguageProvider"

interface HeroProps {
  className?: string
}

export default function Hero({ className = "" }: HeroProps) {
  const { t, locale } = useLanguage()

  return (
    <section className={`py-20 px-4 bg-background ${className}`}>
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
          {t("hero.title")}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          {t("hero.description")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={`/${locale}/cotizacion`}>
            <Button className="bg-primary hover:bg-[#212529] text-primary-foreground px-8 py-3 text-base font-medium transition-colors duration-200">
              {t("hero.cta_quote")}
            </Button>
          </Link>
          <Link href={`/${locale}/proyectos`}>
            <Button
              variant="outline"
              className="border-border text-foreground hover:bg-muted hover:border-primary px-8 py-3 bg-transparent text-base font-medium transition-all duration-200"
            >
              {t("hero.cta_projects")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
