import { useState, useEffect, useCallback, useRef } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  Gauge,
  Fuel,
  Settings2,
} from 'lucide-react'
import { formatPrice, formatKm } from '../data/vehicles.js'

export default function HeroCarousel({ vehicles }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [isChanging, setIsChanging] = useState(false)

  const touchStartX = useRef(null)

  const next = useCallback(() => {
    if (!vehicles?.length) return

    setIsChanging(true)

    setTimeout(() => {
      setIndex((i) => (i + 1) % vehicles.length)
      setIsChanging(false)
    }, 180)
  }, [vehicles?.length])

  const prev = useCallback(() => {
    if (!vehicles?.length) return

    setIsChanging(true)

    setTimeout(() => {
      setIndex(
        (i) => (i - 1 + vehicles.length) % vehicles.length
      )
      setIsChanging(false)
    }, 180)
  }, [vehicles?.length])

  useEffect(() => {
    if (paused || !vehicles?.length) return

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % vehicles.length)
    }, 5500)

    return () => clearInterval(timer)
  }, [paused, vehicles?.length])

  const goToSlide = (newIndex) => {
    if (newIndex === index) return

    setIsChanging(true)

    setTimeout(() => {
      setIndex(newIndex)
      setIsChanging(false)
    }, 180)
  }

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return

    const delta =
      e.changedTouches[0].clientX -
      touchStartX.current

    if (delta > 50) {
      prev()
    } else if (delta < -50) {
      next()
    }

    touchStartX.current = null
  }

  if (!vehicles?.length) {
    return null
  }

  const car = vehicles[index]

  return (
    <div
      className="
        group
        relative
        h-[500px]
        sm:h-[540px]
        lg:h-[570px]
        overflow-hidden
        rounded-3xl
        border
        border-[#1A1A1A]/10
        bg-[#1A1A1A]
        shadow-[0_15px_50px_rgba(26,26,26,0.12)]
      "
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >

      {/* =====================================================
          CAR IMAGES
      ===================================================== */}

      {vehicles.map((vehicle, i) => (
        <img
          key={vehicle.id}
          src={
            vehicle.image ||
            vehicle.images?.[0]
          }
          alt={`${vehicle.brand} ${vehicle.model}`}
          className={`
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition-all
            duration-1000
            ease-out
            ${
              i === index
                ? 'scale-100 opacity-100'
                : 'scale-[1.05] opacity-0'
            }
          `}
        />
      ))}


      {/* =====================================================
          IMAGE OVERLAY
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#1A1A1A]/85
          via-[#1A1A1A]/40
          to-transparent
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#1A1A1A]/85
          via-transparent
          to-[#1A1A1A]/20
        "
      />


      {/* =====================================================
          TOP LABEL
      ===================================================== */}

      <div
        className="
          absolute
          left-6
          top-6
          flex
          items-center
          gap-3
          sm:left-8
          sm:top-8
        "
      >
        <span className="h-px w-8 bg-[#8B7D6B]" />

        <span
          className="
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.25em]
            text-white
          "
        >
          Premium Pre-Owned
        </span>
      </div>


      {/* =====================================================
          SLIDE COUNTER
      ===================================================== */}

      <div
        className="
          absolute
          right-6
          top-6
          text-[9px]
          font-medium
          tracking-[0.2em]
          text-white
          sm:right-8
          sm:top-8
        "
      >
        <span>
          {String(index + 1).padStart(2, '0')}
        </span>

        <span className="mx-2 text-white/40">
          /
        </span>

        <span className="text-white/50">
          {String(vehicles.length).padStart(2, '0')}
        </span>
      </div>


      {/* =====================================================
          VEHICLE CONTENT
      ===================================================== */}

      <div
        className={`
          absolute
          inset-x-0
          bottom-0
          z-10
          p-6
          sm:p-8
          lg:p-10
          transition-all
          duration-500
          ${
            isChanging
              ? 'translate-y-2 opacity-60'
              : 'translate-y-0 opacity-100'
          }
        `}
      >

        {/* Brand */}

        <p
          className="
            mb-3
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.25em]
            text-[#8B7D6B]
          "
        >
          {car.brand} · {car.year}
        </p>


        {/* Model */}

        <h2
          className="
            font-display
            text-4xl
            leading-[0.92]
            tracking-[-0.05em]
            text-white
            sm:text-5xl
            lg:text-6xl
          "
        >
          {car.model}
        </h2>


        {/* Description */}

        <p
          className="
            mt-4
            max-w-lg
            text-xs
            leading-5
            text-white/70
            sm:text-sm
            sm:leading-6
          "
        >
          Experience refined performance, premium comfort
          and confidence with a carefully selected vehicle
          from NEXT Ride.
        </p>


        {/* SPECS */}

        <div
          className="
            mt-5
            flex
            flex-wrap
            gap-x-5
            gap-y-2
            text-[11px]
            text-white/80
          "
        >

          <span className="flex items-center gap-2">
            <Fuel
              size={13}
              strokeWidth={1.5}
              className="text-[#8B7D6B]"
            />

            {car.fuelType}
          </span>


          <span className="flex items-center gap-2">
            <Settings2
              size={13}
              strokeWidth={1.5}
              className="text-[#8B7D6B]"
            />

            {car.transmission}
          </span>


          <span className="flex items-center gap-2">
            <Gauge
              size={13}
              strokeWidth={1.5}
              className="text-[#8B7D6B]"
            />

            {formatKm(car.kmDriven)}
          </span>

        </div>


        {/* PRICE */}

        <div className="mt-5">

          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.2em]
              text-white/45
            "
          >
            Starting from
          </p>

          <p
            className="
              mt-1
              font-display
              text-lg
              text-white
            "
          >
            {formatPrice(car.price)}
          </p>

        </div>

      </div>


      {/* =====================================================
          NAVIGATION BUTTONS
      ===================================================== */}

      <div
        className="
          absolute
          bottom-7
          right-6
          z-20
          flex
          items-center
          gap-2
          sm:right-8
          sm:bottom-8
        "
      >

        <button
          onClick={prev}
          aria-label="Previous vehicle"
          className="
            grid
            h-10
            w-10
            place-items-center
            rounded-full
            border
            border-white/25
            bg-[#1A1A1A]/30
            text-white
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-[#8B7D6B]
            hover:bg-[#8B7D6B]
            hover:text-[#F4F2EC]
          "
        >
          <ChevronLeft size={17} />
        </button>


        <button
          onClick={next}
          aria-label="Next vehicle"
          className="
            grid
            h-10
            w-10
            place-items-center
            rounded-full
            border
            border-white/25
            bg-[#1A1A1A]/30
            text-white
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-[#8B7D6B]
            hover:bg-[#8B7D6B]
            hover:text-[#F4F2EC]
          "
        >
          <ChevronRight size={17} />
        </button>

      </div>


      {/* =====================================================
          PROGRESS
      ===================================================== */}

      <div
        className="
          absolute
          bottom-4
          left-1/2
          z-20
          hidden
          -translate-x-1/2
          items-center
          gap-2
          md:flex
        "
      >

        {vehicles.map((vehicle, i) => (
          <button
            key={vehicle.id}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="group flex h-5 items-center"
          >

            <span
              className={`
                h-px
                transition-all
                duration-500
                ${
                  i === index
                    ? 'w-9 bg-[#8B7D6B]'
                    : 'w-4 bg-white/30 group-hover:w-7 group-hover:bg-white/60'
                }
              `}
            />

          </button>
        ))}

      </div>

    </div>
  )
}