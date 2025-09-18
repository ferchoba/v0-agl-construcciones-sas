"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import type { ContactMethod } from "@/types/contact"
import { useLanguage } from "@/lib/LanguageProvider"

const contactMethods: ContactMethod[] = [
  {
    id: "email",
    type: "email",
    title: "contact.email_title",
    value: "contact.email_value",
    icon: "mail",
    href: "mailto:aglconstruccionesas@gmail.com",
  },
  {
    id: "whatsapp",
    type: "whatsapp",
    title: "contact.whatsapp_title",
    value: "contact.whatsapp_value",
    icon: "phone",
    href: "https://wa.me/+57 3224655732",
  },
  {
    id: "location",
    type: "location",
    title: "contact.location_title",
    value: "contact.location_value",
    icon: "location",
  },
]

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "mail":
      return <Mail className="w-8 h-8" />
    case "phone":
      return <Phone className="w-8 h-8" />
    case "location":
      return <MapPin className="w-8 h-8" />
    default:
      return <Mail className="w-8 h-8" />
  }
}

export default function AlternativeContact() {
  const { t } = useLanguage()
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground text-center mb-12">{t("contact.alternative_contact_title")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method) => (
            <div key={method.id} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-4">
                <div className="text-muted-foreground">{getIcon(method.icon)}</div>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">{t(method.title)}</h3>

              {method.href ? (
                <a
                  href={method.href}
                  target={method.type === "whatsapp" ? "_blank" : undefined}
                  rel={method.type === "whatsapp" ? "noopener noreferrer" : undefined}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t(method.value)}
                </a>
              ) : (
                <p className="text-muted-foreground">{t(method.value)}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
