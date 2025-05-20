"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"

interface Manufacturer {
  id: string
  name: string
  description: string
  imageUrl: string
}

interface ManufacturerDisplayProps {
  manufacturer: Manufacturer
  onClick: (imageUrl: string, manufacturer: Manufacturer) => void
}

export default function ManufacturerDisplay({ manufacturer, onClick }: ManufacturerDisplayProps) {
  return (
    <div className="bg-gradient-to-r from-red-50 to-white p-6 rounded-xl mb-8 border border-red-100">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{manufacturer.name}</h3>
      <p className="text-gray-600 mb-4">{manufacturer.description}</p>
      {manufacturer.imageUrl && (
        <div
          className="relative h-64 w-full overflow-hidden rounded-lg cursor-pointer group"
          onClick={() => onClick(manufacturer.imageUrl, manufacturer)}
        >
          <Image
            src={manufacturer.imageUrl || "/placeholder.svg"}
            alt={`Produk ${manufacturer.name}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-white/80 px-4 py-2 rounded-lg">
              <p className="text-gray-800 font-medium">Klik untuk melihat detail</p>
            </div>
          </div>
        </div>
      )}
      <div className="mt-4">
        <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-xl transition-colors duration-300 flex items-center justify-center">
          Lihat Semua Produk <ChevronRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  )
}
