import { Suspense } from "react"
import { HeroSection } from "@/components/hero-section"
import { PartnerLogos } from "@/components/partner-logos"
import { ServicesNavigation } from "@/components/services-navigation"
import { FeaturesSection } from "@/components/features-section"
import { LimpiarAdvantage } from "@/components/limpiar-advantage"
import { ServiceCircles } from "@/components/service-circles"
import { Testimonials } from "@/components/testimonials"
import { StatsBar } from "@/components/stats-bar"
import { GetStartedSteps } from "@/components/get-started-steps"
import { LoadingSpinner } from "@/components/loading-spinner"
import { JoinMovement } from "@/components/join-movement"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PartnerLogos />
      <ServicesNavigation />
      <Suspense fallback={<LoadingSpinner />}>
        <FeaturesSection />
        <LimpiarAdvantage />
        <ServiceCircles />
        <Testimonials />
        <StatsBar />
        <GetStartedSteps />
        <JoinMovement />
      </Suspense>
    </main>
  )
}

