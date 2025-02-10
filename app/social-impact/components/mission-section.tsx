"use client"

import { motion } from "framer-motion"

export function MissionSection() {
  return (
    <section className="bg-blue-600 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <p className="text-xl md:text-2xl leading-relaxed">
            At Limpiar, we partner with nonprofits to provide equitable access to jobs in the cleaning industry. Our
            collaborations aim to empower underserved communities by creating opportunities that promote economic
            stability and professional growth. Through these partnerships, we strive to make a meaningful impact,
            ensuring that everyone has the chance to succeed in a thriving and supportive environment.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

