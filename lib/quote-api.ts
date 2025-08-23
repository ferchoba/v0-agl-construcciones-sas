import type { QuoteFormData } from "@/types/quote"

export async function submitQuoteRequest(data: QuoteFormData): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch("/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error("Error al enviar la cotización")
    }

    const result = await response.json()
    return { success: true, message: "Cotización enviada exitosamente" }
  } catch (error) {
    console.error("Error submitting quote:", error)
    return { success: false, message: "Error al enviar la cotización. Inténtalo de nuevo." }
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
