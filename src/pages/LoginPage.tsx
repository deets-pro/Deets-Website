import { useState, type FormEvent } from "react"
import { Link } from "react-router-dom"
import { AuthShell } from "../components/AuthShell"
import { BrandLogo } from "../components/BrandLogo"
import { GetStartedButton } from "../components/GetStartedModal"

const fieldClass =
  "mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-ink outline-none transition-[border-color,box-shadow] placeholder:text-ink/35 focus:border-ink focus:shadow-[0_0_0_4px_rgb(42_49_79_/_0.08)]"

export function LoginPage() {
  const [error, setError] = useState("")

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("Use the live account at my/login on deets.pro to sign in.")
  }

  return (
    <AuthShell>
      <div className="flex flex-1 flex-col justify-center px-6 py-10 sm:px-10">
        <Link to="/" className="mx-auto w-fit">
          <BrandLogo className="h-8 w-auto" />
        </Link>

        <div className="mx-auto mt-8 w-full max-w-[22rem] text-center">
          <h1 className="font-display text-[2.15rem] leading-none tracking-[-0.045em] lowercase">
            log in
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Enter your email and password to open your account.
          </p>
        </div>

        <form className="mx-auto mt-8 flex w-full max-w-[22rem] flex-col gap-5 text-left" onSubmit={onSubmit}>
          <label>
            <span className="text-sm text-ink">Email</span>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              className={fieldClass}
            />
          </label>
          <label>
            <span className="text-sm text-ink">Password</span>
            <input
              name="password"
              type="password"
              required
              autoComplete="current-password"
              placeholder="Your password"
              className={fieldClass}
            />
          </label>
          {error ? <p className="text-sm text-ink-soft">{error}</p> : null}
          <button
            type="submit"
            className="mt-1 inline-flex min-h-12 items-center justify-center rounded-xl bg-chilli text-sm font-medium text-lemon transition-[filter] hover:brightness-110"
          >
            Log in
          </button>
        </form>

        <p className="mx-auto mt-8 text-center text-sm text-ink-soft">
          New here?{" "}
          <GetStartedButton className="font-medium text-ink underline underline-offset-4">
            Get started
          </GetStartedButton>
        </p>
        <p className="mt-2 text-center text-sm text-ink-soft">
          Need help?{" "}
          <Link to="/help" className="font-medium text-ink underline underline-offset-4">
            Contact us
          </Link>
        </p>
      </div>
    </AuthShell>
  )
}
