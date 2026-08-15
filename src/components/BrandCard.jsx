export default function BrandCard({ name, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        group
        card-surface
        flex
        flex-col
        items-center
        justify-center
        gap-3
        py-8
        px-4

        border
        border-[#333333]/10
        bg-[#F4F2EC]

        hover:border-[#8B7D6B]/50
        hover:bg-[#F4F2EC]

        transition-all
        duration-300
      "
    >
      {/* Brand Initial Circle */}

      <span
        className="
          grid
          place-items-center
          w-14
          h-14
          rounded-full

          border
          border-[#8B7D6B]/40

          bg-[#F4F2EC]
          text-[#333333]

          group-hover:text-[#F4F2EC]
          group-hover:bg-[#8B7D6B]
          group-hover:border-[#8B7D6B]

          transition-all
          duration-300

          font-display
          text-lg
        "
      >
        {name
          .split(' ')
          .map((w) => w[0])
          .join('')
          .slice(0, 2)}
      </span>

      {/* Brand Name */}

      <span
        className="
          text-sm
          font-medium
          text-[#333333]

          group-hover:text-[#1A1A1A]

          transition-colors
          duration-300
        "
      >
        {name}
      </span>
    </button>
  )
}