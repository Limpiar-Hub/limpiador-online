"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const advantages = [
  { title: "Eco-Friendly Solutions", image: "/eco-friendly.png" },
  { title: "Safe for Pets & Kids", image: "/safe.png" },
  { title: "99.9% Germ Removal", image: "/germ-removal.png" },
  { title: "Fast & Reliable Service", image: "/fast.png" },
  { title: "Certified Professionals", image: "/certified.png" },
  { title: "Advanced Cleaning Tech", image: "/tech.png" },
];

export function LimpiarAdvantage() {
  return (
    <section className="py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          The Limpiar Advantage
        </motion.h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-3 gap-6 items-center justify-center max-w-3xl mx-auto">
          {advantages.slice(0, 3).map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md"
            >
              <Image src={advantage.image} alt={advantage.title} width={50} height={50} className="mb-2 rounded-full" />
              <h3 className="text-sm font-semibold text-blue-600">{advantage.title}</h3>
            </motion.div>
          ))}

          {/* Center Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center p-4"
          >
            <Image src="/logo.png" alt="Limpiar Logo" width={100} height={100} />
          </motion.div>

          {advantages.slice(3).map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md"
            >
              <Image src={advantage.image} alt={advantage.title} width={50} height={50} className="mb-2 rounded-full" />
              <h3 className="text-sm font-semibold text-blue-600">{advantage.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
