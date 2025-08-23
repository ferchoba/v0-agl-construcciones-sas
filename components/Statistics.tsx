"use client"

import { useLanguage } from "@/lib/LanguageProvider"

interface StatisticsProps {
  className?: string
}

export default function Statistics({ className = "" }: StatisticsProps) {
  const { t } = useLanguage()

  const statistics = [
    {
      value: "10+",
      label: t("statistics.experience"),
    },
    {
      value: "100%",
      label: t("statistics.quality"),
    },
    {
      value: "24/7",
      label: t("statistics.team"),
    },
    {
      value: "1 Año",
      label: t("statistics.warranty"),
    },
  ]

  return (
    <section className={`py-20 px-4 bg-gray-900 ${className}`}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">{t("statistics.title")}</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">{stat.value}</div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
