import {
  Banknote, CalendarClock, ShieldCheck, FileCheck2, Handshake, BadgeIndianRupee, Headset, Truck,
} from 'lucide-react'

const icons = { Banknote, CalendarClock, ShieldCheck, FileCheck2, Handshake, BadgeIndianRupee, Headset, Truck }

export default function ServiceCard({ title, description, icon, index = 0 }) {
  const Icon = icons[icon] || ShieldCheck
  return (
    <div
      className="reveal card-surface p-7 hover:border-accent-blue/40 hover:-translate-y-1 transition-all duration-300"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <span className="grid place-items-center w-12 h-12 rounded-xl bg-accent-blue/10 border border-accent-blue/25 text-accent-light mb-5">
        <Icon size={22} strokeWidth={2} />
      </span>
      <h3 className="font-display text-lg text-ink-primary mb-2">{title}</h3>
      <p className="body-text text-sm">{description}</p>
    </div>
  )
}
