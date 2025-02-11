import type { Metadata } from "next"
import { Suspense } from "react"
import { HeroSection } from "./components/hero-section"
import { ComingSoon } from "./components/coming-soon"
import { LoadingSpinner } from "@/components/loading-spinner"

export const metadata: Metadata = {
  title: "Waste Management | Limpiar",
  description: "Sustainable waste management solutions for modern businesses.",
  openGraph: {
    title: "Waste Management | Limpiar",
    description: "Sustainable waste management solutions for modern businesses.",
    images: [
      {
        url: "/waste.png",
        width: 1200,
        height: 630,
        alt: "Limpiar Waste Management",
      },
    ],
  },
}

export default function WasteManagementPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Suspense fallback={<LoadingSpinner />}>
        <ComingSoon />
      </Suspense>
    </main>
  )
}

