import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import QuoteForm from '@/components/QuoteForm'
import BenefitsSection from '@/components/BenefitsSection'
import QuotePageHero from '@/components/QuotePageHero'
import type { Metadata } from 'next'
import es from '@/messages/es.json'
import en from '@/messages/en.json'

interface PageProps { params: { lang: 'es'|'en' } }

export function generateMetadata({ params }: PageProps): Metadata {
  const { lang } = params
  const msgs = lang === 'es' ? es : en
  const title = `${msgs.quote_form?.page_title ?? (lang==='es'?'Solicitar Cotización':'Request a Quote')} - AGL Construcciones SAS`
  const description = msgs.quote_form?.page_subtitle ?? (lang==='es'?'Obtén una cotización personalizada para tu proyecto':'Get a personalized quote for your project')
  const base = 'https://aglconstrucciones.com'
  return {
    title,
    description,
    alternates: {
      canonical: `${base}/${lang}/cotizacion`,
      languages: {
        es: `${base}/es/cotizacion`,
        en: `${base}/en/cotizacion`,
      },
    },
  }
}

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        <QuotePageHero />

        {/* Quote Form */}
        <section className="py-12">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
            <QuoteForm />
            <BenefitsSection />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

