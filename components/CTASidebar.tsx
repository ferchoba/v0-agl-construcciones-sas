import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/LanguageProvider"

interface CTASidebarProps {
  title: string
  description: string
  benefits: string[]
}

export function CTASidebar({ title, description, benefits }: CTASidebarProps) {
  const { t, locale } = useLanguage()
  return (
    <div className="lg:sticky lg:top-8">
      <Card className="bg-gray-800 border-gray-700 p-6 mb-8">
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        <p className="text-gray-300 mb-6 text-sm leading-relaxed">{description}</p>
        <div className="space-y-3 mb-6">
          <Link href={`/${locale}/cotizacion`}>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">{t("cta_sidebar.button_quote")}</Button>
          </Link>
          <Link href={`/${locale}/contacto`}>
            <Button variant="outline" className="w-full border-gray-600 text-white hover:bg-gray-700 bg-transparent">
              {t("cta_sidebar.button_contact")}
            </Button>
          </Link>
        </div>
      </Card>

      <Card className="bg-gray-800 border-gray-700 p-6">
        <h4 className="text-lg font-semibold text-white mb-4">{t("cta_sidebar.benefits_title")}</h4>
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center text-gray-300 text-sm">
              <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
              {benefit}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}
