"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Users, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BASE_PATH } from "@/lib/basePath";

const stats = [
  { icon: Users, value: "5000+", label: "Customers Served" },
  { icon: Star, value: "4.9★", label: "Google Rating" },
  { icon: Clock, value: "15+", label: "Years Experience" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-24">
      {/* Background Video/Image */}
      <div className="absolute inset-0 w-full h-full">
        {/* Placeholder for video. Using a high-quality luxury dining image as fallback. */}
        <Image 
          src={`${BASE_PATH}/images/hero/hero-banner.jpg`}
          alt="Luxury restaurant atmosphere"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl flex flex-col items-center"
        >
          <motion.span 
            variants={itemVariants}
            className="uppercase tracking-[0.3em] text-[var(--color-primary)] text-sm md:text-base font-medium mb-6 block"
          >
            Luxury Dining Experience
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 leading-tight"
          >
            Crafted with Passion. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#FCD34D]">
              Served with Excellence.
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-10 max-w-2xl font-body leading-relaxed"
          >
            Immerse yourself in a culinary journey where extraordinary flavors meet breathtaking ambiance. Discover the pinnacle of fine dining.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <Link
              href="#reserve"
              className="px-8 py-4 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-medium tracking-wide uppercase transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group"
            >
              Reserve Table
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#menu"
              className="px-8 py-4 rounded-full glass text-white font-medium tracking-wide uppercase transition-all duration-300 hover:bg-white/10 flex items-center justify-center"
            >
              View Menu
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating Statistics - Only visible on md+ screens */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-28 hidden md:flex justify-center w-full"
        >
          <div className="relative">
            {/* SaaS-grade Glass Card - Reduced height, softer glass */}
            <div className="relative backdrop-blur-[30px] bg-white/[0.03] border border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.4)] rounded-2xl px-16 py-6 flex gap-24 items-center justify-center">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex flex-col items-center gap-2 relative">
                    {/* Subtle individual glow behind each statistic */}
                    <div className="absolute inset-0 bg-[var(--color-primary)] blur-[35px] opacity-[0.08] rounded-full scale-150 translate-y-2 pointer-events-none"></div>
                    
                    <div className="flex items-center gap-3 text-white relative z-10">
                      <Icon size={20} className="text-[var(--color-primary)] opacity-80" />
                      <span className="text-3xl font-bold font-heading drop-shadow-sm">{stat.value}</span>
                    </div>
                    <span className="text-[11px] text-white/40 uppercase tracking-[0.25em] font-medium relative z-10">{stat.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 md:hidden"
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center p-2">
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]"
          />
        </div>
      </motion.div>
    </section>
  );
}
