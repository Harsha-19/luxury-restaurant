"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { reviews } from "@/data/mockData";

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, autoplay]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-24 bg-[var(--color-background)] relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--color-primary)] uppercase tracking-widest text-sm font-semibold block mb-4"
          >
            Testimonials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-white"
          >
            Words From Our Guests
          </motion.h2>
        </div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-4 md:-translate-x-12 z-10">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-4 md:translate-x-12 z-10">
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="overflow-hidden px-4 py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="glass rounded-3xl p-8 md:p-12 relative"
              >
                <Quote className="absolute top-8 right-8 w-16 h-16 text-white/5" />
                
                <div className="flex flex-col items-center text-center">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < Math.floor(reviews[currentIndex].rating) ? "text-[var(--color-primary)] fill-[var(--color-primary)]" : "text-white/20"}`} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-xl md:text-2xl font-heading italic text-white mb-8 leading-relaxed">
                    "{reviews[currentIndex].review}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[var(--color-primary)]">
                      <Image 
                        src={reviews[currentIndex].photo}
                        alt={reviews[currentIndex].name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-white">{reviews[currentIndex].name}</h4>
                      <span className="text-sm text-[var(--color-text-secondary)]">Verified Guest</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-6 gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "bg-[var(--color-primary)] w-8" : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
