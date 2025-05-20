"use client"

import { useEffect, useState } from "react"

interface Shape {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  rotation: number
  speed: number
  type: "circle" | "square" | "triangle" | "cross"
}

export default function FloatingShapes() {
  const [shapes, setShapes] = useState<Shape[]>([])

  useEffect(() => {
    // Generate random shapes
    const newShapes: Shape[] = []
    const shapeTypes: ("circle" | "square" | "triangle" | "cross")[] = ["circle", "square", "triangle", "cross"]

    for (let i = 0; i < 15; i++) {
      newShapes.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 60 + 20,
        opacity: Math.random() * 0.3 + 0.1,
        rotation: Math.random() * 360,
        speed: Math.random() * 0.5 + 0.1,
        type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
      })
    }

    setShapes(newShapes)

    // Animation loop
    let animationFrameId: number
    let lastTime = 0

    const animate = (time: number) => {
      if (lastTime === 0) {
        lastTime = time
      }

      const deltaTime = time - lastTime
      lastTime = time

      setShapes((prevShapes) =>
        prevShapes.map((shape) => {
          let newY = shape.y + shape.speed * (deltaTime / 100)
          if (newY > 120) {
            newY = -20
          }

          return {
            ...shape,
            y: newY,
            rotation: (shape.rotation + deltaTime / 100) % 360,
          }
        }),
      )

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const renderShape = (shape: Shape) => {
    const style = {
      left: `${shape.x}%`,
      top: `${shape.y}%`,
      width: `${shape.size}px`,
      height: `${shape.size}px`,
      opacity: shape.opacity,
      transform: `rotate(${shape.rotation}deg)`,
    }

    switch (shape.type) {
      case "circle":
        return <div key={shape.id} className="absolute rounded-full border-2 border-white" style={style}></div>
      case "square":
        return <div key={shape.id} className="absolute border-2 border-white" style={style}></div>
      case "triangle":
        return (
          <div
            key={shape.id}
            className="absolute"
            style={{
              ...style,
              width: 0,
              height: 0,
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid rgba(255, 255, 255, ${shape.opacity})`,
              backgroundColor: "transparent",
            }}
          ></div>
        )
      case "cross":
        return (
          <div key={shape.id} className="absolute" style={style}>
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-white"></div>
            <div className="absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 bg-white"></div>
          </div>
        )
      default:
        return null
    }
  }

  return <div className="absolute inset-0 overflow-hidden pointer-events-none">{shapes.map(renderShape)}</div>
}
