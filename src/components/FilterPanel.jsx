import { SlidersHorizontal, X } from 'lucide-react'
import { brands } from '../data/brands.js'
import {
  bodyTypes,
  fuelTypes,
  transmissions,
  budgetRanges,
} from '../data/vehicles.js'

function FilterGroup({ title, options, selected, onToggle }) {
  return (
    <div className="mb-6">

      {/* GROUP TITLE */}
      <p
        className="
          text-[10px]
          sm:text-xs
          font-semibold
          tracking-[0.16em]
          text-[#333333]/80
          uppercase
          mb-3.5
        "
      >
        {title}
      </p>


      {/* OPTIONS */}
      <div className="flex flex-wrap gap-2">

        {options.map((opt) => {

          const label =
            typeof opt === 'string'
              ? opt
              : opt.label

          const value =
            typeof opt === 'string'
              ? opt
              : opt.label

          const active =
            selected === value

          return (

            <button
              key={label}
              type="button"
              onClick={() =>
                onToggle(
                  active
                    ? null
                    : value
                )
              }
              className={`
                px-3.5 py-2
                sm:px-4 sm:py-2.5
                rounded-full
                text-[10px] sm:text-xs
                font-medium
                tracking-wide
                whitespace-nowrap
                border
                transition-all duration-300 ease-out
                active:scale-[0.97]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#8B7D6B]/40
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#F4F2EC]

                ${
                  active
                    ? `
                      bg-[#1A1A1A]
                      border-[#1A1A1A]
                      text-[#F4F2EC]
                      shadow-[0_6px_18px_-4px_rgba(26,26,26,0.35)]
                      -translate-y-[1px]
                    `
                    : `
                      border-[#1A1A1A]/10
                      text-[#333333]
                      bg-[#F4F2EC]
                      hover:border-[#8B7D6B]/50
                      hover:text-[#8B7D6B]
                      hover:bg-[#8B7D6B]/5
                      hover:-translate-y-[1px]
                      hover:shadow-[0_4px_12px_-4px_rgba(26,26,26,0.12)]
                    `
                }
              `}
            >
              {label}
            </button>

          )
        })}

      </div>

    </div>
  )
}


export default function FilterPanel({
  filters,
  setFilters,
  resultCount,
  open,
  onClose,
}) {

  const update = (key, value) => {

    setFilters((f) => ({
      ...f,
      [key]: value,
    }))

  }


  const clearAll = () => {

    setFilters({
      brand: null,
      bodyType: null,
      fuelType: null,
      transmission: null,
      budget: null,
      search: filters.search,
    })

  }


  const hasActive =
    filters.brand ||
    filters.bodyType ||
    filters.fuelType ||
    filters.transmission ||
    filters.budget


  return (

    <>

      {/* =====================================================
          MOBILE BACKDROP
      ===================================================== */}

      {open && (

        <div
          onClick={onClose}
          className="
            fixed
            inset-0
            z-40
            bg-[#1A1A1A]/50
            backdrop-blur-sm
            lg:hidden
            transition-opacity
            duration-300
          "
        />

      )}


      {/* =====================================================
          FILTER PANEL
      ===================================================== */}

      <aside
        className={`
          fixed
          top-0
          left-0
          bottom-0
          z-50

          w-[88%]
          max-w-[380px]

          bg-[#F4F2EC]

          shadow-[8px_0_40px_-12px_rgba(26,26,26,0.25)]

          overflow-y-auto
          overscroll-contain

          transition-transform
          duration-300
          ease-out

          lg:static
          lg:z-auto
          lg:w-72
          lg:max-w-none
          lg:translate-x-0
          lg:overflow-visible
          lg:bg-transparent
          lg:shadow-none

          ${
            open
              ? 'translate-x-0'
              : '-translate-x-full'
          }

          lg:translate-x-0
        `}
      >


        {/* =====================================================
            MOBILE HEADER
        ===================================================== */}

        <div
          className="
            flex
            items-center
            justify-between

            px-5
            py-5

            border-b
            border-[#1A1A1A]/10

            lg:hidden
          "
        >

          <div className="flex items-center gap-3">

            <div
              className="
                w-9
                h-9
                rounded-xl
                bg-[#8B7D6B]/10
                border
                border-[#8B7D6B]/25
                grid
                place-items-center
                text-[#8B7D6B]
                shadow-[0_2px_8px_-2px_rgba(139,125,107,0.3)]
              "
            >
              <SlidersHorizontal size={17} />
            </div>


            <div>

              <h3
                className="
                  font-display
                  text-lg
                  text-[#1A1A1A]
                  tracking-tight
                "
              >
                Filters
              </h3>

              <p
                className="
                  text-[10px]
                  text-[#333333]/70
                  mt-0.5
                  tracking-wide
                "
              >
                Refine your search
              </p>

            </div>

          </div>


          <button
            type="button"
            onClick={onClose}
            className="
              w-9
              h-9
              grid
              place-items-center
              rounded-full

              border
              border-[#1A1A1A]/10

              text-[#333333]

              hover:text-[#1A1A1A]
              hover:bg-[#1A1A1A]/5
              active:scale-95

              transition-all
              duration-200
            "
          >
            <X size={18} />
          </button>

        </div>


        {/* =====================================================
            FILTER CONTENT
        ===================================================== */}

        <div
          className="
            p-5
            lg:p-0
          "
        >

          <div
            className="
              rounded-3xl
              border
              border-[#1A1A1A]/10
              bg-[#F4F2EC]
              p-5

              lg:p-6
              lg:shadow-[0_10px_40px_-16px_rgba(26,26,26,0.15)]
              lg:sticky
              lg:top-28
            "
          >


            {/* =================================================
                DESKTOP HEADER
            ================================================= */}

            <div
              className="
                hidden
                lg:flex
                items-center
                justify-between
                mb-7
                pb-5
                border-b
                border-[#1A1A1A]/8
              "
            >

              <h3
                className="
                  font-display
                  text-lg
                  text-[#1A1A1A]
                  tracking-tight
                  flex
                  items-center
                  gap-2.5
                "
              >
                <span
                  className="
                    w-8
                    h-8
                    rounded-lg
                    bg-[#8B7D6B]/10
                    border
                    border-[#8B7D6B]/25
                    grid
                    place-items-center
                    text-[#8B7D6B]
                  "
                >
                  <SlidersHorizontal size={15} />
                </span>
                Filters
              </h3>


              {hasActive && (

                <button
                  type="button"
                  onClick={clearAll}
                  className="
                    text-xs
                    font-medium
                    text-[#8B7D6B]
                    hover:text-[#1A1A1A]
                    transition-colors
                    duration-200
                  "
                >
                  Clear all
                </button>

              )}

            </div>


            {/* =================================================
                MOBILE CLEAR ALL
            ================================================= */}

            {hasActive && (

              <div className="flex justify-end mb-4 lg:hidden">

                <button
                  type="button"
                  onClick={clearAll}
                  className="
                    text-[11px]
                    font-medium
                    text-[#8B7D6B]
                    hover:text-[#1A1A1A]
                    transition-colors
                    duration-200
                  "
                >
                  Clear all filters
                </button>

              </div>

            )}


            {/* =================================================
                BUDGET
            ================================================= */}

            <FilterGroup
              title="Budget"
              options={budgetRanges}
              selected={filters.budget}
              onToggle={(value) =>
                update('budget', value)
              }
            />


            {/* =================================================
                BODY TYPE
            ================================================= */}

            <FilterGroup
              title="Body Type"
              options={bodyTypes}
              selected={filters.bodyType}
              onToggle={(value) =>
                update('bodyType', value)
              }
            />


            {/* =================================================
                BRAND
            ================================================= */}

            <FilterGroup
              title="Brand"
              options={brands.map(
                (brand) => brand.name
              )}
              selected={filters.brand}
              onToggle={(value) =>
                update('brand', value)
              }
            />


            {/* =================================================
                FUEL TYPE
            ================================================= */}

            <FilterGroup
              title="Fuel Type"
              options={fuelTypes}
              selected={filters.fuelType}
              onToggle={(value) =>
                update('fuelType', value)
              }
            />


            {/* =================================================
                TRANSMISSION
            ================================================= */}

            <FilterGroup
              title="Transmission"
              options={transmissions}
              selected={filters.transmission}
              onToggle={(value) =>
                update(
                  'transmission',
                  value
                )
              }
            />


            {/* =================================================
                RESULT COUNT
            ================================================= */}

            <div
              className="
                pt-5
                mt-3
                border-t
                border-[#1A1A1A]/10
              "
            >

              <p
                className="
                  text-xs
                  text-[#333333]
                  tracking-wide
                "
              >

                <span
                  className="
                    text-[#1A1A1A]
                    font-semibold
                  "
                >
                  {resultCount}
                </span>{' '}

                vehicle
                {resultCount !== 1
                  ? 's'
                  : ''}{' '}

                found

              </p>

            </div>


            {/* =================================================
                MOBILE SHOW RESULTS
            ================================================= */}

            <button
              type="button"
              onClick={onClose}
              className="
                w-full
                mt-5
                rounded-full
                bg-[#1A1A1A]
                text-[#F4F2EC]
                py-3.5
                px-5
                text-sm
                font-semibold
                tracking-wide

                shadow-[0_8px_24px_-8px_rgba(26,26,26,0.4)]

                hover:bg-[#8B7D6B]
                active:scale-[0.98]

                transition-all
                duration-250

                lg:hidden
              "
            >
              Show {resultCount} results
            </button>

          </div>

        </div>

      </aside>

    </>
  )
}