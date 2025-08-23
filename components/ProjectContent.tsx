"use client"

import type { ProjectContentProps } from "@/types/project-detail"
import { useLanguage } from "@/lib/LanguageProvider"

export function ProjectContent({ project }: ProjectContentProps) {
  const { tx, t } = useLanguage()

  const slug = project.slug
  const descTx = tx(`projects.details.${slug}.description`) as string | undefined
  const workScopeTx = tx(`projects.details.${slug}.workScope`) as string[] | undefined
  const areaTx = tx(`projects.details.${slug}.technicalSpecs.area`) as string | undefined
  const floorTypesTx = tx(`projects.details.${slug}.technicalSpecs.floorTypes`) as string | undefined
  const specialFinishesTx = tx(`projects.details.${slug}.technicalSpecs.specialFinishes`) as string | undefined
  const resultsTx = tx(`projects.details.${slug}.results`) as string | undefined

  const description = descTx ?? project.description
  const workScope = workScopeTx ?? project.workScope
  const area = areaTx ?? project.technicalSpecs.area
  const floorTypes = floorTypesTx ?? project.technicalSpecs.floorTypes
  const specialFinishes = specialFinishesTx ?? project.technicalSpecs.specialFinishes
  const results = resultsTx ?? project.results

  return (
    <div className="space-y-12">
      {/* Project Description */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-6">{tx(`projects.details.${slug}.title`) ?? project.title}</h2>
        <h3 className="text-xl font-semibold text-white mb-4">{t("projects.detailsTitle")}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </section>

      {/* Work Scope */}
      <section>
        <h3 className="text-xl font-semibold text-white mb-4">{t("projects.workScopeTitle")}</h3>
        <ul className="space-y-2">
          {workScope.map((item, index) => (
            <li key={index} className="text-gray-300">
              • {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Technical Specifications */}
      <section>
        <h3 className="text-xl font-semibold text-white mb-4">{t("projects.techSpecsTitle")}</h3>
        <div className="space-y-2 text-gray-300">
          {area && <p>{t("projects.tech.areaLabel")}: {area}</p>}
          {project.technicalSpecs.apartments && <p>{t("projects.tech.apartmentsLabel")}: {project.technicalSpecs.apartments}</p>}
          {floorTypes && <p>{t("projects.tech.floorTypesLabel")}: {floorTypes}</p>}
          {specialFinishes && (
            <p>{t("projects.tech.specialFinishesLabel")}: {specialFinishes}</p>
          )}
        </div>
      </section>

      {/* Results */}
      <section>
        <h3 className="text-xl font-semibold text-white mb-4">{t("projects.resultsTitle")}</h3>
        <p className="text-gray-300 leading-relaxed">{results}</p>
      </section>
    </div>
  )
}
