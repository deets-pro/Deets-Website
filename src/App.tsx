import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { GetStartedProvider } from "./components/GetStartedModal"
import { LocaleProvider } from "./i18n/LocaleProvider"
import { LandingReveal, OpeningProvider } from "./components/OpeningScreen"
import { PageShell } from "./components/PageShell"
import { CompaniesPage } from "./pages/CompaniesPage"
import { DesignsPage } from "./pages/DesignsPage"
import { DirectoryPage } from "./pages/DirectoryPage"
import { HelpPage } from "./pages/HelpPage"
import { HomePage } from "./pages/HomePage"
import { LoginPage } from "./pages/LoginPage"
import { PrivacyPage } from "./pages/PrivacyPage"
import { StartPage } from "./pages/StartPage"
import { TermsPage } from "./pages/TermsPage"

function HashScroll() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

const softPaths = new Set(["/my/login", "/start"])
const softEase = [0.22, 1, 0.36, 1] as const

function AnimatedRoutes() {
  const location = useLocation()
  const reduceMotion = useReducedMotion()
  const soft = softPaths.has(location.pathname)

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={soft ? location.pathname : "site"}
        initial={reduceMotion ? false : { opacity: 0, y: soft ? 18 : 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : soft ? -12 : 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.42, ease: softEase }}
      >
        <Routes location={location}>
          <Route path="/start" element={<StartPage />} />
          <Route path="/my/login" element={<LoginPage />} />
          <Route element={<PageShell />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/companies" element={<CompaniesPage />} />
            <Route path="/designs" element={<DesignsPage />} />
            <Route path="/directory" element={<DirectoryPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Route>
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <LocaleProvider>
    <OpeningProvider>
      <GetStartedProvider>
        <HashScroll />
        <LandingReveal>
          <AnimatedRoutes />
        </LandingReveal>
      </GetStartedProvider>
    </OpeningProvider>
    </LocaleProvider>
  )
}
