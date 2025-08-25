import { WEB3FORMS_CONFIG } from './web3forms-config'
import type { 
  Web3FormsResponse, 
  Web3FormsSubmission, 
  ContactFormSubmission, 
  QuoteFormSubmission 
} from '@/types/web3forms'
import type { ContactFormData, QuoteFormData } from '@/types/forms'

export async function submitToWeb3Forms(
  data: Web3FormsSubmission
): Promise<Web3FormsResponse> {
  try {
    const response = await fetch(WEB3FORMS_CONFIG.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data),
    })

    const result = await response.json()
    
    if (response.status === 200) {
      return { success: true, message: result.message || 'Enviado correctamente' }
    } else {
      throw new Error(result.message || 'Error en el envío')
    }
  } catch (error) {
    console.error('Web3Forms submission error:', error)
    throw error
  }
}

export function createContactSubmission(
  data: ContactFormData,
  locale: string
): ContactFormSubmission {
  return {
    access_key: WEB3FORMS_CONFIG.contactKey,
    subject: WEB3FORMS_CONFIG.contact.subject,
    name: data.name,
    email: data.email,
    phone: data.phone,
    message: data.message,
    source: 'Website Contact Form',
    language: locale,
    timestamp: new Date().toISOString(),
  }
}

export function createQuoteSubmission(
  data: QuoteFormData,
  locale: string
): QuoteFormSubmission {
  return {
    access_key: WEB3FORMS_CONFIG.quoteKey,
    subject: `${WEB3FORMS_CONFIG.quote.subject} - ${data.serviceType}`,
    'Nombre Completo': data.fullName,
    'Email': data.email,
    'Teléfono': data.phone,
    'Tipo de Servicio': data.serviceType,
    'Descripción del Proyecto': data.projectDescription,
    'Rango de Presupuesto': data.budgetRange,
    'Fecha Preferida': data.preferredDate,
    'Fuente': 'Website Quote Form',
    'Idioma': locale,
    'Fecha de Solicitud': new Date().toISOString(),
  }
}
