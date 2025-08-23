import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Statistics from "@/components/Statistics"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />
      <Services />
      <Statistics />
      <CTA />
      <Footer />
    </div>
  )
}
