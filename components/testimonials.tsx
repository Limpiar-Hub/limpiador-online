"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Chris Jones",
    role: "Property Manager",
    image: "/chris.png",
    quote:
      "Working with Limpiar has been great! Their team is super reliable, and the eco-friendly cleaning options have been a big plus for us. They have made it easy to keep our properties looking great without breaking the budget. I also like that they keep us in the loop with updates and metrics—it really shows they care about doing a good job.",
    imageLink: "https://example.com/chris-profile", // Add a link for the image
  },
  {
    id: 2,
    name: "Marcus Harris",
    role: "Facility Director",
    image: "/harris.png",
    quote:
      "The attention to detail and consistency of service has been outstanding. Their team is always professional and responsive to our needs.",
    imageLink: "https://example.com/harris-profile", // Add a link for the image
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Operations Manager",
    image: "/chen.png",
    quote:
      "Switching to Limpiar was one of the best decisions we made. Their innovative approach to cleaning and property management has streamlined our operations significantly.",
    imageLink: "https://example.com/chen-profile", // Add a link for the image
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % testimonials.length)
    }, 9000) // Change testimonial every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-25 py-12"
        >
          Why Managers Love Limpiar
        </motion.h2>
        <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
          {/* Image Container */}
          <AnimatePresence mode="wait">
            {testimonials.map(
              (testimonial, index) =>
                index === currentIndex && (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <a href={testimonial.imageLink} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 100vw"
                        priority
                      />
                    </a>
                  </motion.div>
                ),
            )}
          </AnimatePresence>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 p-4">
            <AnimatePresence mode="wait">
              {testimonials.map(
                (testimonial, index) =>
                  index === currentIndex && (
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="max-w-2xl mx-auto"
                    >
                      <h3 className="text-4xl font-light italic text-white">{testimonial.name}</h3>
                      <p className="text-xl text-gray-200 mt-2">{testimonial.role}</p>
                      <blockquote className="text-lg text-gray-100 leading-relaxed mt-4">
                        {testimonial.quote}
                      </blockquote>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

