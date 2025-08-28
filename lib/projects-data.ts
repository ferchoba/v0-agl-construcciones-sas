import type { Project, ProjectCategory } from "@/types/projects"

export const projectsData: Project[] = [
  {
    id: "1",
    title: "ALTOS DE TUNDAMA",
    description:
      "Vivienda moderna con calidad constructiva y acabados listos para habitar.",
    category: "ACABADOS",
    image: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756372975/AltosDeTundama_BN_1200x600_lpg3dr.jpg",
    completedDate: "Junio de 2016 / Noviembre de 2017",
    location: "Duitama",
    slug: "altos-de-tundama",
  },
  {
    id: "2",
    title: "UNIVERSIDAD SANTO TOMAS DE TUNJA",
    description:
      "Intervención estructural y preparación de aulas para acabados finales.",
    category: "MAMPOSTERÍA",
    image: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756373553/UniversidadSantoTomas_BN_1200x600_pjkiso.jpg",
    completedDate: "Mayo de 2018 / Septiembre de 2018",
    location: "Tunja",
    slug: "universidad-santo-tomas-tunja",
  },
  {
    id: "3",
    title: "ENTREPARQUES",
    description:
      "Apartamentos con fachadas de gran formato y espacios listos para personalizar.",
    category: "MAMPOSTERÍA",
    image: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756368474/Entreparques2_BN_wlrcgk.png",
    completedDate: "Agosto de 2018 / Febrero de 2019",
    location: "Bogotá",
    slug: "entreparques",
  },
  {
    id: "6",
    title: "COLEGIO TAPSANDES",
    description:
      "Espacios educativos duraderos y listos para el uso.",
    category: "ESTRUCTURA",
    image: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756368795/ColegioTapsandes_BN_zvlen9.png",
    completedDate: "Junio de 2019 / Marzo de 2020",
    location: "Bogotá",
    slug: "colegio-tapsandes",
  },

  {
    id: "4",
    title: "MEGA COLEGIO SAN MARCOS FUNZA",
    description:
      "Infraestructura educativa robusta y lista para operar.",
    category: "ESTRUCTURA",
    image: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756369036/MegaColegioSanMarcos_BN_kxyxg8.png",
    completedDate: "Septiembre de 2020 / Marzo de 2021",
    location: "Funza",
    slug: "mega-colegio-san-marcos-funza",
  },
  {
    id: "5",
    title: "URBANIZACIÓN HACIENDA LOS LAGOS",
    description:
      "Sótanos ejecutados y estructura industrializada preparada para avance de obra.",
    category: "CIMENTACIÓN",
    image: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756369864/UrbanizacionHaciendaLosLagos197_BN_mapzjd.png",
    completedDate: "Mayo de 2022 / Diciembre de 2022",
    location: "Bogotá",
    slug: "urbanizacion-hacienda-los-lagos",
  },
  {
    id: "7",
    title: "EDIFICIO 0097",
    description:
      "Estructura en concreto vista preparada para la siguiente fase de obra.",
    category: "ESTRUCTURA",
    image: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756370324/EdificioQ097_BN_we2hjm.png",
    completedDate: "Mayo de 2023 / Diciembre de 2023",
    location: "Bogotá",
    slug: "edificio-0097",
  },
  {
    id: "8",
    title: "PUENTE — CONJUNTO RESIDENCIAL LA CALERA",
    description:
      "Solución estructural en concreto a la vista para conectividad interna.",
    category: "ESTRUCTURA",
    image: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756371006/Puente_BN_xz1wft.png",
    completedDate: "Enero de 2023 / Abril de 2023",
    location: "La Calera",
    slug: "puente-conjunto-residencial-la-calera",
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
