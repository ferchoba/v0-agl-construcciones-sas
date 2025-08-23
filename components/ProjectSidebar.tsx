"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { ProjectSidebarProps } from "@/types/project-detail"
import { Check } from "lucide-react"
import { useLanguage } from "@/lib/LanguageProvider"

export function ProjectSidebar({ project }: ProjectSidebarProps) {
  const { t, tx } = useLanguage()
  const slug = project.slug
  const completionTx = tx(`projects.details.${slug}.completionDate`) as string | undefined

  return (
    <div className="space-y-6">
      {/* Interest Card */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white text-lg">{t("cta_sidebar.title")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-300 text-sm">
            {t("cta_sidebar.description")}
          </p>
          <div className="space-y-3">
            <Button className="w-full bg-green-600 hover:bg-green-700">{t("cta_sidebar.button_quote")}</Button>
            <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent">
              {t("projects.view_service_label") ?? "Ver servicio:"} {tx(`projects.serviceTypes.${project.serviceType}`) ?? project.serviceType}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Project Details */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white text-lg">{t("projects.detailsCardTitle")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <span className="text-gray-400 text-sm">{t("projects.serviceTypeLabel")}</span>
            <p className="text-white font-medium">{tx(`projects.serviceTypes.${project.serviceType}`) ?? project.serviceType}</p>
          </div>
          <div>
            <span className="text-gray-400 text-sm">{t("projects.completed_at")}</span>
            <p className="text-white font-medium">{completionTx ?? project.completionDate}</p>
          </div>
          <div>
            <span className="text-gray-400 text-sm">{t("projects.imagesLabel")}</span>
            <p className="text-white font-medium">{project.imageCount} {t("projects.imagesUnit")}</p>
          </div>
        </CardContent>
      </Card>

      {/* Why Choose Us */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white text-lg">{t("cta_sidebar.benefits_title")}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {(tx("cta_sidebar.benefits") as string[] | undefined)?.map((item, index) => (
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
