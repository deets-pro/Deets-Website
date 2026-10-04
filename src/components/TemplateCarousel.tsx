import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useLocale } from "../i18n/LocaleProvider"
import { fadeUp } from "../motion/variants"

export function TemplateCarousel() {
  const { m } = useLocale()
  return (
    <section className="bg-canvas px-5 py-24 md:px-10 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="mx-auto max-w-[1440px]"
      >
        <div className="max-w-xl">
          <h2 className="font-display text-[clamp(1.85rem,4.6vw,3.75rem)] leading-[1.02] tracking-[-0.04em] text-ink">
            {m.templates.heading}
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft">
            {m.templates.copy}
          </p>
          <Link
            to="/designs"
            className="mt-10 inline-flex items-start gap-3 text-[13px] leading-snug text-ink underline decoration-ink/30 underline-offset-4 transition-colors hover:decoration-ink"
          >
            <svg
              viewBox="0 0 24 24"
              className="mt-0.5 size-5 shrink-0 text-tangerine"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
            <span>
              {m.templates.link1}
              <br />
              {m.templates.link2}
            </span>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
