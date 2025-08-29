"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, FileText, Paintbrush } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/LanguageProvider"

interface ServicesProps {
  className?: string
}

export default function Services({ className = "" }: ServicesProps) {
  const { t, locale } = useLanguage()

  const services = [
    {
      id: "demoliciones",
      title: t("services_home.demoliciones.title"),
      description: t("services_home.demoliciones.description"),
      icon: Building2,
    },
    {
      id: "estructura",
      title: t("services_home.estructura.title"),
      description: t("services_home.estructura.description"),
      icon: FileText,
    },
    {
      id: "acabados",
      title: t("services_home.acabados.title"),
      description: t("services_home.acabados.description"),
      icon: Paintbrush,
    },
  ]

  return (
    <section id="servicios" className={`py-20 px-4 bg-muted ${className}`}>
      <div className="container mx-auto">

        <div className="text-center">
          <Link href={`/${locale}/servicios`}>
            <Button
              variant="outline"
              className="border-border text-foreground hover:bg-muted hover:border-primary px-8 py-3 bg-transparent transition-all duration-200"
            >
              {t("services.view_all")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
