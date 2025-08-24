import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import QuoteForm from "@/components/QuoteForm"
import BenefitsSection from "@/components/BenefitsSection"
import type { Metadata } from "next"
import QuotePageHero from "@/components/QuotePageHero"

export const metadata: Metadata = {
  title: "Solicitar Cotización - AGL Construcciones SAS",
  description:
    "Obtén una cotización personalizada para tu proyecto de construcción o remodelación. Evaluamos tu proyecto sin costo alguno.",
}

export default function CotizacionPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      {/* Hero Section */}
      <QuotePageHero />

      {/* Quote Form Section */}
      <section className="pb-16">
        <QuoteForm />
      </section>

      {/* Benefits Section */}
      <BenefitsSection />

      <Footer />
    </div>
  )
}
