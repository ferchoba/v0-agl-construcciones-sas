import { notFound } from 'next/navigation'
import { getServiceBySlug } from '@/lib/services-content'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ServiceDetailView } from '@/components/ServiceDetailView'

interface ServicePageProps { params: { lang: 'es'|'en', slug: string } }

export async function generateStaticParams() {
  // Slugs are locale-agnostic
  const slugs = [
    'demoliciones','cimentacion','estructura','mamposteria','panetes','acabados','estuco-pintura','drywall','enchapes'
  ]
  const langs: Array<'es'|'en'> = ['es','en']
  return langs.flatMap((lang) => slugs.map((slug) => ({ lang, slug })))
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

