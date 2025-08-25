import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import CompanyOverview from '@/components/CompanyOverview'
import DevelopmentNote from '@/components/DevelopmentNote'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section className="py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">AGL CONSTRUCCIONES SAS</h1>
        </section>
        <CompanyOverview />
        <DevelopmentNote />
      </main>
      <Footer />
    </div>
  )
}

