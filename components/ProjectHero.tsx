"use client"

import Image from "next/image"
import type { ProjectHeroProps } from "@/types/project-detail"
import { useLanguage } from "@/lib/LanguageProvider"


export function ProjectHero({ project }: ProjectHeroProps) {
  const { t, tx } = useLanguage()

  const slug = project.slug
  const titleTx = tx(`projects.details.${slug}.title`) as string | undefined
  const heroAltTx = tx(`projects.details.${slug}.heroImage.alt`) as string | undefined
  const thumbsTx = tx(`projects.details.${slug}.thumbnails`) as Array<{ alt?: string }> | undefined
  const completionTx = tx(`projects.details.${slug}.completionDate`) as string | undefined
  const categoryTx = tx(`projects.categories.${project.category}`) as string | undefined


  const title = titleTx ?? project.title
  const heroAlt = heroAltTx ?? project.heroImage.alt

  return (
    <div className="space-y-6">
      {/* Project Badge and Date */}
      <div className="flex items-center gap-4 text-sm">
        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-md font-medium">{categoryTx ?? project.category}</span>
        <span className="text-muted-foreground">{t("projects.completed_at")} {completionTx ?? project.completionDate}</span>
      </div>

      {/* Project Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-foreground">{title}</h1>

      {/* Hero Image */}
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
        <Image
          src={project.heroImage.src || "/placeholder.svg"}
          alt={heroAlt}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Thumbnail Gallery */}
      <div className="flex gap-3">
        {project.thumbnails.map((thumb, index) => {
          const altTx = thumbsTx?.[index]?.alt
          return (
            <div
              key={index}
              className="relative w-20 h-16 rounded-md overflow-hidden border border-gray-600 hover:border-green-500 transition-colors cursor-pointer"
            >
              <Image src={thumb.src || "/placeholder.svg"} alt={altTx ?? thumb.alt} fill className="object-cover" />
            </div>
          )
        })}
      </div>
    </div>
  )
}
