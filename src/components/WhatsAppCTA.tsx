"use client";

import { motion } from "framer-motion";
import { MessageCircle, Check, Zap, MapPin } from "lucide-react";

export default function WhatsAppCTA() {
  return (
    <section className="py-20 bg-[var(--color-background)] relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#25D366]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="glass rounded-3xl p-8 md:p-16 max-w-5xl mx-auto border-[#25D366]/20 flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="w-full md:w-3/5">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                <MessageCircle className="text-[#25D366] w-6 h-6" />
              </span>
              <span className="text-[#25D366] uppercase tracking-widest text-sm font-bold">Direct Ordering</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
            >
              Craving Aurum at Home?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[var(--color-text-secondary)] text-lg mb-8"
            >
              Experience our premium menu from the comfort of your home. Order directly through WhatsApp for VIP priority service.
            </motion.p>
            
            <motion.ul 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4 mb-8"
            >
              <li className="flex items-center gap-3 text-white/90">
                <div className="w-6 h-6 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                  <Zap className="w-3 h-3 text-[#25D366]" />
                </div>
                Fast Confirmation in seconds
              </li>
              <li className="flex items-center gap-3 text-white/90">
                <div className="w-6 h-6 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                  <MapPin className="w-3 h-3 text-[#25D366]" />
                </div>
                Live Order Tracking
              </li>
              <li className="flex items-center gap-3 text-white/90">
                <div className="w-6 h-6 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-[#25D366]" />
                </div>
                Exclusive WhatsApp Only Offers
              </li>
            </motion.ul>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-full md:w-2/5 flex flex-col items-center"
          >
            <div className="relative group cursor-pointer w-full max-w-sm">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#25D366] to-[#1DA851] rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <a 
                href="https://wa.me/919876543210?text=Hi!%20I%20would%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex flex-col items-center justify-center gap-3 bg-[#111111] px-8 py-10 rounded-2xl border border-white/10 hover:border-[#25D366]/50 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.4)] group-hover:scale-110 transition-transform duration-500">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mt-4">Order on WhatsApp</h3>
                <p className="text-[#25D366] font-medium">+91 98765 43210</p>
              </a>
            </div>
          </motion.div>
          
        </div>
      </div>

      {/* Floating WhatsApp Icon for bottom corner */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 group"
      >
        <MessageCircle className="w-8 h-8 text-white group-hover:animate-ping absolute opacity-0 group-hover:opacity-100" />
        <MessageCircle className="w-8 h-8 text-white relative z-10" />
      </a>
    </section>
  );
}
