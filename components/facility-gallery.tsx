"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export default function FacilityGallery() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-16%20at%2012.19.59_867c8c78.jpg-aZzVU3ecKw7PpBLzUvjOvba1WDRE2x.jpeg",
      alt: "Gudang PT. Sumber Farma - Area Penyimpanan Produk",
      description: "Area penyimpanan produk farmasi dengan sistem palet standar CDOB",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-16%20at%2012.20.19_0ad725cc.jpg-ula01wOSQaX2CU5NDhxCWknB3eI45L.jpeg",
      alt: "Gudang PT. Sumber Farma - Lorong Penyimpanan",
      description: "Lorong penyimpanan dengan rak-rak terorganisir untuk memudahkan akses",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-16%20at%2012.20.31_3d9e81da.jpg-pJigfGLL3uIMG1Vj0ixOrWN3m0fffO.jpeg",
      alt: "Gudang PT. Sumber Farma - Area Distribusi",
      description: "Area distribusi dengan sistem penyimpanan yang teratur dan bersih",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-16%20at%2012.20.44_5a96f484.jpg-3VOtsXuIjuxgT6TJNawuoxOseHPHI2.jpeg",
      alt: "Gudang PT. Sumber Farma - Produk Tersusun",
      description: "Produk farmasi tersusun rapi pada rak penyimpanan",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-16%20at%2012.17.52_b18a84ef.jpg-3wVvdU6aUGuLblSNU19eeCa6a6mN2N.jpeg",
      alt: "Kantor PT. Sumber Farma - Tampak Depan",
      description: "Tampak depan kantor dan gudang PT. Sumber Farma Semarang",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-16%20at%2012.17.29_d4267b95.jpg-dLYujQaHnZh7cCrs6h6u6X0xhl7Azb.jpeg",
      alt: "Kantor PT. Sumber Farma - Area Parkir",
      description: "Area parkir dan pintu masuk kantor PT. Sumber Farma Semarang",
    },
  ]

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setIsDialogOpen(true)
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
            onClick={() => openLightbox(index)}
          >
            <div className="relative h-64 w-full">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <p className="text-white text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden rounded-2xl">
          <div className="relative">
            <button
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black/70 transition"
              onClick={() => setIsDialogOpen(false)}
            >
              <X size={20} />
            </button>

            <div className="relative h-[80vh] w-full">
              <Image
                src={images[currentImage].src || "/placeholder.svg"}
                alt={images[currentImage].alt}
                fill
                className="object-contain"
              />
            </div>

            <button
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black/70 transition"
              onClick={prevImage}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black/70 transition"
              onClick={nextImage}
            >
              <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
              <h2 className="text-xl font-bold text-white mb-2">{images[currentImage].alt}</h2>
              <p className="text-white/80">{images[currentImage].description}</p>
              <div className="mt-4 flex justify-center space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImage ? "bg-white w-6" : "bg-white/50"
                    }`}
                    onClick={() => setCurrentImage(index)}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
