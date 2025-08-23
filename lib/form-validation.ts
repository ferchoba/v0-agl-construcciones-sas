import type { ContactFormData, ContactFormErrors } from "@/types/contact"
import type { QuoteFormData, QuoteFormErrors } from "@/types/quote"

export interface ContactValidationDict {
  name_required: string
  name_min: string
  email_required: string
  email_invalid: string
  phone_required: string
  phone_invalid: string
  message_required: string
  message_min: string
}

export interface QuoteValidationDict {
  fullName_required: string
  fullName_min: string
  email_required: string
  email_invalid: string
  phone_required: string
  phone_invalid: string
  serviceType_required: string
  projectDescription_required: string
  projectDescription_min: string
  budgetRange_required: string
  preferredDate_required: string
  preferredDate_invalid: string
}

export function validateContactForm(data: ContactFormData, dict: ContactValidationDict): ContactFormErrors {
  const errors: ContactFormErrors = {}

  // Validate name
  if (!data.name.trim()) {
    errors.name = dict.name_required
  } else if (data.name.trim().length < 2) {
    errors.name = dict.name_min
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!data.email.trim()) {
    errors.email = dict.email_required
  } else if (!emailRegex.test(data.email)) {
    errors.email = dict.email_invalid
  }

  // Validate phone
  const phoneRegex = /^[+]?[0-9\s\-$$$$]{10,}$/
  if (!data.phone.trim()) {
    errors.phone = dict.phone_required
  } else if (!phoneRegex.test(data.phone)) {
    errors.phone = dict.phone_invalid
  }

  // Validate message
  if (!data.message.trim()) {
    errors.message = dict.message_required
  } else if (data.message.trim().length < 10) {
    errors.message = dict.message_min
  }

  return errors
}

export function validateQuoteForm(data: QuoteFormData, dict: QuoteValidationDict): QuoteFormErrors {
  const errors: QuoteFormErrors = {}

  // Validate full name
  if (!data.fullName.trim()) {
    errors.fullName = dict.fullName_required
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = dict.fullName_min
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!data.email.trim()) {
    errors.email = dict.email_required
  } else if (!emailRegex.test(data.email)) {
    errors.email = dict.email_invalid
  }

  // Validate phone
  const phoneRegex = /^[+]?[0-9\s\-()]{10,}$/
  if (!data.phone.trim()) {
    errors.phone = dict.phone_required
  } else if (!phoneRegex.test(data.phone)) {
    errors.phone = dict.phone_invalid
  }

  // Validate service type
  if (!data.serviceType) {
    errors.serviceType = dict.serviceType_required
  }

  // Validate project description
  if (!data.projectDescription.trim()) {
    errors.projectDescription = dict.projectDescription_required
  } else if (data.projectDescription.trim().length < 20) {
    errors.projectDescription = dict.projectDescription_min
  }

  // Validate budget range
  if (!data.budgetRange) {
    errors.budgetRange = dict.budgetRange_required
  }

  // Validate preferred date
  if (!data.preferredDate) {
    errors.preferredDate = dict.preferredDate_required
  } else {
    const selectedDate = new Date(data.preferredDate)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    if (selectedDate < today) {
      errors.preferredDate = dict.preferredDate_invalid
    }
  }

  return errors
}
