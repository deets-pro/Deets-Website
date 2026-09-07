import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  STEP_META,
  canContinue,
  clearState,
  defaultState,
  loadState,
  saveState,
  type OnboardingState,
  type StepId,
} from "../onboarding/model"
import {
  ReadyScreen,
  StepCard,
  StepDirectory,
  StepEmail,
  StepHandle,
  StepLinks,
  StepProfile,
  StepTheme,
} from "../onboarding/steps"
import { OnboardingFooter, OnboardingHeader } from "../onboarding/ui"

const fade = {
  initial: { opacity: 0, y: 18 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: { opacity: 0, y: -14, transition: { duration: 0.28 } },
}

export function StartPage() {
  const navigate = useNavigate()
  const [state, setState] = useState<OnboardingState>(loadState)

  useEffect(() => {
    saveState(state)
  }, [state])

  const patch = (partial: Partial<OnboardingState>) => {
    setState((s) => ({ ...s, ...partial }))
  }

  const goTo = (step: OnboardingState["step"]) => patch({ step })

  const back = () => {
    if (state.step === "ready") {
      goTo(7)
      return
    }
    if (state.step === 1) {
      navigate("/")
      return
    }
    goTo((state.step - 1) as StepId)
  }

  const next = () => {
    if (!canContinue(state)) return
    if (state.step === "ready") return
    if (state.step === 7) {
      goTo("ready")
      return
    }
    goTo((state.step + 1) as StepId)
  }

  const restart = () => {
    clearState()
    setState(defaultState())
  }

  const stepProps = { state, patch, onContinue: next, goTo }
  const current = state.step === "ready" ? 7 : state.step
  const meta = state.step === "ready" ? null : STEP_META[state.step]

  return (
    <div className="flex min-h-svh flex-col bg-canvas-dim">
      <div className="grain" aria-hidden />
      <OnboardingHeader current={current} />
      <main className="relative z-10 flex flex-1 flex-col overflow-y-auto px-5 py-10 md:px-10 md:py-14">
        <div className="flex flex-1 justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={String(state.step)}
              initial={fade.initial}
              animate={fade.animate}
              exit={fade.exit}
              className="w-full"
            >
              {state.step === 1 ? <StepEmail {...stepProps} /> : null}
              {state.step === 2 ? <StepHandle {...stepProps} /> : null}
              {state.step === 3 ? <StepProfile {...stepProps} /> : null}
              {state.step === 4 ? <StepTheme {...stepProps} /> : null}
              {state.step === 5 ? <StepLinks {...stepProps} /> : null}
              {state.step === 6 ? <StepCard {...stepProps} /> : null}
              {state.step === 7 ? <StepDirectory {...stepProps} /> : null}
              {state.step === "ready" ? (
                <ReadyScreen state={state} onRestart={restart} />
              ) : null}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
      {meta ? (
        <OnboardingFooter
          onBack={back}
          onSkip={next}
          onContinue={next}
          continueLabel={state.step === 7 ? "Finish" : "Continue"}
          continueDisabled={!canContinue(state)}
          skip={meta.skip}
        />
      ) : null}
    </div>
  )
}
