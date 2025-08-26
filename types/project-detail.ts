export interface ProjectImage {
  src: string
  alt: string
  width: number
  height: number
}

export interface ProjectDetail {
  slug: string
  title: string
  category: string
  completionDate: string
  description: string
  heroImage: ProjectImage
  thumbnails: ProjectImage[]
  workScope: string[]
  technicalSpecs: string[]
  results: string
  serviceType: string
  imageCount: number
}

export interface ProjectSidebarProps {
  project: ProjectDetail
}

export interface ProjectContentProps {
  project: ProjectDetail
}

export interface ProjectHeroProps {
  project: ProjectDetail
}
