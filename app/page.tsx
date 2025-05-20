import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Award, Truck, Building, ChevronRight } from "lucide-react"
import Slider from "@/components/slider"
import Navbar from "@/components/navbar"
import CertificateGallery from "@/components/certificate-gallery"
import GoogleMaps from "@/components/google-maps"
import AnimatedCounter from "@/components/animated-counter"
import AnimatedLogo from "@/components/animated-logo"
import FloatingShapes from "@/components/floating-shapes"
import ProductSection from "@/components/product-section"
import FacilityGallery from "@/components/facility-gallery"
import TeamSection from "@/components/team-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Navbar />

      {/* Hero Section with Animated Logo */}
      <section className="relative min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-red-700 flex items-center justify-center overflow-hidden">
        <FloatingShapes />
        <div className="container mx-auto px-4 z-10 py-20">
          <AnimatedLogo />

          <div className="flex justify-center mt-12">
            <Link
              href="#about"
              className="bg-white text-red-600 px-8 py-4 rounded-full font-medium flex items-center hover:bg-gray-100 transition transform hover:scale-105 shadow-xl"
            >
              Pelajari Lebih Lanjut <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <Slider />

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-100 rounded-full -mr-32 -mt-32 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100 rounded-full -ml-48 -mb-48 opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Tentang Kami</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">PT. Sumber Farma Semarang</h3>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                PT. Sumber Farma Semarang adalah distributor farmasi terkemuka yang berkomitmen untuk menyediakan produk
                farmasi berkualitas tinggi dengan harga terjangkau. Didirikan pada tanggal 1 Maret 2015, kami telah
                menjadi mitra tepercaya bagi apotek, rumah sakit, dan fasilitas kesehatan di seluruh Indonesia.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                Dengan sertifikasi CDOB (Cara Distribusi Obat yang Baik) dari BPOM dan izin resmi dari pemerintah, kami
                menjamin kualitas dan keamanan produk yang kami distribusikan.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-2xl border-l-4 border-red-600 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <h4 className="text-xl font-bold text-red-800 mb-4">Visi</h4>
                  <p className="text-gray-700">
                    Membantu Pemerintah Dalam Mensukeskan Terciptanya Masyarakat Yang Sehat Serta Menciptakan Lapangan
                    Pekerjaan guna menekan Angka Pengangguran
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-2xl border-l-4 border-red-600 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <h4 className="text-xl font-bold text-red-800 mb-4">Misi</h4>
                  <p className="text-gray-700">
                    Menyediakan Obat-Obatan Bermutu Baik, Dengan Harga Yang Terjangkau masyarakat Yang Diproduksi oleh
                    Pabrik-Pabrik Yang Telah Melaksanakan CPOB Serta Layanan Kepuasan Konsumen Dengan Tertib
                    Administrasi.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-red-200 to-red-100 rounded-2xl rotate-3"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl h-80 bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
                  <div className="p-6 text-center">
                    <h3 className="text-white text-3xl font-bold mb-4">Distributor Farmasi Terpercaya</h3>
                    <p className="text-white/90 text-xl">Melayani kebutuhan farmasi sejak 2015</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedCounter end={500} label="Apotek Terlayani" icon={<Building size={32} />} />
            <AnimatedCounter end={50} label="Rumah Sakit Mitra" icon={<Building size={32} />} />
            <AnimatedCounter end={1000} label="Produk Farmasi" icon={<Award size={32} />} />
            <AnimatedCounter end={15} label="Kota Terlayani" icon={<Truck size={32} />} />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Facility Gallery Section */}
      <section id="facility" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-red-100 rounded-full -ml-32 -mt-32 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-100 rounded-full -mr-48 -mb-48 opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Fasilitas Kami</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
            <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg">
              PT. Sumber Farma Semarang memiliki fasilitas modern yang memenuhi standar CDOB untuk menjamin kualitas
              produk farmasi.
            </p>
          </div>

          <FacilityGallery />
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-red-100 rounded-full -ml-32 -mt-32 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-100 rounded-full -mr-48 -mb-48 opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Produk Kami</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
            <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg">
              PT. Sumber Farma Semarang menyediakan berbagai produk farmasi berkualitas dengan harga terjangkau.
            </p>
          </div>

          <ProductSection />
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-red-100 rounded-full -ml-32 -mt-32 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-100 rounded-full -mr-48 -mb-48 opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Sertifikasi & Legalitas</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
            <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg">
              PT. Sumber Farma Semarang memiliki berbagai sertifikasi dan izin resmi yang menjamin kualitas dan keamanan
              produk kami.
            </p>
          </div>

          <CertificateGallery />
        </div>
      </section>

      {/* Location Section with Google Maps */}
      <section id="location" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-100 rounded-full -mr-32 -mt-32 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100 rounded-full -ml-48 -mb-48 opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Lokasi Kami</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
            <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg">
              Kunjungi kantor kami di Semarang untuk informasi lebih lanjut tentang produk dan layanan kami.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <GoogleMaps />
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Informasi Kontak</h3>

              <div className="space-y-6">
                <div className="flex items-start p-6 bg-gradient-to-r from-red-50 to-white rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-102 border border-red-100">
                  <MapPin className="h-8 w-8 text-red-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">Alamat Kantor & Gudang</h4>
                    <p className="text-gray-700">
                      Jl. Kimar I No. 249, Desa/Kelurahan Pandean Lamper, Kec. Gayamsari, Kota Semarang, Provinsi Jawa
                      Tengah, Kode Pos: 50167
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-gradient-to-r from-red-50 to-white rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-102 border border-red-100">
                  <Phone className="h-8 w-8 text-red-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">Telepon</h4>
                    <p className="text-gray-700">024 6700088</p>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-gradient-to-r from-red-50 to-white rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-102 border border-red-100">
                  <Mail className="h-8 w-8 text-red-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">Email</h4>
                    <p className="text-gray-700">pajak_sfs@yahoo.co.id</p>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-gradient-to-r from-red-50 to-white rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-102 border border-red-100">
                  <Clock className="h-8 w-8 text-red-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">Jam Operasional</h4>
                    <p className="text-gray-700">Senin - Jumat: 08.00 - 17.00 WIB</p>
                    <p className="text-gray-700">Sabtu: 08.00 - 13.00 WIB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-red-800 to-red-900 text-white py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mr-4">
                  <div className="text-white text-2xl font-bold">SF</div>
                </div>
                <h3 className="text-2xl font-bold">PT. SUMBER FARMA</h3>
              </div>
              <p className="text-white/80 mb-8 text-lg">
                Distributor farmasi terkemuka yang berkomitmen untuk menyediakan produk farmasi berkualitas tinggi
                dengan harga terjangkau.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition transform hover:scale-110"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition transform hover:scale-110"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition transform hover:scale-110"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-8">Tautan Cepat</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" /> Beranda
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-white/80 hover:text-white transition flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" /> Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#products" className="text-white/80 hover:text-white transition flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" /> Produk
                  </a>
                </li>
                <li>
                  <a href="#facility" className="text-white/80 hover:text-white transition flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" /> Fasilitas
                  </a>
                </li>
                <li>
                  <a href="#location" className="text-white/80 hover:text-white transition flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" /> Lokasi
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-8">Area Layanan</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Semarang",
                  "Yogyakarta",
                  "Solo",
                  "Purwokerto",
                  "Tegal",
                  "Pekalongan",
                  "Magelang",
                  "Kudus",
                  "Jepara",
                  "Demak",
                ].map((city, index) => (
                  <div
                    key={index}
                    className="bg-white/10 rounded-full py-2 px-4 text-center hover:bg-white/20 transition"
                  >
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="text-white/80">
              &copy; {new Date().getFullYear()} PT. Sumber Farma Semarang. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
