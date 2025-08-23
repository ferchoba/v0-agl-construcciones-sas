import type { ServiceDetail } from "@/types/service-detail"

export const servicesContent: Record<string, ServiceDetail> = {
  demoliciones: {
    slug: "demoliciones",
    title: "DEMOLICIONES",
    description:
      "Ejecutamos demoliciones controladas y seguras para proyectos residenciales y comerciales. Nuestro equipo especializado garantiza el cumplimiento de todas las normativas de seguridad.",
    heroImage: "/services/demoliciones-hero.png",
    heroImageAlt: "Equipo especializado realizando demolición controlada",
    detailedDescription:
      "Nuestro servicio de demoliciones abarca desde pequeñas intervenciones hasta grandes proyectos de demolición total. Contamos con maquinaria especializada y un equipo técnico altamente capacitado que garantiza la ejecución segura y eficiente de cada proyecto.\n\nRealizamos evaluaciones estructurales previas, gestionamos todos los permisos necesarios y nos encargamos del manejo responsable de escombros. Nuestro enfoque prioriza la seguridad de las personas y la protección del medio ambiente, cumpliendo con todas las normativas vigentes.",
    benefits: [
      "Más de 10 años de experiencia",
      "Materiales de alta calidad",
      "Garantía en todos los trabajos",
      "Presupuestos sin compromiso",
    ],
    serviceTypes: [
      "Demolición controlada de estructuras",
      "Retiro y manejo de escombros",
      "Gestión de permisos y licencias",
      "Evaluación estructural previa",
      "Demolición selectiva de elementos",
      "Limpieza y preparación del terreno",
    ],
    ctaTitle: "¿Interesado en este servicio?",
    ctaDescription:
      "Solicita una cotización gratuita y sin compromiso. Nuestro equipo te contactará en menos de 24 horas.",
    breadcrumb: {
      home: "Inicio",
      services: "Nuestros Servicios",
      current: "DEMOLICIONES",
    },
  },
  cimentacion: {
    slug: "cimentacion",
    title: "CIMENTACIÓN",
    description:
      "Construimos las bases sólidas y duraderas que su edificación necesita. Realizamos cimentaciones seguras y estables, calculadas para garantizar la longevidad de su proyecto.",
    heroImage: "/services/cimentacion-hero.png",
    heroImageAlt: "Trabajadores en sitio de construcción realizando cimentación",
    detailedDescription:
      "La cimentación es la base de toda construcción segura y perdurable. Nuestro servicio abarca desde el estudio de suelos hasta la ejecución de cimentaciones superficiales y profundas, adaptándonos a las características específicas del terreno y los requerimientos estructurales del proyecto.\n\nUtilizamos técnicas constructivas modernas y materiales de primera calidad para garantizar la estabilidad y durabilidad de la estructura. Nuestro equipo especializado realiza un control riguroso en cada etapa del proceso, desde la excavación hasta el curado del concreto, asegurando que la cimentación cumpla con las especificaciones técnicas y normativas vigentes.",
    benefits: [
      "Más de 10 años de experiencia",
      "Materiales de alta calidad",
      "Garantía en todos los trabajos",
      "Presupuestos sin compromiso",
    ],
    serviceTypes: [
      "Cimentaciones superficiales (zapatas aisladas, corridas y combinadas)",
      "Cimentaciones profundas (pilotes y caissones)",
      "Losas de cimentación para cargas distribuidas",
      "Muros de contención y sistemas de drenaje",
      "Mejoramiento de suelos cuando sea necesario",
      "Control de calidad en materiales y procesos constructivos",
    ],
    ctaTitle: "¿Interesado en este servicio?",
    ctaDescription:
      "Solicita una cotización gratuita y sin compromiso. Nuestro equipo te contactará en menos de 24 horas.",
    breadcrumb: {
      home: "Inicio",
      services: "Nuestros Servicios",
      current: "CIMENTACIÓN",
    },
  },
  estructura: {
    slug: "estructura",
    title: "ESTRUCTURA",
    description:
      "Desarrollamos el esqueleto estructural de su edificación con precisión técnica y máxima seguridad. Trabajamos con concreto reforzado y estructuras metálicas.",
    heroImage: "/services/estructura-hero.png",
    heroImageAlt: "Construcción de estructura en concreto reforzado",
    detailedDescription:
      "La estructura es el elemento fundamental que define la resistencia y durabilidad de cualquier edificación. Nuestro equipo de ingenieros y constructores especializados desarrolla sistemas estructurales que cumplen con los más altos estándares de calidad y seguridad.\n\nTrabajamos tanto con estructuras de concreto reforzado como metálicas, adaptándonos a las necesidades específicas de cada proyecto. Realizamos análisis estructurales detallados y aplicamos las mejores prácticas de construcción para garantizar la resistencia sísmica y la estabilidad a largo plazo.",
    benefits: [
      "Más de 10 años de experiencia",
      "Materiales de alta calidad",
      "Garantía en todos los trabajos",
      "Presupuestos sin compromiso",
    ],
    serviceTypes: [
      "Estructura en concreto reforzado",
      "Estructura metálica especializada",
      "Refuerzos sísmicos avanzados",
      "Análisis y diseño estructural",
      "Vigas y columnas de alta resistencia",
      "Control de calidad en construcción",
    ],
    ctaTitle: "¿Interesado en este servicio?",
    ctaDescription:
      "Solicita una cotización gratuita y sin compromiso. Nuestro equipo te contactará en menos de 24 horas.",
    breadcrumb: {
      home: "Inicio",
      services: "Nuestros Servicios",
      current: "ESTRUCTURA",
    },
  },
  mamposteria: {
    slug: "mamposteria",
    title: "MAMPOSTERÍA",
    description:
      "Especializados en mampostería estructural y decorativa para fachadas, muros divisorios y elementos arquitectónicos. Utilizamos materiales de primera calidad.",
    heroImage: "/services/mamposteria-hero.png",
    heroImageAlt: "Construcción de mampostería en fachada",
    detailedDescription:
      "Nuestro servicio de mampostería combina técnicas tradicionales con innovación moderna para crear muros resistentes y estéticamente atractivos. Trabajamos con diferentes tipos de materiales como ladrillo, bloque y piedra, adaptándonos a los requerimientos arquitectónicos de cada proyecto.\n\nRealizamos mampostería estructural que forma parte del sistema resistente de la edificación, así como mampostería decorativa para fachadas y elementos arquitectónicos especiales. Nuestro equipo garantiza la correcta ejecución de juntas, alineaciones y acabados.",
    benefits: [
      "Más de 10 años de experiencia",
      "Materiales de alta calidad",
      "Garantía en todos los trabajos",
      "Presupuestos sin compromiso",
    ],
    serviceTypes: [
      "Mampostería de fachada visible",
      "Mampostería estructural interna",
      "Muros de contención especializados",
      "Elementos decorativos en ladrillo",
      "Reparación de mampostería existente",
      "Acabados especiales en piedra",
    ],
    ctaTitle: "¿Interesado en este servicio?",
    ctaDescription:
      "Solicita una cotización gratuita y sin compromiso. Nuestro equipo te contactará en menos de 24 horas.",
    breadcrumb: {
      home: "Inicio",
      services: "Nuestros Servicios",
      current: "MAMPOSTERÍA",
    },
  },
  panetes: {
    slug: "panetes",
    title: "PAÑETES",
    description:
      "Aplicamos revestimientos de mortero de alta calidad en fachadas e interiores. Nuestros pañetes proporcionan protección contra la humedad y crean superficies uniformes.",
    heroImage: "/services/panetes-hero.png",
    heroImageAlt: "Aplicación de pañetes en fachada",
    detailedDescription:
      "Los pañetes son revestimientos esenciales que protegen las estructuras de mampostería y proporcionan una base uniforme para los acabados finales. Utilizamos morteros de alta calidad con aditivos especiales que mejoran la adherencia, impermeabilidad y durabilidad.\n\nNuestro proceso incluye la preparación adecuada de superficies, aplicación de morteros en las proporciones correctas y acabados que garantizan la planimetría requerida. Trabajamos tanto en interiores como exteriores, adaptando las mezclas a las condiciones específicas de cada ambiente.",
    benefits: [
      "Más de 10 años de experiencia",
      "Materiales de alta calidad",
      "Garantía en todos los trabajos",
      "Presupuestos sin compromiso",
    ],
    serviceTypes: [
      "Pañetes de fachada impermeables",
      "Pañetes interiores especializados",
      "Tratamientos anti-humedad",
      "Texturas decorativas especiales",
      "Reparación de pañetes existentes",
      "Acabados listos para pintura",
    ],
    ctaTitle: "¿Interesado en este servicio?",
    ctaDescription:
      "Solicita una cotización gratuita y sin compromiso. Nuestro equipo te contactará en menos de 24 horas.",
    breadcrumb: {
      home: "Inicio",
      services: "Nuestros Servicios",
      current: "PAÑETES",
    },
  },
  acabados: {
    slug: "acabados",
    title: "ACABADOS",
    description:
      "Transformamos espacios en bruto en ambientes funcionales y estéticamente atractivos. Nos especializamos en acabados finos que incluyen instalación de pisos, enchapes y pintura decorativa.",
    heroImage: "/services/acabados-hero.png",
    heroImageAlt: "Sala moderna con acabados de alta calidad",
    detailedDescription:
      "Los acabados son la etapa final que define la calidad y estética de cualquier proyecto de construcción. Nuestro equipo especializado se encarga de todos los detalles que transforman un espacio en bruto en un ambiente habitable y atractivo.\n\nTrabajamos con materiales de primera calidad y aplicamos técnicas especializadas para lograr acabados impecables. Desde la instalación de pisos y enchapes hasta la pintura decorativa y carpintería fina, cada detalle es ejecutado con precisión y cuidado.",
    benefits: [
      "Más de 10 años de experiencia",
      "Materiales de alta calidad",
      "Garantía en todos los trabajos",
      "Presupuestos sin compromiso",
    ],
    serviceTypes: [
      "Instalación de pisos cerámicos y laminados",
      "Enchapes en baños y cocinas",
      "Pintura decorativa y acabados especiales",
      "Instalaciones eléctricas y sanitarias finales",
      "Carpintería y elementos de madera",
      "Detalles arquitectónicos personalizados",
    ],
    ctaTitle: "¿Interesado en este servicio?",
    ctaDescription:
      "Solicita una cotización gratuita y sin compromiso. Nuestro equipo te contactará en menos de 24 horas.",
    breadcrumb: {
      home: "Inicio",
      services: "Nuestros Servicios",
      current: "ACABADOS",
    },
  },
  "estuco-pintura": {
    slug: "estuco-pintura",
    title: "ESTUCO Y PINTURA",
    description:
      "Ofrecemos servicios especializados de estuco y pintura para lograr superficies perfectamente lisas y acabados de alta calidad. Utilizamos productos premium y técnicas avanzadas.",
    heroImage: "/services/estuco-pintura-hero.png",
    heroImageAlt: "Aplicación de estuco y pintura en interiores",
    detailedDescription:
      "El estuco y la pintura son los acabados finales que definen la apariencia y protección de las superficies. Nuestro equipo especializado domina las técnicas más avanzadas para lograr acabados perfectos que combinan funcionalidad y estética.\n\nUtilizamos productos de la más alta calidad, incluyendo estucos especializados y pinturas con tecnología avanzada que ofrecen mayor durabilidad, resistencia al clima y facilidad de mantenimiento. Cada proyecto es ejecutado con atención al detalle y acabados impecables.",
    benefits: [
      "Más de 10 años de experiencia",
      "Materiales de alta calidad",
      "Garantía en todos los trabajos",
      "Presupuestos sin compromiso",
    ],
    serviceTypes: [
      "Estuco liso de alta calidad",
      "Pintura decorativa especializada",
      "Texturas y acabados especiales",
      "Tratamientos impermeables",
      "Restauración de superficies",
      "Acabados resistentes al clima",
    ],
    ctaTitle: "¿Interesado en este servicio?",
    ctaDescription:
      "Solicita una cotización gratuita y sin compromiso. Nuestro equipo te contactará en menos de 24 horas.",
    breadcrumb: {
      home: "Inicio",
      services: "Nuestros Servicios",
      current: "ESTUCO Y PINTURA",
    },
  },
  drywall: {
    slug: "drywall",
    title: "DRYWALL",
    description:
      "Construcción eficiente de muros, divisiones y cielos rasos con sistema drywall. Esta solución moderna permite crear espacios funcionales de manera rápida y limpia.",
    heroImage: "/services/drywall-hero.png",
    heroImageAlt: "Instalación de sistema drywall",
    detailedDescription:
      "El sistema drywall representa una solución moderna y eficiente para la construcción de divisiones internas, cielos rasos y elementos arquitectónicos especiales. Esta tecnología permite mayor flexibilidad en el diseño y tiempos de construcción más cortos.\n\nNuestro equipo especializado maneja todos los aspectos de la instalación drywall, desde la estructura metálica hasta los acabados finales. Ofrecemos soluciones para aislamiento acústico, térmico y resistencia al fuego según los requerimientos específicos de cada proyecto.",
    benefits: [
      "Más de 10 años de experiencia",
      "Materiales de alta calidad",
      "Garantía en todos los trabajos",
      "Presupuestos sin compromiso",
    ],
    serviceTypes: [
      "Muros divisorios especializados",
      "Cielos rasos decorativos",
      "Aislamiento acústico avanzado",
      "Instalación rápida y limpia",
      "Elementos arquitectónicos especiales",
      "Reparación y mantenimiento",
    ],
    ctaTitle: "¿Interesado en este servicio?",
    ctaDescription:
      "Solicita una cotización gratuita y sin compromiso. Nuestro equipo te contactará en menos de 24 horas.",
    breadcrumb: {
      home: "Inicio",
      services: "Nuestros Servicios",
      current: "DRYWALL",
    },
  },
  enchapes: {
    slug: "enchapes",
    title: "INSTALACIÓN DE ENCHAPES",
    description:
      "Instalamos enchapes cerámicos, porcelánicos y de piedra natural con precisión técnica excepcional. Creamos superficies impermeables, resistentes y estéticamente superiores.",
    heroImage: "/services/enchapes-hero.png",
    heroImageAlt: "Instalación de enchapes cerámicos",
    detailedDescription:
      "La instalación de enchapes requiere precisión técnica y conocimiento especializado para lograr resultados duraderos y estéticamente perfectos. Trabajamos con una amplia variedad de materiales incluyendo cerámica, porcelanato, piedra natural y materiales especializados.\n\nNuestro proceso incluye la preparación adecuada de superficies, selección de adhesivos apropiados, instalación con precisión milimétrica y sellado profesional. Cada proyecto es ejecutado considerando las condiciones específicas de uso y los requerimientos estéticos del cliente.",
    benefits: [
      "Más de 10 años de experiencia",
      "Materiales de alta calidad",
      "Garantía en todos los trabajos",
      "Presupuestos sin compromiso",
    ],
    serviceTypes: [
      "Enchapes cerámicos y porcelanato",
      "Instalación de piedra natural",
      "Impermeabilización especializada",
      "Diseños y patrones personalizados",
      "Enchapes para áreas húmedas",
      "Mantenimiento y reparación",
    ],
    ctaTitle: "¿Interesado en este servicio?",
    ctaDescription:
      "Solicita una cotización gratuita y sin compromiso. Nuestro equipo te contactará en menos de 24 horas.",
    breadcrumb: {
      home: "Inicio",
      services: "Nuestros Servicios",
      current: "INSTALACIÓN DE ENCHAPES",
    },
  },
}

export function getServiceBySlug(slug: string): ServiceDetail | null {
  return servicesContent[slug] || null
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(servicesContent)
}
