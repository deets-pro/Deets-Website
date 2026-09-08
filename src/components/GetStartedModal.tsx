import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"
import { useNavigate } from "react-router-dom"
import { THEMES } from "../onboarding/model"

type Audience = "personal" | "team"

type GetStartedContextValue = {
  open: () => void
}

const GetStartedContext = createContext<GetStartedContextValue | null>(null)

export function useGetStarted() {
  const ctx = useContext(GetStartedContext)
  if (!ctx) throw new Error("useGetStarted must be used within GetStartedProvider")
  return ctx
}

export function GetStartedButton({
  className,
  children = "Get started",
  onClick,
}: {
  className?: string
  children?: ReactNode
  onClick?: () => void
}) {
  const { open } = useGetStarted()
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onClick?.()
        open()
      }}
    >
      {children}
    </button>
  )
}

export function GetStartedProvider({ children }: { children: ReactNode }) {
  const [shown, setShown] = useState(false)
  const open = () => setShown(true)
  const close = () => setShown(false)

  return (
    <GetStartedContext.Provider value={{ open }}>
      {children}
      {shown ? <GetStartedDialog onClose={close} /> : null}
    </GetStartedContext.Provider>
  )
}

function GetStartedDialog({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate()
  const [audience, setAudience] = useState<Audience>("personal")
  const [themeId, setThemeId] = useState(THEMES[2]?.id ?? THEMES[0].id)
  const theme = THEMES.find((t) => t.id === themeId) ?? THEMES[0]

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener("keydown", onKey)
    }
  }, [onClose])

  const continueOn = () => {
    onClose()
    navigate(audience === "team" ? "/companies" : "/start")
  }

  return (
    <div className="fixed inset-0 z-[90] flex items-end justify-center p-0 sm:items-center sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-ink/45 backdrop-blur-md"
        aria-label="Close"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="get-started-title"
        className="relative z-10 grid max-h-[min(92vh,880px)] w-full max-w-[920px] overflow-hidden rounded-t-[1.75rem] bg-canvas shadow-[0_24px_80px_rgb(42_49_79_/_0.22)] sm:rounded-[1.75rem] md:grid-cols-2"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex size-8 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink md:top-5 md:right-5"
          aria-label="Close"
        >
          <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <div className="flex flex-col px-6 py-8 sm:px-10 sm:py-12">
          <h2
            id="get-started-title"
            className="font-display text-[clamp(1.85rem,4vw,2.7rem)] leading-[1.05] tracking-[-0.04em] text-ink"
          >
            How will you use Deets?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            This helps us tailor the best experience for you.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <AudienceOption
              selected={audience === "personal"}
              title="For me only"
              onSelect={() => setAudience("personal")}
            />
            <AudienceOption
              selected={audience === "team"}
              title="For my team or company"
              onSelect={() => setAudience("team")}
            />
          </div>

          <button
            type="button"
            onClick={continueOn}
            className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-slate text-sm font-medium text-white hover:opacity-90 sm:mt-auto"
          >
            Continue
          </button>
        </div>

        <div className="relative hidden flex-col bg-canvas-dim px-8 py-8 md:flex">

          <div className="mt-2 flex items-center gap-2">
            {THEMES.slice(0, 6).map((t) => (
              <button
                key={t.id}
                type="button"
                aria-label={t.name}
                onClick={() => setThemeId(t.id)}
                className={`size-6 rounded-full transition-transform ${
                  theme.id === t.id ? "scale-110 ring-2 ring-ink ring-offset-2 ring-offset-canvas-dim" : ""
                }`}
                style={{ background: t.main }}
              />
            ))}
          </div>

          <div className="flex flex-1 items-center justify-center py-8">
            <article className="w-full max-w-[17.5rem] overflow-hidden rounded-[1.35rem] bg-canvas shadow-[0_16px_40px_rgb(42_49_79_/_0.12)]">
              <div className="flex items-start justify-between px-5 pt-5 pb-4" style={{ background: theme.main }}>
                <span className="flex size-14 items-center justify-center rounded-full bg-canvas font-display text-lg text-ink">
                  A
                </span>
                <span
                  className="rounded-md px-2 py-1 text-[10px] font-medium tracking-wide text-white uppercase"
                  style={{ background: "rgb(0 0 0 / 0.2)" }}
                >
                  Deets
                </span>
              </div>
              <div className="px-5 py-5">
                <p className="font-sans text-lg font-semibold tracking-tight text-ink">
                  Alex Chen
                </p>
                <p className="mt-1 text-sm text-ink-soft">Product designer</p>
                <p className="text-sm text-ink-soft">Deets</p>
                <ul className="mt-4 space-y-2 text-sm text-ink">
                  <li>alex@deets.pro</li>
                  <li>deets.pro/alex</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}

function AudienceOption({
  selected,
  title,
  onSelect,
}: {
  selected: boolean
  title: string
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`flex min-h-[3.5rem] items-center justify-between rounded-[1.15rem] border px-5 text-left text-[15px] font-medium transition-colors ${
        selected ? "border-ink bg-canvas" : "border-line bg-canvas hover:border-ink/30"
      }`}
    >
      {title}
      <span
        className={`flex size-5 items-center justify-center rounded-full border ${
          selected ? "border-ink" : "border-line"
        }`}
        aria-hidden
      >
        {selected ? <span className="size-2.5 rounded-full bg-ink" /> : null}
      </span>
    </button>
  )
}
