"use client"

import Image from "next/image"
import type { ProjectHeroProps } from "@/types/project-detail"
import { useLanguage } from "@/lib/LanguageProvider"


export function ProjectHero({ project }: ProjectHeroProps) {
  const { t } = useLanguage()

  return (
    <div className="space-y-6">
      {/* Project Badge and Date */}
      <div className="flex items-center gap-4 text-sm">
        <span className="bg-green-600 text-white px-3 py-1 rounded-md font-medium">{project.category}</span>
        <span className="text-gray-400">{t("projects.completed_at")}{" "}{project.completionDate}</span>
      </div>

      {/* Project Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-white">{project.title}</h1>

      {/* Hero Image */}
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
        <Image
          src={project.heroImage.src || "/placeholder.svg"}
          alt={project.heroImage.alt}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Thumbnail Gallery */}
      <div className="flex gap-3">
        {project.thumbnails.map((thumb, index) => (
          <div
            key={index}
            className="relative w-20 h-16 rounded-md overflow-hidden border border-gray-600 hover:border-green-500 transition-colors cursor-pointer"
          >
            <Image src={thumb.src || "/placeholder.svg"} alt={thumb.alt} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}
