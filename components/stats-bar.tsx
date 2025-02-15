"use client"

import { motion } from "framer-motion"
import { RefreshCw, Users, Clock } from "lucide-react"

const stats = [
  {
    icon: RefreshCw,
    value: "30%",
    label: "Average cost savings",
  },
  {
    icon: Users,
    value: "10k",
    label: "Service Providers in Network",
  },
  {
    icon: Clock,
    value: "336",
    label: "Hours saved by property managers",
  },
]

export function StatsBar() {
  return (
    <section className="bg-blue-500 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center text-white"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4" />
              <div className="text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

