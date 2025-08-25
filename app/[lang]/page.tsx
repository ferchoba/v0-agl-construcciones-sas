import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Statistics from '@/components/Statistics'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import es from '@/messages/es.json'
import en from '@/messages/en.json'

interface PageProps { params: { lang: 'es'|'en' } }

export function generateMetadata({ params }: PageProps): Metadata {
  const { lang } = params
  const msgs = lang === 'es' ? es : en
  const title = `${msgs.hero?.title ?? (lang==='es'?'Transformamos sus espacios con calidad excepcional':'We transform your spaces with exceptional quality')} - AGL Construcciones SAS`
  const description = msgs.hero?.description ?? (lang==='es'?'Especialistas en remodelación y construcción':'Specialists in remodeling and construction')
  const base = 'https://aglconstrucciones.com'
  return {
    title,
    description,
    alternates: {
      canonical: `${base}/${lang}`,
      languages: {
        es: `${base}/es`,
        en: `${base}/en`,
      },
    },
  }
}

export default function HomeLangPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Services />
      <Statistics />
      <CTA />
      <Footer />
    </div>
  )
}

