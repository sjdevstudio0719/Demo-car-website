import { useState, useMemo } from 'react'
import { Expand } from 'lucide-react'
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
    () => (category === 'All' ? galleryImages : galleryImages.filter((g) => g.category === category)),
    [category]
  )

  return (
    <div className="min-h-screen pt-32 pb-24 overflow-visible">
      <section className="container-px relative mb-10">
        <span className="eyebrow mb-3 inline-block">Gallery</span>
        <h1 className="heading-lg mb-5">Our Cars, Up Close</h1>
        <p className="body-text max-w-xl mb-8">
          A look at our current inventory, dealership and happy customers driving home in their
          new vehicles.
        </p>

        <div className="flex flex-wrap gap-2">
          {galleryCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-2 rounded-full text-xs font-medium border transition-colors ${
                category === c
                  ? 'bg-accent-blue border-accent-blue text-white'
                  : 'border-white/10 text-ink-secondary hover:border-accent-blue/40 hover:text-ink-primary'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="container-px">
       <div className="grid grid-cols-2 sm:grid-cols-3 auto-rows-[220px] sm:auto-rows-[280px] gap-4">
          {filtered.map((img, i) => (
            <button
              key={img.id}
              onClick={() => setLightboxIndex(i)}
              className={`reveal group relative rounded-2xl overflow-hidden ${sizeClasses[img.size] || ''}`}
              style={{ animationDelay: `${Math.min(i, 10) * 50}ms` }}
            >
              <img
                src={img.src}
                alt={img.category}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy-bg/0 group-hover:bg-navy-bg/40 transition-colors duration-300 flex items-center justify-center">
                <Expand size={22} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="absolute bottom-3 left-3 text-[11px] font-medium text-white bg-navy-bg/70 border border-white/10 rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {img.category}
              </span>
            </button>
          ))}
        </div>
      </section>

      <GalleryLightbox
        images={filtered}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </div>
  )
}
