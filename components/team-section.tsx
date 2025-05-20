"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"

export default function TeamSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <section className="py-20 bg-gradient-to-br from-red-600 via-red-500 to-red-700 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Tim Profesional Kami</h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          <p className="text-white/90 mt-6 max-w-3xl mx-auto text-lg">
            Tim kami terdiri dari profesional berpengalaman yang berkomitmen untuk memberikan layanan terbaik dalam
            distribusi produk farmasi berkualitas.
          </p>
          <p className="text-white/90 mt-4 max-w-3xl mx-auto text-lg font-medium">
            Kami juga tergabung dalam GP Farmasi Kota Semarang dan GP Farmasi Provinsi Jawa Tengah.
          </p>
        </div>

        <div
          className="relative overflow-hidden rounded-2xl shadow-2xl mb-12 cursor-pointer group"
          onClick={() => setIsDialogOpen(true)}
        >
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/images/team-photo.jpeg"
              alt="Tim PT. Sumber Farma Semarang"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-6">
                <p className="text-white text-lg font-medium">Klik untuk melihat lebih detail</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition text-center transform hover:scale-105 duration-300 border border-white/20">
            <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">Sanyoto Wibowo</h4>
            <p className="text-red-200 font-medium mb-4">Direktur</p>
            <p className="text-white/80">
              Memimpin perusahaan dengan visi untuk menyediakan produk farmasi berkualitas tinggi dengan harga
              terjangkau bagi masyarakat Indonesia.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition text-center transform hover:scale-105 duration-300 border border-white/20">
            <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">Apt. Anni Dwi Rahayu, S.Farm</h4>
            <p className="text-red-200 font-medium mb-4">Apoteker Penanggung Jawab</p>
            <p className="text-white/80">
              Memastikan kepatuhan terhadap standar CDOB dan regulasi farmasi, serta mengawasi kualitas produk yang
              didistribusikan.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition text-center transform hover:scale-105 duration-300 border border-white/20">
            <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">Tim Operasional</h4>
            <p className="text-red-200 font-medium mb-4">Distribusi & Logistik</p>
            <p className="text-white/80">
              Mengelola distribusi produk farmasi ke seluruh Indonesia dengan efisien dan memastikan produk sampai dalam
              kondisi optimal.
            </p>
          </div>
        </div>

        {/* Team Photo Dialog */}
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
                  src="/images/team-photo.jpeg"
                  alt="Tim PT. Sumber Farma Semarang"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <h2 className="text-2xl font-bold text-white mb-2">Tim PT. Sumber Farma Semarang</h2>
                <p className="text-white/80 mb-4">
                  Tim profesional kami yang berdedikasi untuk memberikan layanan distribusi farmasi terbaik di
                  Indonesia.
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
