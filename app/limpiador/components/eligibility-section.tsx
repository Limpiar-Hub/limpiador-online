"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const eligibilityCriteria = [
  {
    title: "Team Size",
    description: "Have at least 3-5 full-time employees. We believe in the power of team to make a big impact.",
    image: "/team.png",
  },
  {
    title: "Verification and Compliance",
    description: "Pass through background checks and maintain required licenses. We prioritize safety and compliance.",
    image: "/verfication.png",
  },
  {
    title: "Equipments",
    description: "Ensure you have proper tools and equipment to deliver high-quality service.",
    image: "/mopping.png",
  },
]

export function EligibilitySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#4834D4]"
        >
          Eligibility for Partnership
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {eligibilityCriteria.map((criteria, index) => (
            <motion.div
              key={criteria.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={criteria.image || "/placeholder.svg"}
                  alt={criteria.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#4834D4]">{criteria.title}</h3>
              <p className="text-gray-600 leading-relaxed">{criteria.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

