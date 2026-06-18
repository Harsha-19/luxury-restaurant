"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" as const }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold font-heading tracking-widest text-[var(--color-primary)]">
          AURUM
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-wider text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Reserve Button */}
        <div className="hidden md:block">
          <Link
            href="#reserve"
            className="px-6 py-2 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 transform hover:scale-105 font-medium tracking-wide uppercase text-sm"
          >
            Reserve Table
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-t-[var(--color-border-glass)] mt-4"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#reserve"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center px-6 py-3 mt-4 rounded-full bg-[var(--color-primary)] text-white font-medium tracking-wide uppercase text-sm"
              >
                Reserve Table
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
