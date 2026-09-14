import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { pricingPlans, trustedTeams } from "../data/site"
import { fadeUp, stagger } from "../motion/variants"
import { GetStartedButton } from "./GetStartedModal"

type Audience = "individual" | "businesses"

export function PricingSection() {
  const [audience, setAudience] = useState<Audience>("businesses")
  const plans = useMemo(
    () => pricingPlans.filter((plan) => plan.audiences.includes(audience)),
    [audience],
  )

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
              ["individual", "Individual"],
              ["businesses", "Businesses"],
            ] as const
          ).map(([id, label]) => {
            const active = audience === id
            return (
              <button
                key={id}
                type="button"
                onClick={() => setAudience(id)}
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
        key={audience}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className={`mx-auto mt-12 grid max-w-[1440px] grid-cols-1 gap-4 sm:grid-cols-2 ${
          plans.length > 2 ? "lg:grid-cols-4" : "lg:grid-cols-2 lg:max-w-3xl"
        }`}
      >
        {plans.map((plan) => (
          <motion.li key={plan.id} variants={fadeUp}>
            <article
              className="relative flex min-h-[34rem] flex-col overflow-hidden rounded-[1.75rem] sm:min-h-[38rem]"
              style={{ background: plan.body }}
            >
              <div
                className="relative z-10 rounded-[1.75rem] px-6 pt-7 pb-8"
                style={{ background: plan.header, color: plan.ink }}
              >
                <p className="text-[13px] font-medium">{plan.label}</p>
                <p className="mt-5 font-display text-[2.35rem] leading-none tracking-[-0.04em]">
                  {plan.price}
                </p>
                <p className="mt-3 text-[13px] font-medium">{plan.note}</p>
                <p className="mt-8 max-w-[16rem] text-[13px] leading-relaxed">
                  {plan.copy}
                </p>
                {plan.href === "start" ? (
                  <GetStartedButton className="mt-8 block h-10 w-[7.5rem] overflow-hidden rounded-full p-0 transition-opacity hover:opacity-90">
                    <span
                      className="block size-full rounded-full"
                      style={{ background: plan.button }}
                    >
                      <span className="sr-only">Get started</span>
                    </span>
                  </GetStartedButton>
                ) : (
                  <Link
                    to={plan.href}
                    aria-label="Open portal"
                    className="mt-8 block h-10 w-[7.5rem] rounded-full transition-opacity hover:opacity-90"
                    style={{ background: plan.button }}
                  >
                    <span className="sr-only">Open portal</span>
                  </Link>
                )}
              </div>
            </article>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}
