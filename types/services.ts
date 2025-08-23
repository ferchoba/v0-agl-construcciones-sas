export interface Service {
  id: string
  title: string
  description: string
  image?: string
  features?: string[]
  category: "structural" | "finishing" | "specialty"
}

export interface ServicesPageData {
  title: string
  subtitle: string
  services: Service[]
}
