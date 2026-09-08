import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { directoryPeople } from "../data/site"
import { fadeUp, stagger } from "../motion/variants"

function initials(name: string) {
  const parts = name.trim().split(/\s+/).slice(0, 2)
  return parts.map((p) => p.charAt(0)).join("").toUpperCase() || "?"
}

export function DirectoryPage() {
  const [q, setQ] = useState("")
  const people = useMemo(() => {
    const n = q.trim().toLowerCase()
    if (!n) return directoryPeople
    return directoryPeople.filter(
      (p) =>
        p.name.toLowerCase().includes(n) ||
        p.handle.toLowerCase().includes(n) ||
        p.blurb.toLowerCase().includes(n),
    )
  }, [q])

  return (
    <section className="px-5 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40">
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="mx-auto max-w-[1440px]"
      >
        <p className="text-[13px] tracking-[0.18em] text-ink-soft uppercase">
          Directory · people
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.92] tracking-[-0.05em] lowercase">
          people
        </h1>
        <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-soft">
          Profiles that opted into the public directory. More directory types
          (stores, events, …) coming later.
        </p>

        <label className="mt-10 block max-w-md">
          <span className="text-xs tracking-[0.14em] text-ink-soft uppercase">
            Search
          </span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Name, handle, or bio"
            className="mt-2 w-full rounded-full border border-line bg-white px-5 py-3.5 text-[15px] text-ink outline-none transition-[border-color,box-shadow] placeholder:text-ink/30 focus:border-ink focus:shadow-[0_0_0_4px_rgb(42_49_79_/_0.08)]"
          />
        </label>
      </motion.div>

      <motion.ul
        initial="hidden"
        animate="show"
        variants={stagger}
        className="mx-auto mt-12 grid max-w-[1440px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-3 xl:grid-cols-4"
      >
        {people.map((p) => (
          <motion.li key={p.handle} variants={fadeUp}>
            <a
              href={p.href}
              className="flex h-full flex-col rounded-[1.75rem] bg-slate/10 p-6 transition-transform duration-300 hover:-translate-y-1 md:p-7"
            >
              <div className="flex items-start justify-between gap-3">
                {p.avatarUrl ? (
                  <img
                    src={p.avatarUrl}
                    alt=""
                    className="size-11 shrink-0 rounded-full bg-white object-cover"
                  />
                ) : (
                  <span
                    className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-xs font-semibold tracking-wide text-ink"
                    aria-hidden
                  >
                    {initials(p.name)}
                  </span>
                )}
                <span className="inline-flex max-w-[58%] items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-[11px] font-medium tracking-wide text-ink">
                  <span className="size-1.5 shrink-0 rounded-full bg-slate" />
                  <span className="truncate">{p.handle}</span>
                </span>
              </div>
              <h2 className="mt-8 font-display text-[1.35rem] leading-[1.2] tracking-[-0.03em] text-ink md:text-[1.45rem]">
                {p.name}
              </h2>
              <p className="mt-3 flex-1 whitespace-pre-line text-sm leading-relaxed text-ink-soft">
                {p.blurb}
              </p>
            </a>
          </motion.li>
        ))}
      </motion.ul>

      {people.length === 0 ? (
        <p className="mx-auto mt-16 max-w-[1440px] text-sm text-ink-soft">
          No profiles match that search.
        </p>
      ) : null}
    </section>
  )
}
