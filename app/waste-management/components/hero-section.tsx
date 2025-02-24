"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative h-[60vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <Image src="/waste.png" alt="Waste Management" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block bg-blue-600 px-8 py-4 mb-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white">Waste Management</h1>
        </motion.div>
      </div>
    </section>
  )
}

