import { useEffect, type RefObject } from "react"

const REDUCE_QUERY = "(prefers-reduced-motion: reduce)"

/**
 * Plays a muted looping video while it is on screen and pauses it once it
 * leaves. Honours prefers-reduced-motion: WCAG 2.2.2 asks that motion lasting
 * over five seconds be pausable, and these clips loop indefinitely.
 */
export function useVideoInView(
  ref: RefObject<HTMLVideoElement | null>,
  { enabled = true, onError }: { enabled?: boolean; onError?: () => void } = {},
) {
  useEffect(() => {
    const el = ref.current
    if (!el || !enabled) return

    const motion = window.matchMedia(REDUCE_QUERY)
    let visible = false

    const apply = () => {
      if (motion.matches || !visible) {
        el.pause()
        return
      }
      void el.play().catch(() => onError?.())
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        apply()
      },
      { threshold: 0.15 },
    )

    io.observe(el)
    motion.addEventListener("change", apply)

    return () => {
      io.disconnect()
      motion.removeEventListener("change", apply)
    }
  }, [ref, enabled, onError])
}

/** True when the user has asked for reduced motion, read once on mount. */
export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" && window.matchMedia(REDUCE_QUERY).matches
  )
}
