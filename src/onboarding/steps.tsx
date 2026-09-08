import { useRef, type ChangeEvent, type FormEvent } from "react"
import { Link } from "react-router-dom"
import {
  BIO_MAX,
  HANDLE_IDEAS,
  HANDLE_MAX,
  SOCIALS,
  THEMES,
  activeTheme,
  contrastText,
  filledLinkCount,
  handleStatus,
  isEmail,
  newLinkId,
  normalizeHandle,
  profileInitial,
  profileName,
  type OnboardingState,
  type ThemeId,
} from "./model"
import { ProfilePreview, QrMark, downloadQrPng } from "./preview"
import { FieldLabel, StepBadge, StepHeading, Toggle, areaClass, fieldClass } from "./ui"

type StepProps = {
  state: OnboardingState
  patch: (partial: Partial<OnboardingState>) => void
  onContinue: () => void
  goTo: (step: OnboardingState["step"]) => void
}

export function StepEmail({ state, patch, onContinue }: StepProps) {
  const valid = isEmail(state.email)

  const sendCode = () => {
    if (!valid) return
    patch({ codeSent: true, code: "", emailVerified: false })
  }

  return (
    <form
      className="mx-auto w-full max-w-md"
      onSubmit={(e: FormEvent) => {
        e.preventDefault()
        onContinue()
      }}
    >
      <div className="text-center">
        <StepBadge>Step 1 · Verify</StepBadge>
        <StepHeading
          title="what's your email?"
          copy="Verify now so you can edit links and recover your account later. This step is optional — you can skip it and do it anytime."
        />
      </div>

      <label className="mt-10 block text-left">
        <FieldLabel>Email address</FieldLabel>
        <span className="relative mt-2 flex items-center">
          <span className="pointer-events-none absolute left-4 text-ink/35">
            <EnvelopeIcon />
          </span>
          <input
            type="email"
            autoComplete="email"
            value={state.email}
            onChange={(e) =>
              patch({
                email: e.target.value,
                emailVerified: false,
                codeSent: false,
                code: "",
              })
            }
            placeholder="you@example.com"
            className={`${fieldClass} pl-11`}
          />
        </span>
      </label>

      {state.emailVerified ? (
        <p className="mt-4 text-sm text-ink-soft">Verified — you can edit links on this profile.</p>
      ) : (
        <>
          <button
            type="button"
            onClick={sendCode}
            disabled={!valid}
            className={`mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-full text-sm font-medium ${
              valid ? "bg-ink text-white hover:opacity-90" : "cursor-not-allowed bg-ink/20 text-white"
            }`}
          >
            Send verification code
          </button>
          {state.codeSent ? (
            <div className="mt-6 text-left">
              <FieldLabel>Six-digit code</FieldLabel>
              <input
                inputMode="numeric"
                autoComplete="one-time-code"
                maxLength={6}
                value={state.code}
                onChange={(e) => {
                  const code = e.target.value.replace(/\D/g, "").slice(0, 6)
                  patch({ code, emailVerified: code.length === 6 })
                }}
                placeholder="000000"
                className={`${fieldClass} mt-2 tracking-[0.4em]`}
              />
              <p className="mt-2 text-xs text-ink-soft">
                Preview only — any 6 digits will verify.
              </p>
            </div>
          ) : null}
        </>
      )}
    </form>
  )
}

