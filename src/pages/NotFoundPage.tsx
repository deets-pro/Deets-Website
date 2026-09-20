import { Link } from "react-router-dom"
import { GetStartedButton } from "../components/GetStartedModal"
import { usePageMeta } from "../hooks/usePageMeta"

export function NotFoundPage() {
  usePageMeta(
    "Page not found — Deets Pro",
    "That page doesn't exist. Head back to the Deets home page to find what you need.",
  )

  return (
    <section className="px-5 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40">
      <p className="text-[13px] tracking-[0.18em] text-ink-soft uppercase">
        Error 404
      </p>
      <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.92] tracking-[-0.05em] lowercase">
        We can&apos;t find that page
      </h1>
      <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-soft">
        The link may be out of date, or the address may have a typo. Everything
        else is still where you left it.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-3">
        <Link
          to="/"
          className="inline-flex min-h-11 items-center rounded-full bg-slate px-6 text-[13px] font-medium text-white transition-opacity hover:opacity-90"
        >
          Back to home
        </Link>
        <GetStartedButton className="inline-flex min-h-11 items-center rounded-full border border-ink/25 px-6 text-[13px] font-medium text-ink transition-colors hover:bg-ink/5">
          Get started
        </GetStartedButton>
      </div>
      <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-soft">
        <li>
          <Link to="/designs" className="underline underline-offset-4">
            Designs
          </Link>
        </li>
        <li>
          <Link to="/directory" className="underline underline-offset-4">
            Directory
          </Link>
        </li>
        <li>
          <Link to="/companies" className="underline underline-offset-4">
            For companies
          </Link>
        </li>
        <li>
          <Link to="/help" className="underline underline-offset-4">
            Help &amp; contact
          </Link>
        </li>
      </ul>
    </section>
  )
}
