"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import type { QuoteFormData, QuoteFormErrors } from "@/types/quote"
import { validateQuoteForm } from "@/lib/form-validation"
import { submitQuoteRequest, serviceOptions, budgetOptions } from "@/lib/quote-api"
import { useLanguage } from "@/lib/LanguageProvider"

interface QuoteFormState {
  data: QuoteFormData
  errors: QuoteFormErrors
  isSubmitting: boolean
  isSubmitted: boolean
}

export default function QuoteForm() {
  const { t, tx, locale } = useLanguage()
  const vdict = tx("quote_form.validation")
  const [formState, setFormState] = useState<QuoteFormState>({
    data: {
      fullName: "",
      email: "",
      phone: "",
      serviceType: "",
      projectDescription: "",
      budgetRange: "",
      preferredDate: "",
    },
    errors: {},
    isSubmitting: false,
    isSubmitted: false,
  })

  const handleInputChange = (field: keyof QuoteFormData, value: string) => {
    setFormState((prev) => ({
      ...prev,
      data: { ...prev.data, [field]: value },
      errors: { ...prev.errors, [field]: undefined },
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const errors = validateQuoteForm(formState.data, vdict)

    if (Object.keys(errors).length > 0) {
      setFormState((prev) => ({ ...prev, errors }))
      return
    }

    setFormState((prev) => ({ ...prev, isSubmitting: true }))

    try {
      const result = await submitQuoteRequest(formState.data, locale)

      if (result.success) {
        setFormState((prev) => ({
          ...prev,
          isSubmitted: true,
          isSubmitting: false,
          data: {
            fullName: "",
            email: "",
            phone: "",
            serviceType: "",
            projectDescription: "",
            budgetRange: "",
            preferredDate: "",
          },
        }))
      } else {
        setFormState((prev) => ({
          ...prev,
          isSubmitting: false,
          errors: { projectDescription: result.message },
        }))
      }
    } catch (error) {
      setFormState((prev) => ({
        ...prev,
        isSubmitting: false,
        errors: { projectDescription: "Error al enviar la cotización. Inténtalo de nuevo." },
      }))
    }
  }

  if (formState.isSubmitted) {
    return (
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gray-800 rounded-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">{t("quote_form.success.title")}</h3>
          <p className="text-gray-400 mb-6">{t("quote_form.success.description")}</p>
          <Button onClick={() => setFormState((prev) => ({ ...prev, isSubmitted: false }))} variant="outline">
            {t("quote_form.success.another")}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="bg-gray-800 rounded-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">{t("quote_form.form_title")}</h2>
          <p className="text-gray-400">{t("quote_form.form_subtitle")}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t("quote_form.form_title")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t("quote_form.fields.fullName.label")} <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  placeholder={t("quote_form.fields.fullName.placeholder")}
                  value={formState.data.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-600 focus:ring-green-600"
                />
                {formState.errors.fullName && <p className="text-red-500 text-sm mt-1">{formState.errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t("quote_form.fields.email.label")} <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  placeholder={t("quote_form.fields.email.placeholder")}
                  value={formState.data.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-600 focus:ring-green-600"
                />
                {formState.errors.email && <p className="text-red-500 text-sm mt-1">{formState.errors.email}</p>}
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t("quote_form.fields.phone.label")} <span className="text-red-500">*</span>
              </label>
              <Input
                type="tel"
                placeholder={t("quote_form.fields.phone.placeholder")}
                value={formState.data.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-600 focus:ring-green-600"
              />
              {formState.errors.phone && <p className="text-red-500 text-sm mt-1">{formState.errors.phone}</p>}
            </div>
          </div>

          {/* Project Details Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t("quote_form.form_title")}</h3>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t("quote_form.fields.serviceType.label")} <span className="text-red-500">*</span>
              </label>
              <select
                value={formState.data.serviceType}
                onChange={(e) => handleInputChange("serviceType", e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:border-green-600 focus:ring-green-600 focus:outline-none"
              >
                {serviceOptions.map((option, idx) => (
                  <option key={option.value} value={option.value}>
                    {tx(`quote_form.options.serviceOptions.${idx}.label`) ?? option.label}
                  </option>
                ))}
              </select>
              {formState.errors.serviceType && (
                <p className="text-red-500 text-sm mt-1">{formState.errors.serviceType}</p>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t("quote_form.fields.projectDescription.label")} <span className="text-red-500">*</span>
              </label>
              <Textarea
                placeholder={t("quote_form.fields.projectDescription.placeholder")}
                rows={4}
                value={formState.data.projectDescription}
                onChange={(e) => handleInputChange("projectDescription", e.target.value)}
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-600 focus:ring-green-600 resize-none"
              />
              {formState.errors.projectDescription && (
                <p className="text-red-500 text-sm mt-1">{formState.errors.projectDescription}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t("quote_form.fields.budgetRange.label")} <span className="text-red-500">*</span>
                </label>
                <select
                  value={formState.data.budgetRange}
                  onChange={(e) => handleInputChange("budgetRange", e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:border-green-600 focus:ring-green-600 focus:outline-none"
                >
                  {budgetOptions.map((option, idx) => (
                    <option key={option.value} value={option.value}>
                      {tx(`quote_form.options.budgetOptions.${idx}.label`) ?? option.label}
                    </option>
                  ))}
                </select>
                {formState.errors.budgetRange && (
                  <p className="text-red-500 text-sm mt-1">{formState.errors.budgetRange}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t("quote_form.fields.preferredDate.label")} <span className="text-red-500">*</span>
                </label>
                <Input
                  type="date"
                  value={formState.data.preferredDate}
                  onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white focus:border-green-600 focus:ring-green-600"
                />
                {formState.errors.preferredDate && (
                  <p className="text-red-500 text-sm mt-1">{formState.errors.preferredDate}</p>
                )}
              </div>
            </div>
          </div>

          <Button
            type="submit"
            disabled={formState.isSubmitting}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            {formState.isSubmitting ? t("quote_form.submit.submitting") : t("quote_form.submit.idle")}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            {t("quote_form.privacy")}
          </p>
        </form>
      </div>
    </div>
  )
}
