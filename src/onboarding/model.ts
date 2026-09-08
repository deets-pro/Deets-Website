export const TOTAL_STEPS = 7
export const BIO_MAX = 120
export const HANDLE_MAX = 24
export const STORAGE_KEY = "deets-onboarding"

export type StepId = 1 | 2 | 3 | 4 | 5 | 6 | 7
export type ScreenId = StepId | "ready"

export type ThemeId =
  | "deets"
  | "classic"
  | "sunset"
  | "cobalt"
  | "grape"
  | "forest"
  | "midnight"
  | "rose"
  | "lagoon"
  | "custom"

export type ProfileTheme = {
  id: Exclude<ThemeId, "custom">
  name: string
  main: string
  accent: string
  text: string
  muted: string
}

export type SocialId =
  | "instagram"
  | "x"
  | "tiktok"
  | "youtube"
  | "linkedin"
  | "github"
  | "website"

export type CustomLink = {
  id: string
  title: string
  url: string
}

export type OnboardingState = {
  step: ScreenId
  email: string
  codeSent: boolean
  code: string
  emailVerified: boolean
  handle: string
  displayTitle: string
  bio: string
  photo: string | null
  themeId: ThemeId
  customMain: string
  customAccent: string
  customizing: boolean
  socials: Record<SocialId, string>
  customLinks: CustomLink[]
  shareContact: boolean
  exchangeContact: boolean
  listed: boolean
}

export const THEMES: ProfileTheme[] = [
  {
    id: "deets",
    name: "Deets",
    main: "#2a314f",
    accent: "#00d4ff",
    text: "#ffffff",
    muted: "rgba(255,255,255,0.7)",
  },
  {
    id: "classic",
    name: "Classic",
    main: "#edf2fa",
    accent: "#2a314f",
    text: "#2a314f",
    muted: "rgba(42,49,79,0.55)",
  },
  {
    id: "sunset",
    name: "Sunset",
    main: "#ff5c42",
    accent: "#ffd23f",
    text: "#ffffff",
    muted: "rgba(255,255,255,0.78)",
  },
  {
    id: "cobalt",
    name: "Cobalt",
    main: "#1d4ed8",
    accent: "#93c5fd",
    text: "#ffffff",
    muted: "rgba(255,255,255,0.75)",
  },
  {
    id: "grape",
    name: "Grape",
    main: "#7c3aed",
    accent: "#e9d5ff",
    text: "#ffffff",
    muted: "rgba(255,255,255,0.78)",
  },
  {
    id: "forest",
    name: "Forest",
    main: "#166534",
    accent: "#86efac",
    text: "#ffffff",
    muted: "rgba(255,255,255,0.78)",
  },
  {
    id: "midnight",
    name: "Midnight",
    main: "#111111",
    accent: "#ff6b1a",
    text: "#ffffff",
    muted: "rgba(255,255,255,0.7)",
  },
  {
    id: "rose",
    name: "Rose",
    main: "#e11d74",
    accent: "#ffc2dd",
    text: "#ffffff",
    muted: "rgba(255,255,255,0.78)",
  },
  {
    id: "lagoon",
    name: "Lagoon",
    main: "#0f766e",
    accent: "#99f6e4",
    text: "#ffffff",
    muted: "rgba(255,255,255,0.78)",
  },
]

export const SOCIALS: {
  id: SocialId
  label: string
  placeholder: string
}[] = [
  { id: "instagram", label: "Instagram", placeholder: "@username" },
  { id: "x", label: "X", placeholder: "@handle" },
  { id: "tiktok", label: "TikTok", placeholder: "@username" },
  { id: "youtube", label: "YouTube", placeholder: "channel URL or @handle" },
  { id: "linkedin", label: "LinkedIn", placeholder: "in/your-name" },
  { id: "github", label: "GitHub", placeholder: "username" },
  { id: "website", label: "Website", placeholder: "https://yoursite.com" },
]

export const HANDLE_IDEAS = ["aria.studio", "the.maker", "good.vibes"]

const TAKEN_HANDLES = new Set([
  "admin",
  "deets",
  "www",
  "api",
  "help",
  "login",
  "directory",
  "support",
])

