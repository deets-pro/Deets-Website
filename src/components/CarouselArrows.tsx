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
      ? "bg-[#fdd015] text-ink hover:opacity-90"
      : "bg-slate text-white hover:opacity-85"

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`group flex size-11 items-center justify-center rounded-full transition-opacity ${surface}`}
    >
      <svg
        viewBox="0 0 24 24"
        className="size-4 transition-transform duration-300 ease-out group-hover:rotate-[360deg]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden
      >
        {direction === "prev" ? (
          <path d="M15 18l-6-6 6-6" />
        ) : (
          <path d="M9 18l6-6-6-6" />
        )}
      </svg>
    </button>
  )
}