export function StepHandle({ state, patch, onContinue }: StepProps) {
  const status = handleStatus(state.handle)
  const handle = normalizeHandle(state.handle)

  return (
    <form
      className="mx-auto w-full max-w-md"
      onSubmit={(e: FormEvent) => {
        e.preventDefault()
        if (status === "ok") onContinue()
      }}
    >
      <div className="text-center">
        <StepBadge>Step 2 · Claim it</StepBadge>
        <StepHeading
          title="pick your deets link"
          copy="This is the link you'll hand out everywhere. Choose something short and memorable — you can't change it as easily later."
        />
      </div>

      <div
        className={`mt-10 flex items-center rounded-full border bg-canvas px-5 py-3.5 transition-[border-color,box-shadow] ${
          status === "ok"
            ? "border-slate shadow-[0_0_0_4px_rgb(42_49_79_/_0.08)]"
            : "border-line focus-within:border-ink"
        }`}
      >
        <span className="shrink-0 text-[15px] text-ink-soft">deets.pro/</span>
        <input
          value={state.handle}
          maxLength={HANDLE_MAX}
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          onChange={(e) => patch({ handle: e.target.value.toLowerCase() })}
          placeholder="yourname"
          className="min-w-0 flex-1 bg-transparent text-[15px] font-medium outline-none placeholder:font-normal placeholder:text-ink/30"
        />
        {status === "ok" ? (
          <span className="ml-2 flex size-6 items-center justify-center rounded-full bg-slate text-white">
            <CheckIcon />
          </span>
        ) : null}
      </div>
      <p className={`mt-3 text-sm ${status === "ok" ? "text-ink" : "text-ink-soft"}`}>
        {status === "ok"
          ? "Nice — that one's all yours."
          : status === "taken"
            ? "That link is taken. Try another."
            : status === "invalid"
              ? "Use letters, numbers, dots and underscores."
              : status === "short"
                ? "At least 3 characters."
                : "Letters, numbers, dots and underscores."}
      </p>

      <p className="mt-8 text-[11px] tracking-[0.16em] text-ink-soft uppercase">Need ideas?</p>
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {HANDLE_IDEAS.map((idea) => (
          <button
            key={idea}
            type="button"
            onClick={() => patch({ handle: idea })}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              handle === idea ? "border-ink bg-ink text-white" : "border-line hover:border-ink/40"
            }`}
          >
            {idea}
          </button>
        ))}
      </div>
    </form>
  )
}

export function StepProfile({ state, patch, onContinue }: StepProps) {
  const fileRef = useRef<HTMLInputElement>(null)
  const initial = profileInitial(state)

  const onFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith("image/") || file.size > 4 * 1024 * 1024) {
      e.target.value = ""
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      if (typeof reader.result === "string") patch({ photo: reader.result })
    }
    reader.readAsDataURL(file)
  }

  return (
    <form
      className="mx-auto w-full max-w-md"
      onSubmit={(e: FormEvent) => {
        e.preventDefault()
        if (state.displayTitle.trim().length > 1) onContinue()
      }}
    >
      <div className="text-center">
        <StepBadge>Step 3 · Introduce yourself</StepBadge>
        <StepHeading
          title="add your name and a face"
          copy="Your title is how visitors know who they've landed on. Upload a photo — it's optional, but profiles with one get noticed more."
        />
      </div>

      <div className="mt-10 flex items-center gap-4">
        {state.photo ? (
          <img src={state.photo} alt="" className="size-16 rounded-full object-cover" />
        ) : (
          <span className="flex size-16 items-center justify-center rounded-full bg-ink font-display text-2xl text-white lowercase">
            {initial}
          </span>
        )}
        <div>
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="rounded-full border border-ink/25 px-4 py-2 text-sm hover:bg-ink/5"
          >
            Upload photo
          </button>
          {state.photo ? (
            <button
              type="button"
              onClick={() => patch({ photo: null })}
              className="ml-3 text-sm text-ink-soft hover:text-ink"
            >
              Remove
            </button>
          ) : (
            <p className="mt-2 text-xs text-ink-soft">Optional · JPG or PNG</p>
          )}
          <input
            ref={fileRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            className="hidden"
            onChange={onFile}
          />
        </div>
      </div>

      <label className="mt-8 block text-left">
        <FieldLabel required>Display title</FieldLabel>
        <input
          value={state.displayTitle}
          onChange={(e) => patch({ displayTitle: e.target.value })}
          placeholder="e.g. Alex Rivera"
          className={`${fieldClass} mt-2`}
        />
      </label>

      <label className="mt-6 block text-left">
        <FieldLabel>Short bio (optional)</FieldLabel>
        <textarea
          value={state.bio}
          maxLength={BIO_MAX}
          rows={3}
          onChange={(e) => patch({ bio: e.target.value.slice(0, BIO_MAX) })}
          placeholder="Designer & maker building playful things."
          className={`${areaClass} mt-2`}
        />
        <span className="mt-2 block text-right text-xs text-ink-soft">
          {state.bio.length}/{BIO_MAX}
        </span>
      </label>
    </form>
  )
}

export function StepTheme({ state, patch }: StepProps) {
  const selectTheme = (id: Exclude<ThemeId, "custom">) => {
    const theme = THEMES.find((t) => t.id === id)
    if (!theme) return
    patch({
      themeId: id,
      customMain: theme.main,
      customAccent: theme.accent,
    })
  }

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="text-center">
        <StepBadge>Step 4 · Set the vibe</StepBadge>
        <StepHeading
          title="choose the colors that feel like you"
          copy="Your main color paints the background, your accent lights up the buttons. Tap a look, or craft your own."
        />
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
        {THEMES.map((theme) => {
          const selected = state.themeId === theme.id
          return (
            <button
              key={theme.id}
              type="button"
              onClick={() => selectTheme(theme.id)}
              className={`text-left ${selected ? "scale-[1.02]" : ""}`}
            >
              <div
                className={`relative overflow-hidden rounded-2xl border-2 p-3 transition-all ${
                  selected ? "border-ink" : "border-transparent hover:border-ink/20"
                }`}
                style={{ background: theme.main, color: theme.text }}
              >
                {selected ? (
                  <span className="absolute top-2 right-2 flex size-5 items-center justify-center rounded-full bg-canvas text-ink">
                    <CheckIcon />
                  </span>
                ) : null}
                <span
                  className="flex size-8 items-center justify-center rounded-full text-sm lowercase"
                  style={{ background: theme.accent, color: contrastText(theme.accent) }}
                >
                  {profileInitial(state)}
                </span>
                <p className="mt-2 truncate text-sm font-medium lowercase">{profileName(state)}</p>
                <p className="truncate text-[10px]" style={{ color: theme.muted }}>
                  {state.bio.trim() || "Designer & maker"}
                </p>
                <span
                  className="mt-3 block rounded-full py-1.5 text-center text-[10px] font-medium"
                  style={{ background: theme.accent, color: contrastText(theme.accent) }}
                >
                  My portfolio
                </span>
                <span
                  className="mt-1.5 block rounded-full py-1.5 text-center text-[10px]"
                  style={{ background: `${theme.text}22` }}
                >
                  Latest drop
                </span>
              </div>
              <p className="mt-2 text-center text-sm">{theme.name}</p>
            </button>
          )
        })}
      </div>

      <button
        type="button"
        onClick={() => patch({ customizing: !state.customizing })}
        className="mt-8 flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-dashed border-ink/25 text-sm hover:border-ink/50"
      >
        ✦ Customize my own colors
      </button>

      {state.customizing ? (
        <div className="mt-6 grid gap-6 md:grid-cols-[1fr_0.9fr] md:items-center">
          <div className="space-y-4">
            <ColorField
              label="Main color"
              value={state.customMain}
              onChange={(customMain) => patch({ customMain, themeId: "custom" })}
            />
            <ColorField
              label="Accent color"
              value={state.customAccent}
              onChange={(customAccent) => patch({ customAccent, themeId: "custom" })}
            />
          </div>
          <div>
            <p className="mb-2 text-[11px] tracking-[0.16em] text-ink-soft uppercase">
              Live preview
            </p>
            <ProfilePreview state={{ ...state, themeId: "custom" }} />
          </div>
        </div>
      ) : null}
    </div>
  )
}

function ColorField({
  label,
  value,
  onChange,
}: {
  label: string
  value: string
  onChange: (value: string) => void
}) {
  return (
    <label className="block text-left">
      <FieldLabel>{label}</FieldLabel>
      <span className="mt-2 flex items-center gap-3 rounded-full border border-line bg-canvas px-3 py-2">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="size-8 cursor-pointer rounded-full border-0 bg-transparent"
        />
        <input
          value={value}
          onChange={(e) => {
            const next = e.target.value
            if (/^#?[0-9a-fA-F]{0,6}$/.test(next)) {
              onChange(next.startsWith("#") ? next : `#${next}`)
            }
          }}
          className="min-w-0 flex-1 bg-transparent font-mono text-sm uppercase outline-none"
        />
      </span>
    </label>
  )
}

