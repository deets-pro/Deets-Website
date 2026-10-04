import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { messages, type Lang, type Messages } from "./messages"

type LocaleValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  m: Messages
}

const LocaleContext = createContext<LocaleValue | null>(null)
const STORAGE_KEY = "deets.lang"

function readLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === "ar" || stored === "en") return stored
  } catch {
    /* private mode */
  }
  return "en"
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readLang)

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* private mode */
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, m: messages[lang] }), [lang, setLang])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider")
  return ctx
}
