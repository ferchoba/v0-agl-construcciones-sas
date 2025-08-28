export interface CompanyValue {
  title: string
  description: string
}

export interface ServiceCategory {
  title: string
  description: string
  features: string[]
}

export interface CompanyData {
  name: string
  description: string
  mission: string
  vision: string
  values: CompanyValue[]
  serviceCategories: ServiceCategory[]
  whyChooseUs: {
    title: string
    description: string
    experience: string
    cta: string
  }
}
