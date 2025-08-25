import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import CompanyOverview from '@/components/CompanyOverview'
import DevelopmentNote from '@/components/DevelopmentNote'
import type { Metadata } from 'next'
import es from '@/messages/es.json'
import en from '@/messages/en.json'

interface PageProps { params: { lang: 'es'|'en' } }

export function generateMetadata({ params }: PageProps): Metadata {
  const { lang } = params
  const msgs = lang === 'es' ? es : en
  const title = `${msgs.navigation?.about ?? (lang==='es'?'Quiénes Somos':'About Us')} - AGL Construcciones SAS`
  const description = msgs.company?.description ?? (lang==='es'?'Somos una empresa especializada en remodelación y construcción':'We are a company specialized in remodeling and construction')
  const base = 'https://aglconstrucciones.com'
  return {
    title,
    description,
    alternates: {
      canonical: `${base}/${lang}/quienes-somos`,
      languages: {
        es: `${base}/es/quienes-somos`,
        en: `${base}/en/quienes-somos`,
      },
    },
  }
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section className="py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">AGL CONSTRUCCIONES SAS</h1>
        </section>
        <CompanyOverview />
        <DevelopmentNote />
      </main>
      <Footer />
    </div>
  )
}

