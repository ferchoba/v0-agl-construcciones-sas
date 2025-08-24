import type { Metadata } from "next"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import ContactForm from "@/components/ContactForm"
import AlternativeContact from "@/components/AlternativeContact"
import ContactPageHero from "@/components/ContactPageHero"

export const metadata: Metadata = {
  title: "Contacto - AGL Construcciones SAS",
  description:
    "Contáctanos para tu proyecto de construcción o remodelación. Estamos aquí para ayudarte con soluciones personalizadas.",
  keywords: "contacto, construcción, remodelación, AGL Construcciones, presupuesto, consulta",
}

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      <main>
        {/* Hero Section */}
        <ContactPageHero />

        {/* Contact Form Section */}
        <section className="py-16">
          <ContactForm />
        </section>

        {/* Alternative Contact Methods */}
        <AlternativeContact />
      </main>

      <Footer />
    </div>
  )
}
