import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Car } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-navy-bg/90 backdrop-blur-md border-b border-white/[0.06] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="container-px flex items-center justify-between">

          {/* LOGO */}

          <Link
            to="/"
            className="flex items-center gap-2.5 group"
            onClick={() => setOpen(false)}
          >
            <span className="grid place-items-center w-9 h-9 rounded-lg bg-accent-blue/15 border border-accent-blue/30 text-accent-light group-hover:bg-accent-blue/25 transition-colors">
              <Car size={18} strokeWidth={2.25} />
            </span>

            <span className="font-display text-lg tracking-tight text-ink-primary">
              Demo Car <span className="text-accent-light">Website</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}

          <div className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors ${
                    isActive
                      ? 'text-accent-light'
                      : 'text-ink-secondary hover:text-ink-primary'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* DESKTOP CTA */}

          <div className="hidden lg:block">
            <Link to="/products" className="btn-primary">
              Browse Cars
            </Link>
          </div>

          {/* MOBILE BUTTON */}

          <button
            type="button"
            className="lg:hidden grid place-items-center w-10 h-10 rounded-lg border border-white/10 text-ink-primary"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

        </nav>
      </header>

      {/* MOBILE MENU */}

      <div
        className={`lg:hidden fixed inset-0 z-40 bg-navy-bg/98 backdrop-blur-md transition-all duration-300 ${
          open
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="container-px pt-28 flex flex-col gap-1">

          {navLinks.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              style={{
                transitionDelay: open ? `${i * 40}ms` : '0ms',
              }}
              className={({ isActive }) =>
                `text-lg font-medium py-4 border-b border-white/[0.06] transition-all duration-300 ${
                  open
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-3 opacity-0'
                } ${
                  isActive
                    ? 'text-accent-light'
                    : 'text-ink-primary'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <Link
            to="/products"
            onClick={() => setOpen(false)}
            className={`btn-primary mt-6 w-full transition-all duration-300 ${
              open
                ? 'translate-y-0 opacity-100'
                : '-translate-y-3 opacity-0'
            }`}
          >
            Browse Cars
          </Link>

        </div>
      </div>
    </>
  )
}