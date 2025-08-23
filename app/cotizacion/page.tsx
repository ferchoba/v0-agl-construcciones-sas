import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import QuoteForm from "@/components/QuoteForm"
import BenefitsSection from "@/components/BenefitsSection"

export const metadata = {
  title: "Solicitar Cotización - AGL Construcciones SAS",
  description:
    "Obtén una cotización personalizada para tu proyecto de construcción o remodelación. Evaluamos tu proyecto sin costo alguno.",
}

export default function CotizacionPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Solicitar Cotización</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Obtén una cotización personalizada para tu proyecto de construcción o remodelación
          </p>
        </div>
      </section>

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
