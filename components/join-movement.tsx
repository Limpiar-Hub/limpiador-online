"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function JoinMovement() {
  return (
    <section className="bg-blue-500 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center text-white space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Join the Movement to Seamless Property Care with Limpiar.
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed">
            The shift to smart, always-on property care is here and it&apos;s happening with Limpiar. Join property
            managers everywhere who are redefining cleanliness and efficiency.
          </p>
          <div>
            <Link href="/schedule-demo">
              <Button size="lg" variant="secondary" className="text-blue-500 hover:text-blue-600">
                Get Started
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

