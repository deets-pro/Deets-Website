import { GetStartedButton } from "./GetStartedModal"
import { withBase } from "../lib/base"
import { mediaSlots } from "../media/higgsfield"
import { LoopingVideo } from "./LoopingVideo"

export function Hero() {
  return (
    <section className="relative h-svh min-h-[640px] w-full overflow-hidden bg-canvas">
      <LoopingVideo
        slot={mediaSlots.hero}
        fill
        startOn="view"
        className="hidden"
        fallback={null}
      />
      <img
        src={withBase("/media/hero-leads.jpg")}
        alt=""
        className="absolute inset-0 size-full object-cover object-right"
      />
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center px-5 pt-16 md:px-10">
        <div className="max-w-xl">
          <h1 className="font-display text-[clamp(2.1rem,4.6vw,4.4rem)] leading-[0.95] tracking-[-0.045em] text-ink lowercase">
            a card that
            <br />
            speaks for you
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
            Get instant access to more information about your social media and
            contact information directly from your Deets card.
          </p>
          <GetStartedButton className="mt-8 inline-flex min-h-12 items-center rounded-full bg-slate px-7 text-sm font-medium text-white hover:opacity-90">
            Get started
          </GetStartedButton>
        </div>
      </div>
    </section>
  )
}
