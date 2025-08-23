"use client"


import { useState, useMemo } from "react"
import { ProjectCard } from "./ProjectCard"
import { ProjectFilter } from "./ProjectFilter"
import { projectsData, getProjectsByCategory, getProjectCounts } from "@/lib/projects-data"
import type { ProjectCategory } from "@/types/projects"
import { useLanguage } from "@/lib/LanguageProvider"
import { getTranslatedProject } from "@/lib/translation-helpers"

export function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "Todos">("Todos")

  const { t, tx } = useLanguage()
  const totalLabel = t("projects.total_projects_label")

  const filteredProjects = useMemo(() => {
    return getProjectsByCategory(activeFilter).map((p) => getTranslatedProject(p, tx))
  }, [activeFilter, tx])

  const projectCounts = useMemo(() => getProjectCounts(), [])

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <ProjectFilter
          onFilterChange={setActiveFilter}
          projectCounts={projectCounts}
          totalCount={projectsData.length}
        />

        <p className="text-gray-400 text-sm mb-8">{totalLabel.replace("{count}", String(filteredProjects.length))}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
