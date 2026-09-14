import { Link } from "react-router-dom"
import { CONTACT_EMAIL } from "../data/site"
import { BrandLogo } from "./BrandLogo"
import { withBase } from "../lib/base"

export function Footer() {
  return (
    <footer className="relative overflow-hidden text-ink">
      <img
        src={withBase("/media/footer/backdrop.jpg")}
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 pt-14 pb-8 md:px-10 md:pt-20">
        <BrandLogo className="h-8 w-auto md:h-9" />

        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-3 md:gap-8 lg:grid-cols-[1fr_1.2fr_0.8fr]">
          <div>
            <p className="text-[11px] tracking-[0.16em] uppercase">Offices</p>
            <div className="mt-5 flex flex-wrap items-baseline gap-x-3 text-[13px] tracking-[0.08em] uppercase">
              <span>Saudi Arabia</span>
            </div>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-8 block text-[13px] tracking-wide uppercase hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.16em] uppercase">How we work</p>
            <p className="mt-5 max-w-sm text-[13px] leading-relaxed tracking-wide uppercase">
              A smart NFC/QR card that shares your socials and contact info with
              a tap. No app required.
            </p>
            <nav className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[12px] tracking-[0.14em] uppercase">
              <Link className="hover:underline" to="/#how-it-works">
                About us
              </Link>
              <Link className="hover:underline" to="/#products">
                Our services
              </Link>
              <Link className="hover:underline" to="/designs">
                Our projects
              </Link>
            </nav>
          </div>

          <div className="md:text-right">
            <p className="text-[11px] tracking-[0.16em] uppercase">
              Connect with us
            </p>
            <Link
              to="/#contact"
              className="mt-5 inline-flex items-center gap-2 text-[13px] tracking-[0.12em] uppercase underline underline-offset-4"
            >
              Get in touch
              <span aria-hidden>↗</span>
            </Link>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[11px] tracking-[0.12em] uppercase md:justify-end">
              <Link className="hover:underline" to="/terms">
                Terms
              </Link>
              <Link className="hover:underline" to="/privacy">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none relative z-10 mt-10 flex w-full items-end gap-1 px-1 md:mt-14">
        {(
          [
            "hourglass.png",
            "bars.png",
            "cursor.png",
            "dots.png",
          ] as const
        ).map((file) => (
          <div
            key={file}
            className="flex aspect-square min-w-0 flex-1 items-end overflow-hidden"
          >
            <img
              src={withBase(`/media/footer/${file}`)}
              alt=""
              className="h-full w-full object-cover object-bottom"
            />
          </div>
        ))}
      </div>
    </footer>
  )
}
