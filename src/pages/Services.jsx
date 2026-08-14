import { Link } from 'react-router-dom'
import { ArrowRight, Search, ClipboardCheck, Users } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import { whyChooseUs, financialServices } from '../data/content.js'

const pillars = [
  {
    icon: Search,
    title: 'Quality Inspection',
    description: 'Every vehicle passes a multi-point inspection covering engine, body, electricals and documentation before it\'s listed.',
  },
  {
    icon: ClipboardCheck,
    title: 'Trust & Transparency',
    description: 'Complete ownership and accident history is shared upfront — no surprises after you\'ve paid.',
  },
  {
    icon: Users,
    title: 'Customer-First Philosophy',
    description: 'Our advisors are paid to help you choose the right car, not to push the most expensive one.',
  },
]

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      {/* INTRO */}
      <section className="container-px mb-8">
        <span className="eyebrow mb-3 inline-block">Our Services</span>
        <h1 className="heading-lg mb-5 max-w-2xl">Why Choose Us</h1>
        <p className="body-text max-w-2xl text-lg">
          We built Demo Car Website around one idea: buying a used car should feel as
          straightforward as buying a new one. That means honest inspections, fair pricing and
          support that doesn't disappear after you've signed.
        </p>
      </section>

      {/* WHY CHOOSE US CARDS */}
      <section className="section container-px pt-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyChooseUs.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </section>

      {/* ABOUT / PHILOSOPHY */}
      <section className="section container-px bg-navy/40">
        <SectionHeading eyebrow="About Us" title="A Professional, Trustworthy Buying Experience" />
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div key={p.title} className="reveal card-surface p-7" style={{ animationDelay: `${i * 90}ms` }}>
              <span className="grid place-items-center w-12 h-12 rounded-xl bg-accent-blue/10 border border-accent-blue/25 text-accent-light mb-5">
                <p.icon size={22} />
              </span>
              <h3 className="font-display text-lg text-ink-primary mb-2">{p.title}</h3>
              <p className="body-text text-sm">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINANCIAL SERVICES RECAP */}
      <section className="section container-px">
        <SectionHeading eyebrow="Complete Support" title="Value-Added Financial Services" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {financialServices.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-px">
        <div className="relative rounded-3xl overflow-hidden card-surface p-10 md:p-16 text-center">
          <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
          <div className="relative flex flex-col items-center">
            <h2 className="heading-lg mb-4">Experience the Difference Yourself</h2>
            <p className="body-text max-w-lg mb-8">
              Browse our current inventory or speak to an advisor about what you're looking for.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/products" className="btn-primary">Browse Cars <ArrowRight size={16} /></Link>
              <Link to="/contact" className="btn-secondary">Contact Dealership</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