export function StepLinks({ state, patch, goTo }: StepProps) {
  const locked = !state.emailVerified

  return (
    <div className="mx-auto w-full max-w-lg">
      <div className="text-center">
        <StepBadge>Step 5 · Fill it up</StepBadge>
        <StepHeading
          title="add your socials and links"
          copy="Everything you want to share, in one place. You can add more anytime from your dashboard."
        />
      </div>

      {locked ? (
        <div className="mt-8 flex flex-col gap-4 rounded-[1.4rem] bg-canvas-dim px-4 py-4 sm:flex-row sm:items-center">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-slate text-white">
            <LockIcon />
          </span>
          <div className="min-w-0 flex-1 text-left">
            <p className="font-medium">Verify your email to edit links</p>
            <p className="mt-1 text-sm text-ink-soft">
              To keep profiles safe from spam, adding links requires a verified email.
            </p>
          </div>
          <button
            type="button"
            onClick={() => goTo(1)}
            className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-full bg-ink px-4 text-sm font-medium text-white"
          >
            Verify email
          </button>
        </div>
      ) : null}

      <fieldset disabled={locked} className="mt-8 disabled:opacity-45">
        <p className="text-[11px] tracking-[0.16em] text-ink-soft uppercase">Social profiles</p>
        <div className="mt-4 space-y-4">
          {SOCIALS.map((s) => (
            <label key={s.id} className="grid gap-2 sm:grid-cols-[7.5rem_1fr] sm:items-center">
              <span className="text-sm text-ink-soft">{s.label}</span>
              <input
                value={state.socials[s.id]}
                onChange={(e) =>
                  patch({ socials: { ...state.socials, [s.id]: e.target.value } })
                }
                placeholder={s.placeholder}
                className={fieldClass}
              />
            </label>
          ))}
        </div>

        <p className="mt-10 text-[11px] tracking-[0.16em] text-ink-soft uppercase">Custom links</p>
        <div className="mt-4 space-y-3">
          {state.customLinks.map((link) => (
            <div key={link.id} className="flex flex-col gap-2 rounded-[1.4rem] border border-line p-3 sm:flex-row">
              <input
                value={link.title}
                placeholder="Title"
                onChange={(e) =>
                  patch({
                    customLinks: state.customLinks.map((l) =>
                      l.id === link.id ? { ...l, title: e.target.value } : l,
                    ),
                  })
                }
                className={fieldClass}
              />
              <input
                value={link.url}
                placeholder="https://"
                onChange={(e) =>
                  patch({
                    customLinks: state.customLinks.map((l) =>
                      l.id === link.id ? { ...l, url: e.target.value } : l,
                    ),
                  })
                }
                className={fieldClass}
              />
              <button
                type="button"
                onClick={() =>
                  patch({ customLinks: state.customLinks.filter((l) => l.id !== link.id) })
                }
                className="px-3 text-sm text-ink-soft hover:text-ink"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() =>
            patch({
              customLinks: [...state.customLinks, { id: newLinkId(), title: "", url: "" }],
            })
          }
          className="mt-4 flex min-h-12 w-full items-center justify-center rounded-full border border-dashed border-ink/25 text-sm hover:border-ink/50"
        >
          + Add a link
        </button>
      </fieldset>
    </div>
  )
}

export function StepCard({ state, patch }: StepProps) {
  return (
    <div className="mx-auto w-full max-w-lg">
      <div className="text-center">
        <StepBadge>Step 6 · Business card</StepBadge>
        <StepHeading
          title="turn your profile into a digital business card"
          copy="Share your details in a tap and, if you like, collect theirs back."
        />
      </div>
      <div className="mt-10 space-y-3">
        <div className={`flex items-center gap-4 rounded-[1.4rem] border bg-canvas px-4 py-4 ${
          state.shareContact ? "border-ink" : "border-line"
        }`}>
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-canvas-dim">
            <CardIcon />
          </span>
          <div className="min-w-0 flex-1 text-left">
            <p className="font-medium">Want to share your contact?</p>
            <p className="mt-1 text-sm text-ink-soft">
              Add a “Save contact” button so visitors can save you instantly.
            </p>
          </div>
          <Toggle
            on={state.shareContact}
            onToggle={() => patch({ shareContact: !state.shareContact })}
            label="Share contact"
          />
        </div>
        <div className={`flex items-center gap-4 rounded-[1.4rem] border bg-canvas px-4 py-4 ${
          state.exchangeContact ? "border-ink" : "border-line"
        }`}>
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-ink/8">
            <PeopleIcon />
          </span>
          <div className="min-w-0 flex-1 text-left">
            <p className="font-medium">Ask visitors to exchange contact?</p>
            <p className="mt-1 text-sm text-ink-soft">
              Show a short form so visitors can share their details back with you.
            </p>
          </div>
          <Toggle
            on={state.exchangeContact}
            onToggle={() => patch({ exchangeContact: !state.exchangeContact })}
            label="Exchange contact"
          />
        </div>
      </div>
    </div>
  )
}

export function StepDirectory({ state, patch }: StepProps) {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="text-center">
        <StepBadge>Step 7 · Discoverability</StepBadge>
        <StepHeading
          title="join the public directory?"
          copy="Choose whether your profile can be found in the deets public directory. You can change this anytime."
        />
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => patch({ listed: true })}
          className={`rounded-[1.4rem] border-2 p-5 text-left transition-colors ${
            state.listed ? "border-ink bg-canvas-dim" : "border-line bg-canvas hover:border-ink/30"
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <GlobeIcon />
            {state.listed ? (
              <span className="flex size-5 items-center justify-center rounded-full bg-ink text-white">
                <CheckIcon />
              </span>
            ) : null}
          </div>
          <p className="mt-4 font-medium">Yes, list me</p>
          <p className="mt-1 text-sm text-ink-soft">
            Make my profile public and discoverable.
          </p>
        </button>
        <button
          type="button"
          onClick={() => patch({ listed: false })}
          className={`rounded-[1.4rem] border-2 p-5 text-left transition-colors ${
            !state.listed ? "border-ink bg-canvas-dim" : "border-line bg-canvas hover:border-ink/30"
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <EyeOffIcon />
            {!state.listed ? (
              <span className="flex size-5 items-center justify-center rounded-full bg-ink text-white">
                <CheckIcon />
              </span>
            ) : null}
          </div>
          <p className="mt-4 font-medium">Keep me private</p>
          <p className="mt-1 text-sm text-ink-soft">
            Only people with my link can find me. (Default)
          </p>
        </button>
      </div>

      <div className="mt-6 rounded-[1.4rem] bg-canvas-dim px-5 py-5">
        <p className="text-[11px] tracking-[0.16em] text-ink uppercase">
          Why join the directory?
        </p>
        <ul className="mt-4 space-y-3 text-sm">
          <li className="flex gap-3">
            <span className="text-ink">⌕</span>
            Get found by people browsing deets.pro
          </li>
          <li className="flex gap-3">
            <span className="text-ink">↗</span>
            Grow your audience beyond the people you already know
          </li>
          <li className="flex gap-3">
            <span className="text-ink">☺</span>
            Show up next to other makers, founders, and teams
          </li>
        </ul>
      </div>
    </div>
  )
}

export function ReadyScreen({
  state,
  onRestart,
}: {
  state: OnboardingState
  onRestart: () => void
}) {
  const name = profileName(state)
  const handle = normalizeHandle(state.handle) || "you"
  const url = `deets.pro/${handle}`
  const links = filledLinkCount(state)
  const theme = activeTheme(state)

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(`https://${url}`)
    } catch {
      /* ignore */
    }
  }

  const status = [
    {
      label: state.emailVerified ? "Email verified" : "Email not verified",
      on: state.emailVerified,
    },
    {
      label: links === 1 ? "1 link" : `${links} links`,
      on: links > 0,
    },
    {
      label: state.shareContact ? "Contact card on" : "Contact card off",
      on: state.shareContact,
    },
    {
      label: state.listed ? "Public" : "Private",
      on: state.listed,
    },
  ]

  return (
    <div className="mx-auto grid w-full max-w-5xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full bg-slate px-3 py-1 text-[11px] font-medium tracking-[0.16em] text-white uppercase">
          You’re live
        </span>
        <h1 className="mt-5 font-display text-[clamp(2.2rem,5.5vw,3.8rem)] leading-[0.95] tracking-[-0.05em] lowercase">
          your profile is ready, {name}.
        </h1>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">
          Hand out your deets anywhere and start growing your audience.
        </p>

        <div className="mt-8 flex overflow-hidden rounded-full border border-line bg-canvas">
          <p className="min-w-0 flex-1 truncate px-5 py-3.5 text-sm">{url}</p>
          <button
            type="button"
            onClick={() => void copyUrl()}
            className="shrink-0 bg-ink px-5 text-sm text-white hover:opacity-90"
          >
            Copy
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {status.map((s) => (
            <span
              key={s.label}
              className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-xs text-ink-soft"
            >
              <span className={`size-1.5 rounded-full ${s.on ? "bg-slate" : "bg-slate/35"}`} />
              {s.label}
            </span>
          ))}
        </div>

        <Link
          to="/"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-slate px-8 text-sm font-medium text-white hover:opacity-90"
        >
          Take me to my home →
        </Link>
        <p className="mt-4 max-w-sm text-sm text-ink-soft">
          From home you can order a card, update this preview, or keep exploring designs.
        </p>
        <button
          type="button"
          onClick={onRestart}
          className="mt-8 text-sm text-ink-soft underline underline-offset-4 hover:text-ink"
        >
          Run the onboarding again
        </button>
      </div>

      <div className="space-y-4">
        <ProfilePreview state={state} className="min-h-[280px] p-8" />
        <div className="rounded-[1.6rem] border border-line bg-canvas p-6">
          <QrMark seed={`https://${url}|${theme.main}|${theme.accent}`} />
          <p className="mt-4 font-medium">Your deets QR code</p>
          <p className="mt-1 text-sm text-ink-soft">
            Print it, save it, or drop it on a sticker. Scanning opens your link.
          </p>
          <button
            type="button"
            onClick={() => void downloadQrPng(url, `deets-${handle}.png`)}
            className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-ink text-sm text-white hover:opacity-90"
          >
            Download PNG
          </button>
        </div>
      </div>
    </div>
  )
}

function EnvelopeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12.5l5 5 9-11" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="5" y="11" width="14" height="10" rx="2" fill="currentColor" />
      <path d="M8 11V8a4 4 0 018 0v3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

function CardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 10h18M7 14h4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function PeopleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 18c.8-2.4 2.8-4 5-4s4.2 1.6 5 4M14 18c.4-1.4 1.5-2.5 3-3 1.4.4 2.5 1.4 3 3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 12h16M12 4c2.4 2.6 3.6 5.4 3.6 8S14.4 17.4 12 20c-2.4-2.6-3.6-5.4-3.6-8S9.6 6.6 12 4z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function EyeOffIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 12s3.2-6 8-6 8 6 8 6-3.2 6-8 6-8-6-8-6z" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5 19L19 5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}
