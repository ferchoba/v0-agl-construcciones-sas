"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/LanguageProvider"

interface FooterProps {
  className?: string
}

const FooterComponent = ({ className = "" }: FooterProps) => {
  const { t, locale } = useLanguage()

  const quickLinks = [
    { label: t("navigation.home"), href: `/${locale}` },
    { label: t("navigation.services"), href: `/${locale}/servicios` },
    { label: t("navigation.projects"), href: `/${locale}/proyectos` },
    { label: t("navigation.about"), href: `/${locale}/quienes-somos` },
    { label: t("navigation.contact"), href: `/${locale}/contacto` },
    { label: t("navigation.quote"), href: `/${locale}/cotizacion` },
  ]

  const handleWhatsApp = () => {
    window.open("https://wa.me/573012571215", "_blank")
  }

  return (
    <footer className={`bg-gray-900 border-t border-gray-800 py-12 px-4 ${className}`}>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-white">AGL CONSTRUCCIONES SAS</span>
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              {t("footer.company_description")}
            </p>
            <Button
              className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 transition-colors duration-200"
              onClick={handleWhatsApp}
            >
              {t("footer.whatsapp_button")}
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">{t("footer.quick_links")}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-green-400 transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-white">{t("footer.contact_info")}</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+57 301 257 1215</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>hencho.bas@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>{t("footer.copyright")}</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link href={`/${locale}/privacidad`} className="hover:text-green-400 transition-colors duration-200">
              {t("footer.privacy_policy")}
            </Link>
            <Link href={`/${locale}/terminos`} className="hover:text-green-400 transition-colors duration-200">
              {t("footer.terms_conditions")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { FooterComponent as default }
export const Footer = FooterComponent
