"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Vision() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg text-gray-600">
              We envision a world where every environment is immaculately maintained with the highest standards of
              cleanliness and sustainability. Our goal is to empower cleaning professionals with opportunities that
              transform their lives and businesses, making professional cleaning accessible and beneficial for all.
              Together, we are setting new benchmarks in the cleaning industry, fostering a healthier planet and
              community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-xl overflow-hidden"
          >
            <Image src="/our-vision.png" alt="Team collaboration" fill className="object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

