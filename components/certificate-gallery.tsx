"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ZoomIn, X } from "lucide-react"

interface CertificateProps {
  title: string
  description: string
  imageUrl: string
  issuer: string
  validUntil: string
}

export default function CertificateGallery() {
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateProps | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Daftar semua sertifikat
  const certificates: CertificateProps[] = [
    {
      title: "Sertifikat Cara Distribusi Obat yang Baik (CDOB)",
      description: "Sertifikat CDOB yang dikeluarkan oleh BPOM RI",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zByoDMj8FqyrgLIOj10rFoCzawuU5v.png",
      issuer: "Badan Pengawas Obat dan Makanan (BPOM)",
      validUntil: "05 Agustus 2024",
    },
    {
      title: "Lampiran Sertifikat CDOB",
      description: "Detail teknis Sertifikat CDOB dengan nomor CDOB1609/R4-5183/08/2024",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yYgwII24GCR6RNWrr5Kt4gft1mHveB.png",
      issuer: "Badan Pengawas Obat dan Makanan (BPOM)",
      validUntil: "11 Oktober 2029",
    },
    {
      title: "Lampiran Izin Pedagang Besar Farmasi",
      description: "Data teknis izin PBF PT Sumber Farma Semarang",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8hIvDjCmfx4u3jdZFlO4Ypc5mK3FEc.png",
      issuer: "Pemerintah Republik Indonesia",
      validUntil: "12 April 2028",
    },
    {
      title: "Surat Izin Praktik Apoteker",
      description: "SIPA untuk Apoteker Penanggung Jawab Anni Dwi Rahayu, S.Farm",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YjCZx1HKIOvxp9JmYcSN0QcT6cYuUM.png",
      issuer: "Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu Kota Semarang",
      validUntil: "19 Agustus 2026",
    },
    {
      title: "Nomor Pokok Wajib Pajak (NPWP)",
      description: "Kartu NPWP PT Sumber Farma Semarang",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xwrg3yaARS58r51mV3Ag5IRLVtxaCH.png",
      issuer: "Direktorat Jenderal Pajak",
      validUntil: "Tidak ada masa berlaku",
    },
    {
      title: "Perizinan Berusaha Berbasis Risiko",
      description: "Nomor Induk Berusaha (NIB) dari Pemerintah Republik Indonesia",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iPQtvnzNsaQD4ZqGux38bmYA4lihZy.png",
      issuer: "Badan Koordinasi Penanaman Modal",
      validUntil: "26 Mei 2023",
    },
    {
      title: "Lampiran Perizinan Berusaha",
      description: "Daftar bidang usaha dengan kode KBLI",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UnKCcNl5d1g3vtRTJfGjuVj883oHqz.png",
      issuer: "Badan Koordinasi Penanaman Modal",
      validUntil: "26 Mei 2023",
    },
    {
      title: "Izin Usaha Pedagang Besar Farmasi",
      description: "Izin untuk melakukan kegiatan pengadaan, penyimpanan, dan penyaluran obat",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VYW0c0NnpPcrRyC8Me2fHevFq5e8xe.png",
      issuer: "Kementerian Kesehatan & Badan Koordinasi Penanaman Modal",
      validUntil: "12 Juni 2023",
    },
    {
      title: "Lampiran Izin PBF",
      description: "Persyaratan dan kewajiban Pedagang Besar Farmasi",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EY0LCmkXDpiGWIk5FTgiW5dIjxHquM.png",
      issuer: "Kementerian Kesehatan",
      validUntil: "12 Juni 2023",
    },
  ]

  const openCertificateDetail = (certificate: CertificateProps) => {
    setSelectedCertificate(certificate)
    setIsDialogOpen(true)
  }

  return (
    <div className="w-full">
      {/* Grid Layout untuk Sertifikat */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
            onClick={() => openCertificateDetail(certificate)}
          >
            <div className="relative h-64 w-full">
              <Image
                src={certificate.imageUrl || "/placeholder.svg"}
                alt={certificate.title}
                fill
                className="object-contain"
              />
              <div className="absolute top-2 right-2 bg-white/90 p-2 rounded-full shadow-lg">
                <ZoomIn size={18} className="text-red-600" />
              </div>
            </div>
            <div className="p-4 border-t border-gray-100">
              <h3 className="font-bold text-gray-800 text-lg mb-1 line-clamp-1">{certificate.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-2">{certificate.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dialog untuk Detail Sertifikat */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden rounded-2xl">
          {selectedCertificate && (
            <div className="relative">
              <button
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black/70 transition"
                onClick={() => setIsDialogOpen(false)}
              >
                <X size={20} />
              </button>
              <div className="relative h-[80vh] w-full">
                <Image
                  src={selectedCertificate.imageUrl || "/placeholder.svg"}
                  alt={selectedCertificate.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <h2 className="text-2xl font-bold text-white mb-2">{selectedCertificate.title}</h2>
                <p className="text-white/80 mb-4">{selectedCertificate.description}</p>
                <div className="grid grid-cols-2 gap-4 text-white/90">
                  <div>
                    <h4 className="text-sm font-semibold text-white/70">Dikeluarkan Oleh</h4>
                    <p className="text-white">{selectedCertificate.issuer}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white/70">Masa Berlaku</h4>
                    <p className="text-white">{selectedCertificate.validUntil}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
