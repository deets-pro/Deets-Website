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
                  <p className="mt-5 flex items-center font-display text-[2.35rem] leading-none tracking-[-0.04em]">
                    {billing.currency ? (
                      <>
                        <RiyalSymbol />
                        <span className="sr-only">Saudi riyal </span>
                      </>
                    ) : null}
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

function RiyalSymbol() {
  return (
    <svg
      viewBox="0 0 1124.14 1256.39"
      className="mr-2 h-[0.78em] w-[0.7em] shrink-0"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M699.62 1113.02c-20.06 44.48-33.32 92.75-38.4 143.37l424.51-90.24c20.06-44.47 33.31-92.75 38.4-143.37l-424.51 90.24Z" />
      <path d="M1085.73 895.8c20.06-44.47 33.32-92.75 38.4-143.37l-330.68 70.33v-135.2l292.27-62.11c20.06-44.47 33.32-92.75 38.4-143.37l-330.68 70.27V66.13c-50.67 28.45-95.67 66.32-132.25 110.99v403.35l-132.25 28.11V0c-50.67 28.44-95.67 66.32-132.25 110.99v525.69l-295.91 62.88c-20.06 44.47-33.33 92.75-38.42 143.37l334.33-71.05v170.26l-358.3 76.14c-20.06 44.47-33.32 92.75-38.4 143.37l375.04-79.7c30.53-6.35 56.77-24.4 73.83-49.24l68.78-101.97c7.14-10.55 11.3-23.27 11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z" />
    </svg>
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
