"use client"

interface StatisticsProps {
  className?: string
}

const statistics = [
  {
    value: "10+",
    label: "Años de experiencia en el sector",
  },
  {
    value: "100%",
    label: "Materiales de alta calidad",
  },
  {
    value: "24/7",
    label: "Equipo de profesionales expertos",
  },
  {
    value: "1 Año",
    label: "Garantía en todos nuestros trabajos",
  },
]

export default function Statistics({ className = "" }: StatisticsProps) {
  return (
    <section className={`py-20 px-4 bg-gray-900 ${className}`}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">¿Por qué elegir AGL CONSTRUCCIONES SAS?</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">{stat.value}</div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
