import { notFound } from "next/navigation"
import { getServiceBySlug } from "@/lib/services-content"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ServiceDetailView } from "@/components/ServiceDetailView"

interface ServicePageProps {
  params: {
    slug: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const base = getServiceBySlug(params.slug)

  if (!base) {
    notFound()
  }

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

export async function generateMetadata({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    return {
      title: "Servicio no encontrado",
    }
  }

  return {
    title: `${service.title} - AGL Construcciones SAS`,
    description: service.description,
  }
}
