import type { Web3FormsConfig } from '@/types/web3forms'

export const WEB3FORMS_CONFIG: Web3FormsConfig = {
  contactKey: process.env.NEXT_PUBLIC_WEB3FORMS_CONTACT_KEY!,
  quoteKey: process.env.NEXT_PUBLIC_WEB3FORMS_QUOTE_KEY!,
  apiUrl: "https://api.web3forms.com/submit",
  
  // Configuraciones por formulario
  contact: {
    subject: "Nuevo Contacto - AGL Construcciones SAS",
    redirectUrl: undefined, // Manejamos en React
  },
  
  quote: {
    subject: "Nueva Solicitud de Cotización - AGL Construcciones SAS",
    redirectUrl: undefined,
  }
}

// Validación de configuración
if (!WEB3FORMS_CONFIG.contactKey) {
  console.warn('NEXT_PUBLIC_WEB3FORMS_CONTACT_KEY no está configurada')
}

if (!WEB3FORMS_CONFIG.quoteKey) {
  console.warn('NEXT_PUBLIC_WEB3FORMS_QUOTE_KEY no está configurada')
}
