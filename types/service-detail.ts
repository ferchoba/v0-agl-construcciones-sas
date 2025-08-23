export interface ServiceDetail {
  slug: string
  title: string
  description: string
  heroImage: string
  heroImageAlt: string
  detailedDescription: string
  benefits: string[]
  serviceTypes: string[]
  ctaTitle: string
  ctaDescription: string
  breadcrumb: {
    home: string
    services: string
    current: string
  }
}

export interface ServiceBenefit {
  icon: string
  text: string
}

export interface ServiceType {
  title: string
  items: string[]
}
