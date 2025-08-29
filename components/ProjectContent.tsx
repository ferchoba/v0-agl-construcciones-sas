"use client"

import type { ProjectContentProps } from "@/types/project-detail"
import { useLanguage } from "@/lib/LanguageProvider"

export function ProjectContent({ project }: ProjectContentProps) {
  const { tx, t } = useLanguage()

  const slug = project.slug
  const descTx = tx(`projects.details.${slug}.description`) as string | undefined
  const workScopeTx = tx(`projects.details.${slug}.workScope`) as string[] | undefined
  const techListTx = tx(`projects.details.${slug}.technicalSpecs`) as string[] | undefined
  const resultsTx = tx(`projects.details.${slug}.results`) as string | undefined

  const description = descTx ?? project.description
  const workScope = workScopeTx ?? project.workScope
  const techList = techListTx ?? project.technicalSpecs
  const results = resultsTx ?? project.results

  return (
    <div className="space-y-12">
      

      {/* Work Scope */}
      <section>
        <h3 className="text-xl font-semibold text-foreground mb-4">{t("projects.workScopeTitle")}</h3>
        <ul className="space-y-2">
          {workScope.map((item, index) => (
            <li key={index} className="text-muted-foreground">
              • {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Technical Specifications */}
      <section>
        <h3 className="text-xl font-semibold text-foreground mb-4">{t("projects.techSpecsTitle")}</h3>
        <ul className="space-y-2">
          {techList.map((item, index) => (
            <li key={index} className="text-muted-foreground">• {item}</li>
          ))}
        </ul>
      </section>

      {/* Results */}
      <section>
        <h3 className="text-xl font-semibold text-foreground mb-4">{t("projects.resultsTitle")}</h3>
        <p className="text-muted-foreground leading-relaxed">{results}</p>
      </section>
    </div>
  )
}
