import { useState, useEffect, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Gauge, Fuel, Settings2 } from 'lucide-react'
import { formatPrice, formatKm } from '../data/vehicles.js'

export default function HeroCarousel({ vehicles }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef(null)

  const next = useCallback(() => setIndex((i) => (i + 1) % vehicles.length), [vehicles.length])
  const prev = () => setIndex((i) => (i - 1 + vehicles.length) % vehicles.length)

  useEffect(() => {
    if (paused) return
    const t = setInterval(next, 5500)
    return () => clearInterval(t)
  }, [next, paused])

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (delta > 50) prev()
    else if (delta < -50) next()
    touchStartX.current = null
  }

  const car = vehicles[index]

  return (
    <div
      className="relative rounded-3xl overflow-hidden card-surface"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="relative aspect-[16/10] sm:aspect-[16/9]">
        {vehicles.map((v, i) => (
          <img
            key={v.id}
            src={v.images[0]}
            alt={`${v.brand} ${v.model}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-bg via-navy-bg/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
          <div>
            <p className="text-xs text-accent-light font-semibold tracking-widest uppercase mb-2">
              {car.brand} · {car.year}
            </p>
            <h3 className="font-display text-2xl sm:text-3xl text-ink-primary mb-3">{car.model}</h3>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-secondary">
              <span className="flex items-center gap-1.5"><Fuel size={13} className="text-accent-light" /> {car.fuelType}</span>
              <span className="flex items-center gap-1.5"><Settings2 size={13} className="text-accent-light" /> {car.transmission}</span>
              <span className="flex items-center gap-1.5"><Gauge size={13} className="text-accent-light" /> {formatKm(car.kmDriven)}</span>
            </div>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <span className="font-display text-2xl text-accent-light">{formatPrice(car.price)}</span>
            <Link to="/products" className="btn-primary">View</Link>
          </div>
        </div>
      </div>

      <button
        onClick={prev}
        className="hidden sm:grid absolute left-4 top-1/2 -translate-y-1/2 place-items-center w-10 h-10 rounded-full bg-navy-bg/70 border border-white/10 text-ink-primary hover:border-accent-blue/60 hover:text-accent-light transition-colors"
        aria-label="Previous vehicle"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        className="hidden sm:grid absolute right-4 top-1/2 -translate-y-1/2 place-items-center w-10 h-10 rounded-full bg-navy-bg/70 border border-white/10 text-ink-primary hover:border-accent-blue/60 hover:text-accent-light transition-colors"
        aria-label="Next vehicle"
      >
        <ChevronRight size={18} />
      </button>

      <div className="absolute top-5 right-5 flex items-center gap-2">
        {vehicles.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-6 bg-accent-blue' : 'w-1.5 bg-white/30'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
