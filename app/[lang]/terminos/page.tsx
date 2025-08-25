import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { TermsAndConditions } from '@/components/TermsAndConditions'
import type { Metadata } from 'next'
import es from '@/messages/es.json'
import en from '@/messages/en.json'

interface PageProps { params: { lang: 'es'|'en' } }

export function generateMetadata({ params }: PageProps): Metadata {
  const { lang } = params
  const msgs = lang === 'es' ? es : en
  const titleBase = msgs.footer?.terms_conditions ?? (lang==='es' ? 'Términos y Condiciones' : 'Terms and Conditions')
  const descBase = msgs.footer?.terms_conditions ?? (lang==='es' ? 'Términos y Condiciones' : 'Terms and Conditions')
  const title = `${titleBase} - AGL Construcciones SAS`
  const description = descBase
  const base = 'https://aglconstrucciones.com'
  return {
    title,
    description,
    alternates: {
      canonical: `${base}/${lang}/terminos`,
      languages: {
        es: `${base}/es/terminos`,
        en: `${base}/en/terminos`,
      },
    },
  }
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8 bg-background">
        <TermsAndConditions />
      </main>
      <Footer />
    </div>
  )
}

