import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function GalleryLightbox({ images, index, onClose, onNavigate }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNavigate((index + 1) % images.length)
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, images.length, onClose, onNavigate])

  if (index === null) return null
  const img = images[index]

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose} />

      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 grid place-items-center w-10 h-10 rounded-full bg-navy-bg/70 border border-white/10 text-white hover:border-accent-blue/60"
        aria-label="Close gallery"
      >
        <X size={20} />
      </button>

      <button
        onClick={() => onNavigate((index - 1 + images.length) % images.length)}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 grid place-items-center w-11 h-11 rounded-full bg-navy-bg/70 border border-white/10 text-white hover:border-accent-blue/60"
        aria-label="Previous image"
      >
        <ChevronLeft size={20} />
      </button>

      <img
        src={img.src}
        alt={img.category}
        className="relative max-h-[85vh] max-w-full rounded-xl object-contain animate-fadeUp"
      />

      <button
        onClick={() => onNavigate((index + 1) % images.length)}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 grid place-items-center w-11 h-11 rounded-full bg-navy-bg/70 border border-white/10 text-white hover:border-accent-blue/60"
        aria-label="Next image"
      >
        <ChevronRight size={20} />
      </button>

      <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-ink-secondary bg-navy-bg/70 border border-white/10 rounded-full px-4 py-1.5">
        {img.category} · {index + 1} / {images.length}
      </span>
    </div>
  )
}
