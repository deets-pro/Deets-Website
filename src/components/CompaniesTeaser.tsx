import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useLocale } from "../i18n/LocaleProvider"
import { fadeUp } from "../motion/variants"
import { withBase } from "../lib/base"
import { ACCENT_BG, ACCENT_FG, PointerGlyph } from "./CarouselArrows"

const stripe = {
  backgroundColor: "#e3ea98",
  backgroundImage:
    "repeating-linear-gradient(-45deg, transparent 0 5px, rgba(255,255,255,0.72) 5px 7px)",
}

function PortalLink({ label, className = "" }: { label: string; className?: string }) {
  return (
    <Link
      to="/companies"
      aria-label={label}
      className={`group size-14 shrink-0 items-center justify-center rounded-full transition-transform hover:scale-105 sm:size-16 ${className}`}
      style={{ background: ACCENT_BG, color: ACCENT_FG }}
    >
      <PointerGlyph className="size-6 sm:size-7" />
    </Link>
  )
}

export function CompaniesTeaser() {
  const { m } = useLocale()
  return (
    <section id="companies-portal" className="bg-canvas px-5 py-16 md:px-10 md:py-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="mx-auto grid max-w-[1440px] items-stretch gap-4 lg:grid-cols-2 lg:gap-5"
      >
        <div className="relative">
          <div className="flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-[#e7efe3] text-ink md:rounded-[2rem] lg:absolute lg:inset-0">
            <div className="px-7 py-8 sm:px-10 sm:py-12 lg:px-12 lg:pt-14">
              <h2 className="font-display text-[clamp(2.4rem,4vw,4rem)] leading-[0.95] tracking-[-0.045em] lowercase">
                {m.companies.title}
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-[1.6] text-ink/75 sm:text-base">
                {m.companies.copy}
              </p>
            </div>
            <ul className="mt-2 flex flex-col justify-center gap-4 bg-[#165f47] px-7 py-8 text-white sm:px-10 sm:py-10 lg:mt-8 lg:flex-1 lg:px-12 lg:py-12">
              {m.companies.points.map((point) => (
                <li key={point} className="flex max-w-md items-start gap-3 text-[15px] leading-[1.55] sm:text-base">
                  <span className="mt-[0.55em] size-2 shrink-0 rounded-full bg-[#e3ea98]" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-4">
          <div className="rounded-[1.75rem] bg-[#165f47] px-6 py-6 text-white sm:px-8 sm:py-7 md:rounded-[2rem]">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-sm text-white/75">{m.companies.leads}</p>
                <p className="mt-2 font-display text-[clamp(3rem,4.6vw,4.25rem)] leading-none tracking-[-0.05em]">
                  {m.companies.leadsValue}
                </p>
                <p className="mt-2 text-sm text-[#e3ea98]">{m.companies.leadsNote}</p>
              </div>
              <PortalLink className="flex" label={m.companies.open} />
            </div>
            <div className="mt-8 flex flex-col gap-2.5 sm:mt-10">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-[58%] overflow-hidden rounded-md sm:h-12" aria-hidden>
                  <span className="h-full w-[46%]" style={stripe} />
                  <span className="h-full flex-1" style={{ background: "#d5e59a" }} />
                </div>
                <span className="ms-auto text-sm text-white/90">{m.companies.taps}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-[78%] overflow-hidden rounded-md sm:h-12" aria-hidden>
                  <span className="h-full w-[64%]" style={{ background: "#c5ddd2" }} />
                  <span className="h-full flex-1" style={{ background: "#f6f3ea" }} />
                </div>
                <span className="ms-auto text-sm text-white/90">{m.companies.scans}</span>
              </div>
            </div>
          </div>

          <img
            src={withBase("/media/companies-portal.jpg")}
            alt=""
            className="w-full rounded-[1.75rem] object-cover md:rounded-[2rem]"
          />
        </div>
      </motion.div>
    </section>
  )
}
