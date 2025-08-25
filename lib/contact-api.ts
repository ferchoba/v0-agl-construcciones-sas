import type { ContactFormData } from "@/types/contact"
import { submitToWeb3Forms, createContactSubmission } from './web3forms-utils'

export async function submitContactForm(
  data: ContactFormData,
  locale: string = 'es'
): Promise<{ success: boolean; message: string }> {
  try {
    const submission = createContactSubmission(data, locale)
    const result = await submitToWeb3Forms(submission)

    if (result.success) {
      return { success: true, message: "Mensaje enviado correctamente" }
    } else {
      throw new Error(result.message || "Error al enviar el formulario")
    }
  } catch (error) {
    console.error("Web3Forms contact error:", error)

    let errorMessage = "Error al enviar el mensaje. Inténtalo de nuevo."

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

export async function sendWhatsAppMessage(message: string, phone = "+573012571215"): Promise<void> {
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodedMessage}`
  window.open(whatsappUrl, "_blank")
}
