import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { TermsAndConditions } from '@/components/TermsAndConditions'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <TermsAndConditions />
      </main>
      <Footer />
    </div>
  )
}

