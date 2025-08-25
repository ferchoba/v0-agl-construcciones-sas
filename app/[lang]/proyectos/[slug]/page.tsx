import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ProjectDetailView } from '@/components/ProjectDetailView'
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects-content'
import es from '@/messages/es.json'
import en from '@/messages/en.json'

interface ProjectPageProps { params: { lang: 'es'|'en', slug: string } }

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  const langs: Array<'es'|'en'> = ['es','en']
  return langs.flatMap((lang) => slugs.map((slug) => ({ lang, slug })))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { lang, slug } = params
  const proj = getProjectBySlug(slug)
  if (!proj) return { title: lang === 'es' ? 'Proyecto no encontrado' : 'Project not found' }
  const msgs = lang === 'es' ? es : en
  const tTitle = (msgs.projects?.items as any)?.[slug]?.title as string | undefined
  const tDesc = (msgs.projects?.items as any)?.[slug]?.description as string | undefined
  const title = `${tTitle ?? proj.title} - ${tDesc ? '' : proj.category + ' | '}AGL Construcciones SAS`
  const description = tDesc ?? proj.description
  const base = 'https://aglconstrucciones.com'
  const path = `/${lang}/proyectos/${slug}`
  return {
    title,
    description,
    alternates: {
      canonical: `${base}${path}`,
      languages: {
        es: `${base}/es/proyectos/${slug}`,
        en: `${base}/en/proyectos/${slug}`,
      },
    },
  }
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

