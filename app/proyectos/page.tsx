import type { Metadata } from "next"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ProjectsGrid } from "@/components/ProjectsGrid"
import { ProjectsHero } from "@/components/ProjectsHero"

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
        <ProjectsHero />

        {/* Projects Grid */}
        <ProjectsGrid />
      </main>

      <Footer />
    </div>
  )
}
