import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getServiceBySlug } from '@/lib/services-content'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ServiceDetailView } from '@/components/ServiceDetailView'
import es from '@/messages/es.json'
import en from '@/messages/en.json'

interface ServicePageProps { params: { lang: 'es'|'en', slug: string } }

export async function generateStaticParams() {
  const slugs = [
    'demoliciones','cimentacion','estructura','mamposteria','panetes','acabados','estuco-pintura','drywall','enchapes'
  ]
  const langs: Array<'es'|'en'> = ['es','en']
  return langs.flatMap((lang) => slugs.map((slug) => ({ lang, slug })))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { lang, slug } = params
  const svc = getServiceBySlug(slug)
  if (!svc) return { title: lang === 'es' ? 'Servicio no encontrado' : 'Service not found' }
  const msgs = lang === 'es' ? es : en
  const tTitle = (msgs.services?.details as any)?.[slug]?.title as string | undefined
  const tDesc = (msgs.services?.details as any)?.[slug]?.description as string | undefined
  const title = `${tTitle ?? svc.title} - AGL Construcciones SAS`
  const description = tDesc ?? svc.description
  const base = 'https://aglconstrucciones.com'
  const path = `/${lang}/servicios/${slug}`
  return {
    title,
    description,
    alternates: {
      canonical: `${base}${path}`,
      languages: {
        es: `${base}/es/servicios/${slug}`,
        en: `${base}/en/servicios/${slug}`,
      },
    },
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const base = getServiceBySlug(params.slug)
  if (!base) return notFound()
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ServiceDetailView base={base} />
      </main>
      <Footer />
    </div>
  )
}

