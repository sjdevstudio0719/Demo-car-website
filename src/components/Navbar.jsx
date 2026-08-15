import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Inventory', to: '/inventory' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)

      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight

      const progress =
        docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0

      setScrollProgress(Math.min(100, Math.max(0, progress)))
    }

    onScroll()

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header
        className={`
          fixed
          left-0
          right-0
          top-0
          z-50
          transition-all
          duration-500

          ${
            scrolled
              ? `
                border-b
                border-[#1A1A1A]/10
                bg-[#F4F2EC]/90
                py-3
                shadow-[0_8px_30px_rgba(26,26,26,0.06)]
                backdrop-blur-xl
              `
              : `
                bg-transparent
                py-5
              `
          }
        `}
      >

        {/* SCROLL PROGRESS LINE */}

        <div
          className="
            absolute
            bottom-0
            left-0
            h-px
            bg-[#8B7D6B]
            transition-all
            duration-150
            ease-out
          "
          style={{ width: `${scrollProgress}%` }}
        />

        <nav className="container-px flex items-center justify-between">

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            to="/"
            className="group flex items-center"
            onClick={() => setOpen(false)}
          >
            <img
              src="/images/logo.png"
              alt="NEXT Ride"
              className="
                h-10
                w-auto
                object-contain
                transition-all
                duration-300
                group-hover:scale-105
                group-hover:brightness-110
              "
            />
          </Link>


          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <div className="hidden items-center gap-8 lg:flex">

            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `
                    group
                    relative
                    flex
                    flex-col
                    items-center
                    py-2
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-[0.14em]
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? 'text-[#8B7D6B]'
                        : 'text-[#333333] hover:-translate-y-0.5 hover:text-[#1A1A1A]'
                    }

                    after:absolute
                    after:bottom-0
                    after:left-1/2
                    after:h-px
                    after:-translate-x-1/2
                    after:bg-[#8B7D6B]
                    after:transition-all
                    after:duration-300
                    after:ease-out

                    ${
                      isActive
                        ? 'after:w-full'
                        : 'after:w-0 hover:after:w-full'
                    }
                  `
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <span
                        className="
                          absolute
                          -top-2.5
                          h-1
                          w-1
                          rounded-full
                          bg-[#8B7D6B]
                          animate-fadeUp
                        "
                        style={{ animationDuration: '300ms' }}
                      />
                    )}
                    {link.label}
                  </>
                )}
              </NavLink>
            ))}

          </div>


          {/* =================================================
              DESKTOP CTA
          ================================================= */}

          <div className="hidden lg:block">

            <Link
              to="/inventory"
              className="
                group
                relative
                inline-flex
                items-center
                gap-3
                overflow-hidden
                border
                border-[#1A1A1A]
                bg-[#1A1A1A]
                px-5
                py-3
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.15em]
                text-[#F4F2EC]
                transition-all
                duration-300
                hover:border-[#8B7D6B]
                hover:bg-[#8B7D6B]
                hover:shadow-[0_10px_25px_rgba(139,125,107,0.35)]
              "
            >

              {/* Shimmer sweep */}

              <span
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  -left-1/2
                  w-1/2
                  -skew-x-12
                  bg-gradient-to-r
                  from-transparent
                  via-[#F4F2EC]/25
                  to-transparent
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:translate-x-[400%]
                "
              />

              <span className="relative">
                Browse Cars
              </span>

              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="
                  relative
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>

          </div>


          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            className="
              grid
              h-10
              w-10
              place-items-center
              rounded-full
              border
              border-[#1A1A1A]/20
              text-[#1A1A1A]
              transition-all
              duration-300
              hover:border-[#8B7D6B]
              hover:bg-[#8B7D6B]
              hover:text-[#F4F2EC]
              active:scale-90
              lg:hidden
            "
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span
              className="
                grid
                place-items-center
                transition-transform
                duration-300
              "
              style={{
                transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
              }}
            >
              {open ? (
                <X size={19} strokeWidth={1.5} />
              ) : (
                <Menu size={19} strokeWidth={1.5} />
              )}
            </span>
          </button>

        </nav>
      </header>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <div
        className={`
          fixed
          inset-0
          z-40
          overflow-hidden
          bg-[#F4F2EC]
          transition-all
          duration-500
          lg:hidden

          ${
            open
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0'
          }
        `}
      >

        {/* AMBIENT GLOW */}

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            -top-32
            h-80
            w-80
            rounded-full
            bg-[#8B7D6B]/10
            blur-[100px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-32
            -left-32
            h-80
            w-80
            rounded-full
            bg-[#8B7D6B]/5
            blur-[100px]
          "
        />

        <div className="container-px relative flex flex-col pt-28">

          {/* Small label */}

          <div
            className={`
              mb-6
              flex
              items-center
              gap-3
              transition-all
              duration-500

              ${
                open
                  ? 'translate-y-0 opacity-100'
                  : '-translate-y-3 opacity-0'
              }
            `}
          >

            <span
              className="
                h-px
                bg-[#8B7D6B]
                transition-all
                duration-700
              "
              style={{ width: open ? '2rem' : '0rem' }}
            />

            <span
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-[#8B7D6B]
              "
            >
              Next Ride
            </span>

          </div>


          {/* Links */}

          {navLinks.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              style={{
                transitionDelay: open
                  ? `${i * 60 + 100}ms`
                  : '0ms',
              }}
              className={({ isActive }) =>
                `
                  group
                  flex
                  items-center
                  justify-between
                  gap-4
                  border-b
                  border-[#1A1A1A]/10
                  py-5
                  font-display
                  text-2xl
                  tracking-[-0.03em]
                  transition-all
                  duration-500

                  ${
                    open
                      ? 'translate-y-0 opacity-100'
                      : '-translate-y-4 opacity-0'
                  }

                  ${
                    isActive
                      ? 'text-[#8B7D6B]'
                      : 'text-[#1A1A1A]'
                  }
                `
              }
            >
              <span className="flex items-baseline gap-4">
                <span
                  className="
                    text-[11px]
                    font-sans
                    tracking-[0.1em]
                    text-[#8B7D6B]/60
                  "
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                {link.label}
              </span>

              <ArrowUpRight
                size={17}
                strokeWidth={1.5}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </NavLink>
          ))}


          {/* Mobile CTA */}

          <Link
            to="/inventory"
            onClick={() => setOpen(false)}
            className={`
              group
              relative
              mt-8
              flex
              items-center
              justify-between
              overflow-hidden
              border
              border-[#1A1A1A]
              bg-[#1A1A1A]
              px-5
              py-4
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-[#F4F2EC]
              transition-all
              duration-500

              ${
                open
                  ? 'translate-y-0 opacity-100'
                  : '-translate-y-4 opacity-0'
              }
            `}
            style={{
              transitionDelay: open ? '400ms' : '0ms',
            }}
          >

            {/* Shimmer sweep */}

            <span
              className="
                pointer-events-none
                absolute
                inset-y-0
                -left-1/2
                w-1/2
                -skew-x-12
                bg-gradient-to-r
                from-transparent
                via-[#F4F2EC]/20
                to-transparent
                transition-transform
                duration-700
                ease-out
                group-hover:translate-x-[400%]
              "
            />

            <span className="relative">
              Browse Cars
            </span>

            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
              className="relative"
            />
          </Link>

        </div>

      </div>
    </>
  )
}