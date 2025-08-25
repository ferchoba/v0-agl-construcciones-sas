"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/LanguageProvider"
import { usePathname, useRouter } from "next/navigation"

interface HeaderProps {
  className?: string
}

const HeaderComponent = ({ className = "" }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { locale, t } = useLanguage()
  const pathname = usePathname()
  const router = useRouter()

  const switchTo = (target: 'es'|'en') => {
    if (target === locale) return
    let path = pathname || '/'
    const m = path.match(/^\/(es|en)(\/.*)?$/)
    const suffix = m ? (m[2] ?? '') : (path === '/' ? '' : path)
    const newPath = `/${target}${suffix}`.replace(/\/\/+/, '/').replace(/\/$/, '') || `/${target}`
    router.push(newPath)
  }

  const navigationItems = [
    { label: t("navigation.home"), href: `/${locale}` },
    { label: t("navigation.services"), href: `/${locale}/servicios` },
    { label: t("navigation.projects"), href: `/${locale}/proyectos` },
    { label: t("navigation.about"), href: `/${locale}/quienes-somos` },
  ]

  return (
    <header className={`border-b border-gray-800 bg-gray-900 ${className}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <span className="text-xl font-bold text-white">AGL</span>
            <span className="text-sm text-gray-400 leading-tight">
              CONSTRUCCIONES
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
              <button
                onClick={() => switchTo('es')}
                className={`text-sm font-medium transition-colors ${
                  locale === 'es'
                    ? 'text-green-400'
                    : 'text-gray-400 hover:text-green-400'
                }`}
              >
                ES
              </button>
              <span className="text-sm text-gray-400">|</span>
              <button
                onClick={() => switchTo('en')}
                className={`text-sm font-medium transition-colors ${
                  locale === 'en'
                    ? 'text-green-400'
                    : 'text-gray-400 hover:text-green-400'
                }`}
              >
                EN
              </button>
            </div>

            <Link href={`/${locale}/cotizacion`}>
              <Button
                variant="outline"
                size="sm"
                className="border-gray-600 text-white hover:bg-gray-800 bg-transparent hover:border-green-400"
              >
                {t("navigation.quote")}
              </Button>
            </Link>
            <Link href={`/${locale}/contacto`}>
              <Button
                variant="outline"
                size="sm"
                className="border-gray-600 text-white hover:bg-gray-800 bg-transparent hover:border-green-400"
              >
                {t("navigation.contact")}
              </Button>
            </Link>
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
                <Link href={`/${locale}/cotizacion`}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
                  >
                    {t("navigation.quote")}
                  </Button>
                </Link>
                <Link href={`/${locale}/contacto`}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
                  >
                    {t("navigation.contact")}
                  </Button>
                </Link>
              </div>

              {/* Mobile Language Toggle */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-700 mt-4">
                <span className="text-sm text-gray-400">{t("navigation.language_label")}</span>
                <button
                  onClick={() => switchTo('es')}
                  className={`text-sm font-medium transition-colors ${
                    locale === 'es'
                      ? 'text-green-400'
                      : 'text-gray-400 hover:text-green-400'
                  }`}
                >
                  {t("navigation.language_es")}
                </button>
                <button
                  onClick={() => switchTo('en')}
                  className={`text-sm font-medium transition-colors ${
                    locale === 'en'
                      ? 'text-green-400'
                      : 'text-gray-400 hover:text-green-400'
                  }`}
                >
                  {t("navigation.language_en")}
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export { HeaderComponent as default }
export const Header = HeaderComponent
