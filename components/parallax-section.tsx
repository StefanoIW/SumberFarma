"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Image from "next/image"

interface ParallaxSectionProps {
  children: React.ReactNode
  imageUrl: string
  height?: string
  overlayOpacity?: number
}

export default function ParallaxSection({
  children,
  imageUrl,
  height = "500px",
  overlayOpacity = 0.7,
}: ParallaxSectionProps) {
  const [offsetY, setOffsetY] = useState(0)

  const handleScroll = () => {
    setOffsetY(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative overflow-hidden flex items-center justify-center" style={{ height }}>
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${offsetY * 0.5}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <Image src={imageUrl || "/placeholder.svg"} alt="Parallax Background" fill className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }}></div>
      <div className="relative z-10 container mx-auto px-4">{children}</div>
    </div>
  )
}
