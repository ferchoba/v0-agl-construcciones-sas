export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

export interface ContactMethod {
  id: string
  type: "email" | "whatsapp" | "location"
  title: string
  value: string
  icon: string
  href?: string
}

export interface ContactFormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

export interface ContactFormState {
  data: ContactFormData
  errors: ContactFormErrors
  isSubmitting: boolean
  isSubmitted: boolean
}
