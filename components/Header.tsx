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
    <header className={`border-b border-border bg-background ${className}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <span className="text-xl font-bold text-foreground">AGL</span>
            <span className="text-sm text-muted-foreground leading-tight">
              CONSTRUCCIONES
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-foreground hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            {/* Language Toggle */}
            <div className="flex items-center space-x-1">
              <button
                onClick={() => switchTo('es')}
                className={`px-2 py-1 text-sm font-medium rounded transition-all ${
                  locale === 'es'
                    ? 'bg-[#343A40] text-white'
                    : 'text-muted-foreground hover:text-primary hover:bg-muted'
                }`}
              >
                ES
              </button>
              <span className="text-sm text-muted-foreground mx-1">|</span>
              <button
                onClick={() => switchTo('en')}
                className={`px-2 py-1 text-sm font-medium rounded transition-all ${
                  locale === 'en'
                    ? 'bg-[#343A40] text-white'
                    : 'text-muted-foreground hover:text-primary hover:bg-muted'
                }`}
              >
                EN
              </button>
            </div>

            <Link href={`/${locale}/cotizacion`}>
              <Button
                variant="outline"
                size="sm"
                className="border-border text-foreground hover:bg-muted bg-transparent hover:border-primary"
              >
                {t("navigation.quote")}
              </Button>
            </Link>
            <Link href={`/${locale}/contacto`}>
              <Button
                variant="outline"
                size="sm"
                className="border-border text-foreground hover:bg-muted bg-transparent hover:border-primary"
              >
                {t("navigation.contact")}
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-foreground hover:text-primary transition-colors"
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
                    className="border-border text-foreground hover:bg-muted bg-transparent"
                  >
                    {t("navigation.quote")}
                  </Button>
                </Link>
                <Link href={`/${locale}/contacto`}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-border text-foreground hover:bg-muted bg-transparent"
                  >
                    {t("navigation.contact")}
                  </Button>
                </Link>
              </div>

              {/* Mobile Language Toggle */}
              <div className="flex items-center space-x-4 pt-4 border-t border-border mt-4">
                <span className="text-sm text-muted-foreground">{t("navigation.language_label")}</span>
                <button
                  onClick={() => switchTo('es')}
                  className={`px-3 py-1 text-sm font-medium rounded transition-all ${
                    locale === 'es'
                      ? 'bg-[#343A40] text-white'
                      : 'text-muted-foreground hover:text-primary hover:bg-muted'
                  }`}
                >
                  {t("navigation.language_es")}
                </button>
                <button
                  onClick={() => switchTo('en')}
                  className={`px-3 py-1 text-sm font-medium rounded transition-all ${
                    locale === 'en'
                      ? 'bg-[#343A40] text-white'
                      : 'text-muted-foreground hover:text-primary hover:bg-muted'
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
