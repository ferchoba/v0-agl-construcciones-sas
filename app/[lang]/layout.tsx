import type React from 'react'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import es from '@/messages/es.json'
import en from '@/messages/en.json'
import { LanguageProvider } from '@/lib/LanguageProvider'

const SUPPORTED = ['es','en'] as const
export type Lang = (typeof SUPPORTED)[number]

export function generateStaticParams() {
  return SUPPORTED.map((l) => ({ lang: l }))
}

export function generateMetadata({ params }: { params: { lang: Lang } }): Metadata {
  const { lang } = params
  const other = lang === 'es' ? 'en' : 'es'
  const M = lang === 'es' ? es : en
  return {
    title: `AGL Construcciones SAS` ,
    description: M.hero?.description ?? 'Construction and remodeling services',
    alternates: {
      languages: {
        es: `/es`,
        en: `/en`,
      },
    },
  }
}

export default function LangLayout({ params, children }: { params: { lang: Lang }, children: React.ReactNode }) {
  const { lang } = params
  if (!SUPPORTED.includes(lang)) {
    notFound()
  }
  return (
    <LanguageProvider initialLocale={lang}>
      {children}
    </LanguageProvider>
  )
}

