import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import AlternativeContact from '@/components/AlternativeContact'
import ContactPageHero from '@/components/ContactPageHero'
import type { Metadata } from 'next'
import es from '@/messages/es.json'
import en from '@/messages/en.json'

interface PageProps { params: { lang: 'es'|'en' } }

export function generateMetadata({ params }: PageProps): Metadata {
  const { lang } = params
  const msgs = lang === 'es' ? es : en
  const title = `${msgs.contact?.page_title ?? (lang==='es'?'Contáctanos':'Contact Us')} - AGL Construcciones SAS`
  const description = msgs.contact?.page_subtitle ?? (lang==='es'?'Estamos aquí para ayudarte con tu proyecto':'We\'re here to help you with your project')
  const base = 'https://aglconstrucciones.com'
  return {
    title,
    description,
    alternates: {
      canonical: `${base}/${lang}/contacto`,
      languages: {
        es: `${base}/es/contacto`,
        en: `${base}/en/contacto`,
      },
    },
  }
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <ContactPageHero />

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
            <ContactForm />
            <AlternativeContact />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

