"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

const heroSlides = [
  {
    title: "GET READY TO UNLOCK NEW OPPORTUNITIES",
    image: "/hero-image.png",
    alt: "Cleaning professionals in Limpiar uniforms",
  },
  {
    title: "JOIN OUR NETWORK OF CLEANING EXPERTS",
    image: "/hero-image.png",
    alt: "Professional cleaning equipment",
  },
  {
    title: "GROW YOUR BUSINESS WITH LIMPIAR",
    image: "/hero-image.png",
    alt: "Happy cleaning professionals",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4834D4] leading-tight mb-8"
              >
                {heroSlides[currentSlide].title}
              </motion.h1>
            </AnimatePresence>
            <Link href="https://onboarding.limpiar.online/public/onboarding">
              <Button size="lg" className="bg-[#4834D4] hover:bg-[#3A2BBF] text-lg px-8">
                Get Started
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[300px] md:h-[400px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={heroSlides[currentSlide].image || "/placeholder.svg"}
                  alt={heroSlides[currentSlide].alt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
