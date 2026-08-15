import { useState, useMemo } from 'react'
import { Expand } from 'lucide-react'
import { motion } from 'framer-motion'

import GalleryLightbox from '../components/GalleryLightbox.jsx'
import { galleryImages, galleryCategories } from '../data/content.js'

const sizeClasses = {
  tall: 'row-span-2',
  wide: 'sm:col-span-2',
  normal: '',
}

export default function Gallery() {
  const [category, setCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered = useMemo(
    () =>
      category === 'All'
        ? galleryImages
        : galleryImages.filter((g) => g.category === category),
    [category]
  )

  return (
    <div className="min-h-screen pt-32 pb-24 overflow-visible bg-[#F4F2EC] text-[#1A1A1A]">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <section className="container-px relative mb-10">

        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            inline-block
            mb-3
            text-[10px]
            uppercase
            tracking-[0.25em]
            font-medium
            text-[#8B7D6B]
          "
        >
          Gallery
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            heading-lg
            mb-5
            text-[#1A1A1A]
          "
        >
          Our Cars, Up Close
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="
            body-text
            max-w-xl
            mb-8
            text-[#333333]
          "
        >
          A look at our current inventory, dealership and happy customers
          driving home in their new vehicles.
        </motion.p>


        {/* =================================================
            CATEGORY FILTERS
        ================================================= */}

        <div className="flex flex-wrap gap-2">

          {galleryCategories.map((c) => (

            <button
              key={c}
              onClick={() => {
                setCategory(c)
                setLightboxIndex(null)
              }}
              className={`
                px-4
                py-2
                rounded-full
                text-xs
                font-medium
                border
                transition-all
                duration-200

                ${
                  category === c
                    ? `
                      bg-[#1A1A1A]
                      border-[#1A1A1A]
                      text-[#F4F2EC]
                    `
                    : `
                      border-[#1A1A1A]/10
                      bg-[#F4F2EC]
                      text-[#333333]
                      hover:border-[#8B7D6B]/50
                      hover:text-[#8B7D6B]
                      hover:bg-[#8B7D6B]/[0.04]
                    `
                }
              `}
            >
              {c}
            </button>

          ))}

        </div>

      </section>


      {/* =====================================================
          GALLERY GRID
      ===================================================== */}

      <section className="container-px">

        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            auto-rows-[220px]
            sm:auto-rows-[280px]
            gap-4
          "
        >

          {filtered.map((img, i) => (

            <motion.button
              key={img.id}
              onClick={() => setLightboxIndex(i)}
              initial={{
                opacity: 0,
                scale: 0.94,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: (i % 6) * 0.06,
              }}
              className={`
                group
                relative
                block
                w-full
                overflow-hidden
                rounded-2xl
                text-left
                border
                border-[#1A1A1A]/10
                ${sizeClasses[img.size] || ''}
              `}
            >

              {/* =================================================
                  IMAGE
              ================================================= */}

              <img
                src={img.src}
                alt={img.title || img.category || 'Vehicle'}
                loading="lazy"
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-110
                "
              />


              {/* =================================================
                  OLD COLOR OVERLAY
              ================================================= */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#1A1A1A]/80
                  via-[#1A1A1A]/10
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-400
                  group-hover:opacity-100
                "
              />


              {/* =================================================
                  CONTENT
              ================================================= */}

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  p-5
                  translate-y-2
                  opacity-0
                  transition-all
                  duration-400
                  group-hover:translate-y-0
                  group-hover:opacity-100
                "
              >

                <span
                  className="
                    block
                    mb-1
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-[#F4F2EC]
                  "
                >
                  {img.category}
                </span>

                <span
                  className="
                    block
                    text-base
                    font-semibold
                    text-[#F4F2EC]
                  "
                >
                  {img.title || 'Featured Vehicle'}
                </span>

              </div>


              {/* =================================================
                  EXPAND BUTTON
              ================================================= */}

              <span
                className="
                  absolute
                  right-4
                  top-4
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-[#1A1A1A]/30
                  text-[#F4F2EC]
                  opacity-0
                  backdrop-blur-md
                  border
                  border-[#F4F2EC]/20
                  transition-all
                  duration-300
                  group-hover:opacity-100
                  group-hover:scale-100
                  scale-90
                "
              >
                <Expand className="h-4 w-4" />
              </span>

            </motion.button>

          ))}

        </div>


        {/* =====================================================
            EMPTY STATE
        ===================================================== */}

        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-[#333333]">
              No images available in this category.
            </p>
          </div>
        )}

      </section>


      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      <GalleryLightbox
        images={filtered}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />

    </div>
  )
}