import {
  Banknote,
  CalendarClock,
  ShieldCheck,
  FileCheck2,
  Handshake,
  BadgeIndianRupee,
  Headset,
  Truck,
} from 'lucide-react'

const icons = {
  Banknote,
  CalendarClock,
  ShieldCheck,
  FileCheck2,
  Handshake,
  BadgeIndianRupee,
  Headset,
  Truck,
}

export default function ServiceCard({
  title,
  description,
  icon,
  index = 0,
}) {
  const Icon = icons[icon] || ShieldCheck

  return (
    <div
      className="
        reveal
        card-surface
        p-7
        border
        border-[#1A1A1A]/10
        bg-[#FAF2EC]
        hover:border-[#8B7D6B]/40
        hover:bg-[#8B7D6B]/[0.035]
        hover:-translate-y-1
        transition-all
        duration-300
      "
      style={{
        animationDelay: `${index * 90}ms`,
      }}
    >

      {/* ICON */}

      <span
        className="
          grid
          place-items-center
          w-12
          h-12
          rounded-xl
          bg-[#8B7D6B]/10
          border
          border-[#8B7D6B]/25
          text-[#8B7D6B]
          mb-5
        "
      >
        <Icon
          size={22}
          strokeWidth={2}
        />
      </span>


      {/* TITLE */}

      <h3
        className="
          font-display
          text-lg
          text-[#1A1A1A]
          mb-2
        "
      >
        {title}
      </h3>


      {/* DESCRIPTION */}

      <p
        className="
          text-sm
          leading-6
          text-[#333333]
        "
      >
        {description}
      </p>

    </div>
  )
}