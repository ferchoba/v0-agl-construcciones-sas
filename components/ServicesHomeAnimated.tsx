"use client"

import * as React from "react"
import es from "@/messages/es.json"
import en from "@/messages/en.json"
import { HoverSlider, HoverSliderImage, HoverSliderImageWrap, TextStaggerHover } from "@/components/ui/animated-slideshow"

interface Props {
  lang: 'es'|'en'
}

const SLIDES_BASE = [
  {
    id: "slide-1",
    key: "demoliciones",
    imageUrl: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756200991/Demoliciones_rzkxdc.jpg",
  },
  {
    id: "slide-2",
    key: "cimentacion",
    imageUrl: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756201010/Cimentacion_qidhow.jpg",
  },
  {
    id: "slide-6",
    key: "estructura",
    imageUrl: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756201022/estructura_ic4vil.jpg",
  },
  {
    id: "slide-3",
    key: "mamposteria",
    imageUrl: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756201067/mamposteria_bioxul.jpg",
  },
  {
    id: "slide-4",
    key: "panetes",
    imageUrl: "https://res.cloudinary.com/dq5joejf7/image/upload/v1756201066/Panete_mejor_yunely.jpg",
  },
]

export default function ServicesHomeAnimated({ lang }: Props){
  const msgs = lang === 'es' ? es : en
  // obtener títulos traducidos desde services.list o services_home
  const t = (key: string) =>
    (msgs as any)?.services?.list?.[key]?.title || (msgs as any)?.services_home?.[key]?.title || key

  const SLIDES = SLIDES_BASE.map((s) => ({
    ...s,
    title: t(s.key)
  }))

  return (
    <HoverSlider className="py-12 md:py-16 bg-background text-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <h3 className="mb-6 text-primary text-xs font-medium uppercase tracking-wide">
          {lang==='es'? '/ nuestros servicios' : '/ our services'}
        </h3>
        <div className="flex flex-wrap items-center justify-between gap-6 md:gap-12">
          <div className="flex flex-col space-y-2 md:space-y-3 lg:space-y-4">
            {SLIDES.map((slide, index) => (
              <TextStaggerHover
                key={slide.id}
                index={index}
                className="cursor-pointer text-3xl md:text-4xl lg:text-4xl font-bold uppercase tracking-tight"
                text={slide.title}
              />
            ))}
          </div>
          <div className="flex-1 min-w-[260px]">
            <HoverSliderImageWrap>
              {SLIDES.map((slide, index) => (
                <div key={slide.id}>
                  <HoverSliderImage
                    index={index}
                    imageUrl={slide.imageUrl}
                    src={slide.imageUrl}
                    alt={slide.title}
                    className="size-full max-h-96 w-full object-cover rounded-md shadow"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              ))}
            </HoverSliderImageWrap>
          </div>
        </div>
      </div>
    </HoverSlider>
  )
}

