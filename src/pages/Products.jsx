import { useState, useMemo, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Search, SlidersHorizontal, CarFront } from 'lucide-react'
import VehicleCard from '../components/VehicleCard.jsx'
import FilterPanel from '../components/FilterPanel.jsx'
import VehicleModal from '../components/VehicleModal.jsx'
import { vehicles, budgetRanges } from '../data/vehicles.js'

const sortOptions = [
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
]

export default function Products() {
  const location = useLocation()
  const [filters, setFilters] = useState({
    brand: null,
    bodyType: null,
    fuelType: null,
    transmission: null,
    budget: null,
    search: '',
  })
  const [sort, setSort] = useState('newest')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [activeVehicle, setActiveVehicle] = useState(null)

  // Apply filters passed in from Home page navigation (brand/body/budget quick links)
  useEffect(() => {
    if (location.state) {
      setFilters((f) => ({ ...f, ...location.state }))
    }
  }, [location.state])

  const filtered = useMemo(() => {
    let list = vehicles.filter((v) => {
      if (filters.brand && v.brand !== filters.brand) return false
      if (filters.bodyType && v.bodyType !== filters.bodyType) return false
      if (filters.fuelType && v.fuelType !== filters.fuelType) return false
      if (filters.transmission && v.transmission !== filters.transmission) return false
      if (filters.budget) {
        const range = budgetRanges.find((b) => b.label === filters.budget)
        if (range && (v.price < range.min || v.price >= range.max)) return false
      }
      if (filters.search) {
        const q = filters.search.toLowerCase()
        const haystack = `${v.brand} ${v.model} ${v.variant}`.toLowerCase()
        if (!haystack.includes(q)) return false
      }
      return true
    })

    if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price)
    else if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price)
    else list = [...list].sort((a, b) => b.year - a.year)

    return list
  }, [filters, sort])

  return (
    <div className="pt-32 pb-24">
      <div className="container-px mb-10">
        <span className="eyebrow mb-3 inline-block">Inventory</span>
        <h1 className="heading-lg mb-3">Browse Our Collection</h1>
        <p className="body-text max-w-xl">
          Every vehicle listed here is currently available and inspected. Filter by budget, body
          type, brand and more to find the right fit.
        </p>
      </div>

      <div className="container-px flex flex-col lg:flex-row gap-10">
        <FilterPanel
          filters={filters}
          setFilters={setFilters}
          resultCount={filtered.length}
          open={mobileFiltersOpen}
          onClose={() => setMobileFiltersOpen(false)}
        />

        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-secondary" />
              <input
                type="text"
                value={filters.search}
                onChange={(e) => setFilters((f) => ({ ...f, search: e.target.value }))}
                placeholder="Search by brand or model…"
                className="w-full rounded-full border border-white/10 bg-navy-surface/60 pl-11 pr-4 py-3 text-sm text-ink-primary placeholder:text-ink-secondary focus:outline-none focus:border-accent-blue/60 transition-colors"
              />
            </div>

            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-ink-primary"
            >
              <SlidersHorizontal size={15} /> Filters
            </button>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-full border border-white/10 bg-navy-surface/60 px-4 py-3 text-sm text-ink-primary focus:outline-none focus:border-accent-blue/60 transition-colors"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value} className="bg-navy">
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          {filtered.length === 0 ? (
            <div className="card-surface flex flex-col items-center justify-center text-center py-20 px-6">
              <span className="grid place-items-center w-14 h-14 rounded-full bg-accent-blue/10 border border-accent-blue/25 text-accent-light mb-5">
                <CarFront size={24} />
              </span>
              <h3 className="font-display text-xl text-ink-primary mb-2">No vehicles match your filters</h3>
              <p className="body-text text-sm max-w-sm mb-6">
                Try widening your budget range or clearing a filter — new stock arrives every week.
              </p>
              <button
                onClick={() => setFilters({ brand: null, bodyType: null, fuelType: null, transmission: null, budget: null, search: '' })}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((v, i) => (
                <VehicleCard key={v.id} vehicle={v} index={i} onView={setActiveVehicle} />
              ))}
            </div>
          )}
        </div>
      </div>

      <VehicleModal vehicle={activeVehicle} onClose={() => setActiveVehicle(null)} />
    </div>
  )
}
