import type { CompanyData } from "@/types/company"

export const companyData: CompanyData = {
  name: "AGL CONSTRUCCIONES",
  description:
    "Somos una empresa especializada en remodelación y construcción de espacios residenciales, comerciales y de oficina. Con años de experiencia en el sector, nos hemos consolidado como líderes en transformación de espacios.",
  mission:
    "Transformamos ideas en proyectos exitosos: planificamos, ejecutamos y entregamos obras con procesos innovadores, control de calidad riguroso y atención personalizada. Nuestro compromiso es maximizar la inversión del cliente, cumplir plazos y superar expectativas con soluciones que aportan durabilidad, estética y retorno.",
  vision:
    "Ser la constructora preferida por clientes e inversionistas, reconocida por entregar proyectos rentables, innovadores y de alta calidad que generan valor inmediato y sostenible.",
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
