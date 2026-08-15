import { Link } from 'react-router-dom'
import { useState, useMemo } from 'react'

import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Wallet,
  FileCheck2,
  Headphones,
  Truck,
  Star,
  Search,
  X,
} from 'lucide-react'

import HeroCarousel from '../components/HeroCarousel.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import TestimonialCarousel from '../components/TestimonialCarousel.jsx'
import CinematicLoanSection from '../components/CinematicLoanSection.jsx'
import { formatPrice } from '../data/vehicles.js' 

import {
  vehicles,
  budgetRanges,
  bodyTypes,
} from '../data/vehicles.js'

import {
  brands,
  carTypes,
} from '../data/brands.js'

import {
  financialServices,
} from '../data/content.js'


export default function Home() {

  // =====================================================
  // SEARCH STATE
  // =====================================================

  const [carSearch, setCarSearch] = useState('')

  const [activeFilter, setActiveFilter] = useState({
    type: '',
    value: '',
  })

  const [openFilter, setOpenFilter] = useState(null)


  // =====================================================
  // FEATURED VEHICLES
  // =====================================================

  const featured = vehicles
    .filter(
      (v) =>
        v.isFeatured &&
        v.status !== 'sold'
    )
    .slice(0, 5)


  // =====================================================
  // FILTER VEHICLES
  // =====================================================

  const filteredVehicles = useMemo(() => {

    let result = vehicles.filter(
      (vehicle) =>
        vehicle.status !== 'sold'
    )


    // =================================================
    // SEARCH
    // =================================================

    if (carSearch.trim()) {

      const search =
        carSearch
          .trim()
          .toLowerCase()

      result = result.filter((vehicle) => {

        const name = String(
          vehicle.name ||
          vehicle.title ||
          ''
        ).toLowerCase()

        const brand = String(
          vehicle.brand ||
          ''
        ).toLowerCase()

        const model = String(
          vehicle.model ||
          ''
        ).toLowerCase()

        const variant = String(
          vehicle.variant ||
          ''
        ).toLowerCase()

        return (
          name.includes(search) ||
          brand.includes(search) ||
          model.includes(search) ||
          variant.includes(search)
        )

      })

    }


    // =================================================
    // BUDGET FILTER
    // =================================================

    if (
      activeFilter.type === 'budget' &&
      activeFilter.value
    ) {

      const selectedBudget =
        String(activeFilter.value)
          .toLowerCase()


      result = result.filter((vehicle) => {

        const priceText =
          String(vehicle.price || '')

        const price =
          parseVehiclePrice(priceText)


        // ---------------------------------------------
        // Under ₹5 Lakh
        // ---------------------------------------------

        if (
          selectedBudget.includes('under')
        ) {

          const match =
            selectedBudget.match(
              /[\d.]+/
            )

          if (match) {

            const limit =
              Number(match[0]) * 100000

            return price < limit

          }

        }


        // ---------------------------------------------
        // ₹5–10 Lakh / 5 - 10 Lakh
        // ---------------------------------------------

        const numbers =
          selectedBudget.match(
            /[\d.]+/g
          )


        if (
          numbers &&
          numbers.length >= 2
        ) {

          const min =
            Number(numbers[0]) * 100000

          const max =
            Number(numbers[1]) * 100000

          return (
            price >= min &&
            price <= max
          )

        }


        // ---------------------------------------------
        // 25 Lakh+
        // ---------------------------------------------

        if (
          selectedBudget.includes('+')
        ) {

          const match =
            selectedBudget.match(
              /[\d.]+/
            )

          if (match) {

            const min =
              Number(match[0]) * 100000

            return price >= min

          }

        }


        return true

      })

    }


    // =================================================
    // BODY TYPE FILTER
    // =================================================

    if (
      activeFilter.type === 'bodyType' &&
      activeFilter.value
    ) {

      result = result.filter(
        (vehicle) =>
          String(
            vehicle.bodyType || ''
          ).toLowerCase() ===
          String(
            activeFilter.value
          ).toLowerCase()
      )

    }


    // =================================================
    // BRAND FILTER
    // =================================================

    if (
      activeFilter.type === 'brand' &&
      activeFilter.value
    ) {

      result = result.filter(
        (vehicle) =>
          String(
            vehicle.brand || ''
          ).toLowerCase() ===
          String(
            activeFilter.value
          ).toLowerCase()
      )

    }


    return result

  }, [
    carSearch,
    activeFilter,
  ])


  // =====================================================
  // SEARCH SUGGESTIONS
  // =====================================================

  const searchResults =
    carSearch.trim()
      ? filteredVehicles.slice(0, 6)
      : []


  // =====================================================
  // DISPLAYED VEHICLES
  // =====================================================

  const displayedVehicles =
    (
      carSearch.trim() ||
      activeFilter.type
    )
      ? filteredVehicles
      : featured


  // =====================================================
  // FILTER HANDLER
  // =====================================================

  const selectFilter = (
    type,
    value
  ) => {

    setCarSearch('')

    setActiveFilter({
      type,
      value,
    })

    setOpenFilter(null)

  }


  // =====================================================
  // CLEAR FILTER
  // =====================================================

  const clearFilters = () => {

    setCarSearch('')

    setActiveFilter({
      type: '',
      value: '',
    })

    setOpenFilter(null)

  }


  // =====================================================
  // SEARCH RESULT CLICK
  // =====================================================

  const handleSearchResult = (
    vehicle
  ) => {

    const searchValue =
      vehicle.name ||
      vehicle.title ||
      vehicle.model ||
      ''

    setCarSearch(searchValue)

    setActiveFilter({
      type: '',
      value: '',
    })

  }


  return (

    <main className="overflow-hidden bg-[#F4F2EC] text-[#1A1A1A]">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[760px] lg:min-h-[850px] flex items-center overflow-hidden">

        {/* Background effects */}

        <div className="absolute inset-0 bg-radial-fade pointer-events-none" />

        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#8B7D6B]/10 blur-[120px] pointer-events-none" />

        <div className="absolute -bottom-40 -left-40 w-[450px] h-[450px] rounded-full bg-[#8B7D6B]/5 blur-[120px] pointer-events-none" />


        {/* Hero content */}

        <div className="container-px relative z-10 w-full pt-32 pb-20 lg:pt-36">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-center">


            {/* =================================================
                LEFT
            ================================================= */}

            <div className="max-w-xl reveal">

              <div className="inline-flex items-center gap-2 rounded-full border border-[#1A1A1A]/10 bg-[#1A1A1A]/[0.035] px-4 py-2 mb-7 backdrop-blur-md">

                <span className="w-1.5 h-1.5 rounded-full bg-[#8B7D6B] shadow-[0_0_10px_rgba(139,125,107,0.5)]" />

                <span className="text-[10px] tracking-[0.2em] uppercase text-[#333333] font-medium">
                  Premium.Curated.Yours
                </span>

              </div>


              <h1 className="font-display text-[clamp(3.2rem,7vw,6.5rem)] leading-[0.9] tracking-[-0.055em] font-medium mb-7">

                Drive

                <br />

                <span className="text-[#8B7D6B]">
                  Something
                </span>

                <br />

                Extraordinary.

              </h1>


              <p className="text-base md:text-lg leading-8 text-[#333333] max-w-lg mb-9">

                Discover carefully selected pre-owned cars with transparent
                pricing, verified quality and a buying experience built around you.

              </p>


              <div className="flex flex-wrap gap-3 mb-12">

                <Link
                  to="/inventory"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-[#8B7D6B]
                    text-[#F4F2EC]
                    px-6
                    py-3.5
                    text-sm
                    font-semibold
                    hover:bg-[#1A1A1A]
                    hover:scale-[1.02]
                    transition-all
                    duration-300
                  "
                >

                  Explore Collection

                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />

                </Link>


                <Link
                  to="/contact"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-[#1A1A1A]/10
                    bg-[#1A1A1A]/[0.035]
                    px-6
                    py-3.5
                    text-sm
                    text-[#1A1A1A]
                    hover:bg-[#1A1A1A]/[0.07]
                    transition-all
                    duration-300
                  "
                >

                  Talk to Us

                </Link>

              </div>


              {/* Stats */}

              <div className="grid grid-cols-3 max-w-lg border-t border-[#1A1A1A]/10 pt-7">

                {[
                  ['500+', 'Cars Sold'],
                  ['4.8/5', 'Customer Rating'],
                  ['12+', 'Years Trusted'],
                ].map(([number, label]) => (

                  <div
                    key={label}
                    className="pr-4"
                  >

                    <p className="font-display text-2xl md:text-3xl font-medium mb-1 text-[#1A1A1A]">
                      {number}
                    </p>

                    <p className="text-[10px] md:text-xs uppercase tracking-wider text-[#333333]">
                      {label}
                    </p>

                  </div>

                ))}

              </div>

            </div>


            {/* =================================================
                RIGHT — HERO CAROUSEL
            ================================================= */}

            <div
              className="relative reveal"
              style={{
                animationDelay: '120ms',
              }}
            >

              <div className="absolute -inset-8 bg-[#8B7D6B]/5 blur-3xl rounded-full pointer-events-none" />

              <div className="relative">

                <HeroCarousel
                  vehicles={featured}
                />

              </div>

            </div>

          </div>

        </div>


        {/* Scroll indicator */}

        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[#333333]">

          <span className="text-[9px] tracking-[0.25em] uppercase">
            Scroll
          </span>

          <div className="w-px h-8 bg-gradient-to-b from-[#333333]/40 to-transparent" />

        </div>

      </section>



      {/* =====================================================
          SMART SEARCH / BROWSE
      ===================================================== */}

      <section className="relative z-20 container-px -mt-8 lg:-mt-14">

        <div className="rounded-3xl border border-[#1A1A1A]/10 bg-[#F4F2EC]/95 backdrop-blur-2xl p-5 md:p-7 shadow-[0_20px_60px_rgba(26,26,26,0.10)]">


          {/* =================================================
              SEARCH BAR
          ================================================= */}

          



          {/* =================================================
              ACTIVE FILTER
          ================================================= */}

          {(activeFilter.type ||
            carSearch.trim()) && (

            <div className="flex flex-wrap items-center gap-3 mb-6">

              <span className="text-xs text-[#333333]">
                Showing:
              </span>

              {carSearch.trim() && (

                <span className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#8B7D6B]/10
                  border
                  border-[#8B7D6B]/20
                  px-3
                  py-1.5
                  text-xs
                  text-[#8B7D6B]
                ">

                  Search: {carSearch}

                </span>

              )}

              {activeFilter.type && (

                <span className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#8B7D6B]/10
                  border
                  border-[#8B7D6B]/20
                  px-3
                  py-1.5
                  text-xs
                  text-[#8B7D6B]
                ">

                  {activeFilter.value}

                </span>

              )}

              <button
                type="button"
                onClick={clearFilters}
                className="
                  text-xs
                  text-[#333333]/60
                  hover:text-[#1A1A1A]
                  underline
                  underline-offset-4
                "
              >

                Clear

              </button>

            </div>

          )}



          {/* =================================================
              BROWSE OPTIONS
          ================================================= */}

          <div className="flex flex-col lg:flex-row lg:items-start gap-6">


            {/* Heading */}

            <div className="shrink-0">

              <h2 className="font-display text-xl md:text-2xl text-[#1A1A1A]">
                Start your search
              </h2>

              <p className="text-xs text-[#333333] mt-1">
                Browse cars by your preference
              </p>

            </div>


            <div className="hidden lg:block w-px h-12 bg-[#1A1A1A]/10" />


            {/* Browse Cards */}

            <div className="grid sm:grid-cols-3 gap-3 flex-1">


              {/* =================================================
                  BUDGET
              ================================================= */}

              <div className="relative">

                <button
                  type="button"
                  onClick={() => {

                    setOpenFilter(
                      openFilter === 'budget'
                        ? null
                        : 'budget'
                    )

                  }}
                  className="
                    group
                    w-full
                    text-left
                    rounded-2xl
                    border
                    border-[#1A1A1A]/10
                    bg-[#1A1A1A]/[0.025]
                    p-4
                    hover:border-[#8B7D6B]/40
                    hover:bg-[#1A1A1A]/[0.045]
                    transition-all
                  "
                >

                  <p className="text-[10px] uppercase tracking-wider text-[#333333]/70 mb-1">
                    Budget
                  </p>

                  <div className="flex items-center justify-between">

                    <span className="text-sm text-[#1A1A1A]">
                      Browse by Budget
                    </span>

                    <ArrowUpRight
                      size={15}
                      className="
                        text-[#333333]/60
                        group-hover:text-[#8B7D6B]
                        transition-colors
                      "
                    />

                  </div>

                </button>


                {openFilter === 'budget' && (

                  <FilterDropdown>

                    {budgetRanges.map(
                      (range, index) => (

                        <button
                          key={
                            range?.label ||
                            index
                          }
                          type="button"
                          onClick={() =>
                            selectFilter(
                              'budget',
                              range?.label ||
                              range
                            )
                          }
                          className="
                            w-full
                            text-left
                            px-4
                            py-3
                            text-sm
                            text-[#1A1A1A]
                            hover:bg-[#8B7D6B]/10
                            transition-colors
                          "
                        >

                          {range?.label ||
                            range}

                        </button>

                      )
                    )}

                  </FilterDropdown>

                )}

              </div>



              {/* =================================================
                  BODY TYPE
              ================================================= */}

              <div className="relative">

                <button
                  type="button"
                  onClick={() => {

                    setOpenFilter(
                      openFilter === 'bodyType'
                        ? null
                        : 'bodyType'
                    )

                  }}
                  className="
                    group
                    w-full
                    text-left
                    rounded-2xl
                    border
                    border-[#1A1A1A]/10
                    bg-[#1A1A1A]/[0.025]
                    p-4
                    hover:border-[#8B7D6B]/40
                    hover:bg-[#1A1A1A]/[0.045]
                    transition-all
                  "
                >

                  <p className="text-[10px] uppercase tracking-wider text-[#333333]/70 mb-1">
                    Body Type
                  </p>

                  <div className="flex items-center justify-between">

                    <span className="text-sm text-[#1A1A1A]">
                      Find by Body Type
                    </span>

                    <ArrowUpRight
                      size={15}
                      className="
                        text-[#333333]/60
                        group-hover:text-[#8B7D6B]
                        transition-colors
                      "
                    />

                  </div>

                </button>


                {openFilter === 'bodyType' && (

                  <FilterDropdown>

                    {bodyTypes.map(
                      (type, index) => (

                        <button
                          key={
                            type?.name ||
                            type ||
                            index
                          }
                          type="button"
                          onClick={() =>
                            selectFilter(
                              'bodyType',
                              type?.name ||
                              type
                            )
                          }
                          className="
                            w-full
                            text-left
                            px-4
                            py-3
                            text-sm
                            text-[#1A1A1A]
                            hover:bg-[#8B7D6B]/10
                            transition-colors
                          "
                        >

                          {type?.name ||
                            type}

                        </button>

                      )
                    )}

                  </FilterDropdown>

                )}

              </div>



              {/* =================================================
                  BRAND
              ================================================= */}

              <div className="relative">

                <button
                  type="button"
                  onClick={() => {

                    setOpenFilter(
                      openFilter === 'brand'
                        ? null
                        : 'brand'
                    )

                  }}
                  className="
                    group
                    w-full
                    text-left
                    rounded-2xl
                    border
                    border-[#1A1A1A]/10
                    bg-[#1A1A1A]/[0.025]
                    p-4
                    hover:border-[#8B7D6B]/40
                    hover:bg-[#1A1A1A]/[0.045]
                    transition-all
                  "
                >

                  <p className="text-[10px] uppercase tracking-wider text-[#333333]/70 mb-1">
                    Brand
                  </p>

                  <div className="flex items-center justify-between">

                    <span className="text-sm text-[#1A1A1A]">
                      Explore Brands
                    </span>

                    <ArrowUpRight
                      size={15}
                      className="
                        text-[#333333]/60
                        group-hover:text-[#8B7D6B]
                        transition-colors
                      "
                    />

                  </div>

                </button>


                {openFilter === 'brand' && (

                  <FilterDropdown>

                    {brands.map(
                      (brand, index) => {

                        const brandName =
                          brand?.name ||
                          brand

                        return (

                          <button
                            key={
                              brandName ||
                              index
                            }
                            type="button"
                            onClick={() =>
                              selectFilter(
                                'brand',
                                brandName
                              )
                            }
                            className="
                              w-full
                              text-left
                              px-4
                              py-3
                              text-sm
                              text-[#1A1A1A]
                              hover:bg-[#8B7D6B]/10
                              transition-colors
                            "
                          >

                            {brandName}

                          </button>

                        )

                      }
                    )}

                  </FilterDropdown>

                )}

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          FEATURED VEHICLES / SEARCH RESULTS
      ===================================================== */}

      <section
        id="car-results"
        className="section container-px"
      >

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">

          <div>

            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8B7D6B]">

              {carSearch.trim() ||
              activeFilter.type
                ? 'Search Results'
                : 'Handpicked Collection'}

            </span>


            <h2 className="font-display text-4xl md:text-5xl tracking-tight mt-3 text-[#1A1A1A]">

              {carSearch.trim() ||
              activeFilter.type
                ? 'Cars For You'
                : 'Featured Vehicles'}

            </h2>


            {(carSearch.trim() ||
              activeFilter.type) && (

              <p className="text-sm text-[#333333]/70 mt-3">

                {displayedVehicles.length}{' '}
                {displayedVehicles.length === 1
                  ? 'vehicle'
                  : 'vehicles'}{' '}
                found

              </p>

            )}

          </div>


          <Link
            to="/inventory"
            className="group inline-flex items-center gap-2 text-sm text-[#333333] hover:text-[#1A1A1A] transition-colors"
          >

            View all vehicles

            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform"
            />

          </Link>

        </div>


        {displayedVehicles.length > 0 ? (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

            {displayedVehicles
              .slice(0, 6)
              .map((vehicle, index) => (

                <Link
                  key={
                    vehicle.id ||
                    index
                  }
                  to="/inventory"
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-[#1A1A1A]/10
                    bg-[#1A1A1A]/[0.025]
                  "
                >

                  <div className="relative aspect-[16/10] overflow-hidden">

                    <img
                      src={
                        vehicle.image ||
                        vehicle.images?.[0]
                      }
                      alt={
                        vehicle.name ||
                        vehicle.title ||
                        'Featured vehicle'
                      }
                      loading="lazy"
                      className="
                        absolute
                        inset-0
                        w-full
                        h-full
                        object-cover
                        group-hover:scale-105
                        transition-transform
                        duration-700
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/70 via-transparent to-transparent" />


                    <div className="absolute top-4 left-4 rounded-full bg-[#1A1A1A]/60 backdrop-blur-md border border-[#F4F2EC]/20 px-3 py-1.5">

                      <span className="text-[9px] uppercase tracking-wider text-[#F4F2EC]">

                        {carSearch.trim() ||
                        activeFilter.type
                          ? 'Match'
                          : 'Featured'}

                      </span>

                    </div>

                  </div>


                  <div className="p-5">

                    <div className="flex items-start justify-between gap-4">

                      <div>

                        <h3 className="font-display text-xl text-[#1A1A1A]">

                          {vehicle.name ||
                            vehicle.title ||
                            vehicle.model ||
                            'Premium Vehicle'}

                        </h3>


                        <p className="text-xs text-[#333333] mt-1">

                          {vehicle.brand || ''}

                          {vehicle.year
                            ? ` • ${vehicle.year}`
                            : ''}

                          {vehicle.transmission
                            ? ` • ${vehicle.transmission}`
                            : ''}

                          {vehicle.fuelType
                            ? ` • ${vehicle.fuelType}`
                            : ''}

                        </p>

                      </div>


                      <ArrowUpRight
                        size={18}
                        className="
                          text-[#333333]/60
                          group-hover:text-[#8B7D6B]
                          transition-colors
                        "
                      />

                    </div>


                    {vehicle.price && (

                      <p className="mt-5 text-lg font-medium text-[#1A1A1A]">

                       {formatPrice(vehicle.price)}

                      </p>

                    )}

                  </div>

                </Link>

              ))}

          </div>

        ) : (

          /* =================================================
             NO VEHICLES
          ================================================= */

          <div className="
            rounded-3xl
            border
            border-[#1A1A1A]/10
            bg-[#1A1A1A]/[0.025]
            p-12
            text-center
          ">

            <Search
              size={34}
              className="mx-auto mb-4 text-[#333333]/30"
            />

            <h3 className="font-display text-2xl text-[#1A1A1A]">
              No vehicles found
            </h3>

            <p className="text-sm text-[#333333]/70 mt-2 mb-6">
              Try another search, brand, budget or body type.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#8B7D6B]
                text-[#F4F2EC]
                px-5
                py-3
                text-sm
                font-semibold
                hover:bg-[#1A1A1A]
                transition-colors
              "
            >

              Clear Search

              <X size={15} />

            </button>

          </div>

        )}

      </section>



      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section className="section container-px">

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">


          <div>

            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8B7D6B]">
              The Difference
            </span>


            <h2 className="font-display text-4xl md:text-5xl tracking-tight mt-4 mb-6 text-[#1A1A1A]">
              Buying a car should feel this good.
            </h2>


            <p className="text-[#333333] leading-7 max-w-md">

              From the moment you discover your car to the day it reaches
              your driveway, we keep the experience simple, transparent and stress-free.

            </p>

          </div>


          <div className="grid sm:grid-cols-2 gap-4">

            {[

              {
                icon: ShieldCheck,
                title: '3-Month Engine Warranty',
                text: 'Extra peace of mind with every eligible vehicle.',
              },

              {
                icon: Wallet,
                title: 'Best Price Guarantee',
                text: 'Transparent pricing without unnecessary surprises.',
              },

              {
                icon: FileCheck2,
                title: 'Hassle-Free Paperwork',
                text: 'We take care of the documentation for you.',
              },

              {
                icon: Truck,
                title: 'Pan India Delivery',
                text: 'Get your chosen vehicle delivered wherever you are.',
              },

            ].map(
              ({
                icon: Icon,
                title,
                text,
              }) => (

                <div
                  key={title}
                  className="
                    group
                    rounded-3xl
                    border
                    border-[#1A1A1A]/10
                    bg-[#1A1A1A]/[0.025]
                    p-6
                    hover:bg-[#1A1A1A]/[0.045]
                    hover:border-[#8B7D6B]/25
                    hover:-translate-y-1.5
                    hover:shadow-[0_20px_40px_rgba(26,26,26,0.10)]
                    transition-all
                    duration-300
                    ease-out
                    cursor-default
                  "
                >

                  <div className="
                    w-11
                    h-11
                    rounded-2xl
                    border
                    border-[#8B7D6B]/25
                    bg-[#8B7D6B]/10
                    grid
                    place-items-center
                    text-[#8B7D6B]
                    mb-6
                    transition-all
                    duration-300
                    group-hover:bg-[#8B7D6B]
                    group-hover:text-[#F4F2EC]
                    group-hover:border-[#8B7D6B]
                    group-hover:scale-110
                  ">

                    <Icon size={19} />

                  </div>


                  <h3 className="
                    font-display
                    text-lg
                    mb-2
                    text-[#1A1A1A]
                    transition-colors
                    duration-300
                    group-hover:text-[#8B7D6B]
                  ">
                    {title}
                  </h3>


                  <p className="text-sm text-[#333333] leading-6">
                    {text}
                  </p>

                </div>

              )
            )}

          </div>

        </div>

      </section>



      {/* =====================================================
          CINEMATIC AUTO LOAN
      ===================================================== */}

      <CinematicLoanSection />



      {/* =====================================================
          FINANCIAL SERVICES
      ===================================================== */}

      <section className="section container-px">

        <SectionHeading
          eyebrow="Complete Support"
          title="Everything You Need Beyond the Car"
        />


        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">

          {financialServices.map(
            (service, index) => (

              <ServiceCard
                key={service.title}
                {...service}
                index={index}
              />

            )
          )}

        </div>

      </section>



      {/* =====================================================
          TESTIMONIALS
      ===================================================== */}

      <section className="section container-px">

        <div className="
          group
          rounded-[2rem]
          border
          border-[#1A1A1A]/10
          bg-[#1A1A1A]/[0.025]
          p-6
          md:p-10
          lg:p-14
          transition-all
          duration-300
          hover:border-[#8B7D6B]/25
          hover:shadow-[0_20px_50px_rgba(26,26,26,0.06)]
        ">

          <div
            className="
              flex
              items-center
              gap-2
              mb-3
              opacity-0
              animate-fadeUp
            "
          >

            <div className="flex gap-0.5">

              {Array.from({
                length: 5,
              }).map((_, index) => (

                <Star
                  key={index}
                  size={13}
                  className="
                    fill-[#8B7D6B]
                    text-[#8B7D6B]
                    opacity-0
                    animate-fadeUp
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                  style={{ animationDelay: `${index * 80}ms` }}
                />

              ))}

            </div>


            <span className="text-xs text-[#333333]">
              Trusted by our customers
            </span>

          </div>


          <SectionHeading
            eyebrow="Customer Stories"
            title="Real People. Real Experiences."
          />


          <div
            className="
              opacity-0
              animate-fadeUp
            "
            style={{ animationDelay: '220ms' }}
          >
            <TestimonialCarousel />
          </div>

        </div>

      </section>



      {/* =====================================================
          TRUST BAR
      ===================================================== */}

      <section className="container-px pb-20">

        <div className="
          rounded-3xl
          border
          border-[#1A1A1A]/10
          bg-[#1A1A1A]/[0.025]
          overflow-hidden
        ">

          <div className="
            grid
            sm:grid-cols-2
            lg:grid-cols-4
            divide-y
            sm:divide-y-0
            sm:divide-x
            divide-[#1A1A1A]/10
          ">

            {[

              [ShieldCheck, 'Verified Vehicles'],
              [Wallet, 'Transparent Pricing'],
              [FileCheck2, 'Easy Documentation'],
              [Headphones, '24/7 Customer Support'],

            ].map(([Icon, title]) => (

              <div
                key={title}
                className="
                  flex
                  items-center
                  gap-4
                  px-6
                  py-6
                "
              >

                <Icon
                  size={20}
                  className="
                    text-[#8B7D6B]
                    shrink-0
                  "
                />

                <span className="text-sm text-[#333333]">
                  {title}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="container-px pb-28">

        <div className="
          relative
          overflow-hidden
          rounded-[2rem]
          border
          border-[#1A1A1A]/10
          bg-[#F4F2EC]
          min-h-[430px]
          flex
          items-center
        ">


          {/* Background */}

          <div className="
            absolute
            inset-0
            bg-gradient-to-br
            from-[#8B7D6B]/15
            via-transparent
            to-transparent
          " />

          <div className="
            absolute
            -right-32
            -bottom-32
            w-[500px]
            h-[500px]
            rounded-full
            bg-[#8B7D6B]/10
            blur-[100px]
          " />

          <div className="
            absolute
            inset-0
            bg-radial-fade
            pointer-events-none
          " />


          <div className="
            relative
            z-10
            p-8
            md:p-14
            lg:p-20
            max-w-3xl
          ">

            <div className="flex gap-1 mb-5">

              {Array.from({
                length: 5,
              }).map((_, index) => (

                <Star
                  key={index}
                  size={14}
                  className="
                    fill-[#8B7D6B]
                    text-[#8B7D6B]
                  "
                />

              ))}

            </div>


            <span className="
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-[#8B7D6B]
            ">
              Your Next Journey Starts Here
            </span>


            <h2 className="
              font-display
              text-4xl
              md:text-6xl
              tracking-[-0.04em]
              leading-[0.95]
              mt-4
              mb-6
              text-[#1A1A1A]
            ">

              Find a car

              <br />

              worth driving.

            </h2>


            <p className="
              text-[#333333]
              max-w-xl
              leading-7
              mb-8
            ">

              Browse our collection of quality pre-owned vehicles and
              discover a smarter, more confident way to buy your next car.

            </p>


            <div className="flex flex-wrap gap-3">

              <Link
                to="/inventory"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#8B7D6B]
                  text-[#F4F2EC]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  hover:bg-[#1A1A1A]
                  transition-all
                "
              >

                Explore Cars

                <ArrowRight
                  size={16}
                  className="
                    group-hover:translate-x-1
                    transition-transform
                  "
                />

              </Link>


              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#1A1A1A]/10
                  bg-[#1A1A1A]/[0.04]
                  px-6
                  py-3.5
                  text-sm
                  text-[#1A1A1A]
                  hover:bg-[#1A1A1A]/[0.08]
                  transition-all
                "
              >

                Contact Us

              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>

  )
}


/* =========================================================
   FILTER DROPDOWN
========================================================= */

function FilterDropdown({
  children,
}) {

  return (

    <div className="
      absolute
      left-0
      right-0
      top-[calc(100%+8px)]
      z-50
      overflow-hidden
      rounded-2xl
      border
      border-[#1A1A1A]/10
      bg-[#F4F2EC]
      shadow-[0_20px_50px_rgba(26,26,26,0.15)]
      max-h-[280px]
      overflow-y-auto
    ">

      {children}

    </div>

  )

}


/* =========================================================
   PRICE PARSER
========================================================= */

function parseVehiclePrice(
  priceText
) {

  const text =
    String(priceText)
      .toLowerCase()
      .replace(/,/g, '')
      .replace(/₹/g, '')
      .trim()


  const number =
    parseFloat(
      text.match(/[\d.]+/)?.[0] || 0
    )


  if (
    text.includes('crore') ||
    text.includes('cr')
  ) {

    return number * 10000000

  }


  if (
    text.includes('lakh') ||
    text.includes('lac') ||
    text.includes('l')
  ) {

    return number * 100000

  }


  return number

}