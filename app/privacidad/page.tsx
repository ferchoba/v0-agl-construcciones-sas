import type { Metadata } from "next"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { PrivacyPolicy } from "@/components/PrivacyPolicy"
import { DevelopmentNote } from "@/components/DevelopmentNote"

export const metadata: Metadata = {
  title: "Política de Privacidad - AGL Construcciones SAS",
  description:
    "Política de privacidad de AGL Construcciones SAS. Información sobre el tratamiento de datos personales, derechos del usuario y protección de la información.",
  keywords: "política privacidad, protección datos, AGL Construcciones, tratamiento datos personales, derechos usuario",
}

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Política de Privacidad</h1>
          <p className="text-xl text-gray-400">Última actualización: 25 de agosto de 2025</p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <PrivacyPolicy />

      {/* Development Note */}
      <div className="px-4 pb-16">
        <DevelopmentNote />
      </div>

      <Footer />
    </div>
  )
}
