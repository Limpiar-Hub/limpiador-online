import type { Metadata } from "next"
import { BookingFlow } from "./components/booking-flow"

export const metadata: Metadata = {
  title: "Schedule a Demo | Limpiar",
  description: "Book a free consultation call with our team to learn how Limpiar can help your business.",
}

export default function ScheduleDemoPage() {
  return (
    <main className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Schedule a Demo</h1>
          <BookingFlow />
        </div>
      </div>
    </main>
  )
}

