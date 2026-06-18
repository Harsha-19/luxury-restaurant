"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="text-3xl font-bold font-heading tracking-widest text-[var(--color-primary)] mb-6 block">
              AURA
            </Link>
            <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
              A symphony of taste, an atmosphere of elegance. Redefining fine dining for the modern palate.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[var(--color-primary)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[var(--color-primary)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[var(--color-primary)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-6 tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Menu', 'Gallery', 'Our Story', 'Reviews'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-6 tracking-wide uppercase">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[var(--color-text-secondary)]">
                <MapPin className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <span>123 Luxury Avenue, <br/> New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-[var(--color-text-secondary)]">
                <Phone className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-[var(--color-text-secondary)]">
                <Mail className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                <span>info@aurarestaurant.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-6 tracking-wide uppercase">Newsletter</h4>
            <p className="text-[var(--color-text-secondary)] mb-4">
              Subscribe to receive updates, access to exclusive events, and more.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                required
              />
              <button 
                type="submit"
                className="w-full py-3 rounded-xl bg-[var(--color-primary)] text-white font-medium uppercase tracking-wider hover:bg-[var(--color-primary-hover)] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--color-text-secondary)] text-sm">
            &copy; {new Date().getFullYear()} Aura Restaurant. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-[var(--color-text-secondary)]">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
