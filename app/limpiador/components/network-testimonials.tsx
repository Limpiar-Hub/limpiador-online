"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    name: "Samantha Lee",
    role: "Small Business Owner",
    image: "/samantha.png",
    quote:
      "Joining Limpiar's network has been a game-changer for my cleaning business. The increased visibility and support have helped me grow my client base significantly.",
  },
  {
    name: "Carlos Martinez",
    role: "Team Manager",
    image: "/aisha.png",
    quote:
      "The training and resources provided by Limpiar have elevated our team's performance. We're now able to take on more complex projects with confidence.",
  },
  {
    name: "Aisha Roberts",
    role: "Cleaning Professional",
    image: "/carlos.png",
    quote:
      "I love being part of the Limpiar network. The flexible scheduling and fair pay have improved my work-life balance, and I feel valued as a professional.",
  },
]

export function NetworkTestimonials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#4834D4]"
        >
          HEAR FROM THE NETWORK
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative text-center"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-lg overflow-hidden bg-purple-100">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
              <p className="text-gray-600">{testimonial.role}</p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-[#4834D4] bg-opacity-90 flex items-center justify-center p-4 rounded-lg"
              >
                <p className="text-white text-sm">{testimonial.quote}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

