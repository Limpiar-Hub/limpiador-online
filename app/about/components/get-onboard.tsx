"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function GetOnboard() {
  return (
    <section className="py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Onboard</h2>
            <p className="text-lg text-blue-600 mb-8">
              Join us as we continue to innovate and lead the change in making the commercial cleaning industry a beacon
              of environmental responsibility and human-centered service. At Limpiar, we merge purpose with passion, and
              a commitment to a better world.
            </p>
            <Button size="lg">Join Our Team</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-xl overflow-hidden"
          >
            <Image
              src="/save-the-planet.png"
              alt="Save the Planet"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

