import type { ContactFormData } from "@/types/contact"

export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error("Error al enviar el formulario")
    }

    const result = await response.json()
    return { success: true, message: "Mensaje enviado correctamente" }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return { success: false, message: "Error al enviar el mensaje. Inténtalo de nuevo." }
  }
}

export async function sendWhatsAppMessage(message: string, phone = "+573012571215"): Promise<void> {
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodedMessage}`
  window.open(whatsappUrl, "_blank")
}
