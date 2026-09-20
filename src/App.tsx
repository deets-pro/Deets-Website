import { useEffect } from "react"
import { MotionConfig } from "framer-motion"
import { Route, Routes, useLocation } from "react-router-dom"
import { GetStartedProvider } from "./components/GetStartedModal"
import { LandingReveal, OpeningProvider } from "./components/OpeningScreen"
import { PageShell } from "./components/PageShell"
import { CompaniesPage } from "./pages/CompaniesPage"
import { DesignsPage } from "./pages/DesignsPage"
import { DirectoryPage } from "./pages/DirectoryPage"
import { HelpPage } from "./pages/HelpPage"
import { HomePage } from "./pages/HomePage"
import { LoginPage } from "./pages/LoginPage"
import { NotFoundPage } from "./pages/NotFoundPage"
import { PrivacyPage } from "./pages/PrivacyPage"
import { StartPage } from "./pages/StartPage"
import { TermsPage } from "./pages/TermsPage"

function HashScroll() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const behavior = reduce ? "auto" : "smooth"

    if (hash) {
      // hash is user-controlled, so it is not safe to hand to querySelector:
      // a value like "#1" is a valid fragment but an invalid CSS selector.
      const el = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (el) {
        el.scrollIntoView({ behavior })
        return
      }
    }
    window.scrollTo({ top: 0, behavior })
  }, [pathname, hash, key])

  return null
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <OpeningProvider>
        <GetStartedProvider>
          <HashScroll />
          <LandingReveal>
            <Routes>
              <Route path="/start" element={<StartPage />} />
              <Route element={<PageShell />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/companies" element={<CompaniesPage />} />
                <Route path="/designs" element={<DesignsPage />} />
                <Route path="/directory" element={<DirectoryPage />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path="/my/login" element={<LoginPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </LandingReveal>
        </GetStartedProvider>
      </OpeningProvider>
    </MotionConfig>
  )
}
