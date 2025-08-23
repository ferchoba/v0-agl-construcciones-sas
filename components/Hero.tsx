"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HeroProps {
  className?: string
}

export default function Hero({ className = "" }: HeroProps) {
  return (
    <section className={`py-20 px-4 bg-gray-900 ${className}`}>
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
          Transformamos sus espacios con calidad excepcional
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Especialistas en remodelación y construcción de espacios residenciales, comerciales y de oficina. Hacemos
          realidad su visión con soluciones personalizadas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/cotizacion">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-base font-medium transition-colors duration-200">
              Solicitar Cotización
            </Button>
          </Link>
          <Link href="/proyectos">
            <Button
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800 hover:border-green-400 px-8 py-3 bg-transparent text-base font-medium transition-all duration-200"
            >
              Ver Proyectos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
