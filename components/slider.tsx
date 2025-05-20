"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface SlideProps {
  bgColor: string
  title: string
  description: string
}

export default function Slider() {
  const slides: SlideProps[] = [
    {
      bgColor: "from-red-600 to-red-800",
      title: "Selamat Datang di PT. Sumber Farma Semarang",
      description: "Distributor Farmasi Terpercaya dengan Sertifikasi CDOB dari BPOM",
    },
    {
      bgColor: "from-red-700 to-red-900",
      title: "Produk Farmasi Berkualitas",
      description: "Menyediakan Obat-Obatan Bermutu Baik dengan Harga Terjangkau",
    },
    {
      bgColor: "from-red-800 to-red-600",
      title: "Layanan Distribusi Profesional",
      description: "Melayani Kebutuhan Farmasi di Seluruh Indonesia",
    },
    {
      bgColor: "from-red-900 to-red-700",
      title: "Sertifikasi dan Legalitas Lengkap",
      description: "Memiliki Izin Resmi dan Sertifikasi dari Badan Terkait",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToSlide = (slideIndex: number) => {
    if (isAnimating || slideIndex === currentIndex) return
    setIsAnimating(true)
    setCurrentIndex(slideIndex)
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      nextSlide()
    }, 5000)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [currentIndex])

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className={`relative min-w-full h-full bg-gradient-to-br ${slide.bgColor}`}>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
              <div
                className={`transition-all duration-700 delay-100 transform ${
                  index === currentIndex ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">{slide.title}</h2>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl text-center">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -translate-y-1/2 left-5 z-30 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-5 z-30 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              slideIndex === currentIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
            }`}
          ></button>
        ))}
      </div>
    </div>
  )
}
