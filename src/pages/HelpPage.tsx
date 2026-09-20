import { ContactSection } from "../components/ContactSection"
import { usePageMeta } from "../hooks/usePageMeta"

export function HelpPage() {
  usePageMeta(
    "Help & contact — Deets Pro",
    "Questions about claiming, sharing, or updating your Deets profile? Get in touch and we'll walk you through it.",
  )

  return (
    <div className="pt-16">
      <div className="px-5 pt-16 md:px-10 md:pt-24">
        <p className="text-[13px] tracking-[0.18em] text-ink-soft uppercase">
          Support
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.92] tracking-[-0.05em] lowercase">
          how can we help?
        </h1>
      </div>
      <ContactSection heading="Help & contact" />
    </div>
  )
}
