import Header from "@/components/Header"
import { ServicesGrid } from "@/components/ServicesGrid"
import Footer from "@/components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nuestros Servicios - AGL Construcciones SAS",
  description:
    "Servicios completos de construcción, remodelación y acabados. Demoliciones, cimentación, estructura, mampostería, pañetes, acabados y más.",
  keywords:
    "construcción, remodelación, demoliciones, cimentación, estructura, mampostería, acabados, drywall, enchapes",
}

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      <ServicesGrid />
      <Footer />
    </main>
  )
}
