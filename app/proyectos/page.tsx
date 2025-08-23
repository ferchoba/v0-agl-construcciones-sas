import type { Metadata } from "next"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ProjectsGrid } from "@/components/ProjectsGrid"

export const metadata: Metadata = {
  title: "Nuestros Proyectos - AGL Construcciones SAS",
  description:
    "Galería de trabajos realizados por AGL Construcciones SAS. Especialistas en cimentación, estructura, mampostería y acabados.",
  keywords:
    "proyectos construcción, obras realizadas, cimentación, estructura, mampostería, acabados, AGL Construcciones",
}

export default function ProyectosPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Nuestros Proyectos</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Galería de trabajos realizados</p>
          </div>
        </section>

        {/* Projects Grid */}
        <ProjectsGrid />
      </main>

      <Footer />
    </div>
  )
}
