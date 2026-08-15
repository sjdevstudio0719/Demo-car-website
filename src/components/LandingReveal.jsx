import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Car } from 'lucide-react'

export default function LandingReveal() {
  // Starts true so the overlay is present on the very first paint —
  // starting false and flipping it inside useEffect causes a brief
  // flash of the page underneath before the effect runs.
  const [visible, setVisible] = useState(true)
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    // Lock scrolling
    document.body.style.overflow = 'hidden'

    // Keep it visible for 12 seconds
    const closeTimer = window.setTimeout(() => {
      setClosing(true)
    }, 1500)

    // Remove it after the 1 second fade
    const removeTimer = window.setTimeout(() => {
      setVisible(false)
      document.body.style.overflow = ''
    }, 4500)

    return () => {
      window.clearTimeout(closeTimer)
      window.clearTimeout(removeTimer)
      document.body.style.overflow = ''
    }
  }, [])

  if (!visible) {
    return null
  }

  return (
    <div
      className={`
        fixed
        inset-0
        z-[99999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#1A1A1A]
        transition-opacity
        duration-1000
        ease-in-out
        ${
          closing
            ? 'pointer-events-none opacity-0'
            : 'opacity-100'
        }
      `}
    >

      {/* =====================================================
          CENTER CROSS
      ===================================================== */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-full
          w-px
          -translate-x-1/2
          bg-[#8B7D6B]/[0.12]
        "
      />

      <div
        className="
          absolute
          left-0
          top-1/2
          h-px
          w-full
          bg-[#8B7D6B]/[0.12]
        "
      />

      {/* =====================================================
          GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#8B7D6B]/[0.06]
          blur-[120px]
        "
      />

      {/* =====================================================
          TOP LEFT BRAND
      ===================================================== */}

      <div
        className="
          absolute
          left-6
          top-6
          flex
          items-center
          gap-3
          sm:left-10
          sm:top-10
        "
      >
        <div
          className="
            grid
            h-9
            w-9
            place-items-center
            rounded-full
            border
            border-[#8B7D6B]/50
            text-[#8B7D6B]
          "
        >
          <Car
            size={16}
            strokeWidth={1.5}
          />
        </div>

        <span
          className="
            font-display
            text-sm
            tracking-[-0.02em]
            text-[#F4F2EC]
          "
        >
          NEXT

          <span className="ml-1 italic text-[#8B7D6B]">
            Ride
          </span>
        </span>
      </div>

      {/* =====================================================
          TOP RIGHT
      ===================================================== */}

      <div
        className="
          absolute
          right-6
          top-8
          text-[9px]
          uppercase
          tracking-[0.3em]
          text-[#F4F2EC]/50
          sm:right-10
          sm:top-10
        "
      >
        Est. 2026
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          flex
          w-full
          max-w-6xl
          flex-col
          items-center
          px-6
          text-center
        "
      >

        {/* LABEL */}

        <div
          className="
            mb-7
            flex
            items-center
            gap-3
            animate-[fadeUp_700ms_ease-out_both]
          "
        >
          <span className="h-px w-8 bg-[#8B7D6B]" />

          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#8B7D6B]
            "
          >
            Premium Pre-Owned
          </span>

          <span className="h-px w-8 bg-[#8B7D6B]" />
        </div>

        {/* NEXT */}

        <h1
          className="
            font-display
            text-[16vw]
            font-medium
            leading-[0.75]
            tracking-[-0.075em]
            text-[#F4F2EC]
            sm:text-[13vw]
            lg:text-[10rem]
            animate-[titleReveal_1000ms_cubic-bezier(.16,1,.3,1)_both]
          "
        >
          NEXT
        </h1>

        {/* RIDE */}

        <h2
          className="
            mt-2
            font-display
            text-[16vw]
            font-medium
            italic
            leading-[0.8]
            tracking-[-0.075em]
            text-[#8B7D6B]
            sm:text-[13vw]
            lg:text-[10rem]
            animate-[titleReveal_1000ms_150ms_cubic-bezier(.16,1,.3,1)_both]
          "
        >
          Ride
        </h2>

        {/* CAR */}

        <div
          className="
            mt-8
            flex
            items-center
            justify-center
            animate-[carReveal_1200ms_350ms_cubic-bezier(.16,1,.3,1)_both]
          "
        >
          <div
            className="
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              border
              border-[#8B7D6B]/50
              bg-[#8B7D6B]/[0.06]
              text-[#F4F2EC]
              sm:h-24
              sm:w-24
            "
          >
            <Car
              size={42}
              strokeWidth={1}
              className="sm:h-12 sm:w-12"
            />
          </div>
        </div>

        {/* TAGLINE */}

        <p
          className="
            mt-7
            max-w-md
            text-[10px]
            uppercase
            leading-5
            tracking-[0.25em]
            text-[#F4F2EC]/60
            sm:text-xs
            animate-[fadeUp_700ms_600ms_ease-out_both]
          "
        >
          Curated vehicles.

          <span className="mx-2 text-[#8B7D6B]">
            •
          </span>

          Transparent buying.

          <span className="mx-2 text-[#8B7D6B]">
            •
          </span>

          Your next journey.
        </p>

      </div>

      {/* =====================================================
          BOTTOM DISCOVER
      ===================================================== */}

      <div
        className="
          absolute
          bottom-7
          left-1/2
          flex
          -translate-x-1/2
          flex-col
          items-center
          gap-3
          animate-[fadeUp_700ms_900ms_ease-out_both]
          sm:bottom-10
        "
      >
        <span
          className="
            text-[9px]
            font-medium
            uppercase
            tracking-[0.25em]
            text-[#F4F2EC]/50
          "
        >
          Discover your next ride
        </span>

        <div
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-[#8B7D6B]/40
            text-[#8B7D6B]
          "
        >
          <ArrowDown
            size={14}
            strokeWidth={1.5}
            className="animate-bounce"
          />
        </div>
      </div>

      {/* =====================================================
          BOTTOM RIGHT
      ===================================================== */}

      <div
        className="
          absolute
          bottom-7
          right-6
          hidden
          items-center
          gap-2
          text-[9px]
          uppercase
          tracking-[0.2em]
          text-[#F4F2EC]/40
          sm:flex
          sm:bottom-10
          sm:right-10
        "
      >
        Enter

        <ArrowUpRight
          size={13}
          strokeWidth={1.5}
        />
      </div>

    </div>
  )
}