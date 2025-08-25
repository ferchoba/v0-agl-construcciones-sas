"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import type { ProjectCategory } from "@/types/projects"
import { useLanguage } from "@/lib/LanguageProvider"

interface ProjectFilterProps {
  onFilterChange: (category: ProjectCategory | "Todos") => void
  projectCounts: Record<ProjectCategory, number>
  totalCount: number
}

export function ProjectFilter({ onFilterChange, projectCounts, totalCount }: ProjectFilterProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "Todos">("Todos")

  const handleFilterClick = (category: ProjectCategory | "Todos") => {
    setActiveFilter(category)
    onFilterChange(category)
  }

  const { t } = useLanguage()

  const filters = [
    { label: t("projects.filters.all",), category: "Todos" as const, count: totalCount },
    { label: t("projects.filters.CIMENTACIÓN",), category: "CIMENTACIÓN" as const, count: projectCounts.CIMENTACIÓN || 0 },
    { label: t("projects.filters.ESTRUCTURA",), category: "ESTRUCTURA" as const, count: projectCounts.ESTRUCTURA || 0 },
    { label: t("projects.filters.MAMPOSTERÍA",), category: "MAMPOSTERÍA" as const, count: projectCounts.MAMPOSTERÍA || 0 },
    { label: t("projects.filters.ACABADOS",), category: "ACABADOS" as const, count: projectCounts.ACABADOS || 0 },
  ]

  return (
    <div className="mb-8">
      <h2 className="text-lg font-medium text-foreground mb-4">{t("projects.filter_title",)}</h2>

      <div className="flex flex-wrap gap-3 mb-6">
        {filters.map((filter) => (
          <Button
            key={filter.category}
            variant={activeFilter === filter.category ? "default" : "outline"}
            size="sm"
            onClick={() => handleFilterClick(filter.category)}
            className={`
              ${
                activeFilter === filter.category
                  ? "bg-primary hover:bg-[#212529] text-primary-foreground border-primary"
                  : "bg-card hover:bg-muted text-muted-foreground border-border"
              }
            `}
          >
            {filter.label}
            {filter.count > 0 && <span className="ml-2 text-xs">{filter.count}</span>}
          </Button>
        ))}
      </div>
    </div>
  )
}
