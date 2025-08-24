'use client'

import { useLanguage } from "@/lib/LanguageProvider"

export default function ContactPageHero() {
  const { t } = useLanguage()
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("contact.page_title")}</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t("contact.page_subtitle")}</p>
      </div>
    </section>
  )
}

