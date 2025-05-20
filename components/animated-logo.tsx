"use client"

import { useEffect, useState } from "react"

export default function AnimatedLogo() {
  const [isVisible, setIsVisible] = useState(false)
  const [textIndex, setTextIndex] = useState(0)

  const texts = [
    "Distributor Farmasi Terpercaya",
    "Bersertifikasi CDOB dari BPOM",
    "Melayani Kebutuhan Farmasi di Indonesia",
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)

    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length)
    }, 3000)

    return () => {
      clearTimeout(timer)
      clearInterval(textInterval)
    }
  }, [texts.length])

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`relative w-48 h-48 md:w-64 md:h-64 mb-8 transform transition-all duration-1000 ${
          isVisible ? "scale-100 opacity-100 rotate-0" : "scale-50 opacity-0 rotate-180"
        }`}
      >
        <img src="/images/logo.png" alt="PT. Sumber Farma Semarang Logo" className="w-full h-full object-contain" />
      </div>
      <h1
        className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 delay-300 text-center ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        PT. SUMBER FARMA
      </h1>
      <div className="h-16 overflow-hidden relative">
        {texts.map((text, index) => (
          <p
            key={index}
            className={`text-xl md:text-2xl text-white/90 max-w-2xl text-center absolute left-0 right-0 transition-all duration-500 ${
              index === textIndex
                ? "translate-y-0 opacity-100"
                : index === (textIndex - 1 + texts.length) % texts.length
                  ? "-translate-y-16 opacity-0"
                  : "translate-y-16 opacity-0"
            }`}
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  )
}
