import { Link } from 'react-router-dom'
import { ArrowRight, Search, ClipboardCheck, Users } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import { whyChooseUs, financialServices } from '../data/content.js'

const pillars = [
  {
    icon: Search,
    title: 'Quality Inspection',
    description:
      'Every vehicle passes a multi-point inspection covering engine, body, electricals and documentation before it\'s listed.',
  },
  {
    icon: ClipboardCheck,
    title: 'Trust & Transparency',
    description:
      'Complete ownership and accident history is shared upfront — no surprises after you\'ve paid.',
  },
  {
    icon: Users,
    title: 'Customer-First Philosophy',
    description:
      'Our advisors are paid to help you choose the right car, not to push the most expensive one.',
  },
]

export default function Services() {
  return (
    <div className="pt-32 pb-24 bg-[#F4F2EC] text-[#1A1A1A]">

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="container-px mb-8">

        <span
          className="
            inline-block
            mb-3
            text-[10px]
            uppercase
            tracking-[0.25em]
            font-medium
            text-[#8B7D6B]
          "
        >
          Our Services
        </span>

        <h1
          className="
            heading-lg
            mb-5
            max-w-2xl
            text-[#1A1A1A]
          "
        >
          Why Choose Us
        </h1>

        <p
          className="
            body-text
            max-w-2xl
            text-lg
            text-[#333333]
          "
        >
          We built Demo Car Website around one idea: buying a used car should feel as
          straightforward as buying a new one. That means honest inspections, fair pricing and
          support that doesn't disappear after you've signed.
        </p>

      </section>


      {/* =====================================================
          WHY CHOOSE US CARDS
      ===================================================== */}

      <section className="section container-px pt-8">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {whyChooseUs.map((s, i) => (

            <ServiceCard
              key={s.title}
              {...s}
              index={i}
            />

          ))}

        </div>

      </section>


      {/* =====================================================
          ABOUT / PHILOSOPHY
      ===================================================== */}

      <section
        className="
          section
          container-px
          bg-[#EAE7DF]
        "
      >

        <SectionHeading
          eyebrow="About Us"
          title="A Professional, Trustworthy Buying Experience"
        />

        <div className="grid md:grid-cols-3 gap-6">

          {pillars.map((p, i) => (

            <div
              key={p.title}
              className="
                reveal
                rounded-3xl
                border
                border-[#1A1A1A]/10
                bg-[#F4F2EC]
                p-7

                hover:border-[#8B7D6B]/40
                hover:-translate-y-1

                transition-all
                duration-300
              "
              style={{
                animationDelay: `${i * 90}ms`,
              }}
            >

              {/* ICON */}

              <span
                className="
                  grid
                  place-items-center
                  w-12
                  h-12
                  rounded-xl
                  bg-[#8B7D6B]/10
                  border
                  border-[#8B7D6B]/25
                  text-[#8B7D6B]
                  mb-5
                "
              >
                <p.icon size={22} />
              </span>


              {/* TITLE */}

              <h3
                className="
                  font-display
                  text-lg
                  text-[#1A1A1A]
                  mb-2
                "
              >
                {p.title}
              </h3>


              {/* DESCRIPTION */}

              <p
                className="
                  body-text
                  text-sm
                  text-[#333333]
                "
              >
                {p.description}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          FINANCIAL SERVICES RECAP
      ===================================================== */}

      <section className="section container-px">

        <SectionHeading
          eyebrow="Complete Support"
          title="Value-Added Financial Services"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">

          {financialServices.map((s, i) => (

            <ServiceCard
              key={s.title}
              {...s}
              index={i}
            />

          ))}

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="container-px">

        <div
          className="
            relative
            rounded-3xl
            overflow-hidden

            border
            border-[#1A1A1A]/10

            bg-[#EAE7DF]

            p-10
            md:p-16

            text-center
          "
        >

          {/* BACKGROUND ACCENT */}

          <div
            className="
              absolute
              -top-32
              -right-32
              w-80
              h-80
              rounded-full
              bg-[#8B7D6B]/10
              blur-3xl
              pointer-events-none
            "
          />

          <div
            className="
              absolute
              -bottom-32
              -left-32
              w-80
              h-80
              rounded-full
              bg-[#8B7D6B]/5
              blur-3xl
              pointer-events-none
            "
          />


          {/* CTA CONTENT */}

          <div
            className="
              relative
              flex
              flex-col
              items-center
            "
          >

            <h2
              className="
                heading-lg
                mb-4
                text-[#1A1A1A]
              "
            >
              Experience the Difference Yourself
            </h2>


            <p
              className="
                body-text
                max-w-lg
                mb-8
                text-[#333333]
              "
            >
              Browse our current inventory or speak to an advisor about what you're looking for.
            </p>


            <div
              className="
                flex
                flex-wrap
                items-center
                justify-center
                gap-4
              "
            >

              {/* BROWSE CARS */}

              <Link
                to="/products"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#1A1A1A]
                  text-[#F4F2EC]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold

                  hover:bg-[#8B7D6B]

                  transition-all
                  duration-300
                "
              >
                Browse Cars

                <ArrowRight
                  size={16}
                  className="
                    group-hover:translate-x-1
                    transition-transform
                  "
                />

              </Link>


              {/* CONTACT */}

              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#1A1A1A]/15
                  bg-[#F4F2EC]
                  text-[#1A1A1A]
                  px-6
                  py-3.5
                  text-sm
                  font-medium

                  hover:border-[#8B7D6B]/50
                  hover:text-[#8B7D6B]

                  transition-all
                  duration-300
                "
              >
                Contact Dealership
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}