import { useState } from 'react'
import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Navigation,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react'

const initialForm = {
  name: '',
  phone: '',
  vehicle: '',
  message: '',
}

const address =
  '501/41A, GROUND FLOOR, NEAR HOTEL MEERA INTERNATIONAL, SEN RALEIGH ROAD, ASANSOL - 713304'

const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=501%2F41A%2C%20Ground%20Floor%2C%20Near%20Hotel%20Meera%20International%2C%20Sen%20Raleigh%20Road%2C%20Asansol%20713304'


function validate(form) {
  const errors = {}

  if (!form.name.trim()) {
    errors.name = 'Please enter your full name.'
  }

  if (!/^[0-9+\-\s]{7,15}$/.test(form.phone.trim())) {
    errors.phone = 'Enter a valid phone number.'
  }

  if (!form.message.trim()) {
    errors.message = 'Tell us a little about what you need.'
  }

  return errors
}


export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')


  const onChange = (e) => {
    const { name, value } = e.target

    setForm((f) => ({
      ...f,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((er) => ({
        ...er,
        [name]: undefined,
      }))
    }
  }


  const onSubmit = (e) => {
    e.preventDefault()

    const nextErrors = validate(form)

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      setStatus('submitting')

      // Brief simulated delay so the loading state is visible/felt,
      // rather than the button flipping to success instantly.
      window.setTimeout(() => {
        setStatus('success')
        setForm(initialForm)
      }, 900)
    }
  }


  return (
    <div className="pt-32 pb-24 bg-[#F4F2EC] text-[#1A1A1A]">

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <section className="container-px mb-14">

        <span
          className="
            inline-block
            mb-3
            text-[10px]
            uppercase
            tracking-[0.25em]
            font-medium
            text-[#8B7D6B]
            opacity-0
            animate-fadeUp
          "
        >
          Get In Touch
        </span>


        <h1
          className="
            heading-lg
            mb-5
            max-w-xl
            text-[#1A1A1A]
            opacity-0
            animate-fadeUp
          "
          style={{ animationDelay: '80ms' }}
        >
          Let's Find Your Next Car Together
        </h1>


        <p
          className="
            body-text
            max-w-xl
            text-[#333333]
            opacity-0
            animate-fadeUp
          "
          style={{ animationDelay: '160ms' }}
        >
          Have a question about a listing, financing, or trade-in? Reach out
          and our team will respond within one business day.
        </p>

      </section>


      {/* =====================================================
          CONTACT INFORMATION + FORM
      ===================================================== */}

      <section className="container-px grid lg:grid-cols-5 gap-10 mb-16">


        {/* =================================================
            LEFT SIDE
        ================================================= */}

        <div
          className="
            lg:col-span-2
            space-y-4
            opacity-0
            animate-fadeUp
          "
          style={{ animationDelay: '220ms' }}
        >


          {/* =================================================
              CONTACT DETAILS
          ================================================= */}

          {[
            [
              Phone,
              'Phone',
              '+917406625447',
              'tel:+917406625447',
            ],

            // EMAIL — COMMENTED OUT FOR NOW
            // [
            //   Mail,
            //   'Email',
            //   'hello@democarwebsite.in',
            //   'mailto:hello@democarwebsite.in',
            // ],

            [
              MapPin,
              'Address',
              address,
              mapsUrl,
            ],

            [
              Clock,
              'Business Hours',
              'Mon – Sat, 10:00 AM – 7:30 PM',
              null,
            ],
          ].map(([Icon, label, value, link]) => {

            const card = (
              <div
                className="
                  group
                  p-5
                  flex
                  items-start
                  gap-4
                  rounded-2xl
                  border
                  border-[#1A1A1A]/10
                  bg-[#F4F2EC]
                  shadow-[0_4px_20px_rgba(26,26,26,0.04)]
                  hover:border-[#8B7D6B]/40
                  hover:shadow-[0_10px_30px_rgba(26,26,26,0.08)]
                  hover:-translate-y-0.5
                  active:scale-[0.98]
                  transition-all
                  duration-300
                "
              >

                <span
                  className="
                    grid
                    place-items-center
                    w-11
                    h-11
                    rounded-xl
                    bg-[#8B7D6B]/10
                    border
                    border-[#8B7D6B]/25
                    text-[#8B7D6B]
                    shrink-0
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <Icon size={19} />
                </span>


                <div className="min-w-0">

                  <p className="text-xs text-[#333333] mb-1">
                    {label}
                  </p>


                  <p
                    className="
                      text-sm
                      font-medium
                      text-[#1A1A1A]
                      leading-relaxed
                      break-words
                    "
                  >
                    {value}
                  </p>

                </div>

              </div>
            )


            if (link) {
              return (
                <a
                  key={label}
                  href={link}
                  target={label === 'Address' ? '_blank' : undefined}
                  rel={
                    label === 'Address'
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="block"
                >
                  {card}
                </a>
              )
            }


            return (
              <div key={label}>
                {card}
              </div>
            )
          })}


          {/* =================================================
              QUICK ACTIONS
          ================================================= */}

          <div className="grid grid-cols-3 gap-3 pt-2">


            {/* CALL */}

            <a
              href="tel:+917406625447"
              className="
                group
                flex
                flex-col
                items-center
                gap-2
                rounded-2xl
                border
                border-[#1A1A1A]/10
                bg-[#F4F2EC]
                py-5
                hover:border-[#8B7D6B]/40
                hover:bg-[#8B7D6B]/[0.04]
                hover:-translate-y-0.5
                active:scale-[0.96]
                transition-all
                duration-300
              "
            >

              <Phone
                size={18}
                className="
                  text-[#8B7D6B]
                  transition-transform
                  duration-300
                  group-hover:scale-125
                "
              />

              <span className="text-xs font-medium text-[#1A1A1A]">
                Call Now
              </span>

            </a>


            {/* WHATSAPP */}

            <a
              href="https://wa.me/919752975239"
              target="_blank"
              rel="noreferrer"
              className="
                group
                flex
                flex-col
                items-center
                gap-2
                rounded-2xl
                border
                border-[#1A1A1A]/10
                bg-[#F4F2EC]
                py-5
                hover:border-[#8B7D6B]/40
                hover:bg-[#8B7D6B]/[0.04]
                hover:-translate-y-0.5
                active:scale-[0.96]
                transition-all
                duration-300
              "
            >

              <MessageCircle
                size={18}
                className="
                  text-[#8B7D6B]
                  transition-transform
                  duration-300
                  group-hover:scale-125
                "
              />

              <span className="text-xs font-medium text-[#1A1A1A]">
                WhatsApp
              </span>

            </a>


            {/* DIRECTIONS */}

            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="
                group
                flex
                flex-col
                items-center
                gap-2
                rounded-2xl
                border
                border-[#1A1A1A]/10
                bg-[#F4F2EC]
                py-5
                hover:border-[#8B7D6B]/40
                hover:bg-[#8B7D6B]/[0.04]
                hover:-translate-y-0.5
                active:scale-[0.96]
                transition-all
                duration-300
              "
            >

              <Navigation
                size={18}
                className="
                  text-[#8B7D6B]
                  transition-transform
                  duration-300
                  group-hover:scale-125
                "
              />

              <span className="text-xs font-medium text-[#1A1A1A]">
                Directions
              </span>

            </a>

          </div>


          {/* =================================================
              GOOGLE MAP
          ================================================= */}

          <div
            className="
              overflow-hidden
              rounded-2xl
              border
              border-[#1A1A1A]/10
              bg-[#F4F2EC]
              shadow-[0_8px_30px_rgba(26,26,26,0.05)]
              hover:shadow-[0_14px_40px_rgba(26,26,26,0.09)]
              transition-shadow
              duration-300
            "
          >


            {/* MAP */}

            <div className="w-full h-[300px]">

              <iframe
                title="NEXT Ride Dealership Location"
                src="https://www.google.com/maps?q=501%2F41A%2C%20Ground%20Floor%2C%20Near%20Hotel%20Meera%20International%2C%20Sen%20Raleigh%20Road%2C%20Asansol%20713304&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>


            {/* MAP INFORMATION */}

            <div className="p-5">

              <div className="flex items-start gap-3">

                <span
                  className="
                    grid
                    place-items-center
                    w-10
                    h-10
                    rounded-xl
                    bg-[#8B7D6B]/10
                    border
                    border-[#8B7D6B]/25
                    text-[#8B7D6B]
                    shrink-0
                  "
                >
                  <MapPin size={18} />
                </span>


                <div>

                  <p className="text-sm font-semibold text-[#1A1A1A] mb-1">
                    Visit Our Shop
                  </p>


                  <p className="text-xs leading-relaxed text-[#333333]">
                    {address}
                  </p>

                </div>

              </div>


              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  mt-4
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  w-full
                  rounded-xl
                  bg-[#1A1A1A]
                  text-[#F4F2EC]
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  hover:bg-[#8B7D6B]
                  hover:-translate-y-0.5
                  active:scale-[0.98]
                  transition-all
                  duration-300
                "
              >

                <Navigation size={15} />

                Get Directions

              </a>

            </div>

          </div>

        </div>


        {/* =================================================
            CONTACT FORM
        ================================================= */}

        <div
          className="
            lg:col-span-3
            opacity-0
            animate-fadeUp
          "
          style={{ animationDelay: '280ms' }}
        >

          <form
            onSubmit={onSubmit}
            noValidate
            className="
              p-6
              sm:p-8
              space-y-5
              rounded-3xl
              border
              border-[#1A1A1A]/10
              bg-[#F4F2EC]
              shadow-[0_8px_30px_rgba(26,26,26,0.05)]
              transition-shadow
              duration-300
              hover:shadow-[0_14px_40px_rgba(26,26,26,0.08)]
            "
          >


            {/* SUCCESS MESSAGE */}

            {status === 'success' && (

              <div
                role="status"
                aria-live="polite"
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-[#8B7D6B]/30
                  bg-[#8B7D6B]/10
                  px-4
                  py-3.5
                  text-sm
                  text-[#8B7D6B]
                  opacity-0
                  animate-fadeUp
                "
              >

                <CheckCircle2
                  size={18}
                  className="shrink-0"
                />

                Thanks — your enquiry has been sent. We'll be in touch shortly.

              </div>

            )}


            {/* NAME + PHONE */}

            <div className="grid sm:grid-cols-2 gap-5">

              <Field
                label="Full Name"
                name="name"
                value={form.name}
                onChange={onChange}
                error={errors.name}
                placeholder="Your name"
                autoComplete="name"
                disabled={status === 'submitting'}
              />


              <Field
                label="Phone Number"
                name="phone"
                value={form.phone}
                onChange={onChange}
                error={errors.phone}
                placeholder="+91 98XXXXXXXX"
                autoComplete="tel"
                disabled={status === 'submitting'}
              />

            </div>


            {/* EMAIL — COMMENTED OUT FOR NOW */}

            {/*
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              error={errors.email}
              placeholder="you@example.com"
            />
            */}


            {/* VEHICLE */}

            <Field
              label="Interested Vehicle"
              name="vehicle"
              value={form.vehicle}
              onChange={onChange}
              placeholder="e.g. Hyundai Creta 2023"
              optional
              disabled={status === 'submitting'}
            />


            {/* MESSAGE */}

            <div>

              <label
                className="
                  text-xs
                  font-medium
                  text-[#333333]
                  mb-2
                  block
                "
                htmlFor="message"
              >
                Message
              </label>


              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={onChange}
                placeholder="Tell us what you're looking for…"
                disabled={status === 'submitting'}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className={`
                  w-full
                  rounded-xl
                  border
                  bg-[#F4F2EC]
                  px-4
                  py-3
                  text-sm
                  text-[#1A1A1A]
                  placeholder:text-[#333333]/50
                  focus:outline-none
                  transition-colors
                  duration-200
                  resize-none
                  disabled:opacity-60
                  disabled:cursor-not-allowed
                  ${
                    errors.message
                      ? 'border-red-400/60'
                      : 'border-[#1A1A1A]/10 focus:border-[#8B7D6B]/60'
                  }
                `}
              />


              {errors.message && (

                <p
                  id="message-error"
                  role="alert"
                  className="
                    flex
                    items-center
                    gap-1.5
                    text-xs
                    text-red-600
                    mt-1.5
                  "
                >

                  <AlertCircle size={12} />

                  {errors.message}

                </p>

              )}

            </div>


            {/* SUBMIT */}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="
                w-full
                sm:w-auto
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#1A1A1A]
                text-[#F4F2EC]
                px-6
                py-3
                text-sm
                font-semibold
                hover:bg-[#8B7D6B]
                active:scale-[0.98]
                disabled:opacity-70
                disabled:cursor-not-allowed
                transition-all
                duration-300
              "
            >

              {status === 'submitting' && (
                <Loader2
                  size={16}
                  className="animate-spin"
                />
              )}

              {status === 'submitting' ? 'Sending…' : 'Send Enquiry'}

            </button>

          </form>

        </div>

      </section>

    </div>
  )
}


/* =========================================================
   FIELD COMPONENT
========================================================= */

function Field({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  type = 'text',
  optional = false,
  autoComplete,
  disabled = false,
}) {

  return (

    <div>

      <label
        className="
          text-xs
          font-medium
          text-[#333333]
          mb-2
          block
        "
        htmlFor={name}
      >

        {label}

        {optional && (
          <span className="text-[#333333]/50">
            {' '}
            (optional)
          </span>
        )}

      </label>


      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        disabled={disabled}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`
          w-full
          rounded-xl
          border
          bg-[#F4F2EC]
          px-4
          py-3
          text-sm
          text-[#1A1A1A]
          placeholder:text-[#333333]/50
          focus:outline-none
          transition-colors
          duration-200
          disabled:opacity-60
          disabled:cursor-not-allowed
          ${
            error
              ? 'border-red-400/60'
              : 'border-[#1A1A1A]/10 focus:border-[#8B7D6B]/60'
          }
        `}
      />


      {error && (

        <p
          id={`${name}-error`}
          role="alert"
          className="
            flex
            items-center
            gap-1.5
            text-xs
            text-red-600
            mt-1.5
          "
        >

          <AlertCircle size={12} />

          {error}

        </p>

      )}

    </div>

  )
}