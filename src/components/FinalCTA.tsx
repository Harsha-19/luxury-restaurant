"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-[#080808] z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/20 to-purple-900/20 mix-blend-screen" />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-primary)]/10 blur-[150px] rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-12 md:p-24 max-w-5xl mx-auto border-white/20 shadow-2xl backdrop-blur-3xl"
        >
          <span className="text-[var(--color-primary)] uppercase tracking-widest text-sm font-semibold block mb-6">
            Your Table Awaits
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8 leading-tight">
            An Unforgettable Evening <br className="hidden md:block" /> Starts Here
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Join us for a dining experience that transcends the ordinary. Reserve your table today and let us take care of the rest.
          </p>
          
          <div className="flex justify-center">
            <Link
              href="#reserve"
              className="px-10 py-5 rounded-full bg-[var(--color-primary)] text-white font-bold tracking-widest uppercase transition-all duration-300 transform hover:scale-105 hover:bg-[var(--color-primary-hover)] flex items-center gap-3 group shadow-[0_0_40px_rgba(245,158,11,0.4)]"
            >
              Reserve Your Table
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
