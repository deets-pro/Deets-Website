import { DesignsGallery } from "../components/DesignsGallery"
import { useLocale } from "../i18n/LocaleProvider"

export function DesignsPage() {
  const { m } = useLocale()
  return (
    <section className="px-5 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40">
      <p className="text-[13px] tracking-[0.18em] text-ink-soft uppercase">
        {m.designs.kicker}
      </p>
      <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.92] tracking-[-0.05em] lowercase">
        {m.designs.title}
      </h1>
      <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-soft">
        {m.designs.copy}
      </p>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
        {m.designs.soon}
      </p>
      <div className="mt-16">
        <DesignsGallery />
      </div>
    </section>
  )
}
