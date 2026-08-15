import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Car } from 'lucide-react'

export default function LandingReveal() {
  const [visible, setVisible] = useState(true)
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const timer = setTimeout(() => {
      setClosing(true)

      setTimeout(() => {
        setVisible(false)
        document.body.style.overflow = ''
      }, 1000)
    }, 2800)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = ''
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className={`
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#0D0C0A]
        transition-opacity
        duration-1000
        ${closing
          ? 'pointer-events-none opacity-0'
          : 'opacity-100'
        }
      `}
    >

      {/* =====================================================
          DECORATIVE CROSS LINES
      ===================================================== */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-full
          w-px
          -translate-x-1/2
          bg-[#B08D57]/[0.10]
        "
      />

      <div
        className="
          absolute
          left-0
          top-1/2
          h-px
          w-full
          bg-[#B08D57]/[0.10]
        "
      />


      {/* =====================================================
          SUBTLE GLOW
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
          bg-[#B08D57]/[0.035]
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
            border-[#B08D57]/40
            text-[#B08D57]
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
            text-[#B08D57]
          "
        >
          NEXT
          <span className="ml-1 italic text-[#C8A875]">
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
          text-[#B08D57]/50
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

        {/* Label */}

        <div
          className="
            mb-7
            flex
            items-center
            gap-3
            animate-[fadeUp_700ms_ease-out_both]
          "
        >

          <span className="h-px w-8 bg-[#B08D57]" />

          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#B08D57]
            "
          >
            Premium Pre-Owned
          </span>

          <span className="h-px w-8 bg-[#B08D57]" />

        </div>


        {/* =================================================
            TITLE
        ================================================= */}

        <h1
          className="
            font-display
            text-[16vw]
            font-medium
            leading-[0.75]
            tracking-[-0.075em]
            text-[#B08D57]
            sm:text-[13vw]
            lg:text-[10rem]
            animate-[titleReveal_1000ms_cubic-bezier(.16,1,.3,1)_both]
          "
        >
          NEXT
        </h1>

        <h2
          className="
            mt-2
            font-display
            text-[16vw]
            font-medium
            italic
            leading-[0.8]
            tracking-[-0.075em]
            text-[#C8A875]
            sm:text-[13vw]
            lg:text-[10rem]
            animate-[titleReveal_1000ms_150ms_cubic-bezier(.16,1,.3,1)_both]
          "
        >
          Ride
        </h2>


        {/* =================================================
            CAR ICON
        ================================================= */}

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
              border-[#B08D57]/40
              bg-[#B08D57]/[0.04]
              text-[#C8A875]
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


        {/* =================================================
            TAGLINE
        ================================================= */}

        <p
          className="
            mt-7
            max-w-md
            text-[10px]
            uppercase
            leading-5
            tracking-[0.25em]
            text-[#B08D57]/60
            sm:text-xs
            animate-[fadeUp_700ms_600ms_ease-out_both]
          "
        >
          Curated vehicles.

          <span className="mx-2 text-[#B08D57]">
            •
          </span>

          Transparent buying.

          <span className="mx-2 text-[#B08D57]">
            •
          </span>

          Your next journey.
        </p>

      </div>


      {/* =====================================================
          BOTTOM SCROLL INDICATOR
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
            text-[#B08D57]/50
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
            border-[#B08D57]/25
            text-[#B08D57]
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
          text-[#B08D57]/40
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