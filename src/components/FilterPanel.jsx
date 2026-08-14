import { SlidersHorizontal, X } from 'lucide-react'
import { brands } from '../data/brands.js'
import { bodyTypes, fuelTypes, transmissions, budgetRanges } from '../data/vehicles.js'

function FilterGroup({ title, options, selected, onToggle }) {
  return (
    <div className="mb-6">
      <p className="text-xs font-semibold tracking-wide text-ink-secondary uppercase mb-3">{title}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const label = typeof opt === 'string' ? opt : opt.label
          const value = typeof opt === 'string' ? opt : opt.label
          const active = selected === value
          return (
            <button
              key={label}
              onClick={() => onToggle(active ? null : value)}
              className={`px-3.5 py-2 rounded-full text-xs font-medium border transition-colors ${
                active
                  ? 'bg-accent-blue border-accent-blue text-white'
                  : 'border-white/10 text-ink-secondary hover:border-accent-blue/40 hover:text-ink-primary'
              }`}
            >
              {label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default function FilterPanel({ filters, setFilters, resultCount, open, onClose }) {
  const update = (key, value) => setFilters((f) => ({ ...f, [key]: value }))
  const clearAll = () =>
    setFilters({ brand: null, bodyType: null, fuelType: null, transmission: null, budget: null, search: filters.search })

  const hasActive = filters.brand || filters.bodyType || filters.fuelType || filters.transmission || filters.budget

  return (
    <aside
      className={`
        lg:static lg:translate-x-0 lg:opacity-100 lg:pointer-events-auto lg:w-72 lg:shrink-0
        fixed inset-0 z-40 lg:z-auto bg-navy-bg/98 lg:bg-transparent p-6 lg:p-0 overflow-y-auto
        transition-all duration-300
        ${open ? 'translate-x-0 opacity-100 pointer-events-auto' : '-translate-x-full opacity-0 pointer-events-none lg:opacity-100'}
      `}
    >
      <div className="flex items-center justify-between mb-6 lg:hidden">
        <h3 className="font-display text-lg flex items-center gap-2"><SlidersHorizontal size={18} /> Filters</h3>
        <button onClick={onClose} className="w-9 h-9 grid place-items-center rounded-full border border-white/10">
          <X size={18} />
        </button>
      </div>

      <div className="card-surface p-5 lg:sticky lg:top-28">
        <div className="hidden lg:flex items-center justify-between mb-6">
          <h3 className="font-display text-lg flex items-center gap-2"><SlidersHorizontal size={18} /> Filters</h3>
          {hasActive && (
            <button onClick={clearAll} className="text-xs text-accent-light hover:underline">
              Clear all
            </button>
          )}
        </div>

        <FilterGroup title="Budget" options={budgetRanges} selected={filters.budget} onToggle={(v) => update('budget', v)} />
        <FilterGroup title="Body Type" options={bodyTypes} selected={filters.bodyType} onToggle={(v) => update('bodyType', v)} />
        <FilterGroup title="Brand" options={brands.map((b) => b.name)} selected={filters.brand} onToggle={(v) => update('brand', v)} />
        <FilterGroup title="Fuel Type" options={fuelTypes} selected={filters.fuelType} onToggle={(v) => update('fuelType', v)} />
        <FilterGroup title="Transmission" options={transmissions} selected={filters.transmission} onToggle={(v) => update('transmission', v)} />

        <div className="pt-2 border-t border-white/[0.06]">
          <p className="text-sm text-ink-secondary">{resultCount} vehicle{resultCount !== 1 ? 's' : ''} found</p>
        </div>

        <button onClick={onClose} className="btn-primary w-full mt-5 lg:hidden">
          Show {resultCount} results
        </button>
      </div>
    </aside>
  )
}
