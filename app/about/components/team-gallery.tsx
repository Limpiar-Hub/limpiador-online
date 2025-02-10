"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/gallery.png", alt: "Team members cleaning" },
  { src: "/gallery2.png", alt: "Team collaboration" },
  { src: "/gallery3.png", alt: "Sustainable practices" },
  { src: "/gallery4.png", alt: "OK Cleaners neon sign" },
  { src: "/gallery5.png", alt: "OK Cleaners neon sign" },
  { src: "/gallery6.png", alt: "OK Cleaners neon sign" },
];

export function TeamGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const showNext = () => {
    setSelectedImage((prev) => (prev !== null ? (prev + 1) % images.length : 0));
  };
  
  const showPrev = () => {
    setSelectedImage((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : images.length - 1));
  };
  

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative w-full min-h-[250px] md:min-h-[300px] aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => openModal(index)}
            >
              {/* Image */}
              <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <button className="absolute top-6 right-6 text-white p-2" onClick={closeModal}>
            <X className="w-8 h-8" />
          </button>
          <button className="absolute left-4 md:left-10 text-white p-2" onClick={showPrev}>
            <ChevronLeft className="w-10 h-10" />
          </button>
          <div className="relative w-[90vw] max-w-3xl aspect-[4/3]">
            <Image src={images[selectedImage].src} alt={images[selectedImage].alt} fill className="object-contain" />
          </div>
          <button className="absolute right-4 md:right-10 text-white p-2" onClick={showNext}>
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </section>
  );
}
