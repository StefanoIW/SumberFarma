"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, X, ChevronRight, ChevronLeft } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface Manufacturer {
  id: string
  name: string
  description: string
  imageUrl: string
}

interface Product {
  id: number
  name: string
  genericName: string
  manufacturer: string
  category: string
  description: string
  composition: string
  indication: string
  dosage: string
  contraindication: string
  sideEffects: string
  packaging: string
  imageUrl: string
}

export default function ProductSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isImageDialogOpen, setIsImageDialogOpen] = useState(false)
  const [selectedManufacturer, setSelectedManufacturer] = useState<Manufacturer | null>(null)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const manufacturers: Manufacturer[] = [
    {
      id: "first-medipharma",
      name: "PT FIRST MEDIPHARMA",
      description:
        "PT First Medipharma adalah produsen obat generik dan bermerek dengan kualitas terjamin. Produk-produk mereka meliputi analgesik, antibiotik, antidiabetes, kardiovaskular, dan berbagai obat lainnya.",
      imageUrl: "/images/products/first-medipharma-1.jpeg",
    },
    {
      id: "zenith",
      name: "ZENIT PHARMACEUTICALS",
      description:
        "Zenit Pharmaceuticals adalah produsen obat-obatan inovatif untuk berbagai kebutuhan kesehatan. Produk-produk mereka meliputi kardiovaskular, analgesik, antibiotik, dan berbagai obat lainnya.",
      imageUrl: "/images/products/zenith.jpeg",
    },
    {
      id: "erela",
      name: "ERELA",
      description:
        "PT Erela adalah produsen obat dan suplemen kesehatan berkualitas. Produk-produk mereka meliputi antasida, antibiotik topikal, suplemen kalsium, dan berbagai obat lainnya.",
      imageUrl: "/images/products/erela.jpeg",
    },
    {
      id: "erlimpex",
      name: "ERLIMPEX",
      description:
        "Erlimpex adalah produsen obat-obatan berkualitas dengan berbagai produk untuk mengatasi berbagai kondisi kesehatan.",
      imageUrl: "/images/products/erlimpex.jpeg",
    },
    {
      id: "kalbe",
      name: "KALBE",
      description:
        "PT Kalbe Farma adalah salah satu perusahaan farmasi terbesar di Indonesia yang memproduksi berbagai jenis obat berkualitas tinggi. Produk-produk mereka meliputi Divoltar, Neuralgin, Danasone, dan berbagai obat lainnya.",
      imageUrl: "/images/products/kalbe.jpeg",
    },
    {
      id: "nulab",
      name: "PT NULAB",
      description:
        "PT Nulab Pharmaceutical Indonesia memproduksi berbagai obat berkualitas untuk berbagai kebutuhan kesehatan. Produk-produk mereka meliputi Flunarizine, Betahistine, Lansoprazole, dan berbagai obat lainnya.",
      imageUrl: "/images/products/nulab.jpeg",
    },
    {
      id: "sampharindo-perdana",
      name: "PT Sampharindo Perdana",
      description:
        "PT Sampharindo Perdana adalah produsen obat-obatan berkualitas dengan berbagai produk untuk mengatasi berbagai kondisi kesehatan. Produk-produk mereka meliputi Alerzin, Miracloven, Broadamox, dan berbagai obat lainnya.",
      imageUrl: "/images/products/sampharindo-perdana.jpeg",
    },
    {
      id: "ifars",
      name: "PT IFARS",
      description:
        "PT IFARS Pharmaceutical Laboratories adalah produsen obat-obatan berkualitas dengan berbagai produk untuk mengatasi berbagai kondisi kesehatan. Produk-produk mereka meliputi Selvim, Helixim, Yusimox, dan berbagai obat lainnya.",
      imageUrl: "/images/products/ifars.jpeg",
    },
    {
      id: "sejahtera-lestari",
      name: "PT SEJAHTERA LESTARI FARMA",
      description:
        "PT Sejahtera Lestari Farma adalah produsen obat-obatan berkualitas dengan berbagai produk untuk mengatasi berbagai kondisi kesehatan. Produk-produk mereka meliputi Dexamethasone, Amoxicillin, Paracetamol, dan berbagai obat lainnya.",
      imageUrl: "/images/products/sejahtera-lestari.jpeg",
    },
    {
      id: "exeltis",
      name: "PT EXELTIS",
      description:
        "PT Exeltis adalah produsen obat-obatan berkualitas dengan berbagai produk untuk mengatasi berbagai kondisi kesehatan. Produk-produk mereka meliputi Lansoprazole, Nufadex, Inamid, Gastrucid, dan berbagai obat lainnya.",
      imageUrl: "/images/products/exeltis.jpeg",
    },
    {
      id: "gratia-husada",
      name: "PT GRATIA HUSADA FARMA",
      description:
        "PT Gratia Husada Farma adalah produsen obat-obatan berkualitas dengan berbagai produk untuk mengatasi berbagai kondisi kesehatan. Produk-produk mereka meliputi Hufamag, Hufagripp, Anastan, dan berbagai obat lainnya.",
      imageUrl: "/images/products/gratia-husada.jpeg",
    },
    {
      id: "errita-pharma",
      name: "ERRITA PHARMA",
      description:
        "PT Errita Pharma adalah produsen obat-obatan berkualitas dengan berbagai produk untuk mengatasi berbagai kondisi kesehatan. Produk-produk mereka meliputi Etafen, Etaflox, Etabion, dan berbagai obat lainnya.",
      imageUrl: "/images/products/errita-pharma.jpeg",
    },
    {
      id: "novapharm",
      name: "NOVAPHARIN",
      description:
        "PT Novapharm adalah produsen obat-obatan dengan standar kualitas internasional. Produk-produk mereka meliputi antibiotik, analgesik, antijamur, dan berbagai obat lainnya.",
      imageUrl: "/images/products/novapharm.jpeg",
    },
    {
      id: "dexamedica",
      name: "DEXAMEDICA",
      description:
        "Dexamedica adalah produsen obat-obatan berkualitas dengan berbagai produk untuk mengatasi berbagai kondisi kesehatan.",
      imageUrl: "/images/products/dexamedica.jpeg",
    },
  ]

  const firstMedipharmaImages = [
    "/images/products/first-medipharma-1.jpeg",
    "/images/products/first-medipharma-2.jpeg",
    "/images/products/first-medipharma-3.jpeg",
    "/images/products/first-medipharma-4.jpeg",
    "/images/products/first-medipharma-5.jpeg",
  ]

  const filteredManufacturers = manufacturers.filter(
    (manufacturer) =>
      searchQuery === "" ||
      manufacturer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      manufacturer.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const openImageDialog = (manufacturer: Manufacturer) => {
    setSelectedManufacturer(manufacturer)
    setCurrentSlideIndex(0)
    setIsImageDialogOpen(true)
  }

  const nextSlide = () => {
    if (selectedManufacturer?.id === "first-medipharma") {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % firstMedipharmaImages.length)
    }
  }

  const prevSlide = () => {
    if (selectedManufacturer?.id === "first-medipharma") {
      setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + firstMedipharmaImages.length) % firstMedipharmaImages.length)
    }
  }

  return (
    <div className="w-full">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Produsen Farmasi</h3>

      {/* Search */}
      <div className="relative w-full mb-10">
        <input
          type="text"
          placeholder="Cari produsen farmasi..."
          className="w-full pl-12 pr-4 py-3 rounded-full border border-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-red-500" size={20} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredManufacturers.map((m) => (
          <div
            key={m.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border border-red-100 cursor-pointer"
          >
            <div className="relative h-48 overflow-hidden">
              {m.imageUrl ? (
                <Image
                  src={m.imageUrl || "/placeholder.svg"}
                  alt={`Produk ${m.name}`}
                  fill
                  className="object-cover object-center hover:scale-110 transition-transform duration-500"
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <div className="flex items-center justify-center h-full bg-gradient-to-r from-red-500 to-red-600">
                  <div className="text-white text-2xl font-bold">{m.name.charAt(0)}</div>
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">{m.name}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{m.description}</p>
              <button
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-xl transition-colors duration-300 flex items-center justify-center"
                onClick={() => openImageDialog(m)}
              >
                Lihat Produk <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredManufacturers.length === 0 && (
        <div className="text-center py-12">
          <div className="text-red-600 mb-4">
            <Search size={48} className="mx-auto" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Produsen Tidak Ditemukan</h3>
          <p className="text-gray-600">Maaf, kami tidak dapat menemukan produsen yang sesuai dengan pencarian Anda.</p>
        </div>
      )}

      {/* Image Dialog */}
      <Dialog open={isImageDialogOpen} onOpenChange={setIsImageDialogOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-2xl">
          <div className="relative">
            <div className="h-[70vh] bg-white flex items-center justify-center relative overflow-hidden">
              {selectedManufacturer?.id === "first-medipharma" ? (
                <Image
                  src={firstMedipharmaImages[currentSlideIndex] || "/placeholder.svg"}
                  alt={`Produk ${selectedManufacturer?.name}`}
                  fill
                  className="object-contain"
                />
              ) : (
                <Image
                  src={selectedManufacturer?.imageUrl || "/placeholder.svg"}
                  alt={`Produk ${selectedManufacturer?.name}`}
                  fill
                  className="object-contain"
                />
              )}

              {selectedManufacturer?.id === "first-medipharma" && (
                <>
                  <button
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-3 rounded-full hover:bg-white/40 transition-colors z-10"
                    onClick={prevSlide}
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-3 rounded-full hover:bg-white/40 transition-colors z-10"
                    onClick={nextSlide}
                  >
                    <ChevronRight size={24} />
                  </button>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {firstMedipharmaImages.map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${currentSlideIndex === index ? "bg-red-600" : "bg-white/50"}`}
                        onClick={() => setCurrentSlideIndex(index)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            <button
              className="absolute top-4 right-4 bg-white/20 text-white p-2 rounded-full hover:bg-white/40 transition-colors z-10"
              onClick={() => setIsImageDialogOpen(false)}
            >
              <X size={20} />
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h2 className="text-2xl font-bold text-white mb-2">{selectedManufacturer?.name}</h2>
              <p className="text-white/90">{selectedManufacturer?.description}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
