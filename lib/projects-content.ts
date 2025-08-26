import type { ProjectDetail } from "@/types/project-detail"

export const projectsContent: Record<string, ProjectDetail> = {
  "altos-de-tundama": {
    slug: "altos-de-tundama",
    title: "ALTOS DE TUNDAMA",
    category: "ACABADOS",
    completionDate: "14 de diciembre de 2024",
    description:
      "Proyecto integral de acabados para el conjunto residencial Altos de Tundama, incluyendo pisos, enchapes, carpintería, pintura y todos los detalles finales que dan vida al proyecto.",
    heroImage: {
      src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1755128196/img1_g1fpyl.jpg",
      alt: "Edificio Altos de Tundama - Vista principal",
      width: 800,
      height: 600,
    },
    thumbnails: [
      {
        src: "/projects/altos-tundama-thumb1.jpg",
        alt: "Vista lateral del edificio",
        width: 150,
        height: 100,
      },
      {
        src: "/projects/altos-tundama-thumb2.jpg",
        alt: "Detalles de fachada",
        width: 150,
        height: 100,
      },
      {
        src: "/projects/altos-tundama-thumb3.jpg",
        alt: "Área común",
        width: 150,
        height: 100,
      },
    ],
    workScope: [
      "Instalación de pisos cerámicos y porcelanato",
      "Enchapes en baños y cocinas",
      "Carpintería en madera",
      "Pintura interior y exterior",
      "Instalación de puertas y ventanas",
    ],
    technicalSpecs: [
      "Cimentación",
      "Estructura (columnas, pantallas y placas)",
      "Mampostería de fachada (ladrillo Santa Fe tipo rejilla)",
      "Mampostería interna (bloque común)",
      "Pañete de fachada",
      "Pañete interno",
      "Acabados finales (estuco, pintura vinílica y cielos rasos en drywall)",
    ],
    results:
      "Un proyecto que combina solidez estructural, funcionalidad y estética, cumpliendo con todos los estándares de construcción y las expectativas del cliente.",
    serviceType: "ACABADOS",
    imageCount: 3,
  },
  "universidad-santo-tomas-tunja": {
    slug: "universidad-santo-tomas-tunja",
    title: "UNIVERSIDAD SANTO TOMAS DE TUNJA",
    category: "MAMPOSTERÍA",
    completionDate: "19 de noviembre de 2024",
    description:
      "Construcción de mampostería estructural para nuevo bloque académico de 3 pisos. Trabajo especializado en muros de carga, fachadas en ladrillo a la vista y elementos arquitectónicos decorativos que combinan funcionalidad con diseño institucional moderno.",
    heroImage: {
      src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1755128643/img1_gq88im.jpg",
      alt: "Universidad Santo Tomas de Tunja - Construcción del bloque académico",
      width: 800,
      height: 600,
    },
    thumbnails: [
      {
        src: "/projects/universidad-santo-tomas-thumb1.jpg",
        alt: "Fachada principal en construcción",
        width: 150,
        height: 100,
      },
      {
        src: "/projects/universidad-santo-tomas-thumb2.jpg",
        alt: "Detalles de mampostería",
        width: 150,
        height: 100,
      },
      {
        src: "/projects/universidad-santo-tomas-thumb3.jpg",
        alt: "Estructura interna",
        width: 150,
        height: 100,
      },
    ],
    workScope: [
      "Construcción de muros de carga estructurales",
      "Fachadas en ladrillo a la vista",
      "Elementos arquitectónicos decorativos",
      "Mampostería confinada",
      "Acabados especiales institucionales",
    ],
    technicalSpecs: [
      "Mampostería confinada (bloque común, columnetas y viguetas)",
      "Pañetes internos",
      "Pañetes de fachada",
      "Alistado y preparación de pisos en cubierta",
    ],
    results:
      "Bloque académico moderno que combina resistencia estructural con diseño arquitectónico institucional, cumpliendo con todas las normativas educativas y sísmicas.",
    serviceType: "MAMPOSTERÍA",
    imageCount: 3,
  },
  entreparques: {
    slug: "entreparques",
    title: "ENTREPARQUES",
    category: "MAMPOSTERÍA",
    completionDate: "14 de octubre de 2024",
    description:
      "Desarrollo de mampostería para torre residencial de 15 pisos. Construcción de muros divisorios, fachadas ventiladas y elementos estructurales complementarios utilizando técnicas avanzadas y materiales de alta resistencia para garantizar durabilidad y estética.",
    heroImage: {
      src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1755128765/img1_tdleuv.jpg",
      alt: "Torre Entreparques - Vista de la construcción",
      width: 800,
      height: 600,
    },
    thumbnails: [
      {
        src: "/projects/entreparques-thumb1.jpg",
        alt: "Torre en construcción",
        width: 150,
        height: 100,
      },
      {
        src: "/projects/entreparques-thumb2.jpg",
        alt: "Fachada ventilada",
        width: 150,
        height: 100,
      },
      {
        src: "/projects/entreparques-thumb3.jpg",
        alt: "Detalles constructivos",
        width: 150,
        height: 100,
      },
    ],
    workScope: [
      "Muros divisorios interiores",
      "Fachadas ventiladas",
      "Mampostería estructural complementaria",
      "Elementos decorativos",
      "Acabados especiales en altura",
    ],
    technicalSpecs: [
      "Mampostería interna (bloque común)",
      "Mampostería de fachada (ladrillo Santa Fe tipo rejilla gran formato)",
      "Pañetes internos",
    ],
    results:
      "Torre residencial de alta calidad que establece nuevos estándares en construcción vertical, combinando técnicas avanzadas de mampostería con diseño contemporáneo.",
    serviceType: "MAMPOSTERÍA",
    imageCount: 3,
  },
  "mega-colegio-san-marcos-funza": {
    slug: "mega-colegio-san-marcos-funza",
    title: "MEGA COLEGIO SAN MARCOS FUNZA",
    category: "ESTRUCTURA",
    completionDate: "6 de septiembre de 2024",
    description:
      "Construcción de estructura en concreto reforzado para complejo educativo de gran escala. Incluye columnas, vigas, losas y elementos estructurales especiales diseñados para soportar grandes luces y cargas, cumpliendo con normativas sísmicas vigentes.",
    heroImage: {
      src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1755129094/img1_bno9v7.jpg",
      alt: "Mega Colegio San Marcos Funza - Estructura en construcción",
      width: 800,
      height: 600,
    },
    thumbnails: [
      {
        src: "/projects/mega-colegio-funza-thumb1.jpg",
        alt: "Estructura de concreto",
        width: 150,
        height: 100,
      },
      {
        src: "/projects/mega-colegio-funza-thumb2.jpg",
        alt: "Columnas y vigas",
        width: 150,
        height: 100,
      },
      {
        src: "/projects/mega-colegio-funza-thumb3.jpg",
        alt: "Losas especiales",
        width: 150,
        height: 100,
      },
    ],
    workScope: [
      "Columnas de concreto reforzado",
      "Vigas de gran luz",
      "Losas aligeradas especiales",
      "Elementos estructurales sísmicos",
      "Estructuras para grandes espacios",
    ],
    technicalSpecs: [
      "Cimentación",
      "Estructura (columnas, pantallas, placas y escaleras)",
      "Mampostería de fachada a la vista (ladrillo Santa Fe tipo rejilla)",
      "Mampostería interna (bloque común)",
      "Pañete interno",
      "Alistado de pisos",
    ],
    results:
      "Complejo educativo con estructura de vanguardia que permite grandes espacios libres, cumpliendo con los más altos estándares de seguridad sísmica y funcionalidad educativa.",
    serviceType: "ESTRUCTURA",
    imageCount: 3,
  },
  "urbanizacion-hacienda-los-lagos": {
    slug: "urbanizacion-hacienda-los-lagos",
    title: "URBANIZACIÓN HACIENDA LOS LAGOS",
    category: "CIMENTACIÓN",
    completionDate: "1 de agosto de 2024",
    description:
      "Cimentación profunda para desarrollo urbanístico de 120 viviendas. Excavación, pilotaje y construcción de zapatas corridas con sistemas de drenaje integrados. Trabajo técnico especializado en suelos de alta complejidad geotécnica.",
    heroImage: {
      src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1755129209/img1_bm3to1.jpg",
      alt: "Urbanización Hacienda Los Lagos - Trabajos de cimentación",
      width: 800,
      height: 600,
    },
    thumbnails: [
      {
        src: "/projects/hacienda-los-lagos-thumb1.jpg",
        alt: "Excavaciones profundas",
        width: 150,
        height: 100,
      },
      {
        src: "/projects/hacienda-los-lagos-thumb2.jpg",
        alt: "Pilotaje especializado",
        width: 150,
        height: 100,
      },
      {
        src: "/projects/hacienda-los-lagos-thumb3.jpg",
        alt: "Zapatas corridas",
        width: 150,
        height: 100,
      },
    ],
    workScope: [
      "Excavación profunda controlada",
      "Pilotaje de gran diámetro",
      "Zapatas corridas",
      "Sistemas de drenaje integrados",
      "Estudios geotécnicos especializados",
    ],
    technicalSpecs: [
      "Cimentación",
      "Estructura (sótanos 1 y 2)",
      "Estructura industrializada",
    ],
    results:
      "Desarrollo urbanístico con cimentación de alta calidad que garantiza la estabilidad a largo plazo de 120 viviendas, superando los desafíos geotécnicos del terreno.",
    serviceType: "CIMENTACIÓN",
    imageCount: 3,
  },
  urbanza: {
    slug: "urbanza",
    title: "URBANZA",
    category: "CIMENTACIÓN",
    completionDate: "19 de julio de 2024",
    description:
      "Cimentación para conjunto residencial de torres gemelas. Construcción de cimentación profunda con pilotes de gran diámetro, vigas de cimentación y sistemas de contención para excavaciones profundas en zona urbana de alta densidad.",
    heroImage: {
      src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1755129315/img1_evruea.jpg",
      alt: "Urbanza - Cimentación de torres gemelas",
      width: 800,
      height: 600,
    },
    thumbnails: [
      {
        src: "/projects/urbanza-thumb1.jpg",
        alt: "Pilotes de gran diámetro",
        width: 150,
        height: 100,
      },
      {
        src: "/projects/urbanza-thumb2.jpg",
        alt: "Vigas de cimentación",
        width: 150,
        height: 100,
      },
      {
        src: "/projects/urbanza-thumb3.jpg",
        alt: "Sistemas de contención",
        width: 150,
        height: 100,
      },
    ],
    workScope: [
      "Pilotes de gran diámetro",
      "Vigas de cimentación",
      "Sistemas de contención",
      "Excavaciones profundas urbanas",
      "Cimentación para torres gemelas",
    ],
    technicalSpecs: [
      "Mensaje 1",
      "Mensaje 2",
    ],
    results:
      "Cimentación robusta para torres gemelas que permite construcción segura en zona urbana densa, utilizando tecnología avanzada en pilotaje y contención.",
    serviceType: "CIMENTACIÓN",
    imageCount: 3,
  },
  "edificio-0097": {
    slug: "edificio-0097",
    title: "EDIFICIO 0097",
    category: "ESTRUCTURA",
    completionDate: "29 de junio de 2024",
    description:
      "Estructura completa en concreto reforzado para edificio residencial de 8 pisos. Construcción de pórticos resistentes a momento, losas aligeradas, escaleras y elementos estructurales especiales con acabados arquitectónicos integrados.",
    heroImage: {
      src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1755129367/img1_r0sznd.jpg",
      alt: "Edificio 0097 - Estructura en concreto reforzado",
      width: 800,
      height: 600,
    },
    thumbnails: [
      {
        src: "/projects/edificio-0097-thumb1.jpg",
        alt: "Pórticos resistentes",
        width: 150,
        height: 100,
      },
      {
        src: "/projects/edificio-0097-thumb2.jpg",
        alt: "Losas aligeradas",
        width: 150,
        height: 100,
      },
      {
        src: "/projects/edificio-0097-thumb3.jpg",
        alt: "Escaleras estructurales",
        width: 150,
        height: 100,
      },
    ],
    workScope: [
      "Pórticos resistentes a momento",
      "Losas aligeradas",
      "Escaleras estructurales",
      "Elementos especiales",
      "Acabados arquitectónicos integrados",
    ],
    technicalSpecs: [
      "Cimentación",
      "Estructura en concreto a la vista (columnas, pantallas y placas)",
      "Mampostería interna (bloque común)",
    ],
    results:
      "Edificio residencial con estructura optimizada que combina eficiencia constructiva con calidad arquitectónica, proporcionando espacios funcionales y seguros para 64 apartamentos.",
    serviceType: "ESTRUCTURA",
    imageCount: 3,
  },
}

export function getProjectBySlug(slug: string): ProjectDetail | null {
  return projectsContent[slug] || null
}

export function getAllProjectSlugs(): string[] {
  return Object.keys(projectsContent)
}
