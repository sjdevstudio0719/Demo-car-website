import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  X,
  Gauge,
  Fuel,
  Settings2,
  MapPin,
  Calendar,
  User,
  Palette,
  Check,
  MessageCircle,
  Phone,
} from 'lucide-react'

import { formatPrice, formatKm } from '../data/vehicles.js'

export default function VehicleModal({ vehicle, onClose }) {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    setActiveImage(0)
    document.body.style.overflow = vehicle ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [vehicle])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()

    window.addEventListener('keydown', onKey)

    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!vehicle) return null

  /* ==========================================
     WHATSAPP MESSAGE
  ========================================== */

  const whatsappMessage = encodeURIComponent(
    `Hi NEXT Ride, I'm interested in the ${vehicle.brand} ${vehicle.model} ${vehicle.variant} (${vehicle.year}) listed at ${formatPrice(vehicle.price)}. Is it still available?`
  )

  const whatsappUrl = `https://wa.me/919830000000?text=${whatsappMessage}`

  /* ==========================================
     VEHICLE SPECS
  ========================================== */

  const specs = [
    {
      icon: Calendar,
      label: 'Year',
      value: vehicle.year,
    },
    {
      icon: Gauge,
      label: 'Driven',
      value: formatKm(vehicle.kmDriven),
    },
    {
      icon: Fuel,
      label: 'Fuel',
      value: vehicle.fuelType,
    },
    {
      icon: Settings2,
      label: 'Transmission',
      value: vehicle.transmission,
    },
    {
      icon: User,
      label: 'Ownership',
      value: vehicle.owners,
    },
    {
      icon: Palette,
      label: 'Colour',
      value: vehicle.color,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: vehicle.location,
    },
  ]

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">

      {/* ==========================================
          BACKDROP
      ========================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[#1A1A1A]/85
          backdrop-blur-sm
          opacity-0
          animate-fadeUp
        "
        style={{ animationDuration: '400ms' }}
        onClick={onClose}
      />

      {/* ==========================================
          MODAL
      ========================================== */}

      <div
        className="
          relative
          w-full
          max-w-4xl
          max-h-[90vh]
          overflow-y-auto
          rounded-3xl
          border
          border-[#333333]/20
          bg-[#F4F2EC]
          shadow-2xl
          opacity-0
          animate-fadeUp
        "
      >

        {/* ========================================
            CLOSE BUTTON
        ======================================== */}

        <button
          onClick={onClose}
          className="
            sticky
            top-4
            float-right
            mr-4
            z-10
            grid
            place-items-center
            w-9
            h-9
            rounded-full
            bg-[#F4F2EC]/90
            border
            border-[#333333]/20
            text-[#333333]
            hover:bg-[#8B7D6B]
            hover:text-[#F4F2EC]
            hover:border-[#8B7D6B]
            hover:rotate-90
            active:scale-90
            transition-all
            duration-300
          "
          aria-label="Close details"
        >
          <X size={18} />
        </button>

        <div className="p-6 sm:p-8 clear-both">

          <div className="grid md:grid-cols-2 gap-8">

            {/* ====================================
                IMAGE SECTION
            ==================================== */}

            <div>

              <div
                className="
                  aspect-[4/3]
                  rounded-2xl
                  overflow-hidden
                  mb-3
                  border
                  border-[#333333]/10
                "
              >
                <img
                  key={activeImage}
                  src={vehicle.images[activeImage]}
                  alt={vehicle.model}
                  className="
                    w-full
                    h-full
                    object-cover
                    opacity-0
                    animate-fadeUp
                  "
                  style={{ animationDuration: '300ms' }}
                />
              </div>

              {/* Thumbnails */}

              {vehicle.images.length > 1 && (
                <div className="flex gap-2">

                  {vehicle.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`
                        w-16
                        h-16
                        rounded-lg
                        overflow-hidden
                        border-2
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        active:scale-95
                        ${
                          i === activeImage
                            ? 'border-[#8B7D6B] opacity-100'
                            : 'border-transparent opacity-60 hover:opacity-90'
                        }
                      `}
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}

                </div>
              )}

            </div>

            {/* ====================================
                VEHICLE INFORMATION
            ==================================== */}

            <div>

              {/* Brand */}

              <p
                className="
                  text-xs
                  text-[#8B7D6B]
                  font-semibold
                  tracking-widest
                  uppercase
                  mb-2
                "
              >
                {vehicle.brand}
              </p>

              {/* Model */}

              <h2
                className="
                  font-display
                  text-3xl
                  sm:text-4xl
                  tracking-tight
                  text-[#1A1A1A]
                  mb-1
                "
              >
                {vehicle.model}
              </h2>

              {/* Variant */}

              <p className="text-[#333333]/70 text-sm mb-4">
                {vehicle.variant}
              </p>

              {/* Price */}

              <p
                className="
                  font-display
                  text-3xl
                  text-[#8B7D6B]
                  mb-5
                "
              >
                {formatPrice(vehicle.price)}
              </p>

              {/* Description */}

              <p
                className="
                  text-[#333333]/80
                  text-sm
                  leading-6
                  mb-6
                "
              >
                {vehicle.description}
              </p>

              {/* ==================================
                  SPECS
              ================================== */}

              <div className="grid grid-cols-2 gap-4 mb-7">

                {specs.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-start gap-2"
                  >

                    <s.icon
                      size={15}
                      className="
                        text-[#8B7D6B]
                        mt-0.5
                        shrink-0
                      "
                    />

                    <div>

                      <p className="text-[11px] text-[#333333]/60">
                        {s.label}
                      </p>

                      <p className="text-sm text-[#1A1A1A] font-medium">
                        {s.value}
                      </p>

                    </div>

                  </div>
                ))}

              </div>

              {/* ==================================
                  ACTION BUTTONS
              ================================== */}

              <div className="grid sm:grid-cols-3 gap-3">

                {/* Enquire */}

                <Link
                  to="/contact"
                  onClick={onClose}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[#1A1A1A]
                    text-[#F4F2EC]
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    hover:bg-[#333333]
                    active:scale-95
                    transition-all
                    duration-300
                  "
                >
                  <MessageCircle size={16} />
                  Enquire Now
                </Link>

                {/* WhatsApp */}

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[#8B7D6B]
                    text-[#F4F2EC]
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    border
                    border-[#8B7D6B]
                    hover:bg-[#333333]
                    hover:border-[#333333]
                    active:scale-95
                    transition-all
                    duration-300
                  "
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>

                {/* Call */}

                <a
                  href="tel:+919830000000"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-[#8B7D6B]/50
                    text-[#1A1A1A]
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    hover:bg-[#8B7D6B]
                    hover:text-[#F4F2EC]
                    hover:border-[#8B7D6B]
                    active:scale-95
                    transition-all
                    duration-300
                  "
                >
                  <Phone size={16} />
                  Call Dealer
                </a>

              </div>

            </div>
          </div>

          {/* ========================================
              KEY FEATURES
          ======================================== */}

          {vehicle.features?.length > 0 && (
            <div
              className="
                mt-8
                pt-8
                border-t
                border-[#333333]/10
              "
            >

              <h3
                className="
                  font-display
                  text-xl
                  text-[#1A1A1A]
                  mb-4
                "
              >
                Key Features
              </h3>

              <div className="grid sm:grid-cols-2 gap-3">

                {vehicle.features.map((f) => (
                  <div
                    key={f}
                    className="
                      flex
                      items-center
                      gap-2
                      text-sm
                      text-[#333333]/80
                      transition-transform
                      duration-300
                      hover:translate-x-1
                    "
                  >
                    <Check
                      size={14}
                      className="
                        text-[#8B7D6B]
                        shrink-0
                      "
                    />

                    {f}
                  </div>
                ))}

              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  )
}