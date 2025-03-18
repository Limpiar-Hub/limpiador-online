"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle, Calendar, Clock, User, Phone, Mail, Building } from "lucide-react"
import { format } from "date-fns"
import type { BookingData } from "./booking-flow"
import Link from "next/link"

interface ConfirmationProps {
  bookingData: BookingData
  onReset: () => void
}

export function Confirmation({ bookingData, onReset }: ConfirmationProps) {
  return (
    <div className="p-8 md:p-12">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Your meeting is scheduled!</h2>
        <p className="text-gray-600">
          We&apos;ve sent a calendar invitation to your email. Looking forward to speaking with you!
        </p>
      </motion.div>

      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h3 className="font-semibold text-lg mb-4">Meeting Details</h3>

        <div className="space-y-4">
          <div className="flex items-start">
            <Calendar className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
            <div>
              <p className="font-medium">Date</p>
              <p className="text-gray-600">{bookingData.date ? format(bookingData.date, "EEEE, MMMM d, yyyy") : ""}</p>
            </div>
          </div>

          <div className="flex items-start">
            <Clock className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
            <div>
              <p className="font-medium">Time</p>
              <p className="text-gray-600">{bookingData.time} (30 minutes)</p>
            </div>
          </div>

          <div className="flex items-start">
            <User className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
            <div>
              <p className="font-medium">Name</p>
              <p className="text-gray-600">
                {bookingData.firstName} {bookingData.lastName}
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <Phone className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-gray-600">{bookingData.phone}</p>
            </div>
          </div>

          <div className="flex items-start">
            <Mail className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-gray-600">{bookingData.email}</p>
            </div>
          </div>

          <div className="flex items-start">
            <Building className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
            <div>
              <p className="font-medium">Properties Managed</p>
              <p className="text-gray-600">{bookingData.propertiesManaged}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button onClick={onReset} variant="outline">
          Schedule Another Meeting
        </Button>
        <Link href="/">
          <Button className="bg-blue-600 hover:bg-blue-700">Return to Homepage</Button>
        </Link>
      </div>
    </div>
  )
}

