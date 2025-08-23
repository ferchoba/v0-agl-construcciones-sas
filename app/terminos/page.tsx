import type { Metadata } from "next"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { TermsAndConditions } from "@/components/TermsAndConditions"
import { DevelopmentNote } from "@/components/DevelopmentNote"

export const metadata: Metadata = {
  title: "Términos y Condiciones - AGL Construcciones SAS",
  description:
    "Términos y condiciones de uso del sitio web de AGL Construcciones SAS. Información sobre el uso del servicio, responsabilidades y condiciones legales.",
  keywords: "términos condiciones, AGL Construcciones, condiciones uso, responsabilidades, servicios construcción",
}

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Términos y Condiciones</h1>
          <p className="text-xl text-gray-400">Última actualización: 25 de agosto de 2025</p>
        </div>
      </section>

      {/* Terms and Conditions Content */}
      <TermsAndConditions />

      {/* Development Note */}
      <div className="px-4 pb-16">
        <DevelopmentNote />
      </div>

      <Footer />
    </div>
  )
}
