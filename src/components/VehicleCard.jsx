import { Gauge, Fuel, Settings2, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react'
import { formatPrice, formatKm } from '../data/vehicles.js'

export default function VehicleCard({ vehicle, index = 0, onView }) {
  const sold = vehicle.status === 'sold'

  // WhatsApp message for this specific vehicle
  const whatsappMessage = encodeURIComponent(
    `Hi NEXT Ride, I'm interested in the ${vehicle.brand} ${vehicle.model} ${vehicle.variant} (${vehicle.year}) listed at ${formatPrice(vehicle.price)}. Is it still available?`
  )

  const whatsappUrl = `https://wa.me/919830000000?text=${whatsappMessage}`

  return (
    <div
      className="
        group
        opacity-0
        animate-fadeUp
        card-surface
        rounded-3xl
        overflow-hidden
        hover:border-[#8B7D6B]/50
        hover:-translate-y-1.5
        hover:shadow-[0_20px_40px_rgba(26,26,26,0.10)]
        transition-all
        duration-300
        ease-out
      "
      style={{ animationDelay: `${Math.min(index, 8) * 70}ms` }}
    >
      {/* ================================
          IMAGE
      ================================= */}

      <div className="relative aspect-[4/3] overflow-hidden">

        <img
          src={vehicle.images[0]}
          alt={`${vehicle.brand} ${vehicle.model}`}
          loading="lazy"
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {/* Image gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent" />

        {/* New Arrival */}
        {vehicle.isNewArrival && !sold && (
          <span
            className="
              absolute
              top-3
              left-3
              rounded-full
              bg-[#8B7D6B]
              px-3
              py-1
              text-[11px]
              font-semibold
              tracking-wide
              text-[#F4F2EC]
              transition-transform
              duration-300
              group-hover:scale-105
            "
          >
            New Arrival
          </span>
        )}

        {/* Sold */}
        {sold && (
          <span
            className="
              absolute
              top-3
              left-3
              rounded-full
              bg-[#1A1A1A]/85
              border
              border-[#333333]
              px-3
              py-1
              text-[11px]
              font-semibold
              tracking-wide
              text-[#F4F2EC]
            "
          >
            Sold
          </span>
        )}

        {/* Price */}
        <span
          className="
            absolute
            bottom-3
            right-3
            rounded-full
            bg-[#1A1A1A]/90
            border
            border-[#8B7D6B]/40
            px-3
            py-1
            text-xs
            font-semibold
            text-[#F4F2EC]
            transition-transform
            duration-300
            group-hover:scale-105
          "
        >
          {formatPrice(vehicle.price)}
        </span>
      </div>

      {/* ================================
          CONTENT
      ================================= */}

      <div className="p-5">

        {/* Brand + Year */}
        <p className="text-xs text-[#333333]/70 mb-1">
          {vehicle.brand} · {vehicle.year}
        </p>

        {/* Vehicle Name */}
        <h3
          className="
            font-display
            text-lg
            text-[#1A1A1A]
            mb-3
            transition-colors
            duration-300
            group-hover:text-[#8B7D6B]
          "
        >
          {vehicle.model}{' '}
          <span className="text-[#333333]/70 text-sm font-sans">
            {vehicle.variant}
          </span>
        </h3>

        {/* ================================
            VEHICLE DETAILS
        ================================= */}

        <div className="grid grid-cols-2 gap-y-2 text-xs text-[#333333]/80 mb-5">

          <span className="flex items-center gap-1.5">
            <Gauge
              size={13}
              className="text-[#8B7D6B]"
            />
            {formatKm(vehicle.kmDriven)}
          </span>

          <span className="flex items-center gap-1.5">
            <Fuel
              size={13}
              className="text-[#8B7D6B]"
            />
            {vehicle.fuelType}
          </span>

          <span className="flex items-center gap-1.5">
            <Settings2
              size={13}
              className="text-[#8B7D6B]"
            />
            {vehicle.transmission}
          </span>

          <span className="flex items-center gap-1.5">
            <MapPin
              size={13}
              className="text-[#8B7D6B]"
            />
            {vehicle.location}
          </span>

        </div>

        {/* ================================
            BUTTONS
        ================================= */}

        {!sold ? (
          <div className="grid grid-cols-2 gap-2.5">

            {/* View Details */}
            <button
              onClick={() => onView?.(vehicle)}
              className="
                group/btn
                inline-flex
                items-center
                justify-center
                gap-1.5
                rounded-full
                border
                border-[#8B7D6B]/40
                py-2.5
                px-3
                text-sm
                font-semibold
                text-[#1A1A1A]
                hover:bg-[#8B7D6B]
                hover:text-[#F4F2EC]
                hover:border-[#8B7D6B]
                active:scale-95
                transition-all
                duration-300
              "
            >
              View Details
              <ArrowUpRight
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover/btn:translate-x-0.5
                  group-hover/btn:-translate-y-0.5
                "
              />
            </button>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-1.5
                rounded-full
                bg-[#8B7D6B]
                border
                border-[#8B7D6B]
                py-2.5
                px-3
                text-sm
                font-semibold
                text-[#F4F2EC]
                hover:bg-[#333333]
                hover:border-[#333333]
                active:scale-95
                transition-all
                duration-300
              "
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>

          </div>
        ) : (
          /* Sold Button */
          <button
            disabled
            className="
              w-full
              inline-flex
              items-center
              justify-center
              rounded-full
              border
              border-[#333333]/20
              py-2.5
              text-sm
              font-semibold
              text-[#333333]/40
              cursor-not-allowed
            "
          >
            Sold Out
          </button>
        )}

      </div>
    </div>
  )
}