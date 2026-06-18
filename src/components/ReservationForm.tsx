"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, User, Phone, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Valid phone number is required"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  guests: z.string().min(1, "Please select number of guests"),
  requests: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ReservationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Reservation data:", data);
      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reserve" className="py-24 bg-gradient-to-t from-[var(--color-background)] to-[#111111] relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left: Text Content */}
          <div className="w-full lg:w-5/12 text-center lg:text-left">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[var(--color-primary)] uppercase tracking-widest text-sm font-semibold block mb-4"
            >
              Book Your Experience
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
            >
              Reserve a Table
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[var(--color-text-secondary)] text-lg mb-8"
            >
              Secure your spot for an unforgettable culinary journey. For parties larger than 8, please contact us directly via phone or WhatsApp.
            </motion.p>
          </div>

          {/* Right: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-7/12"
          >
            <div className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden">
              
              {/* Success Overlay */}
              {submitStatus === "success" && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 z-10 glass flex flex-col items-center justify-center p-8 text-center"
                >
                  <CheckCircle className="w-20 h-20 text-[var(--color-success)] mb-6" />
                  <h3 className="text-3xl font-heading font-bold text-white mb-2">Reservation Confirmed</h3>
                  <p className="text-[var(--color-text-secondary)] mb-8">
                    We've sent the details to your phone number. We look forward to hosting you!
                  </p>
                  <button 
                    onClick={() => setSubmitStatus("idle")}
                    className="px-8 py-3 rounded-full bg-[var(--color-primary)] text-white font-medium uppercase tracking-wider text-sm hover:bg-[var(--color-primary-hover)] transition-colors"
                  >
                    Make Another Booking
                  </button>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-sm text-white/80 flex items-center gap-2">
                      <User className="w-4 h-4" /> Name
                    </label>
                    <input 
                      {...register("name")}
                      className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors`}
                      placeholder="John Doe"
                    />
                    {errors.name && <span className="text-red-400 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.name.message}</span>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-sm text-white/80 flex items-center gap-2">
                      <Phone className="w-4 h-4" /> Phone Number
                    </label>
                    <input 
                      {...register("phone")}
                      className={`w-full bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors`}
                      placeholder="+1 (555) 000-0000"
                    />
                    {errors.phone && <span className="text-red-400 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.phone.message}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Date */}
                  <div className="space-y-2">
                    <label className="text-sm text-white/80 flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> Date
                    </label>
                    <input 
                      type="date"
                      {...register("date")}
                      className={`w-full bg-white/5 border ${errors.date ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors [color-scheme:dark]`}
                    />
                    {errors.date && <span className="text-red-400 text-xs">{errors.date.message}</span>}
                  </div>

                  {/* Time */}
                  <div className="space-y-2">
                    <label className="text-sm text-white/80 flex items-center gap-2">
                      <Clock className="w-4 h-4" /> Time
                    </label>
                    <select 
                      {...register("time")}
                      className={`w-full bg-[#1a1a1a] border ${errors.time ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors appearance-none`}
                    >
                      <option value="">Select Time</option>
                      <option value="18:00">18:00 (6:00 PM)</option>
                      <option value="18:30">18:30 (6:30 PM)</option>
                      <option value="19:00">19:00 (7:00 PM)</option>
                      <option value="19:30">19:30 (7:30 PM)</option>
                      <option value="20:00">20:00 (8:00 PM)</option>
                      <option value="20:30">20:30 (8:30 PM)</option>
                      <option value="21:00">21:00 (9:00 PM)</option>
                    </select>
                    {errors.time && <span className="text-red-400 text-xs">{errors.time.message}</span>}
                  </div>

                  {/* Guests */}
                  <div className="space-y-2">
                    <label className="text-sm text-white/80 flex items-center gap-2">
                      <Users className="w-4 h-4" /> Guests
                    </label>
                    <select 
                      {...register("guests")}
                      className={`w-full bg-[#1a1a1a] border ${errors.guests ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors appearance-none`}
                    >
                      <option value="">Number of guests</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                      ))}
                    </select>
                    {errors.guests && <span className="text-red-400 text-xs">{errors.guests.message}</span>}
                  </div>
                </div>

                {/* Special Requests */}
                <div className="space-y-2">
                  <label className="text-sm text-white/80 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" /> Special Requests (Optional)
                  </label>
                  <textarea 
                    {...register("requests")}
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none"
                    placeholder="Allergies, anniversaries, dietary requirements..."
                  />
                </div>

                {submitStatus === "error" && (
                  <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200 text-sm flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    An error occurred while submitting your reservation. Please try again.
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[var(--color-primary)] text-white font-bold uppercase tracking-wider hover:bg-[var(--color-primary-hover)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Confirm Reservation"
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
