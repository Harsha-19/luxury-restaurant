"use client";

import { motion } from "framer-motion";
import { Leaf, ChefHat, GlassWater, Clock } from "lucide-react";

const reasons = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "We source our produce daily from local organic farms to ensure the highest quality and freshest flavors in every bite.",
  },
  {
    icon: ChefHat,
    title: "Master Chefs",
    description: "Our kitchen is led by Michelin-starred culinary artists who bring decades of global experience to your plate.",
  },
  {
    icon: GlassWater,
    title: "Premium Ambience",
    description: "Dine in an atmosphere of refined elegance, featuring glassmorphism elements and bespoke architectural design.",
  },
  {
    icon: Clock,
    title: "Impeccable Service",
    description: "Experience attentive, personalized service where every detail of your evening is meticulously curated.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: 0.5 } 
  },
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--color-primary)]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--color-primary)] uppercase tracking-widest text-sm font-semibold block mb-4"
          >
            The Aura Difference
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-white"
          >
            Why Choose Us
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div 
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
                className="glass p-8 rounded-2xl flex flex-col items-center text-center group cursor-default transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]"
                style={{ perspective: 1000 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[var(--color-primary)] transition-all duration-300">
                  <Icon className="w-8 h-8 text-[var(--color-primary)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-4">{reason.title}</h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
