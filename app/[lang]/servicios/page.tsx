import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ServicesGrid } from '@/components/ServicesGrid'
import type { Metadata } from 'next'
import es from '@/messages/es.json'
import en from '@/messages/en.json'

interface PageProps { params: { lang: 'es'|'en' } }

export function generateMetadata({ params }: PageProps): Metadata {
  const { lang } = params
  const msgs = lang === 'es' ? es : en
  const title = `${msgs.services?.page_title ?? (lang==='es'?'Nuestros Servicios':'Our Services')} - AGL Construcciones SAS`
  const description = msgs.services?.page_subtitle ?? (lang==='es'?'Servicios completos de construcción':'Complete construction services')
  const base = 'https://aglconstrucciones.com'
  return {
    title,
    description,
    alternates: {
      canonical: `${base}/${lang}/servicios`,
      languages: {
        es: `${base}/es/servicios`,
        en: `${base}/en/servicios`,
      },
    },
  }
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <ServicesGrid />
      </main>
      <Footer />
    </div>
  )
}

