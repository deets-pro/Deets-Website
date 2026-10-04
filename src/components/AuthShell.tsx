import { useState, type ReactNode } from "react"
import { useLocale } from "../i18n/LocaleProvider"
import { withBase } from "../lib/base"
import { LanguageToggle } from "./LanguageToggle"

function pickNoteIndex() {
  return Math.floor(Math.random() * 6)
}

export function AuthShell({ children }: { children: ReactNode }) {
  const [noteIndex] = useState(pickNoteIndex)
  const { m } = useLocale()
  const note = m.authNotes[noteIndex]

  return (
    <div className="relative grid min-h-svh overflow-hidden lg:grid-cols-[minmax(20rem,58rem)_1fr]">
        <img
          src={withBase("/media/auth-soft.jpg")}
          alt=""
          className="absolute inset-0 size-full scale-x-[-1] object-cover"
        />
        <div className="relative z-10 m-3 flex min-h-[calc(100svh-1.5rem)] flex-col rounded-[1.35rem] bg-[#f6f3ee] shadow-[0_24px_60px_rgb(0_0_0_/_0.14)] sm:m-4 sm:min-h-[calc(100svh-2rem)] md:rounded-[1.6rem] lg:my-4 lg:mr-0 lg:ml-4">
          <div className="absolute top-4 end-4 z-20 sm:top-5 sm:end-5">
            <LanguageToggle />
          </div>
          {children}
        </div>
        <figure className="relative z-10 hidden flex-col justify-end p-8 text-white lg:flex xl:p-12">
          <blockquote className="max-w-md font-display text-[1.65rem] leading-[1.15] tracking-[-0.03em]">
            {note.copy}
          </blockquote>
          <figcaption className="mt-6 text-sm font-medium tracking-[0.14em] text-white/80 uppercase">
            {note.label}
          </figcaption>
        </figure>
    </div>
  )
}
