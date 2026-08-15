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
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
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
                backdrop-blur-xl
              `
              : `
                bg-transparent
                py-5
              `
          }
        `}
      >
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
                    relative
                    py-2
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-[0.14em]
                    transition-colors
                    duration-300

                    ${
                      isActive
                        ? 'text-[#8B7D6B]'
                        : 'text-[#333333] hover:text-[#1A1A1A]'
                    }

                    after:absolute
                    after:bottom-0
                    after:left-0
                    after:h-px
                    after:bg-[#8B7D6B]
                    after:transition-all
                    after:duration-300

                    ${
                      isActive
                        ? 'after:w-full'
                        : 'after:w-0 hover:after:w-full'
                    }
                  `
                }
              >
                {link.label}
              </NavLink>
            ))}

          </div>


          {/* =================================================
              DESKTOP CTA
          ================================================= */}

          <div className="hidden lg:block">

            <Link
              to="/products"
              className="
                group
                inline-flex
                items-center
                gap-3
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
              "
            >
              Browse Cars

              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="
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
              lg:hidden
            "
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? (
              <X size={19} strokeWidth={1.5} />
            ) : (
              <Menu size={19} strokeWidth={1.5} />
            )}
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

        <div className="container-px flex flex-col pt-28">

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

            <span className="h-px w-8 bg-[#8B7D6B]" />

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
                  flex
                  items-center
                  justify-between
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
              {link.label}

              <ArrowUpRight
                size={17}
                strokeWidth={1.5}
              />
            </NavLink>
          ))}


          {/* Mobile CTA */}

          <Link
            to="/products"
            onClick={() => setOpen(false)}
            className={`
              mt-8
              flex
              items-center
              justify-between
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
            Browse Cars

            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
            />
          </Link>

        </div>

      </div>
    </>
  )
}