const emptySocials = (): Record<SocialId, string> => ({
  instagram: "",
  x: "",
  tiktok: "",
  youtube: "",
  linkedin: "",
  github: "",
  website: "",
})

export const defaultState = (): OnboardingState => ({
  step: 1,
  email: "",
  codeSent: false,
  code: "",
  emailVerified: false,
  handle: "",
  displayTitle: "",
  bio: "",
  photo: null,
  themeId: "deets",
  customMain: "#2a314f",
  customAccent: "#00d4ff",
  customizing: false,
  socials: emptySocials(),
  customLinks: [],
  shareContact: false,
  exchangeContact: false,
  listed: false,
})

export function loadState(): OnboardingState {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultState()
    return { ...defaultState(), ...JSON.parse(raw) } as OnboardingState
  } catch {
    return defaultState()
  }
}

export function saveState(state: OnboardingState) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    /* ignore quota */
  }
}

export function clearState() {
  try {
    sessionStorage.removeItem(STORAGE_KEY)
  } catch {
    /* ignore */
  }
}

export function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

export function normalizeHandle(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, "")
}

export type HandleStatus = "empty" | "invalid" | "short" | "taken" | "ok"

export function handleStatus(value: string): HandleStatus {
  const handle = normalizeHandle(value)
  if (!handle) return "empty"
  if (handle.length < 3) return "short"
  if (!/^[a-z0-9]+([._][a-z0-9]+)*$/.test(handle) || handle.length > HANDLE_MAX) {
    return "invalid"
  }
  if (TAKEN_HANDLES.has(handle)) return "taken"
  return "ok"
}

export function activeTheme(state: OnboardingState): {
  main: string
  accent: string
  text: string
  muted: string
} {
  if (state.themeId === "custom") {
    const text = contrastText(state.customMain)
    return {
      main: state.customMain,
      accent: state.customAccent,
      text,
      muted: text === "#ffffff" ? "rgba(255,255,255,0.72)" : "rgba(10,10,10,0.55)",
    }
  }
  return THEMES.find((t) => t.id === state.themeId) ?? THEMES[0]
}

export function contrastText(hex: string) {
  const n = hex.replace("#", "")
  if (n.length !== 6) return "#ffffff"
  const r = Number.parseInt(n.slice(0, 2), 16)
  const g = Number.parseInt(n.slice(2, 4), 16)
  const b = Number.parseInt(n.slice(4, 6), 16)
  const l = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return l > 0.62 ? "#2a314f" : "#ffffff"
}

export function profileName(state: OnboardingState) {
  return state.displayTitle.trim() || state.handle || "you"
}

export function profileInitial(state: OnboardingState) {
  const name = profileName(state)
  return name.charAt(0).toLowerCase()
}

export function profileBlurb(state: OnboardingState) {
  return state.bio.trim() || "Your deets, one tap away."
}

export function filledLinkCount(state: OnboardingState) {
  const socials = Object.values(state.socials).filter((v) => v.trim()).length
  const custom = state.customLinks.filter((l) => l.title.trim() && l.url.trim()).length
  return socials + custom
}

export function previewButtons(state: OnboardingState) {
  const custom = state.customLinks
    .filter((l) => l.title.trim())
    .slice(0, 2)
    .map((l) => l.title.trim())
  if (custom.length === 2) return custom
  const rest = ["My portfolio", "Latest drop"]
  return [...custom, ...rest].slice(0, 2)
}

export const STEP_META: Record<
  StepId,
  { badge: string; skip: boolean; required: boolean }
> = {
  1: { badge: "Step 1 · Verify", skip: true, required: false },
  2: { badge: "Step 2 · Claim it", skip: false, required: true },
  3: { badge: "Step 3 · Introduce yourself", skip: false, required: true },
  4: { badge: "Step 4 · Set the vibe", skip: true, required: false },
  5: { badge: "Step 5 · Fill it up", skip: true, required: false },
  6: { badge: "Step 6 · Business card", skip: true, required: false },
  7: { badge: "Step 7 · Discoverability", skip: true, required: false },
}

export function canContinue(state: OnboardingState) {
  if (state.step === "ready") return true
  if (state.step === 2) return handleStatus(state.handle) === "ok"
  if (state.step === 3) return state.displayTitle.trim().length > 1
  return true
}

export function newLinkId() {
  return `link-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`
}
