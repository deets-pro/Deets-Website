import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { pricingPlans, trustedTeams } from "../data/site"
import { fadeUp, stagger } from "../motion/variants"
import { GetStartedButton } from "./GetStartedModal"

type Interval = "monthly" | "yearly"

export function PricingSection() {
  const [period, setPeriod] = useState<Interval>("monthly")

  return (
    <section
      id="pricing"
      className="scroll-mt-24 bg-canvas px-5 py-20 md:px-10 md:py-28"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="mx-auto max-w-[1440px] text-center"
      >
        <h2 className="mx-auto max-w-xl font-display text-[clamp(2rem,4.4vw,3.6rem)] leading-[0.95] tracking-[-0.045em] text-ink">
          Free to start
          <br />
          and built to scale
        </h2>

        <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-5 gap-y-2 rounded-2xl bg-[#f4f1ea] px-5 py-3 text-[11px] tracking-wide text-ink/35">
          <span>Trusted by teams at</span>
          {trustedTeams.map((name) => (
            <span key={name} className="font-semibold text-ink/40">
              {name}
            </span>
          ))}
        </div>

        <div className="mt-8 inline-flex rounded-full bg-[#eeeae3] p-1">
          {(
            [
              ["monthly", "Monthly"],
              ["yearly", "Yearly"],
            ] as const
          ).map(([id, label]) => {
            const active = period === id
            return (
              <button
                key={id}
                type="button"
                onClick={() => setPeriod(id)}
                className={`rounded-full px-5 py-2 text-[11px] tracking-[0.12em] uppercase transition-colors ${
                  active ? "bg-ink text-white" : "text-ink/55 hover:text-ink"
                }`}
              >
                {label}
              </button>
            )
          })}
        </div>
      </motion.div>

      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
        className="mx-auto mt-12 grid max-w-[1440px] grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
      >
        {pricingPlans.map((plan) => {
          const billing = plan.billing[period]
          return (
            <motion.li key={plan.id} variants={fadeUp} className="min-w-0">
              <article
                className="flex h-full flex-col overflow-hidden rounded-[1.75rem]"
                style={{ background: plan.body }}
              >
                <div
                  className="rounded-[1.75rem] px-6 pt-7 pb-8"
                  style={{ background: plan.header, color: plan.ink }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-[13px] font-medium">{plan.label}</p>
                    <span className="rounded-full bg-black/10 px-2.5 py-1 text-[10px] tracking-[0.08em] uppercase">
                      {plan.badge}
                    </span>
                  </div>
                  <p className="mt-5 font-display text-[2.35rem] leading-none tracking-[-0.04em]">
                    {billing.price}
                    {billing.unit ? (
                      <span className="ml-1.5 font-sans text-sm font-medium tracking-normal">
                        {billing.unit}
                      </span>
                    ) : null}
                  </p>
                  <p className="mt-3 text-[13px] font-medium">{billing.note}</p>
                  <p className="mt-6 max-w-[18rem] text-[13px] leading-relaxed">
                    {plan.copy}
                  </p>
                  <PlanCta plan={plan} />
                </div>
                <div className="flex flex-1 flex-col px-6 pt-6 pb-8 text-ink">
                  {plan.includes ? (
                    <p className="mb-4 text-[13px] font-medium">{plan.includes}</p>
                  ) : null}
                  <div className="space-y-5">
                    {plan.groups.map((group) => (
                      <div key={group.heading || group.items[0]}>
                        {group.heading ? (
                          <p className="mb-2 text-[12px] font-medium tracking-wide text-ink/55">
                            {group.heading}
                          </p>
                        ) : null}
                        <ul className="space-y-2">
                          {group.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-[13px] leading-snug"
                            >
                              <CheckIcon color={plan.header} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        {group.note ? (
                          <p className="mt-2 pl-7 text-[12px] leading-snug text-ink/50">
                            {group.note}
                          </p>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </motion.li>
          )
        })}
      </motion.ul>
    </section>
  )
}

function PlanCta({ plan }: { plan: (typeof pricingPlans)[number] }) {
  const className =
    "mt-8 inline-flex min-h-10 items-center rounded-full px-5 text-[13px] font-medium transition-opacity hover:opacity-90"
  const style = { background: plan.button, color: plan.buttonInk }

  if (plan.href === "start") {
    return (
      <GetStartedButton className={className} style={style}>
        {plan.cta}
      </GetStartedButton>
    )
  }

  return (
    <Link to={plan.href} className={className} style={style}>
      {plan.cta}
    </Link>
  )
}

function CheckIcon({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className="mt-0.5 size-3.5 shrink-0"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="8" fill={color} opacity="0.2" />
      <path
        d="M4.5 8.2 6.7 10.4 11.5 5.6"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
