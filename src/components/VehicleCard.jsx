import { Link } from 'react-router-dom'
import { Gauge, Fuel, Settings2, MapPin, ArrowUpRight } from 'lucide-react'
import { formatPrice, formatKm } from '../data/vehicles.js'

export default function VehicleCard({ vehicle, index = 0, onView }) {
  const sold = vehicle.status === 'sold'

  return (
    <div
      className="reveal group card-surface overflow-hidden hover:border-accent-blue/40 hover:-translate-y-1 transition-all duration-300"
      style={{ animationDelay: `${Math.min(index, 8) * 70}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={vehicle.images[0]}
          alt={`${vehicle.brand} ${vehicle.model}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-bg/80 via-transparent to-transparent" />
        {vehicle.isNewArrival && !sold && (
          <span className="absolute top-3 left-3 rounded-full bg-accent-blue/90 px-3 py-1 text-[11px] font-semibold tracking-wide text-white">
            New Arrival
          </span>
        )}
        {sold && (
          <span className="absolute top-3 left-3 rounded-full bg-black/70 px-3 py-1 text-[11px] font-semibold tracking-wide text-white">
            Sold
          </span>
        )}
        <span className="absolute bottom-3 right-3 rounded-full bg-navy-bg/85 border border-white/10 px-3 py-1 text-xs font-semibold text-accent-light">
          {formatPrice(vehicle.price)}
        </span>
      </div>

      <div className="p-5">
        <p className="text-xs text-ink-secondary mb-1">{vehicle.brand} · {vehicle.year}</p>
        <h3 className="font-display text-lg text-ink-primary mb-3">
          {vehicle.model} <span className="text-ink-secondary text-sm font-sans">{vehicle.variant}</span>
        </h3>

        <div className="grid grid-cols-2 gap-y-2 text-xs text-ink-secondary mb-4">
          <span className="flex items-center gap-1.5"><Gauge size={13} className="text-accent-light" /> {formatKm(vehicle.kmDriven)}</span>
          <span className="flex items-center gap-1.5"><Fuel size={13} className="text-accent-light" /> {vehicle.fuelType}</span>
          <span className="flex items-center gap-1.5"><Settings2 size={13} className="text-accent-light" /> {vehicle.transmission}</span>
          <span className="flex items-center gap-1.5"><MapPin size={13} className="text-accent-light" /> {vehicle.location}</span>
        </div>

        <button
          onClick={() => onView?.(vehicle)}
          disabled={sold}
          className="w-full inline-flex items-center justify-center gap-1.5 rounded-full border border-white/15 py-2.5 text-sm font-semibold text-ink-primary
            transition-all duration-300 hover:border-accent-blue/60 hover:bg-white/5 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {sold ? 'Sold Out' : 'View Details'}
          {!sold && <ArrowUpRight size={15} />}
        </button>
      </div>
    </div>
  )
}
