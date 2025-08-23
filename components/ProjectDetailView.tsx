"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Breadcrumb } from "@/components/Breadcrumb"
import { ProjectHero } from "@/components/ProjectHero"
import { ProjectSidebar } from "@/components/ProjectSidebar"
import { ProjectContent } from "@/components/ProjectContent"
import { useLanguage } from "@/lib/LanguageProvider"
import type { ProjectDetail } from "@/types/project-detail"

export function ProjectDetailView({ project }: { project: ProjectDetail }) {
  const { t, tx } = useLanguage()

  const slug = project.slug
  const titleTx = tx(`projects.details.${slug}.title`) as string | undefined

  const breadcrumbItems = [
    { label: t("breadcrumb.home"), href: "/" },
    { label: t("breadcrumb.projects"), href: "/proyectos" },
    { label: titleTx ?? project.title },
  ]

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <ProjectHero project={project} />
          <ProjectContent project={project} />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <ProjectSidebar project={project} />
          </div>
        </div>
      </div>

      {/* Back to Projects */}
      <div className="mt-16 pt-8 border-t border-gray-700">
        <Link href="/proyectos" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" />
          {t("projects.back_to_projects")}
        </Link>
      </div>
    </>
  )
}

