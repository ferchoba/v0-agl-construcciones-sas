import { NextResponse } from "next/server"
import type { Service } from "@/types"

export async function GET() {
  const services: Service[] = [
    {
      id: "demoliciones",
      title: "DEMOLICIONES",
      description: "Demoliciones seguras y desmantelamiento seguro y eficiente de estructuras.",
      icon: "building2",
    },
    {
      id: "estructura",
      title: "ESTRUCTURA",
      description: "Levantamiento y esqueleto de su edificación con precisión y máxima seguridad.",
      icon: "file-text",
    },
    {
      id: "acabados",
      title: "ACABADOS",
      description: "Transformamos espacios en bruto en lugares funcionales y estéticos.",
      icon: "paintbrush",
    },
  ]

  return NextResponse.json(services)
}
