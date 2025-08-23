export interface QuoteFormData {
  // Personal Information
  fullName: string
  email: string
  phone: string

  // Project Details
  serviceType: string
  projectDescription: string
  budgetRange: string
  preferredDate: string
}

export interface QuoteFormErrors {
  fullName?: string
  email?: string
  phone?: string
  serviceType?: string
  projectDescription?: string
  budgetRange?: string
  preferredDate?: string
}

export interface ServiceOption {
  value: string
  label: string
}

export interface BudgetOption {
  value: string
  label: string
}

export interface Benefit {
  icon: string
  title: string
  description: string
}
