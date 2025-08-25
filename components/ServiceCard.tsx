import type { Service } from "@/types/services"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/LanguageProvider"

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { t, locale } = useLanguage()
  return (
    <Card className="bg-card border-border hover:border-primary transition-colors">
      <CardContent className="p-0">
        <div className="aspect-[5/3] relative bg-muted rounded-t-lg overflow-hidden">
          {service.image ? (
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-muted-foreground">
                <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                <p className="text-sm">Imagen de Referencia</p>
              </div>
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>

          <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>

          {service.features && (
            <ul className="text-muted-foreground text-xs mb-6 space-y-1">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          )}

          <div className="flex gap-3">
            <Link href={`/${locale}/servicios/${service.id}`} className="flex-1">
              <Button className="bg-primary hover:bg-[#212529] text-primary-foreground w-full" size="sm">
                {t("services.read_more")}
              </Button>
            </Link>
            <Link href={`/${locale}/cotizacion`} className="flex-1">
              <Button
                variant="outline"
                className="border-border text-foreground hover:bg-muted w-full bg-transparent"
                size="sm"
              >
                {t("services.request_quote")}
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
