import type { Project, ProjectCategory } from "@/types/projects"

export const projectsData: Project[] = [
  {
    id: "1",
    title: "ALTOS DE TUNDAMA",
    description:
      "Proyecto integral de acabados para conjunto residencial de 48 apartamentos. Incluye instalación de pisos cerámicos, enchapes en baños y cocinas, pintura interior y exterior, carpintería en madera y acabados finos que transformaron espacios modernos y funcionales.",
    category: "ACABADOS",
    image: "/projects/altos-tundama.png",
    completedDate: "14 de diciembre de 2024",
    location: "Tundama",
    slug: "altos-de-tundama",
  },
  {
    id: "2",
    title: "UNIVERSIDAD SANTO TOMAS DE TUNJA",
    description:
      "Construcción de mampostería estructural para nuevo bloque académico de 3 pisos. Trabajo especializado en muros de carga, fachadas en ladrillo a la vista y elementos arquitectónicos decorativos que combinan funcionalidad con diseño institucional moderno.",
    category: "MAMPOSTERÍA",
    image: "/projects/universidad-santo-tomas.png",
    completedDate: "19 de noviembre de 2024",
    location: "Tunja",
    slug: "universidad-santo-tomas-tunja",
  },
  {
    id: "3",
    title: "ENTREPARQUES",
    description:
      "Desarrollo de mampostería para torre residencial de 15 pisos. Construcción de muros divisorios, fachadas ventiladas y elementos estructurales complementarios utilizando técnicas avanzadas y materiales de alta resistencia para garantizar durabilidad y estética.",
    category: "MAMPOSTERÍA",
    image: "/projects/entreparques.png",
    completedDate: "14 de octubre de 2024",
    location: "Bogotá",
    slug: "entreparques",
  },
  {
    id: "4",
    title: "MEGA COLEGIO SAN MARCOS FUNZA",
    description:
      "Construcción de estructura en concreto reforzado para complejo educativo de gran escala. Incluye columnas, vigas, losas y elementos estructurales especiales diseñados para soportar grandes luces y cargas, cumpliendo con normativas sísmicas vigentes.",
    category: "ESTRUCTURA",
    image: "/projects/mega-colegio-funza.png",
    completedDate: "6 de septiembre de 2024",
    location: "Funza",
    slug: "mega-colegio-san-marcos-funza",
  },
  {
    id: "5",
    title: "URBANIZACIÓN HACIENDA LOS LAGOS",
    description:
      "Cimentación profunda para desarrollo urbanístico de 120 viviendas. Excavación, pilotaje y construcción de zapatas corridas con sistemas de drenaje integrados. Trabajo técnico especializado en suelos de alta complejidad geotécnica.",
    category: "CIMENTACIÓN",
    image: "/projects/hacienda-los-lagos.png",
    completedDate: "1 de agosto de 2024",
    location: "Bogotá",
    slug: "urbanizacion-hacienda-los-lagos",
  },
  {
    id: "6",
    title: "URBANZA",
    description:
      "Cimentación para conjunto residencial de torres gemelas. Construcción de cimentación profunda con pilotes de gran diámetro, vigas de cimentación y sistemas de contención para excavaciones profundas en zona urbana de alta densidad.",
    category: "CIMENTACIÓN",
    image: "/projects/urbanza.png",
    completedDate: "19 de julio de 2024",
    location: "Bogotá",
    slug: "urbanza",
  },
  {
    id: "7",
    title: "EDIFICIO 0097",
    description:
      "Estructura completa en concreto reforzado para edificio residencial de 8 pisos. Construcción de pórticos resistentes a momento, losas aligeradas, escaleras y elementos estructurales especiales con acabados arquitectónicos integrados.",
    category: "ESTRUCTURA",
    image: "/projects/edificio-0097.png",
    completedDate: "29 de junio de 2024",
    location: "Bogotá",
    slug: "edificio-0097",
  },
]

export const getProjectsByCategory = (category: ProjectCategory | "Todos"): Project[] => {
  if (category === "Todos") {
    return projectsData
  }
  return projectsData.filter((project) => project.category === category)
}

export const getProjectCounts = () => {
  const counts = projectsData.reduce(
    (acc, project) => {
      acc[project.category] = (acc[project.category] || 0) + 1
      return acc
    },
    {} as Record<ProjectCategory, number>,
  )

  return counts
}
