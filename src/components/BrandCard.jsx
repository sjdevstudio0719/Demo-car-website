export default function BrandCard({ name, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group card-surface flex flex-col items-center justify-center gap-3 py-8 px-4 hover:border-accent-blue/50 hover:bg-navy-surface transition-all duration-300"
    >
      <span className="grid place-items-center w-14 h-14 rounded-full border border-white/10 text-ink-secondary group-hover:text-accent-light group-hover:border-accent-blue/50 transition-colors font-display text-lg">
        {name.split(' ').map((w) => w[0]).join('').slice(0, 2)}
      </span>
      <span className="text-sm font-medium text-ink-secondary group-hover:text-ink-primary transition-colors">
        {name}
      </span>
    </button>
  )
}
