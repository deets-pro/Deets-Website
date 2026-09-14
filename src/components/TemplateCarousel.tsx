import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { fadeUp } from "../motion/variants"

export function TemplateCarousel() {
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
            A Deets template to suit every brand and creator
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft">
            Different layouts, colors, and styles. Pick a starting point, then
            make it yours with your links, photo, and brand.
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
              Browse Templates or create your own
              <br />
              with us.
            </span>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
