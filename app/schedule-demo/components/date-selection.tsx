"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Clock, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { format, addMonths, subMonths, addDays, isBefore, isToday } from "date-fns"

interface DateSelectionProps {
  onDateTimeSelected: (date: Date, time: string) => void
}

// Available time slots
const TIME_SLOTS = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
]

export function DateSelection({ onDateTimeSelected }: DateSelectionProps) {
  const [date, setDate] = useState<Date | undefined>(addDays(new Date(), 1))
  const [month, setMonth] = useState<Date>(new Date())
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const handleNextMonth = () => {
    setMonth(addMonths(month, 1))
  }

  const handlePrevMonth = () => {
    setMonth(subMonths(month, 1))
  }

  const handleDateSelect = (newDate: Date | undefined) => {
    setDate(newDate)
    setSelectedTime(null)
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
  }

  const handleContinue = () => {
    if (date && selectedTime) {
      onDateTimeSelected(date, selectedTime)
    }
  }

  // Disable dates in the past
  const disabledDays = (day: Date) => {
    return isBefore(day, new Date()) && !isToday(day)
  }

  return (
    <div className="grid md:grid-cols-2">
      {/* Left side - Info */}
      <div className="p-8 bg-blue-50">
        <div className="flex flex-col h-full">
          <div className="mb-6">
            <Image src="/logo.png" alt="Limpiar Logo" width={120} height={40} className="h-10 w-auto" />
          </div>

          <h2 className="text-2xl font-bold mb-2">Limpiar Sales Call</h2>

          <div className="flex items-center gap-2 mb-4 text-gray-600">
            <Clock className="w-5 h-5" />
            <span>30 Mins</span>
          </div>

          {date && (
            <div className="text-gray-600 mb-2">
              {format(date, "EEE, MMM d, yyyy")}
              {selectedTime && ` at ${selectedTime}`}
            </div>
          )}

          <p className="mt-auto text-gray-600">
            Free consultation call to discuss how Limpiar can help your business with sustainable cleaning solutions.
          </p>
        </div>
      </div>

      {/* Right side - Calendar */}
      <div className="p-8">
        <h3 className="text-xl font-semibold mb-6 text-center">Select Date & Time</h3>

        <div className="flex flex-col items-center">
          <div className="w-full max-w-[320px] mb-6">
            <div className="flex items-center justify-between mb-4">
              <Button variant="outline" size="icon" onClick={handlePrevMonth} className="h-8 w-8 p-0">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <h4 className="text-lg font-medium">{format(month, "MMMM yyyy")}</h4>
              <Button variant="outline" size="icon" onClick={handleNextMonth} className="h-8 w-8 p-0">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
              month={month}
              onMonthChange={setMonth}
              disabled={disabledDays}
              className="mx-auto"
            />
          </div>

          {date && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <h3 className="text-lg font-medium mb-4 text-center">Available Times</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
                {TIME_SLOTS.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    className={`${selectedTime === time ? "bg-blue-600" : ""}`}
                    onClick={() => handleTimeSelect(time)}
                  >
                    {time}
                  </Button>
                ))}
              </div>

              <Button
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={!selectedTime}
                onClick={handleContinue}
              >
                Continue
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

