import useSWR from "swr"
import type { HeroData, Service, Statistic, ContactInfo } from "@/types"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function useHeroData() {
  const { data, error, isLoading } = useSWR<HeroData>("/api/hero", fetcher)

  return {
    heroData: data,
    isLoading,
    isError: error,
  }
}

export function useServices() {
  const { data, error, isLoading } = useSWR<Service[]>("/api/services", fetcher)

  return {
    services: data,
    isLoading,
    isError: error,
  }
}

export function useStatistics() {
  const { data, error, isLoading } = useSWR<Statistic[]>("/api/statistics", fetcher)

  return {
    statistics: data,
    isLoading,
    isError: error,
  }
}

export function useContactInfo() {
  const { data, error, isLoading } = useSWR<ContactInfo>("/api/contact", fetcher)

  return {
    contactInfo: data,
    isLoading,
    isError: error,
  }
}
