import { useLocale } from "../i18n/LocaleProvider"
import type { Lang } from "../i18n/messages"

const options: { id: Lang; label: string }[] = [
  { id: "en", label: "EN" },
  { id: "ar", label: "ع" },
]

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang, m } = useLocale()

  return (
    <div
      role="group"
      aria-label={m.nav.language}
      className={`inline-flex rounded-full border border-ink/20 bg-white/50 p-0.5 ${className}`}
    >
      {options.map((option) => {
        const active = lang === option.id
        return (
          <button
            key={option.id}
            type="button"
            aria-pressed={active}
            onClick={() => setLang(option.id)}
            className={`min-h-7 min-w-8 rounded-full px-2 text-[11px] font-medium tracking-[0.06em] transition-colors ${
              active ? "bg-ink text-white" : "text-ink/55 hover:text-ink"
            }`}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
