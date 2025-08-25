import type { QuoteFormData } from "@/types/quote"
import { submitToWeb3Forms, createQuoteSubmission } from './web3forms-utils'

export async function submitQuoteRequest(
  data: QuoteFormData,
  locale: string = 'es'
): Promise<{ success: boolean; message: string; quoteId?: string }> {
  try {
    const submission = createQuoteSubmission(data, locale)
    const result = await submitToWeb3Forms(submission)

    if (result.success) {
      return {
        success: true,
        message: "Cotización enviada correctamente",
        quoteId: `WEB3-${Date.now()}` // ID generado localmente
      }
    } else {
      throw new Error(result.message || "Error al enviar la cotización")
    }
  } catch (error) {
    console.error("Web3Forms quote error:", error)

    let errorMessage = "Error al enviar la cotización. Inténtalo de nuevo."

    // Errores específicos de Web3Forms
    if (error instanceof Error) {
      if (error.message.includes("rate limit")) {
        errorMessage = "Demasiados envíos. Inténtalo más tarde."
      } else if (error.message.includes("access_key")) {
        errorMessage = "Error de configuración. Contacta al administrador."
      }
    }

    return { success: false, message: errorMessage }
  }
}

export const serviceOptions = [
  { value: "", label: "Selecciona un servicio" },
  { value: "demoliciones", label: "Demoliciones" },
  { value: "cimentacion", label: "Cimentación" },
  { value: "estructura", label: "Estructura" },
  { value: "mamposteria", label: "Mampostería" },
  { value: "panetes", label: "Pañetes" },
  { value: "acabados", label: "Acabados" },
  { value: "estuco-pintura", label: "Estuco y Pintura" },
  { value: "drywall", label: "Drywall" },
  { value: "enchapes", label: "Instalación de Enchapes" },
]

export const budgetOptions = [
  { value: "", label: "Selecciona un rango" },
  { value: "0-5000000", label: "Menos de $5,000,000" },
  { value: "5000000-10000000", label: "$5,000,000 - $10,000,000" },
  { value: "10000000-20000000", label: "$10,000,000 - $20,000,000" },
  { value: "20000000-50000000", label: "$20,000,000 - $50,000,000" },
  { value: "50000000+", label: "Más de $50,000,000" },
]
