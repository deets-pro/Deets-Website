import { Link } from "react-router-dom"
import { usePageMeta } from "../hooks/usePageMeta"

export function CompaniesPage() {
  usePageMeta(
    "For companies — Deets Pro",
    "Give your team branded Deets profiles, keep every one of them current, and let people share who they are with one link.",
  )

  return (
    <section className="px-5 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40">
      <p className="text-[13px] tracking-[0.18em] text-ink-soft uppercase">
        For teams
      </p>
      <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.92] tracking-[-0.05em] lowercase">
        companies portal
      </h1>
      <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-soft">
        Give your people branded Deets profiles, keep every one of them
        current, and let them share who they are with one link.
      </p>
      <Link
        to="/#contact"
        className="mt-10 inline-flex min-h-10 items-center border border-ink/25 px-5 text-[11px] tracking-[0.14em] text-ink uppercase transition-colors hover:bg-ink/5"
      >
        Talk to us
      </Link>
    </section>
  )
}
