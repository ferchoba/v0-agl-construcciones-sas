"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, FileText, Paintbrush } from "lucide-react"

interface ServicesProps {
  className?: string
}

const services = [
  {
    id: "demoliciones",
    title: "DEMOLICIONES",
    description: "Demoliciones seguras y desmantelamiento seguro y eficiente de estructuras.",
    icon: Building2,
  },
  {
    id: "estructura",
    title: "ESTRUCTURA",
    description: "Levantamiento y esqueleto de su edificación con precisión y máxima seguridad.",
    icon: FileText,
  },
  {
    id: "acabados",
    title: "ACABADOS",
    description: "Transformamos espacios en bruto en lugares funcionales y estéticos.",
    icon: Paintbrush,
  },
]

export default function Services({ className = "" }: ServicesProps) {
  return (
    <section id="servicios" className={`py-20 px-4 bg-gray-800/50 ${className}`}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Nuestros Servicios</h2>
          <p className="text-gray-300 text-lg">Soluciones completas para transformar sus espacios</p>
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
          <Button
            variant="outline"
            className="border-gray-600 text-white hover:bg-gray-800 hover:border-green-400 px-8 py-3 bg-transparent transition-all duration-200"
          >
            Ver Todos los Servicios
          </Button>
        </div>
      </div>
    </section>
  )
}
