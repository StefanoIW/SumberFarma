"use client"

import ProductCard from "./product-card"

interface Product {
  id: number
  name: string
  genericName: string
  manufacturer: string
  category: string
  description: string
  imageUrl: string
}

interface ProductGridProps {
  products: Product[]
  onProductClick: (product: Product) => void
}

export default function ProductGrid({ products, onProductClick }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Produk Tidak Ditemukan</h3>
        <p className="text-gray-600">
          Maaf, kami tidak dapat menemukan produk yang sesuai dengan kriteria pencarian Anda.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onClick={onProductClick} />
      ))}
    </div>
  )
}
