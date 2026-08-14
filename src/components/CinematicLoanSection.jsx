import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import AutoLoanCalculator from './AutoLoanCalculator.jsx'
import { Link } from 'react-router-dom'


gsap.registerPlugin(ScrollTrigger)

export default function CinematicLoanSection() {
  const sectionRef = useRef(null)
  const backgroundRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const background = backgroundRef.current
    const content = contentRef.current

    if (!section || !background || !content) return

    const ctx = gsap.context(() => {

      /* ==========================================
         CINEMATIC PARALLAX
      ========================================== */

      gsap.fromTo(
        background,
        {
          yPercent: -8,
          scale: 1.08,
        },
        {
          yPercent: 8,
          scale: 1.15,
          ease: 'none',

          scrollTrigger: {
            trigger: section,

            start: 'top bottom',
            end: 'bottom top',

            scrub: 1,
          },
        }
      )


      /* ==========================================
         CONTENT REVEAL
      ========================================== */

      gsap.fromTo(
        content.children,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,

          duration: 0.8,

          stagger: 0.15,

          ease: 'power3.out',

          scrollTrigger: {
            trigger: section,

            start: 'top 70%',

            once: true,
          },
        }
      )

    }, section)

    return () => ctx.revert()
  }, [])


  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        min-h-[850px]
        lg:min-h-[900px]
        flex
        items-center
      "
    >

      {/* =================================================
          PARALLAX BACKGROUND IMAGE
      ================================================= */}

        <div
            ref={backgroundRef}
            className="
            absolute
            -inset-y-[10%]
            inset-x-0
            z-0
            bg-cover
            bg-center
            bg-no-repeat
            will-change-transform
            "
            style={{
            backgroundImage: "url('/images/loan-car-bg.jpg')",
            }}
        />


      {/* =================================================
          DARK CINEMATIC OVERLAY
      ================================================= */}

      <div
        className="
          absolute
          inset-0
          z-[1]
          bg-black/60
        "
      />


      {/* LEFT DARK GRADIENT */}

      <div
        className="
          absolute
          inset-0
          z-[2]
          bg-gradient-to-r
          from-black/90
          via-black/65
          to-black/20
        "
      />


      {/* BOTTOM GRADIENT */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-48
          z-[2]
          bg-gradient-to-t
          from-navy-bg
          to-transparent
        "
      />


      {/* =================================================
          CONTENT
      ================================================= */}

      <div
        ref={contentRef}
        className="
          relative
          z-10
          container-px
          w-full
          py-24
        "
      >

        <div
          className="
            grid
            lg:grid-cols-[minmax(400px,520px)_1fr]
            gap-14
            xl:gap-24
            items-center
          "
        >

          {/* =============================================
              CALCULATOR
          ============================================= */}

          <div className="w-full max-w-xl">

            <AutoLoanCalculator />

          </div>


          {/* =============================================
              TEXT
          ============================================= */}

          <div className="max-w-2xl">

            {/* Eyebrow */}

            <span
              className="
                inline-flex
                items-center
                gap-2
                text-[10px]
                uppercase
                tracking-[0.28em]
                text-accent-light
                mb-5
              "
            >

              <span className="w-6 h-px bg-accent-light" />

              Make It Yours

            </span>


            {/* Heading */}

            <h2
              className="
                font-display
                text-[clamp(3.5rem,7vw,7rem)]
                leading-[0.88]
                tracking-[-0.055em]
                font-medium
                text-white
              "
            >

              Drive Your

              <br />

              <span className="text-accent-light">
                Dream Car.
              </span>

            </h2>


            {/* Description */}

            <p
              className="
                max-w-lg
                mt-7
                text-base
                md:text-lg
                leading-8
                text-white/70
              "
            >

              Find the car you love, calculate your monthly
              payment and take the next step toward driving
              it home.

            </p>


            {/* CTA */}

            <Link
  to="/products"
  className="
    group
    mt-8
    inline-flex
    items-center
    gap-3
    rounded-full
    bg-white
    text-navy-bg
    px-7
    py-3.5
    text-sm
    font-semibold
    hover:scale-[1.03]
    transition-transform
  "
>
  Explore Cars

  <ArrowRight
    size={17}
    className="
      group-hover:translate-x-1
      transition-transform
    "
  />
</Link>


            {/* Small trust text */}

            <div
              className="
                flex
                flex-wrap
                items-center
                gap-x-6
                gap-y-2
                mt-8
                text-[10px]
                uppercase
                tracking-[0.16em]
                text-white/45
              "
            >

              <span>Flexible Financing</span>

              <span className="w-1 h-1 rounded-full bg-white/30" />

              <span>Quick Approval</span>

              <span className="w-1 h-1 rounded-full bg-white/30" />

              <span>Trusted Support</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}