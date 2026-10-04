import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { useLocale } from "../i18n/LocaleProvider"
import { fadeUp } from "../motion/variants"

type ContactSectionProps = {
  heading?: string
}

export function ContactSection({ heading }: ContactSectionProps) {
  const [sent, setSent] = useState(false)
  const { m } = useLocale()
  const title = heading ?? m.contact.heading

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-canvas px-5 py-24 md:px-10 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-2"
      >
        <div>
          <h2 className="font-display text-[clamp(2.4rem,6vw,5rem)] leading-[0.92] tracking-[-0.05em] lowercase">
            {title}
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-soft">
            {m.contact.copy}
          </p>
          <ul className="mt-8 space-y-2 text-sm text-ink-soft">
            {m.contact.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        {sent ? (
          <p className="self-center font-display text-3xl tracking-tight lowercase">
            {m.contact.sent}
          </p>
        ) : (
          <form className="flex flex-col gap-6" onSubmit={onSubmit}>
            <label className="block">
              <span className="text-xs tracking-[0.14em] text-ink-soft uppercase">
                {m.contact.name}
              </span>
              <input
                name="name"
                required
                autoComplete="name"
                className="mt-2 w-full border-b border-line bg-transparent py-3 text-ink outline-none focus:border-ink"
              />
            </label>
            <label className="block">
              <span className="text-xs tracking-[0.14em] text-ink-soft uppercase">
                {m.contact.phone}
              </span>
              <input
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                className="mt-2 w-full border-b border-line bg-transparent py-3 text-ink outline-none focus:border-ink"
              />
            </label>
            <label className="block">
              <span className="text-xs tracking-[0.14em] text-ink-soft uppercase">
                {m.contact.email}
              </span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-2 w-full border-b border-line bg-transparent py-3 text-ink outline-none focus:border-ink"
              />
            </label>
            <label className="block">
              <span className="text-xs tracking-[0.14em] text-ink-soft uppercase">
                {m.contact.message}
              </span>
              <textarea
                name="message"
                required
                rows={4}
                className="mt-2 w-full resize-none border-b border-line bg-transparent py-3 text-ink outline-none focus:border-ink"
              />
            </label>
            <button
              type="submit"
              className="mt-4 inline-flex min-h-12 w-fit items-center rounded-full bg-slate px-8 text-sm font-medium text-white transition-opacity hover:opacity-85"
            >
              {m.contact.send}
            </button>
          </form>
        )}
      </motion.div>
    </section>
  )
}
