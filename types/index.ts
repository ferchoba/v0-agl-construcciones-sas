export interface HeroData {
  title: string
  description: string
  primaryCTA: string
  secondaryCTA: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export interface Statistic {
  value: string
  label: string
}

export interface ContactInfo {
  phone: string
  email: string
}

export interface CompanyInfo {
  name: string
  description: string
  services: Service[]
  statistics: Statistic[]
  contact: ContactInfo
}
