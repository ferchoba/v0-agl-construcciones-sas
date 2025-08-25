import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import PrivacyPolicy from '@/components/PrivacyPolicy'
import type { Metadata } from 'next'
import es from '@/messages/es.json'
import en from '@/messages/en.json'

interface PageProps { params: { lang: 'es'|'en' } }

export function generateMetadata({ params }: PageProps): Metadata {
  const { lang } = params
  const msgs = lang === 'es' ? es : en
  const titleBase = msgs.footer?.privacy_policy ?? (lang==='es' ? 'Política de Privacidad' : 'Privacy Policy')
  const descBase = msgs.footer?.privacy_policy ?? (lang==='es' ? 'Política de Privacidad' : 'Privacy Policy')
  const title = `${titleBase} - AGL Construcciones SAS`
  const description = descBase
  const base = 'https://aglconstrucciones.com'
  return {
    title,
    description,
    alternates: {
      canonical: `${base}/${lang}/privacidad`,
      languages: {
        es: `${base}/es/privacidad`,
        en: `${base}/en/privacidad`,
      },
    },
  }
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8 bg-background">
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  )
}

