"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Breadcrumb } from "@/components/Breadcrumb"
import { ProjectCarousel } from "@/components/ProjectCarousel"
import { ProjectHero } from "@/components/ProjectHero"
import { ProjectSidebar } from "@/components/ProjectSidebar"
import { ProjectContent } from "@/components/ProjectContent"
import { useLanguage } from "@/lib/LanguageProvider"
import type { ProjectDetail } from "@/types/project-detail"

export function ProjectDetailView({ project }: { project: ProjectDetail }) {
  const { t, tx, locale } = useLanguage()

  const slug = project.slug
  const titleTx = tx(`projects.details.${slug}.title`) as string | undefined

  const breadcrumbItems = [
    { label: t("breadcrumb.home"), href: `/${locale}` },
    { label: t("breadcrumb.projects"), href: `/${locale}/proyectos` },
    { label: titleTx ?? project.title },
  ]

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      {/* Nueva sección de encabezado */}
      <div className="w-full space-y-6 mt-8 mb-8">
        {/* Título del proyecto */}
        <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center">
          {titleTx ?? project.title}
        </h1>

        {/* Descripción del proyecto */}
        <p className="text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
          {tx(`projects.details.${slug}.description`) ?? project.description}
        </p>

        {/* Carrusel de imágenes del proyecto */}
        <ProjectCarousel project={project} slug={slug} tx={tx} />
      </div>

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
      <div className="mt-16 pt-8 border-t border-border">
        <Link href={`/${locale}/proyectos`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" />
          {t("projects.back_to_projects")}
        </Link>
      </div>
    </>
  )
}

