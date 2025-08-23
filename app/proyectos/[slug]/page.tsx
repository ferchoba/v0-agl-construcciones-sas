import { notFound } from "next/navigation"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ProjectDetailView } from "@/components/ProjectDetailView"
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

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <ProjectDetailView project={project} />
      </main>

      <Footer />
    </div>
  )
}
