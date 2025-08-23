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
  const { t } = useLanguage()

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
    <section id="servicios" className={`py-20 px-4 bg-gray-800/50 ${className}`}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{t("services.title")}</h2>
          <p className="text-gray-300 text-lg">{t("services.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Card
                key={service.id}
                className="bg-gray-800 border-gray-700 text-center p-6 hover:bg-gray-750 transition-colors duration-200"
              >
                <CardContent className="pt-6">
                  <IconComponent className="w-12 h-12 mx-auto mb-4 text-green-400" />
                  <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Link href="/servicios">
            <Button
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800 hover:border-green-400 px-8 py-3 bg-transparent transition-all duration-200"
            >
              {t("services.view_all")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
