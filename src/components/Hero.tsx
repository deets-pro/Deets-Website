import { withBase } from "../lib/base"
import { mediaSlots } from "../media/higgsfield"
import { LoopingVideo } from "./LoopingVideo"

const DOWNLOAD_URL = "https://www.deets.pro"

export function Hero() {
  return (
    <section className="relative grid h-svh min-h-[640px] w-full grid-rows-[1fr_minmax(240px,42%)] overflow-hidden bg-[#e3f4b0] md:grid-cols-2 md:grid-rows-none">
      <LoopingVideo
        slot={mediaSlots.hero}
        fill
        startOn="view"
        className="hidden"
        fallback={null}
      />
      <div className="relative z-10 flex min-h-0 flex-col px-5 pt-24 pb-8 sm:px-8 md:px-10 md:pt-28 md:pb-12 lg:px-16">
        <div className="flex flex-1 flex-col justify-center">
          <div className="max-w-xl">
            <h1 className="font-display text-[clamp(2.1rem,4.4vw,4.2rem)] leading-[0.95] tracking-[-0.045em] text-[#1e5731]">
              A Profile that
              <br />
              Speaks for you
            </h1>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-[#1e5731] lowercase">
              get instant access to more information about your social media
            </p>
          </div>
        </div>
        <a
          href={DOWNLOAD_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit items-center gap-3 bg-[#0a3924] px-3 py-2.5 text-[#d6ef6a] transition-opacity hover:opacity-90"
        >
          <img
            src={withBase("/media/hero-qr.png")}
            alt=""
            className="size-14"
          />
          <span className="text-[13px] leading-tight font-medium">
            Download
            <br />
            Now!
          </span>
        </a>
      </div>
      <div className="relative min-h-[38vh] md:min-h-0">
        <img
          src={withBase("/media/hero-phone.jpg")}
          alt=""
          className="absolute inset-0 size-full object-cover object-[center_20%]"
        />
      </div>
    </section>
  )
}
