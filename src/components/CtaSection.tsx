import { GetStartedButton } from "./GetStartedModal"
import { withBase } from "../lib/base"

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#f5d400]">
      <img
        src={withBase("/media/cta-overflow.jpg")}
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div className="relative z-10 mx-auto flex min-h-[min(72vh,560px)] max-w-[1440px] items-center justify-center px-5 py-16 md:px-10 md:py-24">
        <div className="relative w-full max-w-3xl overflow-hidden rounded-[2.5rem] border border-white/50 px-8 py-16 text-center shadow-[0_24px_80px_rgb(0_0_0_/_0.08)] md:rounded-[3rem] md:px-16 md:py-20">
          <div
            className="absolute inset-0 bg-white/30 backdrop-blur-2xl"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#f7c4e4]/45 via-white/15 to-[#d8f59a]/50"
            aria-hidden
          />
          <div className="relative">
            <h2 className="mx-auto max-w-lg font-display text-[clamp(2rem,4.4vw,3.6rem)] leading-[0.95] tracking-[-0.045em] text-ink lowercase">
              tap, scan, share — in seconds.
            </h2>
            <p className="mx-auto mt-5 max-w-sm text-[15px] leading-relaxed text-ink">
              No app required. Your Deets card opens your profile the moment
              someone taps or scans it.
            </p>
            <GetStartedButton className="mt-10 inline-flex min-h-12 items-center rounded-full bg-white px-14 text-sm font-medium text-ink transition-opacity hover:opacity-90">
              Get started
            </GetStartedButton>
          </div>
        </div>
      </div>
    </section>
  )
}
