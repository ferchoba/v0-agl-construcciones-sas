"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"
import Link from "next/link"

interface FooterProps {
  className?: string
}

const FooterComponent = ({ className = "" }: FooterProps) => {
  const quickLinks = [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Proyectos", href: "/proyectos" },
    { label: "Quiénes Somos", href: "/quienes-somos" },
    { label: "Contacto", href: "/contacto" },
    { label: "Cotización", href: "/cotizacion" },
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
              Transformamos espacios con calidad excepcional. Especialistas en remodelación y construcción.
            </p>
            <Button
              className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 transition-colors duration-200"
              onClick={handleWhatsApp}
            >
              WhatsApp
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Enlaces Rápidos</h3>
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
            <h3 className="font-semibold mb-4 text-white">Información de Contacto</h3>
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
          <p>© 2025 AGL CONSTRUCCIONES SAS. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="/privacidad" className="hover:text-green-400 transition-colors duration-200">
              Política de Privacidad
            </a>
            <a href="/terminos" className="hover:text-green-400 transition-colors duration-200">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { FooterComponent as default }
export const Footer = FooterComponent
