import type { Metadata } from "next"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import ContactForm from "@/components/ContactForm"
import AlternativeContact from "@/components/AlternativeContact"

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
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contáctanos</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Estamos aquí para ayudarte con tu proyecto</p>
          </div>
        </section>

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
