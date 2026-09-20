import { CompaniesTeaser } from "../components/CompaniesTeaser"
import { CtaSection } from "../components/CtaSection"
import { ContactSection } from "../components/ContactSection"
import { FaqSection } from "../components/FaqSection"
import { Hero } from "../components/Hero"
import { HowItWorks } from "../components/HowItWorks"
import { PricingSection } from "../components/PricingSection"
import { TemplateCarousel } from "../components/TemplateCarousel"
import { TestimonialsSection } from "../components/TestimonialsSection"
import { ProductSection } from "../components/ProductSection"
import { usePageMeta } from "../hooks/usePageMeta"

export function HomePage() {
  usePageMeta(
    "Deets Pro — One link for everything you are",
    "One link that holds your contact details, socials, and everything else you share, updated everywhere the moment you change it.",
  )

  return (
    <>
      <Hero />
      <CompaniesTeaser />
      <ProductSection />
      <HowItWorks />
      <TemplateCarousel />
      <CtaSection />
      <PricingSection />
      <div className="hidden">
        <TestimonialsSection />
      </div>
      <FaqSection />
      <ContactSection />
    </>
  )
}
