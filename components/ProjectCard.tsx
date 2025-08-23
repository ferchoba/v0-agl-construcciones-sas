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
  CIMENTACIÓN: "bg-blue-600",
  ESTRUCTURA: "bg-orange-600",
  MAMPOSTERÍA: "bg-purple-600",
  ACABADOS: "bg-green-600",
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLanguage()
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition-colors">
      <div className="relative">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={400}
          height={240}
          className="w-full h-48 object-cover"
        />
        <div
          className={`absolute top-3 left-3 px-2 py-1 rounded text-xs font-medium text-white ${categoryColors[project.category]}`}
        >
          {project.category}
        </div>
        <div className="absolute top-3 right-3 bg-black/50 rounded-full p-1">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
        <p className="text-gray-500 text-xs mb-4">{t("projects.completed_at",)} {project.completedDate}</p>

        <Link href={`/proyectos/${project.slug}`}>
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white" size="sm">
            {t("projects.view_details")}
          </Button>
        </Link>
      </div>
    </div>
  )
}
