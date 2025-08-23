"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

interface HeaderProps {
  className?: string
}

export default function Header({ className = "" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Quiénes Somos", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
    { label: "Cotización", href: "#cotizacion" },
  ]

  return (
    <header className={`border-b border-gray-800 bg-gray-900 ${className}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-white">AGL</span>
            <span className="text-sm text-gray-400 leading-tight">
              CONSTRUCCIONES
              <br />
              SAS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-white hover:text-green-400 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            {/* Language Toggle */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-green-400 font-medium">ES</span>
              <span className="text-sm text-gray-400">|</span>
              <Link href="#" className="text-sm text-gray-400 hover:text-green-400 transition-colors">
                EN
              </Link>
            </div>

            {/* CTA Buttons */}
            <Button
              variant="outline"
              size="sm"
              className="border-gray-600 text-white hover:bg-gray-800 bg-transparent hover:border-green-400"
            >
              Construcción
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-600 text-white hover:bg-gray-800 bg-transparent hover:border-green-400"
            >
              Contacto
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-white hover:text-green-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center space-x-4 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
                >
                  Construcción
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
                >
                  Contacto
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
