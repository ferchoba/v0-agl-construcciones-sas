export interface Project {
  id: string
  title: string
  description: string
  category: ProjectCategory
  image: string
  completedDate: string
  location?: string
  slug: string
}

export type ProjectCategory = "CIMENTACIÓN" | "ESTRUCTURA" | "MAMPOSTERÍA" | "ACABADOS"

export interface ProjectFilter {
  category: ProjectCategory | "Todos"
  count?: number
}

export interface ProjectsPageData {
  projects: Project[]
  filters: ProjectFilter[]
  totalCount: number
}
