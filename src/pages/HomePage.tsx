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

export function HomePage() {
  return (
    <>
      <Hero />
      <CompaniesTeaser />
      <ProductSection />
      <HowItWorks />
      <TemplateCarousel />
      <CtaSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </>
  )
}
