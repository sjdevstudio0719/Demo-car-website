import { useState, useEffect, useCallback } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../data/content.js'

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0)
  const perView = 1

  const next = useCallback(() => setIndex((i) => (i + 1) % testimonials.length), [])
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const t = setInterval(next, 6000)
    return () => clearInterval(t)
  }, [next])

  const t = testimonials[index]

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="card-surface p-8 md:p-10 text-center min-h-[260px] flex flex-col items-center justify-center">
        <Quote className="text-accent-blue/40 mb-4" size={32} />
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < t.rating ? 'text-accent-light fill-accent-light' : 'text-white/15'}
            />
          ))}
        </div>
        <p className="body-text text-base md:text-lg mb-6 max-w-lg">"{t.review}"</p>
        <div>
          <p className="font-display text-ink-primary">{t.name}</p>
          <p className="text-xs text-ink-secondary">{t.vehicle}</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prev}
          className="grid place-items-center w-10 h-10 rounded-full border border-white/10 text-ink-secondary hover:text-accent-light hover:border-accent-blue/50 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-6 bg-accent-blue' : 'w-1.5 bg-white/15'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="grid place-items-center w-10 h-10 rounded-full border border-white/10 text-ink-secondary hover:text-accent-light hover:border-accent-blue/50 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}
