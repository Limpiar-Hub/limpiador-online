"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AppDownload() {
  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#4834D4]"
        >
          DOWNLOAD THE APP
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <div className="space-y-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start">
              <a
                href="https://apps.apple.com/us/app/limpiador/id6480585258"
                className="inline-block transition-transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/app-store-badge.png"
                  alt="Download on the App Store"
                  width={250}
                  height={200}
                  className="h-[200px] w-auto"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.limpiar.agen"
                className="inline-block transition-transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/google-play-badge.svg"
                  alt="Get it on Google Play"
                  width={250}
                  height={200}
                  className="h-[200px] w-auto"
                />
              </a>
            </div>
          </div>
          <div className="relative h-[500px]">
            <Image
              src="/app-image.png"
              alt="Limpiar mobile app interface"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

