import { Outlet } from "react-router-dom"
import { useLocale } from "../i18n/LocaleProvider"
import { Footer } from "./Footer"
import { SiteNav } from "./SiteNav"

export function PageShell() {
  const { m } = useLocale()
  return (
    <>
      <div className="grain" aria-hidden />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-canvas focus:px-3 focus:py-2"
      >
        {m.skip}
      </a>
      <SiteNav />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
