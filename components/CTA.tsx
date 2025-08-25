"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/LanguageProvider"

interface CTAProps {
  className?: string
}

export default function CTA({ className = "" }: CTAProps) {
  const { t, locale } = useLanguage()

  return (
    <section className={`py-20 px-4 bg-muted ${className}`}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{t("cta.title")}</h2>
        <p className="text-muted-foreground mb-8 text-lg">{t("cta.description")}</p>
        <Link href={`/${locale}/contacto`}>
          <Button className="bg-primary hover:bg-[#212529] text-primary-foreground px-8 py-3 text-base font-medium transition-colors duration-200">
            {t("cta.button")}
          </Button>
        </Link>
      </div>
    </section>
  )
}
