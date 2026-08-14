import { Link } from 'react-router-dom'
import { Car, Phone, Mail, MapPin, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy border-t border-white/[0.06]">
      <div className="container-px py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="grid place-items-center w-9 h-9 rounded-lg bg-accent-blue/15 border border-accent-blue/30 text-accent-light">
              <Car size={18} strokeWidth={2.25} />
            </span>
            <span className="font-display text-lg tracking-tight text-ink-primary">
              Demo Car <span className="text-accent-light">Website</span>
            </span>
          </div>
          <p className="body-text text-sm max-w-xs">
            Quality pre-owned cars, transparent pricing and hassle-free paperwork — a complete
            car-buying experience you can trust.
          </p>
          <div className="flex items-center gap-3 mt-6">
            {[Facebook, Instagram, Youtube, MessageCircle].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid place-items-center w-9 h-9 rounded-full border border-white/10 text-ink-secondary hover:text-accent-light hover:border-accent-blue/50 transition-colors"
                aria-label="Social link"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-ink-primary tracking-wide mb-5">Navigation</h4>
          <ul className="space-y-3 text-sm">
            {[
              ['Home', '/'],
              ['Products', '/products'],
              ['Services', '/services'],
              ['Gallery', '/gallery'],
              ['Contact', '/contact'],
            ].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="body-text hover:text-accent-light transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-ink-primary tracking-wide mb-5">Services</h4>
          <ul className="space-y-3 text-sm">
            {['Car Financing', 'Insurance Assistance', 'Documentation Support', 'Pan India Delivery', 'Engine Warranty'].map(
              (label) => (
                <li key={label} className="body-text">
                  {label}
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-ink-primary tracking-wide mb-5">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5 body-text">
              <Phone size={16} className="text-accent-light mt-0.5 shrink-0" />
              +91 98300 00000
            </li>
            <li className="flex items-start gap-2.5 body-text">
              <Mail size={16} className="text-accent-light mt-0.5 shrink-0" />
              hello@democarwebsite.in
            </li>
            <li className="flex items-start gap-2.5 body-text">
              <MapPin size={16} className="text-accent-light mt-0.5 shrink-0" />
              Park Street, Kolkata, West Bengal 700016
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="container-px py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-secondary">
          <p>© {year} Demo Car Website. All rights reserved.</p>
          <p>Placeholder content for demonstration purposes.</p>
        </div>
      </div>
    </footer>
  )
}
