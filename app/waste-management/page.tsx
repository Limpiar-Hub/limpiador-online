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
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-limpiador-online-coming-soon-01-2025-02-10-05_33_31-edIyMFN5MepZXeI0XWTrMYWzGLWPxl.png",
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

