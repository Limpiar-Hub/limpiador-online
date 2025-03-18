"use client"

import { useState } from "react"
import { DateSelection } from "./date-selection"
import { UserForm } from "./user-form"
import { Confirmation } from "./confirmation"

type BookingStep = "date" | "form" | "confirmation"

export type BookingData = {
  date: Date | null
  time: string | null
  firstName: string
  lastName: string
  jobTitle: string
  phone: string
  email: string
  propertiesManaged: string
  consentToMarketing: boolean
}

const initialBookingData: BookingData = {
  date: null,
  time: null,
  firstName: "",
  lastName: "",
  jobTitle: "",
  phone: "",
  email: "",
  propertiesManaged: "",
  consentToMarketing: false,
}

export function BookingFlow() {
  const [currentStep, setCurrentStep] = useState<BookingStep>("date")
  const [bookingData, setBookingData] = useState<BookingData>(initialBookingData)

  const handleDateTimeSelected = (date: Date, time: string) => {
    setBookingData((prev) => ({ ...prev, date, time }))
    setCurrentStep("form")
  }

  const handleFormSubmit = (formData: Omit<BookingData, "date" | "time">) => {
    setBookingData((prev) => ({ ...prev, ...formData }))
    setCurrentStep("confirmation")

    // In a real implementation, you would send this data to your backend
    console.log("Booking data:", { ...bookingData, ...formData })
  }

  const handleGoBack = () => {
    if (currentStep === "form") {
      setCurrentStep("date")
    } else if (currentStep === "confirmation") {
      setCurrentStep("form")
    }
  }

  const handleReset = () => {
    setBookingData(initialBookingData)
    setCurrentStep("date")
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {currentStep === "date" && <DateSelection onDateTimeSelected={handleDateTimeSelected} />}

      {currentStep === "form" && (
        <UserForm initialData={bookingData} onSubmit={handleFormSubmit} onBack={handleGoBack} />
      )}

      {currentStep === "confirmation" && <Confirmation bookingData={bookingData} onReset={handleReset} />}
    </div>
  )
}

