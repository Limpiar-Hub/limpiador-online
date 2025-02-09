"use client"

import { motion } from "framer-motion"
import { Briefcase, TrendingUp, GraduationCap } from "lucide-react"

const features = [
  {
    icon: Briefcase,
    title: "Increased jobs",
    description: "Get access to exclusive jobs and contracts tailored to your expertise",
  },
  {
    icon: TrendingUp,
    title: "Business growth tools",
    description: "Unlock potential growth with advanced tools and resources for your cleaning business",
  },
  {
    icon: GraduationCap,
    title: "Training",
    description:
      "Enhance your skills with Limpiar's comprehensive training programs. Stay updated with the latest cleaning techniques",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#4834D4] to-[#6C63FF]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white"
            >
              <feature.icon className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

