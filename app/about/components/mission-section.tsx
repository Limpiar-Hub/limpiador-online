"use client"

import { motion } from "framer-motion"

export function MissionSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
          We combine state-of-the-art technology with best-in-class cleaning practices to offer services that not only
          meet but exceed our clients&apos; expectations. From reducing chemical use to implementing advanced recycling
          techniques, every aspect of our operation is designed with sustainability at its core.
        </p>
        </motion.div>
      </div>
    </section>
  )
}

