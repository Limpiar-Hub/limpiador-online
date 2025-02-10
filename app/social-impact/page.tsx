import type { Metadata } from "next"
import { Suspense } from "react"
import { HeroSection } from "./components/hero-section"
import { MissionSection } from "./components/mission-section"
import { ImpactMetrics } from "./components/impact-metrics"
import { LoadingSpinner } from "@/components/loading-spinner"

export const metadata: Metadata = {
  title: "Social Impact | Limpiar",
  description: "Making a difference through sustainable cleaning practices and community partnerships.",
  openGraph: {
    title: "Social Impact | Limpiar",
    description: "Making a difference through sustainable cleaning practices and community partnerships.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Limpiar Social Impact",
      },
    ],
  },
}

export default function SocialImpactPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Suspense fallback={<LoadingSpinner />}>
        <MissionSection />
        <ImpactMetrics />
      </Suspense>
    </main>
  )
}

