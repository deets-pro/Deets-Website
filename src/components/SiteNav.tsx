import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { navLinks } from "../data/site"
import { GetStartedButton } from "./GetStartedModal"
import { BrandLogo } from "./BrandLogo"

export function SiteNav() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [shown, setShown] = useState(true)
  const lastY = useRef(0)

  useEffect(() => {
    setOpen(false)
    setShown(true)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener("keydown", onKey)
    }
  }, [open])

  useEffect(() => {
    if (location.pathname !== "/") {
      lastY.current = window.scrollY
      return
    }

    const update = () => {
      const y = window.scrollY
      const delta = y - lastY.current
      lastY.current = y
      const past = y > window.innerHeight - 48

      if (open) {
        setShown(true)
        return
      }
      if (!past || y < 16) {
        setShown(true)
        return
      }
      if (delta > 4) setShown(false)
      else if (delta < -4) setShown(true)
    }

    lastY.current = window.scrollY
    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [location.pathname, open])

  const overHero = false

  const linkClass = overHero
    ? "text-[13px] tracking-wide text-white/80 transition-colors hover:text-white"
    : "text-[13px] tracking-wide text-ink-soft transition-colors hover:text-ink"

  const boxCta = overHero
    ? "inline-flex min-h-8 items-center rounded-full border border-white/45 px-4 text-[11px] tracking-[0.14em] text-white uppercase transition-colors hover:bg-white/10"
    : "inline-flex min-h-8 items-center rounded-full border border-ink/25 px-4 text-[11px] tracking-[0.14em] text-ink uppercase transition-colors hover:bg-ink/5"

  const pillClass = overHero
    ? "border border-white/15 bg-black/35 text-white shadow-[0_8px_32px_rgb(0_0_0_/_0.18)] backdrop-blur-xl"
    : "border border-transparent bg-[#e3f4b0]/40 text-ink shadow-[0_8px_32px_rgb(30_87_49_/_0.08)] backdrop-blur-2xl backdrop-saturate-150"

  const reduceMotion = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <>
    <header
      className={`pointer-events-none fixed inset-x-0 top-0 z-40 px-4 pt-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-6 md:pt-5 ${
        shown ? "translate-y-0" : "-translate-y-[calc(100%+1rem)]"
      }`}
    >
      <div className="mx-auto w-full max-w-5xl">
        <div
          className={`pointer-events-auto rounded-full px-3 py-2 transition-[background-color,border-color,box-shadow] duration-500 sm:px-4 sm:py-2.5 md:px-5 md:py-3 ${pillClass}`}
        >
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            <Link to="/" className="flex min-w-0 shrink items-center">
              <BrandLogo
                className={`h-5 w-auto sm:h-6 md:h-7 ${overHero ? "brightness-0 invert" : ""}`}
              />
            </Link>

            <nav
              className="hidden items-center gap-6 xl:gap-8 lg:flex"
              aria-label="Primary"
            >
              {navLinks.map((link) => (
                <NavLink key={link.to} to={link.to} className={linkClass}>
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden items-center gap-2 lg:flex">
              <Link to="/my/login" className={boxCta}>
                Log in
              </Link>
              <GetStartedButton className={boxCta}>
                Get started
              </GetStartedButton>
            </div>

            <button
              type="button"
              className="rounded-full p-2 text-black lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Menu</span>
              <span className="flex h-3.5 w-[22px] flex-col justify-between">
                <span className="block h-[2px] w-full rounded-full bg-black" />
                <span className="block h-[2px] w-full rounded-full bg-black" />
                <span className="block h-[2px] w-full rounded-full bg-black" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>

    <AnimatePresence>
    {open ? (
      <motion.div
        key="mobile-menu"
        className="fixed inset-0 z-50 lg:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.4, ease }}
      >
        <button
          type="button"
          className="absolute inset-0 bg-black/45"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
        <motion.div
          id="mobile-nav"
          className="absolute inset-3 flex flex-col overflow-hidden rounded-[1.75rem] bg-[#f6f3ee] text-black shadow-[0_24px_80px_rgb(0_0_0_/_0.18)] sm:inset-4"
          style={{ transformOrigin: "top center" }}
          initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: reduceMotion ? 0 : 0.46, ease }}
        >
          <div className="flex items-center justify-between px-5 pt-5 pb-4">
            <Link to="/" onClick={() => setOpen(false)} className="shrink-0">
              <BrandLogo className="h-6 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex size-10 items-center justify-center"
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            </button>
          </div>

          <nav className="overflow-y-auto px-2" aria-label="Mobile">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.38, delay: reduceMotion ? 0 : 0.06 + i * 0.045, ease }}
              >
                <NavLink
                  to={link.to}
                  className="flex items-center justify-between border-t border-black/10 px-3 py-4 text-[17px]"
                >
                  {link.label}
                  <svg viewBox="0 0 24 24" className="size-4 text-black/70" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </NavLink>
              </motion.div>
            ))}
            <div className="border-t border-black/10" />
          </nav>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4 px-5 pt-8 pb-7 text-[15px]">
            <Link to="/my/login" onClick={() => setOpen(false)}>
              Log in
            </Link>
            <GetStartedButton onClick={() => setOpen(false)} className="text-left">
              Get started
            </GetStartedButton>
            <Link to="/#how-it-works" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link to="/terms" onClick={() => setOpen(false)}>
              Terms
            </Link>
            <Link to="/privacy" onClick={() => setOpen(false)}>
              Privacy
            </Link>
          </div>
        </motion.div>
      </motion.div>
    ) : null}
    </AnimatePresence>
    </>
  )
}
