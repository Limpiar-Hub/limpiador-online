"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const advantages = [
  { text: "Centralized Operations", angle: 0 },
  { text: "Streamlined Property Management", angle: 50 },
  { text: "Cleaning Simplified", angle: 120 },
  { text: "Unified Service Aggregation", angle: 160 },
  { text: "Enhanced Tenant Retention", angle: 200 },
  { text: "Eco-Friendly Services", angle: 240 },
  { text: "On-Demand Solutions", angle: 280 },
  { text: "Advanced Technology", angle: 320 }
];

const radius = 200;

export function LimpiarAdvantage() {
  return (
    <section className="relative flex items-center justify-center h-screen bg-blue-50">
      {/* Content */}
      <div className="relative text-center w-[600px] h-[600px] flex items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 text-4xl md:text-5xl font-bold text-blue-900"
        >
          The Limpiar Advantage
        </motion.h2>
        
        {/* Positioned Title Cards */}
        <div className="relative w-full h-full flex items-center justify-center">
          {advantages.map(({ text, angle }, index) => {
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);
            return (
              <motion.div
                key={text}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="absolute flex items-center justify-center w-48 h-24 bg-white rounded-lg shadow-md font-semibold text-blue-700 text-center px-4"
                style={{ left: `calc(50% + ${x}px - 96px)`, top: `calc(50% + ${y}px - 48px)` }}
              >
                {text}
              </motion.div>
            );
          })}
        </div>

        {/* Centered Logo */}
        <div className="absolute flex items-center justify-center">
          <Image src="/logo.png" alt="Limpiar Logo" width={150} height={150} />
        </div>
      </div>
    </section>
  );
}
