"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="PT. Sumber Farma Semarang Logo"
              className="w-12 h-12 mr-3 object-contain"
            />
            <div>
              <h1
                className={`text-xl font-bold transition-colors duration-300 ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              >
                PT. SUMBER FARMA
              </h1>
              <p className={`text-xs transition-colors duration-300 ${scrolled ? "text-gray-600" : "text-white/80"}`}>
                DISTRIBUTOR OF PHARMACEUTICALS
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium transition-colors duration-300 ${
                scrolled ? "text-gray-700 hover:text-red-600" : "text-white/90 hover:text-white"
              }`}
            >
              Beranda
            </Link>
            <Link
              href="#about"
              className={`font-medium transition-colors duration-300 ${
                scrolled ? "text-gray-700 hover:text-red-600" : "text-white/90 hover:text-white"
              }`}
            >
              Tentang Kami
            </Link>
            <Link
              href="#products"
              className={`font-medium transition-colors duration-300 ${
                scrolled ? "text-gray-700 hover:text-red-600" : "text-white/90 hover:text-white"
              }`}
            >
              Produk
            </Link>
            <div className="relative">
              <button
                className={`font-medium transition-colors duration-300 flex items-center ${
                  scrolled ? "text-gray-700 hover:text-red-600" : "text-white/90 hover:text-white"
                }`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Layanan <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 z-10">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Distribusi Farmasi
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Konsultasi Produk
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Kemitraan
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="#location"
              className={`font-medium transition-colors duration-300 ${
                scrolled ? "text-gray-700 hover:text-red-600" : "text-white/90 hover:text-white"
              }`}
            >
              Lokasi
            </Link>
            <Link
              href="#location"
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                scrolled ? "bg-red-600 text-white hover:bg-red-700" : "bg-white text-red-600 hover:bg-red-50"
              }`}
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`focus:outline-none transition-colors duration-300 ${
                scrolled ? "text-gray-700 hover:text-red-600" : "text-white hover:text-white/80"
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-6 px-4 shadow-xl mt-2 rounded-b-2xl">
          <div className="flex flex-col space-y-5">
            <Link
              href="/"
              className="text-gray-700 hover:text-red-600 font-medium transition flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-red-600 font-medium transition flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Tentang Kami
            </Link>
            <Link
              href="#products"
              className="text-gray-700 hover:text-red-600 font-medium transition flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Produk
            </Link>
            <button
              className="text-left text-gray-700 hover:text-red-600 font-medium transition flex items-center justify-between w-full"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>Layanan</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {isDropdownOpen && (
              <div className="pl-4 space-y-3 border-l-2 border-red-200">
                <Link href="#" className="block text-gray-700 hover:text-red-600" onClick={() => setIsMenuOpen(false)}>
                  Distribusi Farmasi
                </Link>
                <Link href="#" className="block text-gray-700 hover:text-red-600" onClick={() => setIsMenuOpen(false)}>
                  Konsultasi Produk
                </Link>
                <Link href="#" className="block text-gray-700 hover:text-red-600" onClick={() => setIsMenuOpen(false)}>
                  Kemitraan
                </Link>
              </div>
            )}
            <Link
              href="#location"
              className="text-gray-700 hover:text-red-600 font-medium transition flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Lokasi
            </Link>
            <Link
              href="#location"
              className="bg-red-600 text-white px-5 py-3 rounded-xl font-medium hover:bg-red-700 transition text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
