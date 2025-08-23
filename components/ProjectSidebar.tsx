import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { ProjectSidebarProps } from "@/types/project-detail"
import { Check } from "lucide-react"

export function ProjectSidebar({ project }: ProjectSidebarProps) {
  return (
    <div className="space-y-6">
      {/* Interest Card */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white text-lg">¿Te gusta este proyecto?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-300 text-sm">
            Podemos crear algo similar para ti. Solicita una cotización gratuita y sin compromiso.
          </p>
          <div className="space-y-3">
            <Button className="w-full bg-green-600 hover:bg-green-700">Solicitar cotización</Button>
            <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent">
              Ver servicio: {project.serviceType}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Project Details */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white text-lg">Detalles del proyecto</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <span className="text-gray-400 text-sm">Tipo de servicio:</span>
            <p className="text-white font-medium">{project.serviceType}</p>
          </div>
          <div>
            <span className="text-gray-400 text-sm">Fecha de finalización:</span>
            <p className="text-white font-medium">{project.completionDate}</p>
          </div>
          <div>
            <span className="text-gray-400 text-sm">Imágenes:</span>
            <p className="text-white font-medium">{project.imageCount} fotos</p>
          </div>
        </CardContent>
      </Card>

      {/* Why Choose Us */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white text-lg">¿Por qué elegirnos?</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {[
              "Más de 10 años de experiencia",
              "Materiales de alta calidad",
              "Garantía en todos los trabajos",
              "Presupuestos sin compromiso",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-300 text-sm">
                <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
