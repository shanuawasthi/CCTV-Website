import { HeroSection } from "@/components/home/hero-section"
import { FeaturesSection } from "@/components/home/features-section"
import { ProductsPreview } from "@/components/home/products-preview"
import { ServicesOverview } from "@/components/home/services-overview"
import { TrustIndicators } from "@/components/home/trust-indicators"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTABanner } from "@/components/home/cta-banner"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustIndicators />
      <FeaturesSection />
      <ProductsPreview />
      <ServicesOverview />
      <TestimonialsSection />
      <CTABanner />
    </>
  )
}
