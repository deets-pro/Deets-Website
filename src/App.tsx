import { useEffect } from "react"
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

export default function App() {
  return (
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
            </Route>
          </Routes>
        </LandingReveal>
      </GetStartedProvider>
    </OpeningProvider>
  )
}
