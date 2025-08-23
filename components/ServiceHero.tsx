import Image from "next/image"

interface ServiceHeroProps {
  title: string
  description: string
  heroImage: string
  heroImageAlt: string
}

export function ServiceHero({ title, description, heroImage, heroImageAlt }: ServiceHeroProps) {
  return (
    <div className="mb-12">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{title}</h1>
      <p className="text-lg text-gray-300 mb-8 leading-relaxed">{description}</p>
      <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
        <Image src={heroImage || "/placeholder.svg"} alt={heroImageAlt} fill className="object-cover" priority />
      </div>
    </div>
  )
}
