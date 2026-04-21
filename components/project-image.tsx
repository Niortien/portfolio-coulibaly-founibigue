"use client"

import Image from "next/image"

interface ProjectImageProps {
  src: string
  alt: string
  title: string
}

export const ProjectImage = ({ src, alt, title }: ProjectImageProps) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget
    const parent = target.parentElement
    if (parent) {
      parent.innerHTML = `
        <div class="w-full h-full flex items-center justify-center text-6xl lg:text-7xl from-primary to-primary-glow">
          ${title.charAt(0)}
        </div>
      `
    }
  }

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted/60 to-muted/20 p-4">
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        className="w-full h-full object-contain hover:scale-105 transition-transform duration-300 drop-shadow-md"
        onError={handleImageError}
      />
    </div>
  )
}
