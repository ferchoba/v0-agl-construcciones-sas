import type { HeroData, Service, Statistic, ContactInfo } from "@/types"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "/api"

export async function getHeroData(): Promise<HeroData> {
  const response = await fetch(`${API_BASE_URL}/hero`)
  if (!response.ok) {
    throw new Error("Failed to fetch hero data")
  }
  return response.json()
}

export async function getServices(): Promise<Service[]> {
  const response = await fetch(`${API_BASE_URL}/services`)
  if (!response.ok) {
    throw new Error("Failed to fetch services")
  }
  return response.json()
}

export async function getStatistics(): Promise<Statistic[]> {
  const response = await fetch(`${API_BASE_URL}/statistics`)
  if (!response.ok) {
    throw new Error("Failed to fetch statistics")
  }
  return response.json()
}

export async function getContactInfo(): Promise<ContactInfo> {
  const response = await fetch(`${API_BASE_URL}/contact`)
  if (!response.ok) {
    throw new Error("Failed to fetch contact info")
  }
  return response.json()
}

export async function submitQuoteRequest(data: {
  name: string
  email: string
  phone: string
  message: string
}): Promise<{ success: boolean; message: string }> {
  const response = await fetch(`${API_BASE_URL}/quote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error("Failed to submit quote request")
  }

  return response.json()
}
