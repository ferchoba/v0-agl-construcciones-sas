import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import QuoteForm from '@/components/QuoteForm'
import BenefitsSection from '@/components/BenefitsSection'
import QuotePageHero from '@/components/QuotePageHero'

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        <QuotePageHero />

        {/* Quote Form */}
        <section className="py-12">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
            <QuoteForm />
            <BenefitsSection />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

