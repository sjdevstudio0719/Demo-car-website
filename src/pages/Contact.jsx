import { useState } from 'react'
import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Navigation,
  CheckCircle2,
  AlertCircle,
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
      setStatus('success')
      setForm(initialForm)
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
          "
        >
          Let's Find Your Next Car Together
        </h1>


        <p
          className="
            body-text
            max-w-xl
            text-[#333333]
          "
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

        <div className="lg:col-span-2 space-y-4">


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
                  hover:shadow-[0_6px_25px_rgba(26,26,26,0.07)]
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
                transition-colors
              "
            >

              <Phone
                size={18}
                className="text-[#8B7D6B]"
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
                transition-colors
              "
            >

              <MessageCircle
                size={18}
                className="text-[#8B7D6B]"
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
                transition-colors
              "
            >

              <Navigation
                size={18}
                className="text-[#8B7D6B]"
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
                  transition-colors
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

        <div className="lg:col-span-3">

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
            "
          >


            {/* SUCCESS MESSAGE */}

            {status === 'success' && (

              <div
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
              />


              <Field
                label="Phone Number"
                name="phone"
                value={form.phone}
                onChange={onChange}
                error={errors.phone}
                placeholder="+91 98XXXXXXXX"
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
                  resize-none
                  ${
                    errors.message
                      ? 'border-red-400/60'
                      : 'border-[#1A1A1A]/10 focus:border-[#8B7D6B]/60'
                  }
                `}
              />


              {errors.message && (

                <p
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
              className="
                w-full
                sm:w-auto
                inline-flex
                items-center
                justify-center
                rounded-xl
                bg-[#1A1A1A]
                text-[#F4F2EC]
                px-6
                py-3
                text-sm
                font-semibold
                hover:bg-[#8B7D6B]
                transition-colors
              "
            >
              Send Enquiry
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
          ${
            error
              ? 'border-red-400/60'
              : 'border-[#1A1A1A]/10 focus:border-[#8B7D6B]/60'
          }
        `}
      />


      {error && (

        <p
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