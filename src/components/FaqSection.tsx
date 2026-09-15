import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { faqItems } from "../data/site"
import { fadeUp, stagger } from "../motion/variants"

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null)

  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-[#0a3924] px-5 py-20 text-[#e3f4b0] sm:py-24 md:px-10 md:py-32"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-x-14 lg:gap-y-10"
      >
        <div>
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-[#d6ef6a]/25 bg-[#d6ef6a]/10 px-3 py-1.5 text-[12px] font-medium tracking-wide text-[#d6ef6a]">
            <span className="text-[13px] leading-none" aria-hidden>
              ∗
            </span>
            Your questions, answered
          </p>
          <h2 className="mt-6 font-display text-[clamp(2.2rem,5vw,4.4rem)] leading-[0.95] tracking-[-0.045em] text-white">
            Frequently
            <br />
            Asked <span className="text-[#d6ef6a]">Questions</span>
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#e3f4b0]/75">
            Everything you need to know about ordering, sharing, and updating
            your Deets card.
          </p>
        </div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={stagger}
          className="flex flex-col gap-3.5 lg:col-start-2 lg:row-span-2"
        >
          {faqItems.map((item) => {
            const open = openId === item.id
            return (
              <motion.li key={item.id} variants={fadeUp}>
                <article className="rounded-[1.25rem] border border-[#d6ef6a]/25 bg-[#0f4a32]/55">
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenId(open ? null : item.id)}
                    className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  >
                    <span className="font-display text-[1.05rem] leading-snug tracking-[-0.02em] text-white sm:text-[1.15rem]">
                      {item.question}
                    </span>
                    <span
                      className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-[#d6ef6a]/30 text-[#d6ef6a]"
                      aria-hidden
                    >
                      <svg
                        viewBox="0 0 16 16"
                        className={`size-3.5 transition-transform duration-300 ${
                          open ? "" : "rotate-180"
                        }`}
                        fill="currentColor"
                      >
                        <path d="M8 3.2 14.2 12H1.8L8 3.2Z" />
                      </svg>
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: open ? "auto" : 0,
                      opacity: open ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-[14px] leading-relaxed text-[#e3f4b0]/70 sm:px-6 sm:pb-6">
                      {item.answer}
                    </p>
                  </motion.div>
                </article>
              </motion.li>
            )
          })}
        </motion.ul>

        <div className="flex flex-col justify-end rounded-[1.5rem] border border-[#d6ef6a]/25 bg-[#0f4a32]/60 p-6 sm:p-8">
          <h3 className="font-display text-[1.65rem] leading-tight tracking-[-0.03em] text-white sm:text-[1.85rem]">
            Still have questions?
          </h3>
          <p className="mt-4 max-w-md text-[14px] leading-relaxed text-[#e3f4b0]/70">
            Every team is different. If you want to talk through cards, pricing,
            or a company rollout, we&apos;re here to help.
          </p>
          <p className="mt-3 max-w-md text-[14px] leading-relaxed text-[#e3f4b0]/70">
            Reach out — we&apos;ll walk you through the details so you get the
            most out of Deets.
          </p>
          <Link
            to="/#contact"
            className="mt-8 inline-flex min-h-11 w-fit items-center rounded-full bg-[#aed141] px-6 text-[13px] font-medium text-[#0a3924] transition-opacity hover:opacity-90"
          >
            Book a demo
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
