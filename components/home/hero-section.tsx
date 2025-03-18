"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function HeroSection() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    window.location.href = "/schedule-demo"
  }

  return (
    <section className="relative min-h-[80vh] flex items-center">
      <Image src="/cleaners.png" alt="Limpiar cleaning staff" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative container mx-auto px-4 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white bg-black/50 inline-block px-6 py-2">
            Sustainable solutions
          </h1>
          <p className="text-xl md:text-2xl text-white bg-black/50 inline-block px-4 py-2">For the modern business</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your business Email"
              className="bg-white/90"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Get Started"}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

