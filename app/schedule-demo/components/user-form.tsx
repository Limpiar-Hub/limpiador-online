"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft } from "lucide-react"
import { format } from "date-fns"
import type { BookingData } from "./booking-flow"

interface UserFormProps {
  initialData: BookingData
  onSubmit: (formData: Omit<BookingData, "date" | "time">) => void
  onBack: () => void
}

export function UserForm({ initialData, onSubmit, onBack }: UserFormProps) {
  const [formData, setFormData] = useState({
    firstName: initialData.firstName,
    lastName: initialData.lastName,
    jobTitle: initialData.jobTitle,
    phone: initialData.phone,
    email: initialData.email,
    propertiesManaged: initialData.propertiesManaged,
    consentToMarketing: initialData.consentToMarketing,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, consentToMarketing: checked }))
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.jobTitle.trim()) newErrors.jobTitle = "Job title is required"

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^\+?[0-9\s\-()]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.propertiesManaged.trim()) {
      newErrors.propertiesManaged = "This field is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      onSubmit(formData)
    }
  }

  return (
    <div className="grid md:grid-cols-2">
      {/* Left side - Selected info */}
      <div className="p-8 bg-blue-50">
        <Button variant="ghost" className="mb-6 pl-0 text-blue-600" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to calendar
        </Button>

        <h2 className="text-2xl font-bold mb-2">Limpiar Sales Call</h2>

        <div className="flex items-center gap-2 mb-4 text-gray-600">
          <span>30 Mins</span>
        </div>

        {initialData.date && (
          <div className="text-gray-600 mb-2">
            {format(initialData.date, "EEE, MMM d, yyyy")}
            {initialData.time && ` at ${initialData.time}`}
          </div>
        )}

        <p className="mt-6 text-gray-600">
          Please fill out the form to complete your booking. Our team is looking forward to speaking with you.
        </p>
      </div>

      {/* Right side - Form */}
      <motion.div className="p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
        <h3 className="text-xl font-semibold mb-6">Your Information</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={errors.firstName ? "border-red-500" : ""}
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={errors.lastName ? "border-red-500" : ""}
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="jobTitle">Job Title *</Label>
            <Input
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className={errors.jobTitle ? "border-red-500" : ""}
            />
            {errors.jobTitle && <p className="text-red-500 text-sm">{errors.jobTitle}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? "border-red-500" : ""}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="propertiesManaged">How many properties do you manage? *</Label>
            <Input
              id="propertiesManaged"
              name="propertiesManaged"
              value={formData.propertiesManaged}
              onChange={handleChange}
              className={errors.propertiesManaged ? "border-red-500" : ""}
            />
            {errors.propertiesManaged && <p className="text-red-500 text-sm">{errors.propertiesManaged}</p>}
          </div>

          <div className="flex items-start space-x-2 pt-2">
            <Checkbox id="consent" checked={formData.consentToMarketing} onCheckedChange={handleCheckboxChange} />
            <Label htmlFor="consent" className="text-sm leading-tight">
              I consent to receive SMS notifications, alerts & occasional marketing communication from Limpiar.
            </Label>
          </div>

          <div className="text-xs text-gray-500 pt-2">
            <p>
              By scheduling this meeting, you agree to our{" "}
              <a href="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="/terms" className="text-blue-600 hover:underline">
                Terms of Service
              </a>
              .
            </p>
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 mt-6">
            Schedule Meeting
          </Button>
        </form>
      </motion.div>
    </div>
  )
}

