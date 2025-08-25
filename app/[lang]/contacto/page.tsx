import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import AlternativeContact from '@/components/AlternativeContact'
import ContactPageHero from '@/components/ContactPageHero'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        <ContactPageHero />

        <section className="py-12">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
            <ContactForm />
            <AlternativeContact />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

