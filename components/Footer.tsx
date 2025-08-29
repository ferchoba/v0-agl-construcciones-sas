"use client"

import { Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react"
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


  return (
    <footer className={`bg-muted border-t border-border py-12 px-4 ${className}`}>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-foreground">AGL CONSTRUCCIONES SAS</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              {t("footer.company_description")}
            </p>
            <div className="mt-4 flex items-center gap-4" aria-label="Redes sociales">
              <a
                href="https://wa.me/573012571215"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="text-foreground hover:text-primary transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M20.52 3.49A11.78 11.78 0 0012.01 0C5.38 0 .01 5.37.01 12a11.9 11.9 0 001.53 5.83L0 24l6.3-1.65A11.96 11.96 0 0012 24h.01c6.63 0 12-5.37 12-12a11.93 11.93 0 00-3.49-8.51zM12 21.45c-1.86 0-3.64-.5-5.2-1.45l-.37-.22-3.74.98 1-3.64-.24-.38A9.45 9.45 0 1121.45 12 9.46 9.46 0 0112 21.45zm5.47-7.13c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.69.15-.2.3-.79.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.69-1.66-.95-2.28-.25-.6-.5-.52-.69-.53l-.59-.01c-.2 0-.52.08-.79.38-.27.3-1.05 1.02-1.05 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.78-.73 2.03-1.43.25-.7.25-1.29.18-1.42-.07-.13-.27-.2-.57-.35z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">{t("footer.quick_links")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-primary transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">{t("footer.contact_info")}</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
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
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>{t("footer.copyright")}</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link href={`/${locale}/privacidad`} className="hover:text-primary transition-colors duration-200">
              {t("footer.privacy_policy")}
            </Link>
            <Link href={`/${locale}/terminos`} className="hover:text-primary transition-colors duration-200">
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
