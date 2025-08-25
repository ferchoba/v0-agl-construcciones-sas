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
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground text-lg">{t("cta_sidebar.title")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-sm">
            {t("cta_sidebar.description")}
          </p>
          <div className="space-y-3">
            <Button className="w-full bg-primary hover:bg-[#212529]">{t("cta_sidebar.button_quote")}</Button>
            <Button variant="outline" className="w-full border-border text-muted-foreground hover:bg-muted bg-transparent">
              {t("projects.view_service_label") ?? "Ver servicio:"} {tx(`projects.serviceTypes.${project.serviceType}`) ?? project.serviceType}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Project Details */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground text-lg">{t("projects.detailsCardTitle")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <span className="text-muted-foreground text-sm">{t("projects.serviceTypeLabel")}</span>
            <p className="text-foreground font-medium">{tx(`projects.serviceTypes.${project.serviceType}`) ?? project.serviceType}</p>
          </div>
          <div>
            <span className="text-muted-foreground text-sm">{t("projects.completed_at")}</span>
            <p className="text-foreground font-medium">{completionTx ?? project.completionDate}</p>
          </div>
          <div>
            <span className="text-muted-foreground text-sm">{t("projects.imagesLabel")}</span>
            <p className="text-foreground font-medium">{project.imageCount} {t("projects.imagesUnit")}</p>
          </div>
        </CardContent>
      </Card>

      {/* Why Choose Us */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground text-lg">{t("cta_sidebar.benefits_title")}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {(tx("cta_sidebar.benefits") as string[] | undefined)?.map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-muted-foreground text-sm">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
