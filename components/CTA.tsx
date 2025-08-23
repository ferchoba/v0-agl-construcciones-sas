"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CTAProps {
  className?: string
}

export default function CTA({ className = "" }: CTAProps) {
  return (
    <section className={`py-20 px-4 bg-gray-800/50 ${className}`}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">¿Listo para comenzar su proyecto?</h2>
        <p className="text-gray-300 mb-8 text-lg">Contáctenos hoy mismo para una consulta gratuita</p>
        <Link href="/contacto">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-base font-medium transition-colors duration-200">
            Contactar Ahora
          </Button>
        </Link>
      </div>
    </section>
  )
}
