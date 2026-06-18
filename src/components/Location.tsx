"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, Car } from "lucide-react";

export default function Location() {
  return (
    <section id="contact" className="py-24 bg-[var(--color-background)] relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--color-primary)] uppercase tracking-widest text-sm font-semibold block mb-4"
          >
            Find Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-white"
          >
            Location & Hours
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3 flex flex-col gap-6"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                <MapPin className="text-[var(--color-primary)] w-6 h-6" /> Address
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Aurum Dining<br />
                No. 42, Khader Nawaz Khan Road,<br />
                Nungambakkam,<br />
                Chennai - 600034,<br />
                Tamil Nadu, India
              </p>
            </div>

            <div className="glass p-8 rounded-2xl">
              <h3 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                <Clock className="text-[var(--color-primary)] w-6 h-6" /> Opening Hours
              </h3>
              <ul className="space-y-3 text-[var(--color-text-secondary)]">
                <li className="flex justify-between">
                  <span>Mon - Thu</span>
                  <span>12:00 PM - 10:30 PM</span>
                </li>
                <li className="flex justify-between text-white font-medium">
                  <span>Friday</span>
                  <span>12:00 PM - 11:30 PM</span>
                </li>
                <li className="flex justify-between text-white font-medium">
                  <span>Saturday</span>
                  <span>11:00 AM - 11:30 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>11:00 AM - 10:30 PM</span>
                </li>
              </ul>
            </div>

            <div className="glass p-8 rounded-2xl space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-[var(--color-primary)]" />
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-secondary)] uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-white">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[var(--color-primary)]" />
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-secondary)] uppercase tracking-wider mb-1">Email</p>
                  <p className="text-white">reservations@aurumdining.in</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Car className="w-4 h-4 text-[var(--color-primary)]" />
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-secondary)] uppercase tracking-wider mb-1">Parking</p>
                  <p className="text-white">Complimentary Valet Parking</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-2/3"
          >
            <div className="w-full h-full min-h-[500px] glass rounded-2xl p-2 overflow-hidden relative">
              {/* Using an iframe to embed a Google Map placeholder */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.53987651034!2d80.2458428148231!3d13.06495209079435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52666a7b75f85f%3A0xc3f63116a4c28fcd!2sKhader%20Nawaz%20Khan%20Rd%2C%20Nungambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600006%2C%20India!5e0!3m2!1sen!2sin!4v1684000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(80%) contrast(85%)" }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)]"
              ></iframe>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
