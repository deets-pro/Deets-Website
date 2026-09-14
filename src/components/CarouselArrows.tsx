const ACCENT_BG = "#fdd015"
const ACCENT_FG = "#be2041"

export function PointerGlyph({
  aim = "default",
  className = "size-6",
}: {
  aim?: "default" | "left" | "right"
  className?: string
}) {
  const isPointer = aim === "default"
  const spin = isPointer
    ? "group-hover:rotate-[360deg]"
    : aim === "left"
      ? "-scale-x-100 group-hover:rotate-[360deg]"
      : "group-hover:rotate-[360deg]"

  return (
    <svg
      viewBox="0 0 24 24"
      className={`origin-center transition-transform duration-500 ease-out ${spin} ${className}`}
      fill="currentColor"
      aria-hidden="true"
    >
      {isPointer ? (
        <path d="M5.2 3.1 20 11.4c.7.4.5 1.4-.3 1.5l-6.2.7 3.6 6.8c.3.6 0 1.3-.6 1.5l-1.8.6c-.6.2-1.2-.2-1.4-.8l-3.4-7.1-4.6 4.3c-.6.6-1.7.2-1.7-.7V4c0-.9 1-1.4 1.8-1z" />
      ) : (
        <path d="M12 4 10.6 5.4 16.2 11H4v2h12.2l-5.6 5.6L12 20l8-8z" />
      )}
    </svg>
  )
}

export function CarouselArrows({
  onPrev,
  onNext,
  prevLabel = "Previous",
  nextLabel = "Next",
  tone = "ink",
}: {
  onPrev: () => void
  onNext: () => void
  prevLabel?: string
  nextLabel?: string
  tone?: "ink" | "accent"
}) {
  return (
    <div className="flex gap-3">
      <ArrowButton
        direction="prev"
        onClick={onPrev}
        label={prevLabel}
        tone={tone}
      />
      <ArrowButton
        direction="next"
        onClick={onNext}
        label={nextLabel}
        tone={tone}
      />
    </div>
  )
}

function ArrowButton({
  direction,
  onClick,
  label,
  tone,
}: {
  direction: "prev" | "next"
  onClick: () => void
  label: string
  tone: "ink" | "accent"
}) {
  const surface =
    tone === "accent"
      ? "bg-[#fdd015] hover:opacity-90"
      : "bg-slate text-white hover:opacity-85"
  const color = tone === "accent" ? ACCENT_FG : undefined

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`group flex size-14 items-center justify-center rounded-full transition-opacity ${surface}`}
      style={color ? { color } : undefined}
    >
      <PointerGlyph
        aim={direction === "prev" ? "left" : "right"}
        className="size-6"
      />
    </button>
  )
}

export { ACCENT_BG, ACCENT_FG }
