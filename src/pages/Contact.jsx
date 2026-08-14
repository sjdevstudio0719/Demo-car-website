import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation, CheckCircle2, AlertCircle } from 'lucide-react'

const initialForm = { name: '', phone: '', email: '', vehicle: '', message: '' }

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Please enter your full name.'
  if (!/^[0-9+\-\s]{7,15}$/.test(form.phone.trim())) errors.phone = 'Enter a valid phone number.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = 'Enter a valid email address.'
  if (!form.message.trim()) errors.message = 'Tell us a little about what you need.'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | success

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setStatus('success')
      setForm(initialForm)
    }
  }

  return (
    <div className="pt-32 pb-24">
      <section className="container-px mb-14">
        <span className="eyebrow mb-3 inline-block">Get In Touch</span>
        <h1 className="heading-lg mb-5 max-w-xl">Let's Find Your Next Car Together</h1>
        <p className="body-text max-w-xl">
          Have a question about a listing, financing, or trade-in? Reach out and our team will
          respond within one business day.
        </p>
      </section>

      <section className="container-px grid lg:grid-cols-5 gap-10 mb-16">
        {/* CONTACT INFO */}
        <div className="lg:col-span-2 space-y-4">
          {[
            [Phone, 'Phone', '+91 98300 00000'],
            [Mail, 'Email', 'hello@democarwebsite.in'],
            [MapPin, 'Address', 'Park Street, Kolkata, West Bengal 700016'],
            [Clock, 'Business Hours', 'Mon – Sat, 10:00 AM – 7:30 PM'],
          ].map(([Icon, label, value]) => (
            <div key={label} className="card-surface p-5 flex items-start gap-4">
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-accent-blue/10 border border-accent-blue/25 text-accent-light shrink-0">
                <Icon size={19} />
              </span>
              <div>
                <p className="text-xs text-ink-secondary mb-0.5">{label}</p>
                <p className="text-sm font-medium text-ink-primary">{value}</p>
              </div>
            </div>
          ))}

          <div className="grid grid-cols-3 gap-3 pt-2">
            <a href="tel:+919830000000" className="flex flex-col items-center gap-2 card-surface py-5 hover:border-accent-blue/40 transition-colors">
              <Phone size={18} className="text-accent-light" />
              <span className="text-xs font-medium text-ink-primary">Call Now</span>
            </a>
            <a href="https://wa.me/919830000000" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 card-surface py-5 hover:border-accent-blue/40 transition-colors">
              <MessageCircle size={18} className="text-accent-light" />
              <span className="text-xs font-medium text-ink-primary">WhatsApp</span>
            </a>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 card-surface py-5 hover:border-accent-blue/40 transition-colors">
              <Navigation size={18} className="text-accent-light" />
              <span className="text-xs font-medium text-ink-primary">Directions</span>
            </a>
          </div>

          <div className="card-surface aspect-[4/3] flex flex-col items-center justify-center gap-2 text-center p-6">
            <MapPin size={26} className="text-accent-light" />
            <p className="text-sm text-ink-secondary">Map integration placeholder</p>
            <p className="text-xs text-ink-secondary/70">Connect Google Maps here with the dealership's coordinates</p>
          </div>
        </div>

        {/* FORM */}
        <div className="lg:col-span-3">
          <form onSubmit={onSubmit} noValidate className="card-surface p-6 sm:p-8 space-y-5">
            {status === 'success' && (
              <div className="flex items-center gap-3 rounded-xl border border-accent-light/30 bg-accent-blue/10 px-4 py-3.5 text-sm text-accent-light">
                <CheckCircle2 size={18} className="shrink-0" />
                Thanks — your enquiry has been sent. We'll be in touch shortly.
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" name="name" value={form.name} onChange={onChange} error={errors.name} placeholder="Your name" />
              <Field label="Phone Number" name="phone" value={form.phone} onChange={onChange} error={errors.phone} placeholder="+91 98XXXXXXXX" />
            </div>

            <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} error={errors.email} placeholder="you@example.com" />
            <Field label="Interested Vehicle" name="vehicle" value={form.vehicle} onChange={onChange} placeholder="e.g. Hyundai Creta 2023" optional />

            <div>
              <label className="text-xs font-medium text-ink-secondary mb-2 block" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={onChange}
                placeholder="Tell us what you're looking for…"
                className={`w-full rounded-xl border bg-navy-bg/60 px-4 py-3 text-sm text-ink-primary placeholder:text-ink-secondary/70 focus:outline-none transition-colors resize-none ${
                  errors.message ? 'border-red-400/60' : 'border-white/10 focus:border-accent-blue/60'
                }`}
              />
              {errors.message && (
                <p className="flex items-center gap-1.5 text-xs text-red-400 mt-1.5"><AlertCircle size={12} /> {errors.message}</p>
              )}
            </div>

            <button type="submit" className="btn-primary w-full sm:w-auto">
              Send Enquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

function Field({ label, name, value, onChange, error, placeholder, type = 'text', optional = false }) {
  return (
    <div>
      <label className="text-xs font-medium text-ink-secondary mb-2 block" htmlFor={name}>
        {label} {optional && <span className="text-ink-secondary/50">(optional)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-xl border bg-navy-bg/60 px-4 py-3 text-sm text-ink-primary placeholder:text-ink-secondary/70 focus:outline-none transition-colors ${
          error ? 'border-red-400/60' : 'border-white/10 focus:border-accent-blue/60'
        }`}
      />
      {error && <p className="flex items-center gap-1.5 text-xs text-red-400 mt-1.5"><AlertCircle size={12} /> {error}</p>}
    </div>
  )
}
