import type { ContactFormData, ContactFormErrors, QuoteFormData, QuoteFormErrors } from "@/types/contact"

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {}

  // Validate name
  if (!data.name.trim()) {
    errors.name = "El nombre es requerido"
  } else if (data.name.trim().length < 2) {
    errors.name = "El nombre debe tener al menos 2 caracteres"
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!data.email.trim()) {
    errors.email = "El email es requerido"
  } else if (!emailRegex.test(data.email)) {
    errors.email = "Ingresa un email válido"
  }

  // Validate phone
  const phoneRegex = /^[+]?[0-9\s\-$$$$]{10,}$/
  if (!data.phone.trim()) {
    errors.phone = "El teléfono es requerido"
  } else if (!phoneRegex.test(data.phone)) {
    errors.phone = "Ingresa un teléfono válido"
  }

  // Validate message
  if (!data.message.trim()) {
    errors.message = "El mensaje es requerido"
  } else if (data.message.trim().length < 10) {
    errors.message = "El mensaje debe tener al menos 10 caracteres"
  }

  return errors
}

export function validateQuoteForm(data: QuoteFormData): QuoteFormErrors {
  const errors: QuoteFormErrors = {}

  // Validate full name
  if (!data.fullName.trim()) {
    errors.fullName = "El nombre completo es requerido"
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = "El nombre debe tener al menos 2 caracteres"
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!data.email.trim()) {
    errors.email = "El email es requerido"
  } else if (!emailRegex.test(data.email)) {
    errors.email = "Ingresa un email válido"
  }

  // Validate phone
  const phoneRegex = /^[+]?[0-9\s\-()]{10,}$/
  if (!data.phone.trim()) {
    errors.phone = "El teléfono es requerido"
  } else if (!phoneRegex.test(data.phone)) {
    errors.phone = "Ingresa un teléfono válido"
  }

  // Validate service type
  if (!data.serviceType) {
    errors.serviceType = "Selecciona un tipo de servicio"
  }

  // Validate project description
  if (!data.projectDescription.trim()) {
    errors.projectDescription = "La descripción del proyecto es requerida"
  } else if (data.projectDescription.trim().length < 20) {
    errors.projectDescription = "La descripción debe tener al menos 20 caracteres"
  }

  // Validate budget range
  if (!data.budgetRange) {
    errors.budgetRange = "Selecciona un rango de presupuesto"
  }

  // Validate preferred date
  if (!data.preferredDate) {
    errors.preferredDate = "Selecciona una fecha preferida"
  } else {
    const selectedDate = new Date(data.preferredDate)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    if (selectedDate < today) {
      errors.preferredDate = "La fecha debe ser hoy o posterior"
    }
  }

  return errors
}
