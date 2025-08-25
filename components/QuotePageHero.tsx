'use client'

import { useLanguage } from "@/lib/LanguageProvider"

export default function QuotePageHero() {
  const { t } = useLanguage()
  return (
    <section className="pt-24 pb-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t("quote_form.page_title")}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("quote_form.page_subtitle")}</p>
      </div>
    </section>
  )
}

