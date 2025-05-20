import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Navbar from "@/components/navbar"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-emerald-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hubungi Kami</h1>
            <p className="text-xl mb-8">
              Kami siap membantu Anda dengan pertanyaan, informasi produk, atau kebutuhan distribusi farmasi.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Informasi Kontak</h2>

              <div className="flex items-start mb-8">
                <MapPin className="h-6 w-6 text-emerald-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Alamat Kantor & Gudang</h4>
                  <p className="text-gray-600">
                    Jl. Kimar I No. 249, Desa/Kelurahan Pandean Lamper, Kec. Gayamsari, Kota Semarang, Provinsi Jawa
                    Tengah, Kode Pos: 50167
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-8">
                <Phone className="h-6 w-6 text-emerald-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Telepon</h4>
                  <p className="text-gray-600">024 6700088</p>
                </div>
              </div>

              <div className="flex items-start mb-8">
                <Mail className="h-6 w-6 text-emerald-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Email</h4>
                  <p className="text-gray-600">info@sumberfarma.co.id</p>
                </div>
              </div>

              <div className="flex items-start mb-8">
                <Clock className="h-6 w-6 text-emerald-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Jam Operasional</h4>
                  <p className="text-gray-600">Senin - Jumat: 08.00 - 17.00 WIB</p>
                  <p className="text-gray-600">Sabtu: 08.00 - 13.00 WIB</p>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="font-bold text-gray-800 mb-4">Area Layanan</h4>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-gray-100 p-2 rounded text-center text-gray-700">Semarang</div>
                  <div className="bg-gray-100 p-2 rounded text-center text-gray-700">Yogyakarta</div>
                  <div className="bg-gray-100 p-2 rounded text-center text-gray-700">Solo</div>
                  <div className="bg-gray-100 p-2 rounded text-center text-gray-700">Purwokerto</div>
                  <div className="bg-gray-100 p-2 rounded text-center text-gray-700">Tegal</div>
                  <div className="bg-gray-100 p-2 rounded text-center text-gray-700">Pekalongan</div>
                  <div className="bg-gray-100 p-2 rounded text-center text-gray-700">Magelang</div>
                  <div className="bg-gray-100 p-2 rounded text-center text-gray-700">Kudus</div>
                  <div className="bg-gray-100 p-2 rounded text-center text-gray-700">Jepara</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Kirim Pesan</h2>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Masukkan alamat email Anda"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Masukkan nomor telepon Anda"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subjek
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Masukkan subjek pesan"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-emerald-600 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-700 transition w-full"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Lokasi Kami</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2988384435066!2d110.4394!3d-6.9823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4ec52229d7%3A0x8039d80b220cb30!2sJl.%20Kimar%20I%20No.249%2C%20Pandean%20Lamper%2C%20Kec.%20Gayamsari%2C%20Kota%20Semarang%2C%20Jawa%20Tengah%2050167!5e0!3m2!1sen!2sid!4v1621234567890!5m2!1sen!2sid"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
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
