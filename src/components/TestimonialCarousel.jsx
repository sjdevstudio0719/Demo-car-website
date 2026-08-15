import { useState, useEffect, useCallback } from 'react'
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { testimonials } from '../data/content.js'

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => {
    if (!testimonials?.length) return

    setIndex(
      (i) => (i + 1) % testimonials.length
    )
  }, [])

  const prev = () => {
    if (!testimonials?.length) return

    setIndex(
      (i) =>
        (i - 1 + testimonials.length) %
        testimonials.length
    )
  }

  useEffect(() => {
    if (!testimonials?.length) return

    const timer = setInterval(next, 6000)

    return () => clearInterval(timer)
  }, [next])

  if (!testimonials?.length) {
    return null
  }

  const t = testimonials[index]

  return (
    <div className="relative mx-auto max-w-3xl">

      {/* =====================================================
          TESTIMONIAL CARD
      ===================================================== */}

      <div
        className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-[#1A1A1A]/10
          bg-[#F4F2EC]
          px-6
          py-10
          text-center
          md:px-12
          md:py-14
          transition-all
          duration-300
          hover:border-[#8B7D6B]/30
          hover:shadow-[0_20px_50px_rgba(26,26,26,0.08)]
        "
      >

        {/* Decorative accent */}

        <div
          className="
            absolute
            left-1/2
            top-0
            h-px
            w-20
            -translate-x-1/2
            bg-[#8B7D6B]
          "
        />


        {/* Quote Icon */}

        <Quote
          size={34}
          strokeWidth={1.2}
          className="
            mx-auto
            mb-6
            text-[#8B7D6B]
            transition-transform
            duration-300
            group-hover:scale-110
            group-hover:-rotate-3
          "
        />


        {/* Content — keyed so it cross-fades whenever the testimonial changes */}

        <div
          key={index}
          className="
            opacity-0
            animate-fadeUp
          "
          style={{ animationDuration: '500ms' }}
        >

          {/* Stars */}

          <div className="mb-6 flex items-center justify-center gap-1">

            {Array.from({ length: 5 }).map((_, i) => (

              <Star
                key={i}
                size={15}
                strokeWidth={1.5}
                className={
                  i < t.rating
                    ? `
                      fill-[#8B7D6B]
                      text-[#8B7D6B]
                    `
                    : `
                      text-[#1A1A1A]/15
                    `
                }
              />

            ))}

          </div>


          {/* Review */}

          <p
            className="
              mx-auto
              max-w-2xl
              font-display
              text-xl
              leading-relaxed
              tracking-[-0.02em]
              text-[#1A1A1A]
              md:text-2xl
            "
          >
            "{t.review}"
          </p>


          {/* Divider */}

          <div
            className="
              mx-auto
              my-7
              h-px
              w-10
              bg-[#8B7D6B]/50
            "
          />


          {/* Customer */}

          <div>

            <p
              className="
                font-display
                text-lg
                text-[#1A1A1A]
              "
            >
              {t.name}
            </p>

            <p
              className="
                mt-1
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-[#333333]/70
              "
            >
              {t.vehicle}
            </p>

          </div>

        </div>

      </div>


      {/* =====================================================
          CONTROLS
      ===================================================== */}

      <div
        className="
          mt-7
          flex
          items-center
          justify-center
          gap-5
        "
      >

        {/* Previous */}

        <button
          onClick={prev}
          className="
            grid
            h-10
            w-10
            place-items-center
            rounded-full
            border
            border-[#1A1A1A]/15
            bg-[#F4F2EC]
            text-[#333333]
            transition-all
            duration-300
            hover:border-[#8B7D6B]
            hover:bg-[#8B7D6B]
            hover:text-[#F4F2EC]
            hover:-translate-x-0.5
            active:scale-90
          "
          aria-label="Previous testimonial"
        >
          <ChevronLeft
            size={18}
            strokeWidth={1.5}
          />
        </button>


        {/* Progress indicators */}

        <div className="flex items-center gap-2">

          {testimonials.map((_, i) => (

            <button
              key={i}
              onClick={() => setIndex(i)}
              className="
                flex
                h-6
                items-center
                justify-center
                active:scale-90
                transition-transform
                duration-200
              "
              aria-label={`Go to testimonial ${i + 1}`}
            >

              <span
                className={`
                  block
                  h-px
                  transition-all
                  duration-500
                  ${
                    i === index
                      ? 'w-8 bg-[#8B7D6B]'
                      : 'w-3 bg-[#1A1A1A]/20 hover:w-5 hover:bg-[#1A1A1A]/40'
                  }
                `}
              />

            </button>

          ))}

        </div>


        {/* Next */}

        <button
          onClick={next}
          className="
            grid
            h-10
            w-10
            place-items-center
            rounded-full
            border
            border-[#1A1A1A]/15
            bg-[#F4F2EC]
            text-[#333333]
            transition-all
            duration-300
            hover:border-[#8B7D6B]
            hover:bg-[#8B7D6B]
            hover:text-[#F4F2EC]
            hover:translate-x-0.5
            active:scale-90
          "
          aria-label="Next testimonial"
        >
          <ChevronRight
            size={18}
            strokeWidth={1.5}
          />
        </button>

      </div>

    </div>
  )
}