import { Suspense } from "react"
import { HeroSection } from "@/components/home/hero-section"
import { TargetAudience } from "@/components/home/target-audience"
import { InfoCards } from "@/components/home/info-cards"
import { LoadingSpinner } from "@/components/loading-spinner"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Suspense fallback={<LoadingSpinner />}>
        <TargetAudience />
        <InfoCards />
      </Suspense>
    </main>
  )
}

