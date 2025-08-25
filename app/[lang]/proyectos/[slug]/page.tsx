import { notFound } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ProjectDetailView } from '@/components/ProjectDetailView'
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects-content'

interface ProjectPageProps { params: { lang: 'es'|'en', slug: string } }

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  const langs: Array<'es'|'en'> = ['es','en']
  return langs.flatMap((lang) => slugs.map((slug) => ({ lang, slug })))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)
  if (!project) return notFound()
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

