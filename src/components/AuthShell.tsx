import type { ReactNode } from "react"
import { testimonials } from "../data/site"
import { withBase } from "../lib/base"

export function AuthShell({ children }: { children: ReactNode }) {
  const quote = testimonials[0]

  return (
    <div className="relative grid min-h-svh overflow-hidden lg:grid-cols-[minmax(20rem,58rem)_1fr]">
        <img
          src={withBase("/media/auth-soft.jpg")}
          alt=""
          className="absolute inset-0 size-full scale-x-[-1] object-cover"
        />
        <div className="relative z-10 m-3 flex min-h-[calc(100svh-1.5rem)] flex-col rounded-[1.35rem] bg-[#f6f3ee] shadow-[0_24px_60px_rgb(0_0_0_/_0.14)] sm:m-4 sm:min-h-[calc(100svh-2rem)] md:rounded-[1.6rem] lg:my-4 lg:mr-0 lg:ml-4">
          {children}
        </div>
        <figure className="relative z-10 hidden flex-col justify-end p-8 text-white lg:flex xl:p-12">
          <blockquote className="max-w-md font-display text-[1.65rem] leading-[1.15] tracking-[-0.03em]">
            <span className="mb-3 block font-thin text-5xl leading-none" aria-hidden>
              “
            </span>
            {quote.quote}
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-white/20 text-xs font-semibold backdrop-blur-sm">
              {quote.initials}
            </span>
            <span>
              <span className="block text-sm font-medium">{quote.name}</span>
              <span className="block text-sm text-white/75">
                {quote.title}, {quote.company}
              </span>
            </span>
          </figcaption>
        </figure>
    </div>
  )
}
