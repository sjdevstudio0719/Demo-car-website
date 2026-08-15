// import { Link, useNavigate } from 'react-router-dom'
// import { ArrowRight, ArrowUpRight, ShieldCheck, Wallet, FileCheck2, Star } from 'lucide-react'
// import HeroCarousel from '../components/HeroCarousel.jsx'
// import SectionHeading from '../components/SectionHeading.jsx'
// import BrandCard from '../components/BrandCard.jsx'
// import ServiceCard from '../components/ServiceCard.jsx'
// import TestimonialCarousel from '../components/TestimonialCarousel.jsx'
// import { vehicles, budgetRanges, bodyTypes } from '../data/vehicles.js'
// import { brands, carTypes } from '../data/brands.js'
// import { financialServices } from '../data/content.js'

// export default function Home() {
//   const navigate = useNavigate()
//   const featured = vehicles.filter((v) => v.isFeatured && v.status !== 'sold').slice(0, 5)

//   const goWithFilter = (key, value) => navigate('/products', { state: { [key]: value } })

//   return (
//     <div>
//       {/* HERO */}
//       <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 overflow-hidden">
//         <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
//         <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent-blue/10 blur-3xl pointer-events-none" />

//         <div className="container-px relative grid lg:grid-cols-2 gap-14 items-center">
//           <div className="reveal">
//             <span className="eyebrow mb-5 inline-block">Trusted Pre-Owned Cars</span>
//             <h1 className="heading-xl mb-6">
//               Find Your Next Car <span className="text-accent-light">With Confidence</span>
//             </h1>
//             <p className="body-text text-lg max-w-md mb-9">
//               Quality pre-owned cars, transparent pricing, hassle-free paperwork and trusted
//               service — every vehicle, every time.
//             </p>
//             <div className="flex flex-wrap items-center gap-4">
//               <Link to="/products" className="btn-primary">
//                 Browse Cars <ArrowRight size={16} />
//               </Link>
//               <Link to="/services" className="btn-secondary">
//                 Explore Vehicles
//               </Link>
//             </div>

//             <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/[0.06] max-w-md">
//               {[['500+', 'Cars Sold'], ['4.8/5', 'Customer Rating'], ['12+', 'Years Trusted']].map(([n, l]) => (
//                 <div key={l}>
//                   <p className="font-display text-2xl text-ink-primary">{n}</p>
//                   <p className="text-xs text-ink-secondary">{l}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="reveal" style={{ animationDelay: '150ms' }}>
//             <HeroCarousel vehicles={featured} />
//           </div>
//         </div>
//       </section>

//       {/* BROWSE SECTION */}
//       <section className="section container-px">
//         <SectionHeading eyebrow="Start Browsing" title="Find the Right Car for You" />

//         <div className="grid md:grid-cols-3 gap-10">
//           <div>
//             <p className="text-sm font-semibold text-ink-primary mb-4">Browse by Budget</p>
//             <div className="flex flex-col gap-2.5">
//               {budgetRanges.map((b) => (
//                 <button
//                   key={b.label}
//                   onClick={() => goWithFilter('budget', b.label)}
//                   className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm text-ink-secondary hover:border-accent-blue/50 hover:text-ink-primary transition-colors"
//                 >
//                   {b.label} <ArrowUpRight size={14} />
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div>
//             <p className="text-sm font-semibold text-ink-primary mb-4">Browse by Body Type</p>
//             <div className="flex flex-col gap-2.5">
//               {bodyTypes.map((b) => (
//                 <button
//                   key={b}
//                   onClick={() => goWithFilter('bodyType', b)}
//                   className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm text-ink-secondary hover:border-accent-blue/50 hover:text-ink-primary transition-colors"
//                 >
//                   {b} <ArrowUpRight size={14} />
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div>
//             <p className="text-sm font-semibold text-ink-primary mb-4">Popular Brands</p>
//             <div className="flex flex-col gap-2.5">
//               {brands.slice(0, 5).map((b) => (
//                 <button
//                   key={b.name}
//                   onClick={() => goWithFilter('brand', b.name)}
//                   className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm text-ink-secondary hover:border-accent-blue/50 hover:text-ink-primary transition-colors"
//                 >
//                   {b.name} <ArrowUpRight size={14} />
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* EXPLORE CAR TYPES */}
//       <section className="section container-px bg-navy/40">
//         <SectionHeading eyebrow="Categories" title="Explore All Car Types" />
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
//           {carTypes.map((c, i) => (
//             <button
//               key={c.key}
//               onClick={() =>
//                 navigate('/products', {
//                   state: {
//                     bodyType: c.bodyType || null,
//                     transmission: c.transmission || null,
//                     fuelType: c.fuelType || null,
//                   },
//                 })
//               }
//               className="reveal group relative rounded-2xl overflow-hidden aspect-[4/5] text-left"
//               style={{ animationDelay: `${i * 60}ms` }}
//             >
//               <img
//                 src={c.image}
//                 alt={c.label}
//                 loading="lazy"
//                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-navy-bg via-navy-bg/30 to-transparent" />
//               <div className="absolute bottom-0 p-4">
//                 <p className="font-display text-base text-ink-primary">{c.label}</p>
//                 <p className="text-xs text-ink-secondary flex items-center gap-1 mt-1">
//                   {c.tagline} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
//                 </p>
//               </div>
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* FINANCIAL SERVICES */}
//       <section className="section container-px">
//         <SectionHeading eyebrow="Complete Support" title="Value-Added Financial Services" />
//         <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
//           {financialServices.map((s, i) => (
//             <ServiceCard key={s.title} {...s} index={i} />
//           ))}
//         </div>
//       </section>

