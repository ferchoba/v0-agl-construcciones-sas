import { NextResponse } from "next/server"
import type { HeroData } from "@/types"

export async function GET() {
  const heroData: HeroData = {
    title: "Transformamos sus espacios con calidad excepcional",
    description:
      "Especialistas en remodelación y construcción de espacios residenciales, comerciales y de oficina. Hacemos realidad su visión con soluciones personalizadas.",
    primaryCTA: "Solicitar Cotización",
    secondaryCTA: "Ver Proyectos",
  }

  return NextResponse.json(heroData)
}
