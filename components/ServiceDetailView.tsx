"use client"

import { Breadcrumb } from "@/components/Breadcrumb"
import { ServiceHero } from "@/components/ServiceHero"
import { CTASidebar } from "@/components/CTASidebar"
import { ServiceDetails } from "@/components/ServiceDetails"
import { useLanguage } from "@/lib/LanguageProvider"
import { getTranslatedServiceDetail } from "@/lib/translation-helpers"
import type { ServiceDetail } from "@/types/service-detail"

export function ServiceDetailView({ base }: { base: ServiceDetail }) {
  const { tx, locale } = useLanguage()
  const service = { ...getTranslatedServiceDetail(base, tx), locale }

  const breadcrumbItems = [
    { label: service.breadcrumb.home, href: `/${service.locale ?? ''}` },
    { label: service.breadcrumb.services, href: `/${service.locale ?? ''}/servicios` },
    { label: service.breadcrumb.current },
  ]

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

        <div className="lg:col-span-1">
          <CTASidebar title={service.ctaTitle} description={service.ctaDescription} benefits={service.benefits} />
        </div>
      </div>
    </>
  )
}

export default ServiceDetailView

