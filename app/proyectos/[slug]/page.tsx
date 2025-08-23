import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Breadcrumb } from "@/components/Breadcrumb"
import { ProjectHero } from "@/components/ProjectHero"
import { ProjectSidebar } from "@/components/ProjectSidebar"
import { ProjectContent } from "@/components/ProjectContent"
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects-content"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: "Proyecto no encontrado | AGL Construcciones SAS",
    }
  }

  return {
    title: `${project.title} - ${project.category} | AGL Construcciones SAS`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  const breadcrumbItems = [
    { label: "Inicio", href: "/" },
    { label: "Nuestros Proyectos", href: "/proyectos" },
    { label: project.title, href: `/proyectos/${project.slug}` },
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      <main className="container mx-auto px-4 py-8">
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
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Ver todos los proyectos
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
