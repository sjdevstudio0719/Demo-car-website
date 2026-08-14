import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, Gauge, Fuel, Settings2, MapPin, Calendar, User, Palette, Check, MessageCircle } from 'lucide-react'
import { formatPrice, formatKm } from '../data/vehicles.js'

export default function VehicleModal({ vehicle, onClose }) {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    setActiveImage(0)
    document.body.style.overflow = vehicle ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [vehicle])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!vehicle) return null

  const specs = [
    { icon: Calendar, label: 'Year', value: vehicle.year },
    { icon: Gauge, label: 'Driven', value: formatKm(vehicle.kmDriven) },
    { icon: Fuel, label: 'Fuel', value: vehicle.fuelType },
    { icon: Settings2, label: 'Transmission', value: vehicle.transmission },
    { icon: User, label: 'Ownership', value: vehicle.owners },
    { icon: Palette, label: 'Colour', value: vehicle.color },
    { icon: MapPin, label: 'Location', value: vehicle.location },
  ]

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-navy shadow-card animate-fadeUp">
        <button
          onClick={onClose}
          className="sticky top-4 float-right mr-4 z-10 grid place-items-center w-9 h-9 rounded-full bg-navy-bg/80 border border-white/10 text-ink-primary hover:border-accent-blue/60 hover:text-accent-light transition-colors"
          aria-label="Close details"
        >
          <X size={18} />
        </button>

        <div className="p-6 sm:p-8 clear-both">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3">
                <img src={vehicle.images[activeImage]} alt={vehicle.model} className="w-full h-full object-cover" />
              </div>
              {vehicle.images.length > 1 && (
                <div className="flex gap-2">
                  {vehicle.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                        i === activeImage ? 'border-accent-blue' : 'border-transparent opacity-60'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <p className="text-xs text-accent-light font-semibold tracking-widest uppercase mb-2">{vehicle.brand}</p>
              <h2 className="heading-md mb-1">{vehicle.model}</h2>
              <p className="body-text text-sm mb-4">{vehicle.variant}</p>
              <p className="font-display text-3xl text-accent-light mb-5">{formatPrice(vehicle.price)}</p>
              <p className="body-text text-sm mb-6">{vehicle.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {specs.map((s) => (
                  <div key={s.label} className="flex items-start gap-2">
                    <s.icon size={15} className="text-accent-light mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[11px] text-ink-secondary">{s.label}</p>
                      <p className="text-sm text-ink-primary font-medium">{s.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact" onClick={onClose} className="btn-primary flex-1">
                  <MessageCircle size={16} /> Enquire Now
                </Link>
                <a href="tel:+919830000000" className="btn-secondary flex-1">Call Dealer</a>
              </div>
            </div>
          </div>

          {vehicle.features?.length > 0 && (
            <div className="mt-8 pt-8 border-t border-white/[0.06]">
              <h3 className="font-display text-lg text-ink-primary mb-4">Key Features</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {vehicle.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-ink-secondary">
                    <Check size={14} className="text-accent-light shrink-0" /> {f}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
