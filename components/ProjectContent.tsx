"use client"

import type { ProjectContentProps } from "@/types/project-detail"

export function ProjectContent({ project }: ProjectContentProps) {
  return (
    <div className="space-y-12">
      {/* Project Description */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-6">{project.title}</h2>
        <h3 className="text-xl font-semibold text-white mb-4">Descripción del Proyecto</h3>
        <p className="text-gray-300 leading-relaxed">{project.description}</p>
      </section>

      {/* Work Scope */}
      <section>
        <h3 className="text-xl font-semibold text-white mb-4">Alcance de los Trabajos</h3>
        <ul className="space-y-2">
          {project.workScope.map((item, index) => (
            <li key={index} className="text-gray-300">
              • {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Technical Specifications */}
      <section>
        <h3 className="text-xl font-semibold text-white mb-4">Características Técnicas</h3>
        <div className="space-y-2 text-gray-300">
          {project.technicalSpecs.area && <p>Área de acabados: {project.technicalSpecs.area}</p>}
          {project.technicalSpecs.apartments && <p>Número de apartamentos: {project.technicalSpecs.apartments}</p>}
          {project.technicalSpecs.floorTypes && <p>Tipos de pisos: {project.technicalSpecs.floorTypes}</p>}
          {project.technicalSpecs.specialFinishes && (
            <p>Acabados especiales: {project.technicalSpecs.specialFinishes}</p>
          )}
        </div>
      </section>

      {/* Results */}
      <section>
        <h3 className="text-xl font-semibold text-white mb-4">Resultados</h3>
        <p className="text-gray-300 leading-relaxed">{project.results}</p>
      </section>
    </div>
  )
}