//       {/* TESTIMONIALS */}
//       <section className="section container-px bg-navy/40">
//         <SectionHeading eyebrow="Testimonials" title="What Our Customers Say" />
//         <TestimonialCarousel />
//       </section>

//       {/* BRANDS */}
//       <section className="section container-px">
//         <SectionHeading eyebrow="Inventory" title="Explore Our Brands" />
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//           {brands.map((b) => (
//             <BrandCard key={b.name} name={b.name} onClick={() => goWithFilter('brand', b.name)} />
//           ))}
//         </div>
//       </section>

//       {/* TRUST STRIP */}
//       <section className="container-px pb-20">
//         <div className="grid sm:grid-cols-3 gap-5">
//           {[
//             [ShieldCheck, '3-Month Engine Warranty', 'Every car, every time'],
//             [Wallet, 'Best Price Guarantee', 'Transparent market pricing'],
//             [FileCheck2, 'Hassle-Free Paperwork', 'Documentation handled for you'],
//           ].map(([Icon, title, sub]) => (
//             <div key={title} className="flex items-center gap-4 card-surface p-5">
//               <span className="grid place-items-center w-11 h-11 rounded-xl bg-accent-blue/10 border border-accent-blue/25 text-accent-light shrink-0">
//                 <Icon size={20} />
//               </span>
//               <div>
//                 <p className="text-sm font-semibold text-ink-primary">{title}</p>
//                 <p className="text-xs text-ink-secondary">{sub}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* FINAL CTA */}
//       <section className="container-px pb-28">
//         <div className="relative rounded-3xl overflow-hidden card-surface p-10 md:p-16 text-center">
//           <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
//           <div className="relative flex flex-col items-center">
//             <div className="flex items-center gap-1 mb-4">
//               {Array.from({ length: 5 }).map((_, i) => (
//                 <Star key={i} size={14} className="text-accent-light fill-accent-light" />
//               ))}
//             </div>
//             <h2 className="heading-lg mb-4">Ready to Find Your Next Car?</h2>
//             <p className="body-text max-w-lg mb-8">
//               Explore our collection of quality pre-owned vehicles and drive away with confidence.
//             </p>
//             <div className="flex flex-wrap items-center justify-center gap-4">
//               <Link to="/products" className="btn-primary">Browse Cars</Link>
//               <Link to="/contact" className="btn-secondary">Contact Us</Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }


// 2nd code 

import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

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
} from 'lucide-react'

