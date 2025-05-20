"use client"

import { useState, useEffect } from "react"
import { MapPin, ExternalLink } from "lucide-react"

export default function GoogleMaps() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-red-200 animate-pulse flex items-center justify-center z-0">
        <div className="text-red-500 text-lg font-semibold">Loading map...</div>
      </div>

      {isLoaded && (
        <div className="relative z-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2988384435066!2d110.4394!3d-6.9823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4ec52229d7%3A0x8039d80b220cb30!2sJl.%20Kimar%20I%20No.249%2C%20Pandean%20Lamper%2C%20Kec.%20Gayamsari%2C%20Kota%20Semarang%2C%20Jawa%20Tengah%2050167!5e0!3m2!1sen!2sid!4v1621234567890!5m2!1sen!2sid"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-2xl"
          ></iframe>
        </div>
      )}

      <div
        className={`absolute bottom-4 left-4 bg-white py-3 px-5 rounded-xl shadow-xl z-20 transition-all duration-300 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-90"}`}
      >
        <div className="flex items-center">
          <MapPin className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-gray-800 text-sm">PT. Sumber Farma Semarang</h3>
            <p className="text-xs text-gray-600">Jl. Kimar I No. 249, Pandean Lamper, Gayamsari, Semarang</p>
          </div>
        </div>
      </div>

      <div
        className={`absolute top-4 right-4 bg-red-600 text-white py-2 px-4 rounded-xl shadow-xl z-20 flex items-center transition-all duration-300 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-90"}`}
      >
        <ExternalLink className="h-4 w-4 mr-1" />
        <a
          href="https://goo.gl/maps/YourActualGoogleMapsLink"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium"
        >
          Buka di Google Maps
        </a>
      </div>
    </div>
  )
}
