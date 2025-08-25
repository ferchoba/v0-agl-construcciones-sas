import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ServicesGrid } from '@/components/ServicesGrid'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <ServicesGrid />
      </main>
      <Footer />
    </div>
  )
}