import HeroCarousel from '../components/HeroCarousel.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import TestimonialCarousel from '../components/TestimonialCarousel.jsx'
import CinematicLoanSection from '../components/CinematicLoanSection.jsx'

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

  const navigate = useNavigate()

  // =====================================================
  // SEARCH STATE
  // =====================================================

  const [carSearch, setCarSearch] = useState('')


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
  // LIVE SEARCH RESULTS
  // =====================================================

  const searchResults = carSearch.trim()
    ? vehicles
        .filter((vehicle) => {

          const search =
            carSearch
              .trim()
              .toLowerCase()

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

          return (
            name.includes(search) ||
            brand.includes(search) ||
            model.includes(search)
          )
        })
        .filter(
          (vehicle) =>
            vehicle.status !== 'sold'
        )
        .slice(0, 6)
    : []


  // =====================================================
  // FILTER NAVIGATION
  // =====================================================

  const goWithFilter = (key, value) => {

    navigate('/products', {
      state: {
        [key]: value,
      },
    })

  }


  // =====================================================
  // SEARCH SUBMIT
  // =====================================================

  const handleSearch = () => {

    const search =
      carSearch.trim()

    if (!search) {

      navigate('/products')

      return
    }

    navigate('/products', {
      state: {
        search: search,
      },
    })

  }


  // =====================================================
  // SEARCH RESULT CLICK
  // =====================================================

  const handleSearchResult = (vehicle) => {

    const searchValue =
      vehicle.name ||
      vehicle.title ||
      vehicle.model ||
      ''

    setCarSearch('')

    navigate('/products', {
      state: {
        search: searchValue,
      },
    })

  }


  return (

    <main className="overflow-hidden bg-navy-bg text-ink-primary">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[760px] lg:min-h-[850px] flex items-center overflow-hidden">

        {/* Background effects */}

        <div className="absolute inset-0 bg-radial-fade pointer-events-none" />

        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent-blue/10 blur-[120px] pointer-events-none" />

        <div className="absolute -bottom-40 -left-40 w-[450px] h-[450px] rounded-full bg-accent-blue/5 blur-[120px] pointer-events-none" />


        {/* Hero content */}

        <div className="container-px relative z-10 w-full pt-32 pb-20 lg:pt-36">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-center">


            {/* =================================================
                LEFT
            ================================================= */}

            <div className="max-w-xl reveal">

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 mb-7 backdrop-blur-md">

                <span className="w-1.5 h-1.5 rounded-full bg-accent-light shadow-[0_0_10px_rgba(96,165,250,0.8)]" />

                <span className="text-[10px] tracking-[0.2em] uppercase text-ink-secondary font-medium">
                  Premium Pre-Owned Cars
                </span>

              </div>


              <h1 className="font-display text-[clamp(3.2rem,7vw,6.5rem)] leading-[0.9] tracking-[-0.055em] font-medium mb-7">

                Drive

                <br />

                <span className="text-accent-light">
                  Something
                </span>

                <br />

                Extraordinary.

              </h1>


              <p className="text-base md:text-lg leading-8 text-ink-secondary max-w-lg mb-9">

                Discover carefully selected pre-owned cars with transparent
                pricing, verified quality and a buying experience built around you.

              </p>


              <div className="flex flex-wrap gap-3 mb-12">

                <Link
                  to="/products"
                  className="group inline-flex items-center gap-3 rounded-full bg-accent-light text-navy-bg px-6 py-3.5 text-sm font-semibold hover:scale-[1.02] transition-all duration-300"
                >

                  Explore Collection

                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />

                </Link>


                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-6 py-3.5 text-sm text-ink-primary hover:bg-white/[0.07] transition-all duration-300"
                >

                  Talk to Us

                </Link>

              </div>


              {/* Stats */}

              <div className="grid grid-cols-3 max-w-lg border-t border-white/10 pt-7">

                {[
                  ['500+', 'Cars Sold'],
                  ['4.8/5', 'Customer Rating'],
                  ['12+', 'Years Trusted'],
                ].map(([number, label]) => (

                  <div
                    key={label}
                    className="pr-4"
                  >

                    <p className="font-display text-2xl md:text-3xl font-medium mb-1">
                      {number}
                    </p>

                    <p className="text-[10px] md:text-xs uppercase tracking-wider text-ink-secondary">
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

              <div className="absolute -inset-8 bg-accent-blue/5 blur-3xl rounded-full pointer-events-none" />

              <div className="relative">

                <HeroCarousel
                  vehicles={featured}
                />

              </div>

            </div>

          </div>

        </div>


        {/* Scroll indicator */}

        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-ink-secondary">

          <span className="text-[9px] tracking-[0.25em] uppercase">
            Scroll
          </span>

          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />

        </div>

      </section>



      {/* =====================================================
          SMART SEARCH / BROWSE
      ===================================================== */}

      <section className="relative z-20 container-px -mt-8 lg:-mt-14">

        <div className="rounded-3xl border border-white/10 bg-[#0d121a]/90 backdrop-blur-2xl p-5 md:p-7 shadow-2xl">


          {/* =================================================
              SEARCH BAR
          ================================================= */}

          <div className="mb-6 relative">

            <div className="flex items-center gap-2 mb-2">

              <Search
                size={16}
                className="text-accent-light"
              />

              <span className="text-[10px] uppercase tracking-[0.2em] text-ink-secondary">
                Find Your Car
              </span>

            </div>


            <div className="flex flex-col sm:flex-row gap-3">


              {/* SEARCH INPUT */}

              <div className="relative flex-1">

                <Search
                  size={18}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-white/40
                    pointer-events-none
                  "
                />


                <input
                  type="text"
                  value={carSearch}
                  onChange={(e) =>
                    setCarSearch(e.target.value)
                  }
                  onKeyDown={(e) => {

                    if (e.key === 'Enter') {
                      handleSearch()
                    }

                    if (
                      e.key === 'Escape'
                    ) {
                      setCarSearch('')
                    }

                  }}
                  placeholder="Search by brand, model or car name..."
                  className="
                    w-full
                    h-14
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    pl-12
                    pr-12
                    text-sm
                    text-white
                    placeholder:text-white/35
                    outline-none
                    transition-all
                    focus:border-accent-blue/60
                    focus:bg-white/[0.06]
                    focus:ring-2
                    focus:ring-accent-blue/10
                  "
                />


                {/* CLEAR BUTTON */}

                {carSearch && (

                  <button
                    type="button"
                    onClick={() =>
                      setCarSearch('')
                    }
                    className="
                      absolute
                      right-4
                      top-1/2
                      -translate-y-1/2
                      text-white/40
                      hover:text-white
                      transition-colors
                    "
                    aria-label="Clear search"
                  >
                    ×
                  </button>

                )}


                {/* =================================================
                    LIVE SEARCH RESULTS
                ================================================= */}

                {carSearch.trim() && (

                  <div
                    className="
                      absolute
                      left-0
                      right-0
                      top-[calc(100%+10px)]
                      z-50
                      overflow-hidden
                      rounded-2xl
                      border
                      border-white/10
                      bg-[#0d121a]
                      shadow-2xl
                      backdrop-blur-xl
                    "
                  >

                    {searchResults.length > 0 ? (

                      <div className="max-h-[360px] overflow-y-auto">

                        {searchResults.map(
                          (vehicle, index) => (

                            <button
                              key={
                                vehicle.id ||
                                index
                              }
                              type="button"
                              onClick={() =>
                                handleSearchResult(
                                  vehicle
                                )
                              }
                              className="
                                w-full
                                flex
                                items-center
                                gap-4
                                p-3
                                text-left
                                border-b
                                border-white/[0.06]
                                last:border-b-0
                                hover:bg-white/[0.05]
                                transition-colors
                              "
                            >


                              {/* CAR IMAGE */}

                              <div
                                className="
                                  w-20
                                  h-14
                                  rounded-xl
                                  overflow-hidden
                                  bg-white/[0.04]
                                  shrink-0
                                "
                              >

                                <img
                                  src={
                                    vehicle.image ||
                                    vehicle.images?.[0]
                                  }
                                  alt={
                                    vehicle.name ||
                                    vehicle.title ||
                                    'Car'
                                  }
                                  className="
                                    w-full
                                    h-full
                                    object-cover
                                  "
                                />

                              </div>


                              {/* CAR DETAILS */}

                              <div className="min-w-0 flex-1">

                                <p className="text-sm font-medium text-white truncate">

                                  {vehicle.name ||
                                    vehicle.title ||
                                    vehicle.model ||
                                    'Premium Vehicle'}

                                </p>


                                <p className="text-xs text-white/45 mt-1 truncate">

                                  {vehicle.brand || ''}

                                  {vehicle.year
                                    ? ` • ${vehicle.year}`
                                    : ''}

                                  {vehicle.fuelType
                                    ? ` • ${vehicle.fuelType}`
                                    : ''}

                                </p>


                                {vehicle.price && (

                                  <p className="text-xs text-accent-light mt-1">

                                    {vehicle.price}

                                  </p>

                                )}

                              </div>


                              <ArrowRight
                                size={16}
                                className="text-white/30 shrink-0"
                              />

                            </button>

                          )
                        )}

                      </div>

                    ) : (

                      /* NO RESULTS */

                      <div className="p-6 text-center">

                        <Search
                          size={24}
                          className="mx-auto mb-3 text-white/20"
                        />

                        <p className="text-sm text-white/60">
                          No cars found
                        </p>

                        <p className="text-xs text-white/30 mt-1">
                          Try another brand or model
                        </p>

                      </div>

                    )}

                  </div>

                )}

              </div>


              {/* SEARCH BUTTON */}

              <button
                type="button"
                onClick={handleSearch}
                className="
                  h-14
                  px-7
                  rounded-2xl
                  bg-accent-blue
                  text-white
                  text-sm
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-2
                  transition-all
                  hover:bg-accent-light
                  hover:text-navy-bg
                  hover:scale-[1.02]
                  active:scale-[0.98]
                  shrink-0
                "
              >

                Search Cars

                <ArrowUpRight
                  size={17}
                />

              </button>

            </div>

          </div>



          {/* =================================================
              BROWSE OPTIONS
          ================================================= */}

          <div className="flex flex-col lg:flex-row lg:items-center gap-6">


            {/* Heading */}

            <div className="shrink-0">

              <h2 className="font-display text-xl md:text-2xl">
                Start your search
              </h2>

              <p className="text-xs text-ink-secondary mt-1">
                Browse cars by your preference
              </p>

            </div>


            <div className="hidden lg:block w-px h-12 bg-white/10" />


            {/* Browse Cards */}

            <div className="grid sm:grid-cols-3 gap-3 flex-1">


              {/* Budget */}

              <button
                onClick={() =>
                  goWithFilter(
                    'budget',
                    budgetRanges[0]?.label
                  )
                }
                className="
                  group
                  text-left
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.025]
                  p-4
                  hover:border-accent-blue/40
                  hover:bg-white/[0.045]
                  transition-all
                "
              >

                <p className="text-[10px] uppercase tracking-wider text-ink-secondary mb-1">
                  Budget
                </p>

                <div className="flex items-center justify-between">

                  <span className="text-sm">
                    Browse by Budget
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="
                      text-ink-secondary
                      group-hover:text-accent-light
                      transition-colors
                    "
                  />

                </div>

              </button>



              {/* Body Type */}

              <button
                onClick={() =>
                  goWithFilter(
                    'bodyType',
                    bodyTypes[0]
                  )
                }
                className="
                  group
                  text-left
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.025]
                  p-4
                  hover:border-accent-blue/40
                  hover:bg-white/[0.045]
                  transition-all
                "
              >

                <p className="text-[10px] uppercase tracking-wider text-ink-secondary mb-1">
                  Body Type
                </p>

                <div className="flex items-center justify-between">

                  <span className="text-sm">
                    Find by Body Type
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="
                      text-ink-secondary
                      group-hover:text-accent-light
                      transition-colors
                    "
                  />

                </div>

              </button>



              {/* Brand */}

              <button
                onClick={() =>
                  goWithFilter(
                    'brand',
                    brands[0]?.name
                  )
                }
                className="
                  group
                  text-left
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.025]
                  p-4
                  hover:border-accent-blue/40
                  hover:bg-white/[0.045]
                  transition-all
                "
              >

                <p className="text-[10px] uppercase tracking-wider text-ink-secondary mb-1">
                  Brand
                </p>

                <div className="flex items-center justify-between">

                  <span className="text-sm">
                    Explore Brands
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="
                      text-ink-secondary
                      group-hover:text-accent-light
                      transition-colors
                    "
                  />

                </div>

              </button>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          FEATURED VEHICLES
      ===================================================== */}

      <section className="section container-px">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">

          <div>

            <span className="text-[10px] uppercase tracking-[0.25em] text-accent-light">
              Handpicked Collection
            </span>

            <h2 className="font-display text-4xl md:text-5xl tracking-tight mt-3">
              Featured Vehicles
            </h2>

          </div>


          <Link
            to="/products"
            className="group inline-flex items-center gap-2 text-sm text-ink-secondary hover:text-ink-primary transition-colors"
          >

            View all vehicles

            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform"
            />

          </Link>

        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

          {featured
            .slice(0, 3)
            .map((vehicle, index) => (

              <Link
                key={
                  vehicle.id ||
                  index
                }
                to="/products"
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.025]
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

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />


                  <div className="absolute top-4 left-4 rounded-full bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1.5">

                    <span className="text-[9px] uppercase tracking-wider text-white">
                      Featured
                    </span>

                  </div>

                </div>


                <div className="p-5">

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <h3 className="font-display text-xl">

                        {vehicle.name ||
                          vehicle.title ||
                          'Premium Vehicle'}

                      </h3>


                      <p className="text-xs text-ink-secondary mt-1">

                        {vehicle.year ||
                          '2024'}

                        {' • '}

                        {vehicle.transmission ||
                          'Automatic'}

                        {' • '}

                        {vehicle.fuelType ||
                          'Petrol'}

                      </p>

                    </div>


                    <ArrowUpRight
                      size={18}
                      className="
                        text-ink-secondary
                        group-hover:text-accent-light
                        transition-colors
                      "
                    />

                  </div>


                  {vehicle.price && (

                    <p className="mt-5 text-lg font-medium">
                      {vehicle.price}
                    </p>

                  )}

                </div>

              </Link>

            ))}

        </div>

      </section>



      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section className="section container-px">

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">


          <div>

            <span className="text-[10px] uppercase tracking-[0.25em] text-accent-light">
              The Difference
            </span>


            <h2 className="font-display text-4xl md:text-5xl tracking-tight mt-4 mb-6">
              Buying a car should feel this good.
            </h2>


            <p className="text-ink-secondary leading-7 max-w-md">

              From the moment you discover your car to the day it reaches
              your driveway, we keep the experience simple, transparent and stress-free.

            </p>

          </div>


          <div className="grid sm:grid-cols-2 gap-4">

            {[

              {
                icon: ShieldCheck,
                title: '3-Month Warranty',
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
                    border-white/10
                    bg-white/[0.025]
                    p-6
                    hover:bg-white/[0.045]
                    hover:border-accent-blue/25
                    transition-all
                    duration-300
                  "
                >

                  <div className="
                    w-11
                    h-11
                    rounded-2xl
                    border
                    border-accent-blue/20
                    bg-accent-blue/10
                    grid
                    place-items-center
                    text-accent-light
                    mb-6
                  ">

                    <Icon size={19} />

                  </div>


                  <h3 className="font-display text-lg mb-2">
                    {title}
                  </h3>


                  <p className="text-sm text-ink-secondary leading-6">
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
          rounded-[2rem]
          border
          border-white/10
          bg-white/[0.025]
          p-6
          md:p-10
          lg:p-14
        ">

          <div className="flex items-center gap-2 mb-3">

            <div className="flex gap-0.5">

              {Array.from({
                length: 5,
              }).map((_, index) => (

                <Star
                  key={index}
                  size={13}
                  className="
                    fill-accent-light
                    text-accent-light
                  "
                />

              ))}

            </div>


            <span className="text-xs text-ink-secondary">
              Trusted by our customers
            </span>

          </div>


          <SectionHeading
            eyebrow="Customer Stories"
            title="Real People. Real Experiences."
          />


          <TestimonialCarousel />

        </div>

      </section>



      {/* =====================================================
          TRUST BAR
      ===================================================== */}

      <section className="container-px pb-20">

        <div className="
          rounded-3xl
          border
          border-white/10
          bg-white/[0.025]
          overflow-hidden
        ">

          <div className="
            grid
            sm:grid-cols-2
            lg:grid-cols-4
            divide-y
            sm:divide-y-0
            sm:divide-x
            divide-white/10
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
                    text-accent-light
                    shrink-0
                  "
                />

                <span className="text-sm text-ink-secondary">
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
          border-white/10
          min-h-[430px]
          flex
          items-center
        ">


          {/* Background */}

          <div className="
            absolute
            inset-0
            bg-gradient-to-br
            from-accent-blue/15
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
            bg-accent-blue/10
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
                    fill-accent-light
                    text-accent-light
                  "
                />

              ))}

            </div>


            <span className="
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-accent-light
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
            ">

              Find a car

              <br />

              worth driving.

            </h2>


            <p className="
              text-ink-secondary
              max-w-xl
              leading-7
              mb-8
            ">

              Browse our collection of quality pre-owned vehicles and
              discover a smarter, more confident way to buy your next car.

            </p>


            <div className="flex flex-wrap gap-3">

              <Link
                to="/products"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-accent-light
                  text-navy-bg
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
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
                  border-white/10
                  bg-white/[0.04]
                  px-6
                  py-3.5
                  text-sm
                  hover:bg-white/[0.08]
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