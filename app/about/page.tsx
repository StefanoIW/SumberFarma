import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Shield, Award, Users, Truck } from "lucide-react"
import Navbar from "@/components/navbar"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-emerald-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang PT. Sumber Farma Semarang</h1>
            <p className="text-xl mb-8">
              Distributor farmasi terkemuka yang berkomitmen untuk menyediakan produk farmasi berkualitas tinggi dengan
              harga terjangkau.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Sejarah Perusahaan</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                PT. Sumber Farma Semarang didirikan pada tahun 2018 dengan tujuan untuk menjadi distributor farmasi
                terkemuka yang menyediakan obat-obatan berkualitas dengan harga terjangkau bagi masyarakat Indonesia.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sejak awal berdiri, kami telah berkomitmen untuk menjaga kualitas produk dan layanan dengan menerapkan
                standar Cara Distribusi Obat yang Baik (CDOB) sesuai dengan regulasi dari Badan Pengawas Obat dan
                Makanan (BPOM).
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Saat ini, PT. Sumber Farma Semarang telah menjadi mitra tepercaya bagi ratusan apotek, rumah sakit, dan
                fasilitas kesehatan di seluruh Indonesia, khususnya di wilayah Jawa Tengah.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-100 rounded-lg rotate-3"></div>
              <Image
                src="/images/about-image.png"
                alt="PT. Sumber Farma Semarang"
                width={600}
                height={400}
                className="relative rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Visi & Misi</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-emerald-600">
              <h3 className="text-2xl font-bold text-emerald-700 mb-6">Visi</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Membantu Pemerintah Dalam Mensukeskan Terciptanya Masyarakat Yang Sehat Serta Menciptakan Lapangan
                Pekerjaan guna menekan Angka Pengangguran
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-emerald-600">
              <h3 className="text-2xl font-bold text-emerald-700 mb-6">Misi</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Menyediakan Obat-Obatan Bermutu Baik, Dengan Harga Yang Terjangkau masyarakat Yang Diproduksi oleh
                Pabrik-Pabrik Yang Telah Melaksanakan CPOB Serta Layanan Kepuasan Konsumen Dengan Tertib Administrasi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nilai-Nilai Kami</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Nilai-nilai yang kami junjung tinggi dalam menjalankan bisnis dan melayani masyarakat.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Integritas</h4>
              <p className="text-gray-600">
                Kami menjalankan bisnis dengan kejujuran, transparansi, dan etika yang tinggi.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Kualitas</h4>
              <p className="text-gray-600">Kami berkomitmen untuk menyediakan produk farmasi berkualitas tinggi.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Kepedulian</h4>
              <p className="text-gray-600">Kami peduli terhadap kesehatan dan kesejahteraan masyarakat Indonesia.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-emerald-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Keandalan</h4>
              <p className="text-gray-600">
                Kami dapat diandalkan dalam menyediakan produk dan layanan yang konsisten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Tertarik Bekerja Sama Dengan Kami?</h2>
            <p className="text-xl mb-8">Hubungi kami untuk informasi lebih lanjut tentang produk dan layanan kami.</p>
            <Link
              href="/contact"
              className="bg-white text-emerald-700 px-8 py-4 rounded-md font-medium inline-flex items-center hover:bg-gray-100 transition"
            >
              Hubungi Kami <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} PT. Sumber Farma Semarang. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
