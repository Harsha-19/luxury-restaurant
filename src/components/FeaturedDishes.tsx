"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Plus } from "lucide-react";
import { featuredDishes } from "@/data/mockData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" as const } 
  },
};

export default function FeaturedDishes() {
  return (
    <section id="menu" className="py-24 bg-[var(--color-background)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--color-primary)] uppercase tracking-widest text-sm font-semibold block mb-4"
          >
            Culinary Masterpieces
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-white"
          >
            Signature Dishes
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredDishes.map((dish) => (
            <motion.div 
              key={dish.id}
              variants={cardVariants}
              className="glass rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={dish.image} 
                  alt={dish.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 text-[var(--color-primary)] fill-[var(--color-primary)]" />
                  <span className="text-sm font-medium text-white">{dish.rating}</span>
                </div>
              </div>
              
              <div className="p-6 relative">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-heading font-bold text-white">{dish.name}</h3>
                  <span className="text-xl font-bold text-[var(--color-primary)]">{dish.price}</span>
                </div>
                <p className="text-[var(--color-text-secondary)] text-sm mb-6 line-clamp-2">
                  {dish.description}
                </p>
                
                <button className="w-full py-3 rounded-xl border border-[var(--color-border-glass)] text-white hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                  <span>Order Now</span>
                  <Plus className="w-4 h-4 group-hover/btn:rotate-90 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 font-medium tracking-wide uppercase text-sm">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}
