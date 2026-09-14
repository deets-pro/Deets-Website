import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { fadeUp } from "../motion/variants"
import { withBase } from "../lib/base"

export function CompaniesTeaser() {
  return (
    <section id="companies-portal" className="bg-canvas-dim px-5 py-20 md:px-10 md:py-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        variants={fadeUp}
        className="mx-auto max-w-[1440px]"
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-[clamp(2.1rem,4.6vw,4.4rem)] leading-[0.95] tracking-[-0.045em] lowercase">
              companies portal.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
              Issue branded cards, keep team profiles current, and send people to
              your company — not a stack of paper.
            </p>
          </div>
          <Link
            to="/companies"
            aria-label="Open portal"
            className="inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-[#fdd015] text-ink transition-transform hover:scale-105 md:mb-1 md:size-16"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-6 md:size-7"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M5.2 3.1 20 11.4c.7.4.5 1.4-.3 1.5l-6.2.7 3.6 6.8c.3.6 0 1.3-.6 1.5l-1.8.6c-.6.2-1.2-.2-1.4-.8l-3.4-7.1-4.6 4.3c-.6.6-1.7.2-1.7-.7V4c0-.9 1-1.4 1.8-1z" />
            </svg>
          </Link>
        </div>

        <img
          src={withBase("/media/companies-portal.jpg")}
          alt=""
          className="mt-12 h-[min(52vh,420px)] w-full rounded-[2.75rem] object-cover object-center md:mt-16 md:rounded-[3.5rem]"
        />
      </motion.div>
    </section>
  )
}
