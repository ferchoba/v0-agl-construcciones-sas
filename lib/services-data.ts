import type { Service } from "@/types/services"

export const servicesData: Service[] = [
  {
    id: "demoliciones",
    title: "DEMOLICIONES",
    description:
      "Servicio profesional para el desmantelamiento seguro y eficiente de estructuras. Garantizamos un proceso.",
    category: "structural",
    features: ["Demolición controlada", "Retiro de escombros", "Permisos y licencias"],
  },
  {
    id: "cimentacion",
    title: "CIMENTACIÓN",
    description:
      "Construimos las bases sólidas y duraderas que su edificación necesita. Realizamos cimentaciones seguras y estables.",
    image: "/construction-foundation.png",
    category: "structural",
    features: ["Cimentación profunda", "Estudios de suelo", "Refuerzo estructural"],
  },
  {
    id: "estructura",
    title: "ESTRUCTURA",
    description:
      "Levantamos el esqueleto de su edificación con precisión y máxima seguridad. Construimos estructuras de concreto.",
    category: "structural",
    features: ["Estructura en concreto", "Estructura metálica", "Refuerzos sísmicos"],
  },
  {
    id: "mamposteria",
    title: "MAMPOSTERÍA",
    description:
      "Realizamos trabajos de mampostería para fachadas, divisiones interiores y muros de contención y acabados limpios, utilizando materiales de.",
    category: "structural",
    features: ["Mampostería fachada", "Mampostería fachada a la vista", "Mampostería interna"],
  },
  {
    id: "panetes",
    title: "PAÑETES",
    description:
      "Aplicamos revestimientos de mortero en fachadas e interiores. Preparamos y protegemos las superficies, dejándolas listas.",
    category: "finishing",
    features: ["Pañetes fachada", "Pañetes interiores"],
  },
  {
    id: "acabados",
    title: "ACABADOS",
    description:
      "Transformamos espacios en bruto en lugares funcionales y estéticos. Cuidamos cada detalle final, desde pisos y techos hasta la.",
    image: "/modern-living-room.png",
    category: "finishing",
    features: ["Pisos y enchapes", "Pintura y acabados", "Instalaciones finales"],
  },
  {
    id: "estuco-pintura",
    title: "ESTUCO Y PINTURA",
    description:
      "Ofrecemos acabados de estuco y pintura para superficies lisas y perfectas. Logramos un resultado final duradero y de gran impacto.",
    category: "finishing",
  },
  {
    id: "drywall",
    title: "DRYWALL",
    description:
      "Construcción de muros, divisiones y techos con sistema drywall. Una solución rápida, limpia y para crear o renovar espacios.",
    category: "specialty",
  },
  {
    id: "enchapes",
    title: "INSTALACIÓN DE ENCHAPES",
    description:
      "Instalamos enchapes cerámicos y porcelánicos con precisión técnica. Creamos superficies duraderas, impermeables y.",
    category: "specialty",
  },
]
