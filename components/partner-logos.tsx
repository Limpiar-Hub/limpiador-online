"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

const partners = [
  {
    name: "WE",
    logo: "/we.png",
  },
  {
    name: "AMC",
    logo: "/amc.png",
  },
  {
    name: "CVS",
    logo: "/cvs.png",
  },
  {
    name: "CBRE",
    logo: "/cbre.png",
  },
  {
    name: "PET SMART",
    logo: "/petsmart.png",
  },
]

export function PartnerLogos() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting))

    const element = document.getElementById("partner-logos")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="partner-logos" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-32 h-16 relative grayscale hover:grayscale-0 transition-all"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 80px, 128px"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

