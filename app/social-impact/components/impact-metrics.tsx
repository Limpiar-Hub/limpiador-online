"use client"

import { motion } from "framer-motion"
import { Users, TreePine, Building2, Heart } from "lucide-react"

const metrics = [
  {
    icon: Users,
    value: "5,000+",
    label: "Jobs Created",
  },
  {
    icon: TreePine,
    value: "100%",
    label: "Eco-Friendly Products",
  },
  {
    icon: Building2,
    value: "50+",
    label: "Community Partners",
  },
  {
    icon: Heart,
    value: "$1M+",
    label: "Community Investment",
  },
]

export function ImpactMetrics() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Our Impact in Numbers
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <metric.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <div className="text-4xl font-bold text-blue-600 mb-2">{metric.value}</div>
              <div className="text-gray-600">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

