"use client"

import { companyData } from "@/lib/company-data"
import { useLanguage } from "@/lib/LanguageProvider"

export function CompanyOverview() {
  const { t, tx } = useLanguage()

  const values = companyData.values.map((v) => ({
    title: tx(`company.values.${v.title.toLowerCase().replace(/\s+/g, "_")}.title`) ?? v.title,
    description: tx(`company.values.${v.title.toLowerCase().replace(/\s+/g, "_")}.description`) ?? v.description,
  }))

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Company Name */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">{t("company.name")}</h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto text-justify">{t("company.description")}</p>
        </div>

        {/* Mission */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">{t("company.mission_title",)}</h3>
          <p className="text-muted-foreground leading-relaxed text-justify">{t("company.mission")}</p>
        </div>

        {/* Vision */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">{t("company.vision_title")}</h3>
          <p className="text-muted-foreground leading-relaxed text-justify">{t("company.vision")}</p>
        </div>

        {/* Values */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6">{t("company.values_title")}</h3>
          <div className="space-y-4">
            {values.map((value, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  <span className="text-primary">{value.title}:</span> {value.description}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-4">{t("company.why_choose_us.title")}</h3>
          <p className="text-muted-foreground leading-relaxed mb-4 text-justify">
            {t("company.why_choose_us.description")} <span className="text-primary font-semibold">{t("company.why_choose_us.experience")}</span>
          </p>
          <p className="text-muted-foreground leading-relaxed text-justify">{t("company.why_choose_us.cta")}</p>
        </div>
      </div>
    </section>
  )
}

export { CompanyOverview as default }
