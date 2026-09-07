import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import { BrandLogo } from "../components/BrandLogo"
import { TOTAL_STEPS } from "./model"

export function StepBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-cyan/20 px-3 py-1 text-[11px] font-medium tracking-[0.16em] text-ink uppercase">
      {children}
    </span>
  )
}

export function StepHeading({
  title,
  copy,
}: {
  title: string
  copy: string
}) {
  return (
    <div className="mx-auto max-w-xl text-center">
      <h1 className="mt-5 font-display text-[clamp(2rem,5.4vw,3.35rem)] leading-[0.95] tracking-[-0.05em] lowercase">
        {title}
      </h1>
      <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">
        {copy}
      </p>
    </div>
  )
}

export const fieldClass =
  "w-full rounded-full border border-line bg-white px-5 py-3.5 text-[15px] text-ink outline-none transition-[border-color,box-shadow] placeholder:text-ink/30 focus:border-ink focus:shadow-[0_0_0_4px_rgb(10_10_10_/_0.04)]"

export const areaClass =
  "w-full resize-none rounded-[1.4rem] border border-line bg-white px-5 py-3.5 text-[15px] text-ink outline-none transition-[border-color,box-shadow] placeholder:text-ink/30 focus:border-ink focus:shadow-[0_0_0_4px_rgb(10_10_10_/_0.04)]"

export function FieldLabel({
  children,
  required,
}: {
  children: ReactNode
  required?: boolean
}) {
  return (
    <span className="text-xs tracking-[0.14em] text-ink-soft uppercase">
      {children}
      {required ? <span className="text-magenta"> *</span> : null}
    </span>
  )
}

export function ProgressBar({ current }: { current: number }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1.5" aria-hidden>
        {Array.from({ length: TOTAL_STEPS }, (_, i) => {
          const n = i + 1
          const on = n <= current
          return (
            <span
              key={n}
              className={`h-1 rounded-full transition-all duration-500 ${
                on ? "w-7 bg-[#8791AD] sm:w-8" : "w-5 bg-ink/10 sm:w-6"
              }`}
            />
          )
        })}
      </div>
      <span className="text-[11px] tracking-[0.12em] text-ink-soft tabular-nums">
        {current}/{TOTAL_STEPS}
      </span>
    </div>
  )
}

export function OnboardingHeader({ current }: { current: number }) {
  return (
    <header className="sticky top-0 z-20 px-4 pt-4 md:px-6 md:pt-5">
      <div className="mx-auto w-full max-w-5xl">
        <div className="rounded-full border border-line bg-white/85 px-3 py-2 shadow-[0_8px_32px_rgb(0_0_0_/_0.06)] backdrop-blur-xl sm:px-4 sm:py-2.5 md:px-5 md:py-3">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="shrink-0">
              <BrandLogo className="h-6 w-auto sm:h-7" />
            </Link>
            <ProgressBar current={current} />
          </div>
        </div>
      </div>
    </header>
  )
}

export function OnboardingFooter({
  onBack,
  onSkip,
  onContinue,
  continueLabel,
  continueDisabled,
  skip,
}: {
  onBack: () => void
  onSkip?: () => void
  onContinue: () => void
  continueLabel: string
  continueDisabled?: boolean
  skip?: boolean
}) {
  return (
    <footer className="sticky bottom-0 z-20 border-t border-line/70 bg-white/90 px-4 py-4 backdrop-blur-xl md:px-8">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3">
        <button
          type="button"
          onClick={onBack}
          className="text-sm text-ink-soft transition-colors hover:text-ink"
        >
          ← Back
        </button>
        <div className="flex items-center gap-4 sm:gap-6">
          {skip && onSkip ? (
            <button
              type="button"
              onClick={onSkip}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              Skip for now
            </button>
          ) : null}
          <button
            type="button"
            onClick={onContinue}
            disabled={continueDisabled}
            className={`shine-hover inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-medium sm:px-8 ${
              continueDisabled
                ? "cursor-not-allowed bg-ink/20 text-white"
                : "bg-[#8791AD] text-ink"
            }`}
          >
            {continueLabel} →
          </button>
        </div>
      </div>
    </footer>
  )
}

export function Toggle({
  on,
  onToggle,
  label,
}: {
  on: boolean
  onToggle: () => void
  label: string
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      onClick={onToggle}
      className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${
        on ? "bg-ink" : "bg-ink/15"
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 size-6 rounded-full bg-white shadow-sm transition-transform ${
          on ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  )
}
