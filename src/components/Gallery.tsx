"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { galleryImages } from "@/data/mockData";
import { Search } from "lucide-react";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[var(--color-background)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--color-primary)] uppercase tracking-widest text-sm font-semibold block mb-4"
          >
            Visual Journey
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-white"
          >
            Aurum in Pictures
          </motion.h2>
        </div>

        {/* Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index % 3) * 0.1, duration: 0.6 }}
              className="relative group rounded-xl overflow-hidden break-inside-avoid cursor-pointer glass p-1"
            >
              <div className="relative w-full h-auto rounded-lg overflow-hidden">
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  width={600}
                  height={800}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Search className="text-white w-5 h-5" />
                  </div>
                  <span className="text-white font-medium tracking-wider uppercase mt-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    View Image
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
