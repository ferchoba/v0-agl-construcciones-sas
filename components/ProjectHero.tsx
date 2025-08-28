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
