"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function BookingSuccess() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center py-16 px-4"
    >
      <div className="max-w-md mx-auto">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>

        <h2 className="text-2xl font-bold mb-4">Booking Confirmed!</h2>

        <p className="text-gray-600 mb-8">
          Thank you for scheduling a demo with Limpiar. We&apos;ve sent a confirmation email with all the details. Our team
          is looking forward to speaking with you and showing how our services can benefit your business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="bg-blue-600 hover:bg-blue-700">Return to Homepage</Button>
          </Link>

          <Button variant="outline">Add to Calendar</Button>
        </div>
      </div>
    </motion.div>
  )
}

