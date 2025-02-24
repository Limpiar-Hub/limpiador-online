"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative h-[60vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/community-image.png"
          alt="Community working together"
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Community
          <br />
          Partnerships
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-white/90 max-w-2xl mx-auto"
        >
          Building stronger communities through sustainable cleaning practices and meaningful partnerships.
        </motion.p>
      </div>
    </section>
  )
}

