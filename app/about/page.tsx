import type { Metadata } from "next"
import { Suspense } from "react"
import { HeroSection } from "./components/hero-section"
import { MissionSection } from "./components/mission-section"
import { TeamGallery } from "./components/team-gallery"
import { Vision } from "./components/vision"
import { GetOnboard } from "./components/get-onboard"
import { LoadingSpinner } from "@/components/loading-spinner"

export const metadata: Metadata = {
  title: "About Us | Limpiar",
  description: "Learn about our mission to transform the commercial cleaning industry with sustainable solutions.",
  openGraph: {
    title: "About Us | Limpiar",
    description: "Learn about our mission to transform the commercial cleaning industry with sustainable solutions.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-limpiador-online-about-us-2025-02-10-05_33_07-7Zd9t2rXiZTqAqguXzOHcYHADIs04e.png",
        width: 1200,
        height: 630,
        alt: "About Limpiar",
      },
    ],
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Suspense fallback={<LoadingSpinner />}>
        <MissionSection />
        <TeamGallery />
        <Vision />
        <GetOnboard />
      </Suspense>
    </main>
  )
}

