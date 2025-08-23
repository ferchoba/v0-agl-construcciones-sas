"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/LanguageProvider"

interface CTAProps {
  className?: string
}

export default function CTA({ className = "" }: CTAProps) {
  const { t } = useLanguage()

  return (
    <section className={`py-20 px-4 bg-gray-800/50 ${className}`}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{t("cta.title")}</h2>
        <p className="text-gray-300 mb-8 text-lg">{t("cta.description")}</p>
        <Link href="/contacto">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-base font-medium transition-colors duration-200">
            {t("cta.button")}
          </Button>
        </Link>
      </div>
    </section>
  )
}
