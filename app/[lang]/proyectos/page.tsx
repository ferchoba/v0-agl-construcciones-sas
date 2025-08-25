import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ProjectsHero } from '@/components/ProjectsHero'
import { ProjectsGrid } from '@/components/ProjectsGrid'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ProjectsHero />
        <ProjectsGrid />
      </main>
      <Footer />
    </div>
  )
}

