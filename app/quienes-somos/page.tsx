import type { Metadata } from "next"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { CompanyOverview } from "@/components/CompanyOverview"
import { DevelopmentNote } from "@/components/DevelopmentNote"

export const metadata: Metadata = {
  title: "Quiénes Somos - AGL Construcciones SAS",
  description:
    "Conoce más sobre AGL Construcciones SAS. Nuestra historia, misión, valores y compromiso con la excelencia en construcción y remodelación.",
  keywords: "AGL Construcciones, quiénes somos, empresa construcción, historia empresa, misión, valores",
}

export default function QuienesSomosPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">AGL CONSTRUCCIONES SAS</h1>
          <p className="text-xl text-gray-400">{`—`}</p>
        </div>
      </section>

      {/* Company Overview */}
      <CompanyOverview />

      {/* Development Note */}
      <div className="px-4 pb-16">
        <DevelopmentNote />
      </div>

      <Footer />
    </div>
  )
}
