import type { Service } from "@/types/services"

export const servicesData: Service[] = [
  {
    id: "demoliciones",
    title: "DEMOLICIONES",
    description:
      "Ejecutamos demoliciones controladas y seguras para proyectos residenciales y comerciales. Nuestro equipo especializado garantiza el cumplimiento de todas las normativas de seguridad, minimizando el impacto ambiental y optimizando los tiempos de ejecución.",
    category: "structural",
    features: ["Demolición controlada", "Retiro de escombros", "Permisos y licencias", "Evaluación estructural previa"],
  },
  {
    id: "cimentacion",
    title: "CIMENTACIÓN",
    description:
      "Construimos cimentaciones sólidas y duraderas que garantizan la estabilidad de su proyecto. Realizamos estudios de suelo detallados y aplicamos las mejores técnicas de ingeniería para asegurar bases resistentes que soporten cualquier tipo de estructura.",
    image: "/construction-foundation.png",
    category: "structural",
    features: ["Cimentación profunda", "Estudios de suelo", "Refuerzo estructural", "Sistemas de drenaje"],
  },
  {
    id: "estructura",
    title: "ESTRUCTURA",
    description:
      "Desarrollamos el esqueleto estructural de su edificación con precisión técnica y máxima seguridad. Trabajamos con concreto reforzado y estructuras metálicas, cumpliendo con los más altos estándares de calidad y resistencia sísmica.",
    category: "structural",
    features: ["Estructura en concreto", "Estructura metálica", "Refuerzos sísmicos", "Análisis estructural"],
  },
  {
    id: "mamposteria",
    title: "MAMPOSTERÍA",
    description:
      "Especializados en mampostería estructural y decorativa para fachadas, muros divisorios y elementos arquitectónicos. Utilizamos materiales de primera calidad y técnicas tradicionales combinadas con innovación para lograr acabados impecables y duraderos.",
    category: "structural",
    features: ["Mampostería fachada", "Mampostería fachada a la vista", "Mampostería interna", "Muros de contención"],
  },
  {
    id: "panetes",
    title: "PAÑETES",
    description:
      "Aplicamos revestimientos de mortero de alta calidad en fachadas e interiores. Nuestros pañetes proporcionan protección contra la humedad y crean superficies uniformes listas para acabados finales, garantizando durabilidad y excelente presentación estética.",
    category: "finishing",
    features: ["Pañetes fachada", "Pañetes interiores", "Impermeabilización", "Texturas especiales"],
  },
  {
    id: "acabados",
    title: "ACABADOS",
    description:
      "Transformamos espacios en bruto en ambientes funcionales y estéticamente atractivos. Nos especializamos en acabados finos que incluyen instalación de pisos, enchapes, pintura decorativa y todos los detalles que dan vida y personalidad a su proyecto.",
    image: "/modern-living-room.png",
    category: "finishing",
    features: ["Pisos y enchapes", "Pintura y acabados", "Instalaciones finales", "Carpintería fina"],
  },
  {
    id: "estuco-pintura",
    title: "ESTUCO Y PINTURA",
    description:
      "Ofrecemos servicios especializados de estuco y pintura para lograr superficies perfectamente lisas y acabados de alta calidad. Utilizamos productos premium y técnicas avanzadas para garantizar resultados duraderos con excelente resistencia al clima.",
    category: "finishing",
    features: ["Estuco liso", "Pintura decorativa", "Texturas especiales", "Tratamientos impermeables"],
  },
  {
    id: "drywall",
    title: "DRYWALL",
    description:
      "Construcción eficiente de muros, divisiones y cielos rasos con sistema drywall. Esta solución moderna permite crear espacios funcionales de manera rápida y limpia, ideal para remodelaciones y construcciones que requieren flexibilidad arquitectónica.",
    category: "specialty",
    features: ["Muros divisorios", "Cielos rasos", "Aislamiento acústico", "Instalación rápida"],
  },
  {
    id: "enchapes",
    title: "INSTALACIÓN DE ENCHAPES",
    description:
      "Instalamos enchapes cerámicos, porcelánicos y de piedra natural con precisión técnica excepcional. Creamos superficies impermeables, resistentes y estéticamente superiores, perfectas para baños, cocinas, fachadas y áreas de alto tráfico.",
    category: "specialty",
    features: ["Cerámica y porcelanato", "Piedra natural", "Impermeabilización", "Diseños personalizados"],
  },
]
