import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ProjectsHero } from '@/components/ProjectsHero'
import { ProjectsGrid } from '@/components/ProjectsGrid'
import type { Metadata } from 'next'
import es from '@/messages/es.json'
import en from '@/messages/en.json'

interface PageProps { params: { lang: 'es'|'en' } }

export function generateMetadata({ params }: PageProps): Metadata {
  const { lang } = params
  const msgs = lang === 'es' ? es : en
  const title = `${msgs.projects?.title ?? (lang==='es'?'Nuestros Proyectos':'Our Projects')} - AGL Construcciones SAS`
  const description = msgs.projects?.subtitle ?? (lang==='es'?'Proyectos destacados':'Featured projects')
  const base = 'https://aglconstrucciones.com'
  return {
    title,
    description,
    alternates: {
      canonical: `${base}/${lang}/proyectos`,
      languages: {
        es: `${base}/es/proyectos`,
        en: `${base}/en/proyectos`,
      },
    },
  }
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ProjectsHero />
        <ProjectsGrid />
      </main>
      <Footer />
    </div>
  )
}

