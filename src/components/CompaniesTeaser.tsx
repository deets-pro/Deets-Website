import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { fadeUp } from "../motion/variants"
import { withBase } from "../lib/base"
import { ACCENT_BG, ACCENT_FG, PointerGlyph } from "./CarouselArrows"

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
            className="group inline-flex size-14 shrink-0 items-center justify-center rounded-full transition-transform hover:scale-105 md:mb-1 md:size-16"
            style={{ background: ACCENT_BG, color: ACCENT_FG }}
          >
            <PointerGlyph className="size-6 md:size-7" />
          </Link>
        </div>

        <img
          src={withBase("/media/companies-portal.jpg")}
          alt=""
          className="mt-12 w-full rounded-[2.75rem] md:mt-16 md:rounded-[3.5rem]"
        />
      </motion.div>
    </section>
  )
}
