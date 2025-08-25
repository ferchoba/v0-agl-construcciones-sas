"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import type { Project } from "@/types/projects"
import Link from "next/link"
import { useLanguage } from "@/lib/LanguageProvider"

interface ProjectCardProps {
  project: Project
}

const categoryColors = {
  CIMENTACIÓN: "bg-[#343A40]",
  ESTRUCTURA: "bg-[#343A40]",
  MAMPOSTERÍA: "bg-[#343A40]",
  ACABADOS: "bg-[#343A40]",
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t, locale } = useLanguage()
  return (
    <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-colors">
      <div className="relative">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={400}
          height={240}
          className="w-full h-48 object-cover"
        />
        <div
          className={`absolute top-3 left-3 px-2 py-1 rounded text-xs font-medium text-primary-foreground ${categoryColors[project.category]}`}
        >
          {project.category}
        </div>

      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
        <p className="text-muted-foreground text-xs mb-4">{t("projects.completed_at",)} {project.completedDate}</p>

        <Link href={`/${locale}/proyectos/${project.slug}`}>
          <Button className="w-full bg-primary hover:bg-[#212529] text-primary-foreground" size="sm">
            {t("projects.view_details")}
          </Button>
        </Link>
      </div>
    </div>
  )
}
