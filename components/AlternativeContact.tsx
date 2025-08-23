import { Mail, Phone, MapPin } from "lucide-react"
import type { ContactMethod } from "@/types/contact"

const contactMethods: ContactMethod[] = [
  {
    id: "email",
    type: "email",
    title: "Email",
    value: "info@aglconstrucciones.com",
    icon: "mail",
    href: "mailto:info@aglconstrucciones.com",
  },
  {
    id: "whatsapp",
    type: "whatsapp",
    title: "WhatsApp",
    value: "+57 301 257 1215",
    icon: "phone",
    href: "https://wa.me/573012571215",
  },
  {
    id: "location",
    type: "location",
    title: "Ubicación",
    value: "Algeciras, Huila, Colombia",
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
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white text-center mb-12">Otras formas de contacto</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method) => (
            <div key={method.id} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-4">
                <div className="text-gray-400">{getIcon(method.icon)}</div>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>

              {method.href ? (
                <a
                  href={method.href}
                  target={method.type === "whatsapp" ? "_blank" : undefined}
                  rel={method.type === "whatsapp" ? "noopener noreferrer" : undefined}
                  className="text-gray-400 hover:text-green-600 transition-colors"
                >
                  {method.value}
                </a>
              ) : (
                <p className="text-gray-400">{method.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
