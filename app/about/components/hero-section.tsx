"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="py-20 md:py-32 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl font-bold mb-6">About</h1>
            <p className="text-lg text-gray-600 mb-6">
              At Limpiar, we are on a mission to transform the commercial cleaning space.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our approach is simple yet profound: provide sustainable cleaning services that benefit both people and
              the planet. Founded by industry experts who recognized the need for a change from traditional methods,
              Limpiar is dedicated to eco-friendly solutions that ensure clean, safe, and healthy environments for all.
            </p>
            <div className="flex space-x-4 mb-8">
              <a href="https://www.facebook.com/limpiar.official?mibextid=LQQJ4d" className="text-gray-600 hover:text-blue-600">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/LimpiarOnline" className="text-gray-600 hover:text-blue-600">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/limpiaronline/" className="text-gray-600 hover:text-blue-600">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/limpiaronline/" className="text-gray-600 hover:text-blue-600">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Learn More
            </Button>
          </motion.div>

          <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full min-h-[700px] aspect-[4/3] rounded-xl overflow-hidden"
        >
          <Image
            src="/about-us.png"
            alt="Limpiar team member"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        </div>
      </div>
    </section>
  )
}

