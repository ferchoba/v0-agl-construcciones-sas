import { ServiceCard } from "./ServiceCard"
import { servicesData } from "@/lib/services-data"

export function ServicesGrid() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Soluciones completas de remodelación y construcción</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
