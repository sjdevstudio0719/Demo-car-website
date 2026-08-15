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
    <div className="mb-5">

      {/* GROUP TITLE */}
      <p
        className="
          text-[10px]
          sm:text-xs
          font-semibold
          tracking-[0.12em]
          text-[#333333]
          uppercase
          mb-3
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
                px-3 py-2
                sm:px-3.5 sm:py-2
                rounded-full
                text-[10px] sm:text-xs
                font-medium
                whitespace-nowrap
                border
                transition-all duration-200

                ${
                  active
                    ? `
                      bg-[#1A1A1A]
                      border-[#1A1A1A]
                      text-[#F4F2EC]
                      shadow-[0_4px_15px_rgba(26,26,26,0.12)]
                    `
                    : `
                      border-[#1A1A1A]/10
                      text-[#333333]
                      bg-[#F4F2EC]
                      hover:border-[#8B7D6B]/50
                      hover:text-[#8B7D6B]
                      hover:bg-[#8B7D6B]/5
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

          <div className="flex items-center gap-2">

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
                "
              >
                Filters
              </h3>

              <p
                className="
                  text-[10px]
                  text-[#333333]/70
                  mt-0.5
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

              transition-colors
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

              lg:p-5
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
                mb-6
              "
            >

              <h3
                className="
                  font-display
                  text-lg
                  text-[#1A1A1A]
                  flex
                  items-center
                  gap-2
                "
              >
                <SlidersHorizontal size={18} />
                Filters
              </h3>


              {hasActive && (

                <button
                  type="button"
                  onClick={clearAll}
                  className="
                    text-xs
                    text-[#8B7D6B]
                    hover:text-[#1A1A1A]
                    hover:underline
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
                    text-[#8B7D6B]
                    hover:text-[#1A1A1A]
                    hover:underline
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
                pt-4
                mt-2
                border-t
                border-[#1A1A1A]/10
              "
            >

              <p
                className="
                  text-xs
                  text-[#333333]
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
                py-3
                px-5
                text-sm
                font-semibold

                hover:bg-[#8B7D6B]

                transition-colors

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