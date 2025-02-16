"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function ComingSoon() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Coming Soon</h2>
          <p className="text-xl text-blue-600 mb-8">
            We&apos;re working on something amazing. Our sustainable waste management solutions will be available soon. Sign
            up to be notified when we launch.
          </p>
          <Button size="lg">Get Notified</Button>
        </motion.div>
      </div>
    </section>
  )
}

