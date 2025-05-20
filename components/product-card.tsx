"use client"

import Image from "next/image"
import { Info } from "lucide-react"

interface Product {
  id: number
  name: string
  genericName: string
  manufacturer: string
  category: string
  description: string
  imageUrl: string
}

interface ProductCardProps {
  product: Product
  onClick: (product: Product) => void
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100"
      onClick={() => onClick(product)}
    >
      <div className="relative h-48 bg-gradient-to-r from-red-50 to-red-100 overflow-hidden">
        <Image
          src={product.imageUrl || "/placeholder.svg?height=200&width=300"}
          alt={product.name}
          fill
          className="object-cover hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-white/90 p-2 rounded-full shadow-sm">
          <Info size={16} className="text-red-600" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{product.genericName}</p>
        <p className="text-xs text-gray-600 line-clamp-2 mb-3">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs px-2 py-1 bg-red-50 text-red-600 rounded-full">{product.category}</span>
        </div>
      </div>
    </div>
  )
}
