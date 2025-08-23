import { companyData } from "@/lib/company-data"

export function CompanyOverview() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Company Name */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">{companyData.name}</h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">{companyData.description}</p>
        </div>

        {/* Mission */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-4">Nuestra Misión</h3>
          <p className="text-gray-300 leading-relaxed">{companyData.mission}</p>
        </div>

        {/* Values */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Nuestros Valores</h3>
          <div className="space-y-4">
            {companyData.values.map((value, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold text-white mb-2">
                  <span className="text-green-500">{value.title}:</span> {value.description}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Services Overview */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Nuestros Servicios</h3>
          <div className="space-y-8">
            {companyData.serviceCategories.map((category, index) => (
              <div key={index}>
                <h4 className="text-xl font-semibold text-green-500 mb-3">{category.title}</h4>
                {category.description && <p className="text-gray-300 mb-3 leading-relaxed">{category.description}</p>}
                {category.features.length > 0 && (
                  <ul className="space-y-1">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300">
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">{companyData.whyChooseUs.title}</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Con más de <span className="text-green-500 font-semibold">{companyData.whyChooseUs.experience}</span>, hemos
            completado cientos de proyectos exitosos. Nuestro equipo de profesionales expertos garantiza resultados
            excepcionales en cada proyecto.
          </p>
          <p className="text-gray-300 leading-relaxed">{companyData.whyChooseUs.cta}</p>
        </div>
      </div>
    </section>
  )
}

export { CompanyOverview as default }
