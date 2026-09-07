import { activeTheme, profileBlurb, profileInitial, profileName, previewButtons, type OnboardingState } from "./model"

export function ProfilePreview({
  state,
  className = "",
}: {
  state: OnboardingState
  className?: string
}) {
  const theme = activeTheme(state)
  const buttons = previewButtons(state)
  const name = profileName(state)
  const initial = profileInitial(state)

  return (
    <div
      className={`relative overflow-hidden rounded-[1.6rem] p-5 ${className}`}
      style={{ background: theme.main, color: theme.text }}
    >
      <div className="flex flex-col items-center text-center">
        {state.photo ? (
          <img
            src={state.photo}
            alt=""
            className="size-14 rounded-full object-cover ring-2 ring-white/30"
          />
        ) : (
          <span
            className="flex size-14 items-center justify-center rounded-full font-display text-xl lowercase"
            style={{ background: theme.accent, color: theme.main === theme.accent ? theme.text : contrastOn(theme.accent) }}
          >
            {initial}
          </span>
        )}
        <p className="mt-3 font-display text-lg leading-none tracking-tight lowercase">
          {name}
        </p>
        <p className="mt-1.5 line-clamp-2 text-[11px] leading-snug" style={{ color: theme.muted }}>
          {profileBlurb(state)}
        </p>
        <div className="mt-4 flex w-full flex-col gap-2">
          <span
            className="rounded-full px-3 py-2 text-[11px] font-medium"
            style={{ background: theme.accent, color: contrastOn(theme.accent) }}
          >
            {buttons[0]}
          </span>
          <span
            className="rounded-full px-3 py-2 text-[11px] font-medium"
            style={{ background: `${theme.text}22`, color: theme.text }}
          >
            {buttons[1]}
          </span>
        </div>
      </div>
    </div>
  )
}

function contrastOn(hex: string) {
  const n = hex.replace("#", "")
  if (n.length !== 6) return "#0a0a0a"
  const r = Number.parseInt(n.slice(0, 2), 16)
  const g = Number.parseInt(n.slice(2, 4), 16)
  const b = Number.parseInt(n.slice(4, 6), 16)
  const l = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return l > 0.62 ? "#0a0a0a" : "#ffffff"
}

function hashedBits(seed: string, count: number) {
  const bits: boolean[] = []
  let h = 2166136261
  for (let i = 0; i < seed.length; i += 1) {
    h ^= seed.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  for (let i = 0; i < count; i += 1) {
    h ^= h << 13
    h ^= h >>> 17
    h ^= h << 5
    bits.push((h >>> 0) % 2 === 0)
  }
  return bits
}

export function QrMark({
  seed,
  size = 180,
}: {
  seed: string
  size?: number
}) {
  const n = 21
  const bits = hashedBits(seed || "deets", n * n)
  const modules: boolean[][] = Array.from({ length: n }, (_, y) =>
    Array.from({ length: n }, (_, x) => {
      const inFinder =
        (x < 7 && y < 7) || (x > n - 8 && y < 7) || (x < 7 && y > n - 8)
      if (inFinder) return false
      const inCenter = x >= 8 && x <= 12 && y >= 8 && y <= 12
      if (inCenter) return false
      return bits[y * n + x]
    }),
  )

  const paintFinder = (ox: number, oy: number) => {
    for (let y = 0; y < 7; y += 1) {
      for (let x = 0; x < 7; x += 1) {
        const edge = x === 0 || y === 0 || x === 6 || y === 6
        const core = x >= 2 && x <= 4 && y >= 2 && y <= 4
        modules[oy + y][ox + x] = edge || core
      }
    }
  }
  paintFinder(0, 0)
  paintFinder(n - 7, 0)
  paintFinder(0, n - 7)

  const cell = size / n

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="mx-auto block"
      role="img"
      aria-label="Profile QR code"
    >
      <rect width={size} height={size} fill="#fff" />
      {modules.flatMap((row, y) =>
        row.map((on, x) =>
          on ? (
            <rect
              key={`${x}-${y}`}
              x={x * cell}
              y={y * cell}
              width={cell}
              height={cell}
              fill="#0a0a0a"
            />
          ) : null,
        ),
      )}
      <rect
        x={size * 0.36}
        y={size * 0.36}
        width={size * 0.28}
        height={size * 0.28}
        rx={4}
        fill="#fff"
      />
      <text
        x={size / 2}
        y={size / 2 + 3}
        textAnchor="middle"
        fill="#0a0a0a"
        fontSize={size * 0.07}
        fontFamily="Urbane, sans-serif"
        fontWeight={600}
      >
        deets
      </text>
    </svg>
  )
}

export async function downloadQrPng(seed: string, filename: string) {
  const size = 512
  const n = 21
  const bits = hashedBits(seed || "deets", n * n)
  const canvas = document.createElement("canvas")
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext("2d")
  if (!ctx) return
  ctx.fillStyle = "#ffffff"
  ctx.fillRect(0, 0, size, size)
  const cell = size / n
  const on = (x: number, y: number) => {
    const inFinder =
      (x < 7 && y < 7) || (x > n - 8 && y < 7) || (x < 7 && y > n - 8)
    if (inFinder) {
      const lx = x < 7 ? x : x - (n - 7)
      const ly = y < 7 ? y : y - (n - 7)
      const edge = lx === 0 || ly === 0 || lx === 6 || ly === 6
      const core = lx >= 2 && lx <= 4 && ly >= 2 && ly <= 4
      return edge || core
    }
    if (x >= 8 && x <= 12 && y >= 8 && y <= 12) return false
    return bits[y * n + x]
  }
  ctx.fillStyle = "#0a0a0a"
  for (let y = 0; y < n; y += 1) {
    for (let x = 0; x < n; x += 1) {
      if (on(x, y)) ctx.fillRect(x * cell, y * cell, cell, cell)
    }
  }
  ctx.fillStyle = "#ffffff"
  ctx.fillRect(size * 0.36, size * 0.36, size * 0.28, size * 0.28)
  ctx.fillStyle = "#0a0a0a"
  ctx.font = `600 ${Math.round(size * 0.07)}px Urbane, sans-serif`
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.fillText("deets", size / 2, size / 2)
  const url = canvas.toDataURL("image/png")
  const a = document.createElement("a")
  a.href = url
  a.download = filename
  a.click()
}
