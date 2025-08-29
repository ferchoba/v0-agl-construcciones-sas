export interface CompanyValue {
  title: string
  description: string
}

export interface CompanyData {
  name: string
  description: string
  mission: string
  vision: string
  values: CompanyValue[]
  whyChooseUs: {
    title: string
    description: string
    experience: string
    cta: string
  }
}
