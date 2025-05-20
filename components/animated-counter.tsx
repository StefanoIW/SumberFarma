"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface CounterProps {
  end: number
  duration?: number
  label: string
  icon: React.ReactNode
}

export default function AnimatedCounter({ end, duration = 2000, label, icon }: CounterProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const countRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    if (!inView) return

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp
      }

      const progress = timestamp - startTimeRef.current
      const progressPercent = Math.min(progress / duration, 1)

      // Easing function for smoother animation
      const easeOutQuad = (t: number) => t * (2 - t)
      const easedProgress = easeOutQuad(progressPercent)

      countRef.current = Math.floor(easedProgress * end)
      setCount(countRef.current)

      if (progressPercent < 1) {
        rafRef.current = requestAnimationFrame(animate)
      }
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [inView, end, duration])

  return (
    <div
      ref={ref}
      className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-white/20"
    >
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white">{icon}</div>
      </div>
      <div className="text-4xl font-bold text-white mb-3">{count}+</div>
      <div className="text-white/90 font-medium text-lg">{label}</div>
    </div>
  )
}
