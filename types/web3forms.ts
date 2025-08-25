export interface Web3FormsResponse {
  success: boolean
  message: string
}

export interface Web3FormsError {
  success: false
  message: string
  errors?: Record<string, string[]>
}

export interface Web3FormsConfig {
  contactKey: string
  quoteKey: string
  apiUrl: string
  contact: {
    subject: string
    redirectUrl?: string
  }
  quote: {
    subject: string
    redirectUrl?: string
  }
}

export interface Web3FormsSubmission {
  access_key: string
  subject: string
  [key: string]: string | number | boolean
}

export interface ContactFormSubmission extends Web3FormsSubmission {
  name: string
  email: string
  phone: string
  message: string
  source: string
  language: string
  timestamp: string
}

export interface QuoteFormSubmission extends Web3FormsSubmission {
  'Nombre Completo': string
  'Email': string
  'Teléfono': string
  'Tipo de Servicio': string
  'Descripción del Proyecto': string
  'Rango de Presupuesto': string
  'Fecha Preferida': string
  'Fuente': string
  'Idioma': string
  'Fecha de Solicitud': string
}
