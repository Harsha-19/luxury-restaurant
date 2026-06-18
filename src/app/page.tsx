import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedDishes from "@/components/FeaturedDishes";
import OurStory from "@/components/OurStory";
import Gallery from "@/components/Gallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import Reviews from "@/components/Reviews";
import ReservationForm from "@/components/ReservationForm";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Location from "@/components/Location";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col overflow-hidden bg-[var(--color-background)]">
        <Hero />
        <FeaturedDishes />
        <OurStory />
        <Gallery />
        <WhyChooseUs />
        <Reviews />
        <ReservationForm />
        <WhatsAppCTA />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
