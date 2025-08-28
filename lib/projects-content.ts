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
      src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756372975/AltosDeTundama_BN_1200x600_lpg3dr.jpg",
      alt: "Edificio Altos de Tundama - Vista principal",
      width: 800,
      height: 600,
    },
    location: "Duitama",

    thumbnails: [
      {
        src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1755128196/img1_g1fpyl.jpg",
        alt: "Vista lateral del edificio",
        width: 150,
        height: 100,
      },
      {
        src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1755128408/img3_hn9agp.jpg",
        alt: "Detalles de fachada",
        width: 150,
        height: 100,
      },
      {
        src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1755128400/img2_cwmscc.jpg",
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
      src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756373553/UniversidadSantoTomas_BN_1200x600_pjkiso.jpg",
      alt: "Universidad Santo Tomas de Tunja - Construcción del bloque académico",
      width: 800,
      height: 600,
    },
    location: "Tunja",

    thumbnails: [
      {
        src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756367850/img1_bx4sjo.png",
        alt: "Fachada principal en construcción",
        width: 150,
        height: 100,
      },
      {
        src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756367853/img2_xmexqy.png",
        alt: "Detalles de mampostería",
        width: 150,
        height: 100,
      },
      {
        src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756367855/img3_voh3sv.png",
        alt: "Estructura interna",
        width: 150,
        height: 100,
      },
      {
        src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756367852/img4_lomv5c.png",
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
      src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756377214/Entreparques_BN_1200x600_e44yqo.jpg",
      alt: "Torre Entreparques - Vista de la construcción",
      width: 800,
      height: 600,
    },
    location: "Bogotá",

    thumbnails: [
      {
        src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756368510/img1_tynvfr.png",
        alt: "Torre en construcción",
        width: 150,
        height: 100,
      },
      {
        src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756368510/img2_ngyzq6.png",
        alt: "Fachada ventilada",
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
  "colegio-tapsandes": {
    slug: "colegio-tapsandes",
    title: "COLEGIO TAPSANDES",
    category: "ESTRUCTURA",
    completionDate: "Junio de 2019 / Marzo de 2020",
    description:
      "Obra de estructura para institución educativa con cumplimiento de normativas sísmicas y alta calidad constructiva.",
    heroImage: {
      src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756380401/ColegioTapsandes_BN_1200x600_ynvspz.jpg",
      alt: "Colegio Tapsandes - Obra de estructura",
      width: 800,
      height: 600,
    },
    location: "Bogotá",

    thumbnails: [
      { src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756368812/img1_njxyvi.jpg", alt: "Vista 1", width: 150, height: 100 },
      { src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756368810/img2_hjg9qg.jpg", alt: "Vista 2", width: 150, height: 100 }
    ],
    workScope: [
      "Estructuración y vaciado de elementos de concreto",
      "Armado de acero de refuerzo",
      "Supervisión de calidad y seguridad en obra",
    ],
    technicalSpecs: [
      "Cimentación",
      "Estructura (columnas, pantallas y placas)",
      "Elementos sismo resistentes",
    ],
    results:
      "Infraestructura educativa segura y de alta calidad lista para operación académica.",
    serviceType: "ESTRUCTURA",
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
      src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756380214/MegaColegioSanMarcos_BN_1200x600_brmxd4.jpg",
      alt: "Mega Colegio San Marcos Funza - Estructura en construcción",
      width: 800,
      height: 600,
    },
    location: "Funza",

    thumbnails: [
      {
        src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756369075/img1_ue2a4p.jpg",
        alt: "Estructura de concreto",
        width: 150,
        height: 100,
      },
      {
        src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756369077/img2_im2pxj.jpg",
        alt: "Columnas y vigas",
        width: 150,
        height: 100,
      },
      {
        src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756369072/img3_pe7rpq.jpg",
        alt: "Losas especiales",
        width: 150,
        height: 100,
      },
      {
        src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756369080/img4_ffroje.jpg",
        alt: "Estructura de concreto",
        width: 150,
        height: 100,
      },
      {
        src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756369154/img5_lr0l4s.jpg",
        alt: "Columnas y vigas",
        width: 150,
        height: 100,
      },
      {
        src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756369151/img6_zvaugd.jpg",
        alt: "Losas especiales",
        width: 150,
        height: 100,
      }
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
      src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756380494/UrbanizacionHaciendaLosLagos197_BN_1200x600_oknxmm.jpg",
      alt: "Urbanización Hacienda Los Lagos - Trabajos de cimentación",
      width: 800,
      height: 600,
    },
    location: "Bogotá",

    thumbnails: [
      {
        src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756369926/img1_aleuhp.jpg",
        alt: "Excavaciones profundas",
        width: 150,
        height: 100,
      },
      {
        src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756369932/img2_r0fvrq.jpg",
        alt: "Pilotaje especializado",
        width: 150,
        height: 100,
      },
      {
        src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756369929/img3_kjeylv.jpg",
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
  "edificio-q097": {
    slug: "edificio-q097",
    title: "EDIFICIO Q097",
    category: "ESTRUCTURA",
    completionDate: "29 de junio de 2024",
    description:
      "Estructura completa en concreto reforzado para edificio residencial de 8 pisos. Construcción de pórticos resistentes a momento, losas aligeradas, escaleras y elementos estructurales especiales con acabados arquitectónicos integrados.",
    heroImage: {
      src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756380575/EdificioQ097_BN_1200x600_b7fav6.jpg",
      alt: "Edificio Q097 - Estructura en concreto reforzado",
      width: 800,
      height: 600,
    },
    location: "Bogotá",

    thumbnails: [
      {
        src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756370354/img1_tpy5hw.jpg",
        alt: "Pórticos resistentes",
        width: 150,
        height: 100,
      },
      {
        src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756370361/img2_hrn4mn.jpg",
        alt: "Losas aligeradas",
        width: 150,
        height: 100,
      },
      {
        src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756370357/img3_s3anwh.jpg",
        alt: "Escaleras estructurales",
        width: 150,
        height: 100,
      },
      {
        src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756370350/img4_q5paqd.jpg",
        alt: "Escaleras estructurales",
        width: 150,
        height: 100,
      }
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
  "puente-conjunto-residencial-la-calera": {
    slug: "puente-conjunto-residencial-la-calera",
    title: "PUENTE — CONJUNTO RESIDENCIAL LA CALERA",
    category: "ESTRUCTURA",
    completionDate: "Enero de 2023 / Abril de 2023",
    description:
      "Estructura de puente interno para conjunto residencial, garantizando seguridad y funcionalidad con acabados de alta calidad.",
    heroImage: {
      src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756380642/Puente_BN_1200x600_z1gpaf.jpg",
      alt: "Puente interno — Conjunto Residencial La Calera",
      width: 800,
      height: 600,
    },
    location: "La Calera",

    thumbnails: [
      { src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756371113/img1_z8ppwx.jpg", alt: "Vista 1", width: 150, height: 100 },
      { src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756371117/img2_lwaygi.jpg", alt: "Vista 2", width: 150, height: 100 },
      { src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756371102/img3_vwmknd.jpg", alt: "Vista 3", width: 150, height: 100 },
      { src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756371109/img4_roqwnu.jpg", alt: "Vista 2", width: 150, height: 100 },
      { src: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756371106/img5_x1axhu.jpg", alt: "Vista 3", width: 150, height: 100 }
    ],
    workScope: [
      "Cimentación y apoyos del puente",
      "Estructura en concreto armado",
      "Acabados y protección de superficies",
    ],
    technicalSpecs: [
      "Cimentación",
      "Estructura en concreto armado",
      "Elementos de protección y acabados",
    ],
    results:
      "Conectividad interna segura y funcional dentro del conjunto residencial.",
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
