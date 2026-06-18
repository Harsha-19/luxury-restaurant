"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OurStory() {
  return (
    <section className="py-24 bg-gradient-to-b from-[var(--color-background)] to-[#111111]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Images */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden glass p-2">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image 
                  src="/images/gallery-2.jpg"
                  alt="Restaurant Interior"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            {/* Floating smaller image */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute -bottom-10 -right-10 w-64 h-64 glass p-2 rounded-2xl hidden md:block"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image 
                  src="/images/gallery-4.jpg"
                  alt="Chef cooking"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <span className="text-[var(--color-primary)] uppercase tracking-widest text-sm font-semibold mb-4">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 leading-tight">
              A Legacy of <br /> Culinary Excellence
            </h2>
            
            <p className="text-[var(--color-text-secondary)] text-lg mb-6 leading-relaxed">
              Founded in 2008, Aura began with a simple yet ambitious vision: to redefine the fine dining experience by blending classic techniques with avant-garde presentation. 
            </p>
            <p className="text-[var(--color-text-secondary)] text-lg mb-10 leading-relaxed">
              Every dish that leaves our kitchen is a testament to our commitment to sourcing the finest seasonal ingredients. We don't just serve food; we orchestrate an unforgettable symphony of flavors, textures, and aromas designed to awaken the senses.
            </p>

            <div className="flex gap-12 mb-10 pb-10 border-b border-[var(--color-border-glass)]">
              <div>
                <h4 className="text-3xl font-heading font-bold text-white mb-2">3</h4>
                <p className="text-[var(--color-text-secondary)] text-sm uppercase tracking-wider">Michelin Stars</p>
              </div>
              <div>
                <h4 className="text-3xl font-heading font-bold text-white mb-2">15+</h4>
                <p className="text-[var(--color-text-secondary)] text-sm uppercase tracking-wider">Years of Magic</p>
              </div>
            </div>

            <button className="self-start px-8 py-3 rounded-full bg-[var(--color-primary)] text-white font-medium tracking-wide uppercase text-sm hover:bg-[var(--color-primary-hover)] transition-colors">
              Discover More
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
