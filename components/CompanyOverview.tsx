"use client"

import { companyData } from "@/lib/company-data"
import { useLanguage } from "@/lib/LanguageProvider"

export function CompanyOverview() {
  const { t, tx } = useLanguage()

  const values = companyData.values.map((v) => ({
    title: tx(`company.values.${v.title.toLowerCase()}.title`) ?? v.title,
    description: tx(`company.values.${v.title.toLowerCase()}.description`) ?? v.description,
  }))

  const categories = companyData.serviceCategories.map((c) => ({
    title: tx(`company.serviceCategories.${c.title.toLowerCase().replace(/\s+/g, "_")}.title`) ?? c.title,
    description: tx(`company.serviceCategories.${c.title.toLowerCase().replace(/\s+/g, "_")}.description`) ?? c.description,
    features: c.features.map((f, idx) => tx(`company.serviceCategories.${c.title.toLowerCase().replace(/\s+/g, "_")}.features.${idx}`) ?? f),
  }))

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Company Name */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">{t("company.name")}</h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">{t("company.description")}</p>
        </div>

        {/* Mission */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-4">{t("company.mission_title",)}</h3>
          <p className="text-gray-300 leading-relaxed">{t("company.mission")}</p>
        </div>

        {/* Values */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">{t("company.values_title")}</h3>
          <div className="space-y-4">
            {values.map((value, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold text-white mb-2">
                  <span className="text-green-500">{value.title}:</span> {value.description}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Services Overview */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">{t("company.services_overview_title")}</h3>
          <div className="space-y-8">
            {categories.map((category, index) => (
              <div key={index}>
                <h4 className="text-xl font-semibold text-green-500 mb-3">{category.title}</h4>
                {category.description && <p className="text-gray-300 mb-3 leading-relaxed">{category.description}</p>}
                {category.features.length > 0 && (
                  <ul className="space-y-1">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300">
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">{t("company.why_choose_us.title")}</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            {t("company.why_choose_us.description")} <span className="text-green-500 font-semibold">{t("company.why_choose_us.experience")}</span>
          </p>
          <p className="text-gray-300 leading-relaxed">{t("company.why_choose_us.cta")}</p>
        </div>
      </div>
    </section>
  )
}

export { CompanyOverview as default }
