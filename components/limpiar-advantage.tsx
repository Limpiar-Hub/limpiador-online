"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Advantage = {
  title: string;
  position: keyof typeof positionClasses; // Explicitly type position
  image?: string;
};

const advantages: Advantage[] = [
  {
    title: "Centralized Operations",
    position: "top",
    image: "/frame.png",
  },
  {
    title: "Streamlined Property Management",
    position: "top-right",
  },
  {
    title: "Rapid Deployment",
    position: "right",
  },
  {
    title: "Unified Service Aggregation",
    position: "bottom-right",
  },
  {
    title: "Enhanced Tenant Retention",
    position: "bottom",
    image: "/frame2.png",
  },
  {
    title: "Eco-Friendly Services",
    position: "bottom-left",
  },
  {
    title: "On-Demand Solutions",
    position: "left",
  },
  {
    title: "Advanced Technology",
    position: "top-left",
  },
];

const positionClasses = {
  top: "top-0 left-1/2 -translate-x-1/2 -translate-y-full",
  "top-right": "top-[15%] right-0 translate-x-1/2",
  right: "top-1/2 right-0 translate-x-full -translate-y-1/2",
  "bottom-right": "bottom-[15%] right-0 translate-x-1/2",
  bottom: "bottom-0 left-1/2 -translate-x-1/2 translate-y-full",
  "bottom-left": "bottom-[15%] left-0 -translate-x-1/2",
  left: "top-1/2 left-0 -translate-x-full -translate-y-1/2",
  "top-left": "top-[15%] left-0 -translate-x-1/2",
};

export function LimpiarAdvantage() {
  return (
    <section className="py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          The Limpiar Advantage
        </motion.h2>

        <div className="relative max-w-4xl mx-auto aspect-square">
          {/* Center Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48"
          >
            <Image
              src="/logo.png"
              alt="Limpiar Logo"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Advantage Points */}
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`absolute ${positionClasses[advantage.position]} p-4 w-48 text-center`}
            >
              <div className="relative">
                {advantage.image && (
                  <div className="w-24 h-24 mx-auto mb-2 rounded-full overflow-hidden">
                    <Image
                      src={advantage.image}
                      alt={advantage.title}
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                )}
                <h3 className="text-lg font-semibold text-blue-600">
                  {advantage.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
