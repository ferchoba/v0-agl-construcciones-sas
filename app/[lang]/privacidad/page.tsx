import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import PrivacyPolicy from '@/components/PrivacyPolicy'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  )
}

