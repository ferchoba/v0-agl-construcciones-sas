import type { CompanyData } from "@/types/company"

export const companyData: CompanyData = {
  name: "AGL CONSTRUCCIONES SAS",
  description:
    "Somos una empresa especializada en remodelación y construcción de espacios residenciales, comerciales y de oficina. Con años de experiencia en el sector, nos hemos consolidado como líderes en transformación de espacios.",
  mission:
    "Transformar espacios con calidad excepcional, brindando soluciones personalizadas que superen las expectativas de nuestros clientes.",
  values: [
    {
      title: "Calidad",
      description: "Utilizamos materiales de primera y técnicas especializadas",
    },
    {
      title: "Compromiso",
      description: "Cumplimos con los tiempos y presupuestos acordados",
    },
    {
      title: "Innovación",
      description: "Incorporamos las últimas tendencias en diseño y construcción",
    },
    {
      title: "Confianza",
      description: "Construimos relaciones duraderas con nuestros clientes",
    },
  ],
  serviceCategories: [
    {
      title: "Remodelaciones Integrales",
      description:
        "Transformamos completamente sus espacios residenciales y comerciales con diseños modernos y funcionales.",
      features: [],
    },
    {
      title: "Renovaciones Especializadas",
      description: "",
      features: ["Cocinas modernas y funcionales", "Baños con diseños contemporáneos", "Garajes optimizados"],
    },
    {
      title: "Acabados y Mantenimiento",
      description: "",
      features: ["Instalación profesional de pisos", "Pintura especializada", "Mantenimiento preventivo"],
    },
  ],
  whyChooseUs: {
    title: "¿Por qué elegirnos?",
    description:
      "Con más de 10 años de experiencia, hemos completado cientos de proyectos exitosos. Nuestro equipo de profesionales expertos garantiza resultados excepcionales en cada proyecto.",
    experience: "10 años de experiencia",
    cta: "Contáctanos hoy mismo para una consulta gratuita y descubre cómo podemos transformar tu espacio.",
  },
}
