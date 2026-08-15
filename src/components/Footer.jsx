import { Link } from 'react-router-dom'
import {
  Car,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
} from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#EAE7DF] border-t border-[#1A1A1A]/10 text-[#1A1A1A]">

      {/* =====================================================
          FOOTER MAIN
      ===================================================== */}

      <div
        className="
          container-px
          py-16

          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          xl:grid-cols-5

          gap-10
          xl:gap-12
        "
      >

        {/* =================================================
            BRAND
        ================================================= */}

        <div>

          <div className="flex items-center gap-2.5 mb-4">

            <span
              className="
                grid
                place-items-center
                w-9
                h-9
                rounded-lg

                bg-[#8B7D6B]/10
                border
                border-[#8B7D6B]/25

                text-[#8B7D6B]
              "
            >
              <Car
                size={18}
                strokeWidth={2.25}
              />
            </span>


            <span
              className="
                font-display
                text-lg
                tracking-tight
                text-[#1A1A1A]
              "
            >
              NEXT{' '}

              <span className="text-[#8B7D6B]">
                Ride
              </span>

            </span>

          </div>


          <p
            className="
              text-sm
              leading-6
              text-[#333333]
              max-w-xs
            "
          >
            Quality pre-owned cars, transparent pricing and hassle-free
            paperwork — a complete car-buying experience you can trust.
          </p>


          {/* SOCIAL LINKS */}

          <div className="flex items-center gap-3 mt-6">

            {[
              Facebook,
              Instagram,
              Youtube,
              MessageCircle,
            ].map((Icon, i) => (

              <a
                key={i}
                href="#"
                className="
                  grid
                  place-items-center
                  w-9
                  h-9
                  rounded-full

                  border
                  border-[#1A1A1A]/10

                  text-[#333333]

                  hover:text-[#8B7D6B]
                  hover:border-[#8B7D6B]/40
                  hover:bg-[#8B7D6B]/5

                  transition-colors
                "
                aria-label="Social link"
              >
                <Icon size={16} />
              </a>

            ))}

          </div>

        </div>


        {/* =================================================
            NAVIGATION
        ================================================= */}

        <div>

          <h4
            className="
              text-sm
              font-semibold
              text-[#1A1A1A]
              tracking-wide
              mb-5
            "
          >
            Navigation
          </h4>


          <ul className="space-y-3 text-sm">

            {[
              ['Home', '/'],
              ['Inventory', '/inventory'],
              ['Services', '/services'],
              ['Gallery', '/gallery'],
              ['Contact', '/contact'],
            ].map(([label, to]) => (

              <li key={to}>

                <Link
                  to={to}
                  className="
                    text-[#333333]
                    hover:text-[#8B7D6B]
                    transition-colors
                  "
                >
                  {label}
                </Link>

              </li>

            ))}

          </ul>

        </div>


        {/* =================================================
            SERVICES
        ================================================= */}

        <div>

          <h4
            className="
              text-sm
              font-semibold
              text-[#1A1A1A]
              tracking-wide
              mb-5
            "
          >
            Services
          </h4>


          <ul className="space-y-3 text-sm">

            {[
              'Car Financing',
              'Insurance Assistance',
              'Documentation Support',
              'Pan India Delivery',
              'Engine Warranty',
            ].map((label) => (

              <li
                key={label}
                className="text-[#333333]"
              >
                {label}
              </li>

            ))}

          </ul>

        </div>


        {/* =================================================
            CONTACT
        ================================================= */}

        <div>

          <h4
            className="
              text-sm
              font-semibold
              text-[#1A1A1A]
              tracking-wide
              mb-5
            "
          >
            Contact
          </h4>


          <ul className="space-y-4 text-sm">

            {/* PHONE */}

            <li
              className="
                flex
                items-start
                gap-2.5
                text-[#333333]
              "
            >

              <Phone
                size={16}
                className="
                  text-[#8B7D6B]
                  mt-0.5
                  shrink-0
                "
              />

              <a
                href="tel:+917406-6254-47"
                className="hover:text-[#8B7D6B] transition-colors"
              >
                 +917406625447
              </a>

            </li>


            {/* EMAIL

            <li
              className="
                flex
                items-start
                gap-2.5
                text-[#333333]
              "
            >

              <Mail
                size={16}
                className="
                  text-[#8B7D6B]
                  mt-0.5
                  shrink-0
                "
              />

              <a
                href="mailto:hello@democarwebsite.in"
                className="hover:text-[#8B7D6B] transition-colors"
              >
                hello@democarwebsite.in
              </a>

            </li> */}


            {/* ADDRESS */}

            <li
              className="
                flex
                items-start
                gap-2.5
                text-[#333333]
                leading-5
              "
            >

              <MapPin
                size={16}
                className="
                  text-[#8B7D6B]
                  mt-0.5
                  shrink-0
                "
              />

              <span>
               501/41A, GROUND FLOOR, NEAR HOTEL MEERA INTERNATIONAL, SEN RALEIGH ROAD, ASANSOL
                <br />
                West Bengal 713304
              </span>

            </li>

          </ul>

        </div>


        {/* =================================================
            GOOGLE MAP
        ================================================= */}

        <div className="xl:col-span-1">

          <h4
            className="
              text-sm
              font-semibold
              text-[#1A1A1A]
              tracking-wide
              mb-5
            "
          >
            Find Us
          </h4>


          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-[#1A1A1A]/10
              bg-[#F4F2EC]
              h-[190px]
            "
          >

            <iframe
              title="NEXT Ride Location"
              src="https://www.google.com/maps?q=501%2F41A%2C%20Ground%20Floor%2C%20Near%20Hotel%20Meera%20International%2C%20Sen%20Raleigh%20Road%2C%20Asansol%20713304&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>


          {/* MAP LINK */}

          <a
            href="https://www.google.com/maps/search/?api=1&query=Park+Street,+Kolkata,+West+Bengal+700016"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              gap-1.5
              mt-3
              text-xs
              font-medium
              text-[#8B7D6B]

              hover:text-[#1A1A1A]

              transition-colors
            "
          >

            <MapPin size={13} />

            Open in Google Maps

          </a>

        </div>

      </div>


      {/* =====================================================
          BOTTOM BAR
      ===================================================== */}

      <div
        className="
          border-t
          border-[#1A1A1A]/10
        "
      >

        <div
          className="
            container-px
            py-6

            flex
            flex-col
            sm:flex-row

            items-center
            justify-between

            gap-3

            text-xs
            text-[#333333]/70
          "
        >

          <p>
            © {year} Demo Car Website By Mastermind.
            All rights reserved.
          </p>

          <p>
            Placeholder content for demonstration purposes.
          </p>

        </div>

      </div>

    </footer>
  )
}