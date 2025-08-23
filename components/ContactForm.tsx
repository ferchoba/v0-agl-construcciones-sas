"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import type { ContactFormData, ContactFormState } from "@/types/contact"
import { validateContactForm } from "@/lib/form-validation"
import { submitContactForm } from "@/lib/contact-api"
import { useLanguage } from "@/lib/LanguageProvider"

export default function ContactForm() {
  const { t, tx } = useLanguage()
  const [formState, setFormState] = useState<ContactFormState>({
    data: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    errors: {},
    isSubmitting: false,
    isSubmitted: false,
  })

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormState((prev) => ({
      ...prev,
      data: { ...prev.data, [field]: value },
      errors: { ...prev.errors, [field]: undefined },
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const errors = validateContactForm(formState.data, tx("contact_form.validation"))

    if (Object.keys(errors).length > 0) {
      setFormState((prev) => ({ ...prev, errors }))
      return
    }

    setFormState((prev) => ({ ...prev, isSubmitting: true }))

    try {
      const result = await submitContactForm(formState.data)

      if (result.success) {
        setFormState((prev) => ({
          ...prev,
          isSubmitted: true,
          isSubmitting: false,
          data: { name: "", email: "", phone: "", message: "" },
        }))
      } else {
        setFormState((prev) => ({
          ...prev,
          isSubmitting: false,
          errors: { message: result.message },
        }))
      }
    } catch (error) {
      setFormState((prev) => ({
        ...prev,
        isSubmitting: false,
        errors: { message: t("contact_form.error_message") },
      }))
    }
  }

  if (formState.isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-gray-800 rounded-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">{t("contact_form.success_message")}</h3>
          <p className="text-gray-400 mb-6">Gracias por contactarnos. Te responderemos pronto.</p>
          <Button onClick={() => setFormState((prev) => ({ ...prev, isSubmitted: false }))} variant="outline">
            Enviar otro mensaje
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="bg-gray-800 rounded-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">{t("contact_form.title")}</h2>
          <p className="text-gray-400">{t("contact_form.subtitle")}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {t("contact_form.fields.name.label")} <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              placeholder={t("contact_form.fields.name.placeholder")}
              value={formState.data.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-600 focus:ring-green-600"
            />
            {formState.errors.name && <p className="text-red-500 text-sm mt-1">{formState.errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {t("contact_form.fields.email.label")} <span className="text-red-500">*</span>
            </label>
            <Input
              type="email"
              placeholder={t("contact_form.fields.email.placeholder")}
              value={formState.data.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-600 focus:ring-green-600"
            />
            {formState.errors.email && <p className="text-red-500 text-sm mt-1">{formState.errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {t("contact_form.fields.phone.label")} <span className="text-red-500">*</span>
            </label>
            <Input
              type="tel"
              placeholder={t("contact_form.fields.phone.placeholder")}
              value={formState.data.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-600 focus:ring-green-600"
            />
            {formState.errors.phone && <p className="text-red-500 text-sm mt-1">{formState.errors.phone}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {t("contact_form.fields.message.label")} <span className="text-red-500">*</span>
            </label>
            <Textarea
              placeholder={t("contact_form.fields.message.placeholder")}
              rows={4}
              value={formState.data.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-600 focus:ring-green-600 resize-none"
            />
            {formState.errors.message && <p className="text-red-500 text-sm mt-1">{formState.errors.message}</p>}
          </div>

          <Button
            type="submit"
            disabled={formState.isSubmitting}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            {formState.isSubmitting ? "Enviando..." : t("contact_form.submit_button")}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            Al enviar este formulario, aceptas nuestra política de privacidad y el tratamiento de tus datos personales
          </p>
        </form>
      </div>
    </div>
  )
}
