"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const services = [
  {
    title: "Emergency Cleaning",
    image: "/cleaning.png",
    description: "24/7 emergency cleaning services for unexpected situations",
  },
  {
    title: "Pressure Washing",
    image: "/pressure.png",
    description: "Professional pressure washing for exterior surfaces",
  },
  {
    title: "Porter/Janitorial",
    image: "/porter.png",
    description: "Daily maintenance and janitorial services",
  },
  {
    title: "Disinfection Services",
    image: "/disinfection.png",
    description: "Thorough disinfection for health and safety",
  },
  {
    title: "Supply Management",
    image: "/supply.png",
    description: "Efficient management of cleaning supplies",
  },
  {
    title: "Construction Cleaning",
    image: "/construction.png",
    description: "Post-construction cleanup services",
  },
]

export function ServiceCircles() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-400">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="relative w-32 h-32 md:w-40 md:h-40"
              onHoverStart={() => setHoveredService(service.title)}
              onHoverEnd={() => setHoveredService(null)}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-full rounded-full bg-black overflow-hidden relative">
                <AnimatePresence mode="wait">
                  {hoveredService === service.title ? (
                    <motion.div
                      key="image"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                        <span className="text-white text-center text-sm md:text-base font-medium">{service.title}</span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="text"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-full h-full flex items-center justify-center p-4"
                    >
                      <span className="text-white text-center text-sm md:text-base font-medium">{service.title}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

