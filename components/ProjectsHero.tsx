"use client"

import { useLanguage } from "@/lib/LanguageProvider"

export function ProjectsHero() {
  const { t } = useLanguage()
  return (
    <section className="pt-24 pb-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">{t("projects.title")}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("projects.subtitle")}</p>
      </div>
    </section>
  )
}

