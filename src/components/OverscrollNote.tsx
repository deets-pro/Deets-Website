import { useEffect, useState } from "react"

export function OverscrollNote() {
  return (
    <p className="select-none font-display text-[1.15rem] tracking-[-0.03em] text-slate lowercase sm:text-xl">
      Nothing to see here.
    </p>
  )
}

export function OverscrollHints() {
  const [edge, setEdge] = useState<"top" | "bottom" | null>(null)

  useEffect(() => {
    let hideTimer = 0

    const atTop = () => window.scrollY <= 0
    const atBottom = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      return window.scrollY >= max - 1
    }

    const show = (next: "top" | "bottom") => {
      setEdge(next)
      window.clearTimeout(hideTimer)
      hideTimer = window.setTimeout(() => setEdge(null), 90)
    }

    const hide = () => {
      window.clearTimeout(hideTimer)
      setEdge(null)
    }

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY > 6 && atBottom()) show("bottom")
      else if (e.deltaY < -6 && atTop()) show("top")
    }

    let lastY: number | null = null
    const onTouchMove = (e: TouchEvent) => {
      const y = e.touches[0]?.clientY
      if (y == null) return
      if (lastY != null) {
        const dy = y - lastY
        if (dy < -6 && atBottom()) show("bottom")
        else if (dy > 6 && atTop()) show("top")
      }
      lastY = y
    }

    const onTouchEnd = () => {
      lastY = null
      hide()
    }

    window.addEventListener("wheel", onWheel, { passive: true })
    window.addEventListener("touchmove", onTouchMove, { passive: true })
    window.addEventListener("touchend", onTouchEnd)
    window.addEventListener("touchcancel", onTouchEnd)
    window.addEventListener("pointerup", hide)

    return () => {
      window.clearTimeout(hideTimer)
      window.removeEventListener("wheel", onWheel)
      window.removeEventListener("touchmove", onTouchMove)
      window.removeEventListener("touchend", onTouchEnd)
      window.removeEventListener("touchcancel", onTouchEnd)
      window.removeEventListener("pointerup", hide)
    }
  }, [])

  return (
    <>
      <div
        aria-hidden
        className={`pointer-events-none fixed inset-x-0 top-24 z-20 flex justify-center transition-opacity duration-150 ${
          edge === "top" ? "opacity-100" : "opacity-0"
        }`}
      >
        <OverscrollNote />
      </div>
      <div
        aria-hidden
        className={`pointer-events-none fixed inset-x-0 bottom-10 z-20 flex justify-center transition-opacity duration-150 ${
          edge === "bottom" ? "opacity-100" : "opacity-0"
        }`}
      >
        <OverscrollNote />
      </div>
    </>
  )
}
