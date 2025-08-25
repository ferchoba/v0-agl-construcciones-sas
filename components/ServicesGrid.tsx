"use client"

import { ServiceCard } from "./ServiceCard"
import { servicesData } from "@/lib/services-data"
import { useLanguage } from "@/lib/LanguageProvider"
import { getTranslatedService } from "@/lib/translation-helpers"

export function ServicesGrid() {
  const { t, tx } = useLanguage()
  const translated = servicesData.map((s) => getTranslatedService(s, tx))

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t("services.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("services.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {translated.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
