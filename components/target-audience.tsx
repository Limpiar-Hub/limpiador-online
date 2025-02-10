"use client"

import { motion } from "framer-motion"
import { Building2, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TargetAudience() {
  return (
    <section className="bg-blue-900 text-white py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Building2 className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4">Property Managers</h2>
            <p className="mb-6">Partner with trusted cleaners to keep your properties spotless and tenants happy.</p>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900">
              Learn More
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4">Service Providers</h2>
            <p className="mb-6">Join our platform to find clients and expand your cleaning business.</p>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900">
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

