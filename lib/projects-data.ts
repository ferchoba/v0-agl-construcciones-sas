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
    image: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756377214/Entreparques_BN_1200x600_e44yqo.jpg",
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
    image: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756380401/ColegioTapsandes_BN_1200x600_ynvspz.jpg",
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
    image: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756380214/MegaColegioSanMarcos_BN_1200x600_brmxd4.jpg",
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
    image: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756380494/UrbanizacionHaciendaLosLagos197_BN_1200x600_oknxmm.jpg",
    completedDate: "Mayo de 2022 / Diciembre de 2022",
    location: "Bogotá",
    slug: "urbanizacion-hacienda-los-lagos",
  },
  {
    id: "7",
    title: "EDIFICIO Q097",
    description:
      "Estructura en concreto vista preparada para la siguiente fase de obra.",
    category: "ESTRUCTURA",
    image: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756380575/EdificioQ097_BN_1200x600_b7fav6.jpg",
    completedDate: "Mayo de 2023 / Diciembre de 2023",
    location: "Bogotá",
    slug: "edificio-q097",
  },
  {
    id: "8",
    title: "PUENTE — CONJUNTO RESIDENCIAL LA CALERA",
    description:
      "Solución estructural en concreto a la vista para conectividad interna.",
    category: "ESTRUCTURA",
    image: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756380642/Puente_BN_1200x600_z1gpaf.jpg",
    completedDate: "Enero de 2023 / Abril de 2023",
    location: "La Calera",
    slug: "puente-conjunto-residencial-la-calera",
  },
  {
    id: "9",
    title: "CONDOMINIO ALTOS DEL REFUGIO",
    description: "Acabados personalizados para espacios modernos y funcionales",
    category: "ACABADOS",
    image: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756434335/AltosDelRefugio3_BN_1200x600_wceubv.jpg",
    completedDate: "Octubre de 2024 / En ejecución",
    location: "La Mesa, Cundinamarca",
    slug: "condominio-altos-del-refugio",
  }


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
