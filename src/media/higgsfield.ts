/**
 * Higgsfield video slots
 *
 * Drop silent, seamlessly looping MP4 exports into /public/media using the
 * filenames below, then set `ready: true` on that slot.
 *
 * Encoding: H.264 (High, yuv420p). No audio track. Target < 4 MB per clip.
 * Loop on a still frame or a 2–4 frame cross-dissolve so the cut is invisible.
 */

import { withBase } from "../lib/base"

export type VideoSlot = {
  /** Flip after the files exist in /public/media */
  ready: boolean
  desktopSrc: string
  desktopWebmSrc?: string
  mobileSrc?: string
  mobileWebmSrc?: string
  posterSrc?: string
  aspect: string
  duration: string
  notes: string
}

export const mediaSlots = {
  /**
   * OPENING — centered loader on a white void
   * Small D-mark animation. Play once, then reveal the site.
   */
  opening: {
    ready: true,
    desktopSrc: withBase("/media/opening.mp4"),
    posterSrc: withBase("/media/opening-poster.jpg"),
    aspect: "16 / 9",
    duration: "5s",
    notes: "Centered, muted, play-once. Mix-blend so the white frame disappears.",
  },
} satisfies Record<string, VideoSlot>

export const STORE_URL = "https://store.deets.pro"
export const CONTACT_EMAIL = "contact@deets.pro"
