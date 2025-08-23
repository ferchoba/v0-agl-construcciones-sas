import { notFound } from "next/navigation"
import { getServiceBySlug } from "@/lib/services-content"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Breadcrumb } from "@/components/Breadcrumb"
import { ServiceHero } from "@/components/ServiceHero"
import { CTASidebar } from "@/components/CTASidebar"
import { ServiceDetails } from "@/components/ServiceDetails"

interface ServicePageProps {
  params: {
    slug: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  const breadcrumbItems = [
    { label: service.breadcrumb.home, href: "/" },
    { label: service.breadcrumb.services, href: "/servicios" },
    { label: service.breadcrumb.current },
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <ServiceHero
              title={service.title}
              description={service.description}
              heroImage={service.heroImage}
              heroImageAlt={service.heroImageAlt}
            />

            <ServiceDetails
              title={service.title}
              detailedDescription={service.detailedDescription}
              serviceTypes={service.serviceTypes}
            />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <CTASidebar title={service.ctaTitle} description={service.ctaDescription} benefits={service.benefits} />
          </div>
        </div>
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
