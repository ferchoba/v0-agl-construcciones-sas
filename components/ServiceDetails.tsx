import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface ServiceDetailsProps {
  title: string
  detailedDescription: string
  serviceTypes: string[]
}

export function ServiceDetails({ title, detailedDescription, serviceTypes }: ServiceDetailsProps) {
  const paragraphs = detailedDescription.split("\n\n")

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white mb-6">{title}</h2>
        <div className="space-y-4">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-300 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-white mb-6">Tipos de Cimentación</h3>
        <ul className="space-y-2">
          {serviceTypes.map((type, index) => (
            <li key={index} className="text-gray-300 leading-relaxed">
              • {type}
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-8 border-t border-gray-700">
        <Link
          href="/servicios"
          className="inline-flex items-center text-green-500 hover:text-green-400 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Ver todos los servicios
        </Link>
      </div>
    </div>
  )
}
