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
         CINEMATIC BACKGROUND PARALLAX
      ========================================== */

      gsap.fromTo(
        background,
        {
          yPercent: -15,
          scale: 1.10,
        },
        {
          yPercent: 18,
          scale: 1.16,
          ease: 'none',

          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2,
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
            start: 'top 80%',
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
        min-h-[900px]
        sm:min-h-[950px]
        lg:min-h-[850px]
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
          inset-0
          z-0
          bg-cover
          bg-center
          bg-no-repeat
          will-change-transform
          scale-[1.08]
        "
        style={{
          backgroundImage: "url('/images/car.png.jpg')",
        }}
      />


      {/* =================================================
          MAIN CHARCOAL OVERLAY
      ================================================= */}

      <div
        className="
          absolute
          inset-0
          z-[1]
          bg-[#1A1A1A]/65
          pointer-events-none
        "
      />


      {/* =================================================
          LEFT CINEMATIC GRADIENT
      ================================================= */}

      <div
        className="
          absolute
          inset-0
          z-[2]
          pointer-events-none
          bg-gradient-to-r
          from-[#1A1A1A]/95
          via-[#1A1A1A]/75
          to-[#333333]/20
        "
      />


      {/* =================================================
          TOP GRADIENT
      ================================================= */}

      <div
        className="
          absolute
          inset-x-0
          top-0
          h-40
          z-[2]
          pointer-events-none
          bg-gradient-to-b
          from-[#1A1A1A]/90
          to-transparent
        "
      />


      {/* =================================================
          BOTTOM GRADIENT
      ================================================= */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-48
          z-[2]
          pointer-events-none
          bg-gradient-to-t
          from-[#1A1A1A]
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
          lg:py-28
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
              AUTO LOAN CALCULATOR
          ============================================= */}

          <div className="w-full max-w-xl">

            <AutoLoanCalculator />

          </div>


          {/* =============================================
              DREAM CAR CONTENT
          ============================================= */}

          <div className="max-w-2xl">

            {/* =========================================
                EYEBROW
            ========================================= */}

            <span
              className="
                inline-flex
                items-center
                gap-2
                text-[10px]
                uppercase
                tracking-[0.28em]
                text-[#8B7D6B]
                mb-5
              "
            >

              <span
                className="
                  w-6
                  h-px
                  bg-[#8B7D6B]
                "
              />

              Make It Yours

            </span>


            {/* =========================================
                HEADING
            ========================================= */}

            <h2
              className="
                font-display
                text-[clamp(3.5rem,7vw,7rem)]
                leading-[0.88]
                tracking-[-0.055em]
                font-medium
                text-[#F4F2EC]
              "
            >

              Drive Your

              <br />

              <span className="text-[#8B7D6B]">
                Dream Car.
              </span>

            </h2>


            {/* =========================================
                DESCRIPTION
            ========================================= */}

            <p
              className="
                max-w-lg
                mt-7
                text-base
                md:text-lg
                leading-8
                text-[#F4F2EC]/70
              "
            >

              Find the car you love, calculate your monthly
              payment and take the next step toward driving
              it home.

            </p>


            {/* =========================================
                CTA
            ========================================= */}

            <Link
              to="/inventory"
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#F4F2EC]
                text-[#1A1A1A]
                px-7
                py-3.5
                text-sm
                font-semibold

                hover:bg-[#8B7D6B]
                hover:text-[#F4F2EC]
                hover:scale-[1.03]

                transition-all
                duration-300
              "
            >

              Explore Cars

              <ArrowRight
                size={17}
                className="
                  group-hover:translate-x-1
                  transition-transform
                  duration-300
                "
              />

            </Link>


            {/* =========================================
                TRUST TEXT
            ========================================= */}

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
                text-[#F4F2EC]/50
              "
            >

              <span>
                Flexible Financing
              </span>

              <span
                className="
                  w-1
                  h-1
                  rounded-full
                  bg-[#8B7D6B]
                "
              />

              <span>
                Quick Approval
              </span>

              <span
                className="
                  w-1
                  h-1
                  rounded-full
                  bg-[#8B7D6B]
                "
              />

              <span>
                Trusted Support
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}