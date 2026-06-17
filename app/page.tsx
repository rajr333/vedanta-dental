"use client";
import { useEffect } from "react";
import { initLenis, destroyLenis } from "@/lib/lenis";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBarSection from "@/components/TrustBarSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import SmileGallerySection from "@/components/SmileGallerySection";
import ProcessSection from "@/components/ProcessSection";
import DoctorSection from "@/components/DoctorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import BookingSection from "@/components/BookingSection";
import LocationMapSection from "@/components/LocationMapSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    initLenis();
    return () => destroyLenis();
  }, []);

  return (
    <main>
      <Navbar />
      <HeroSection />
      <TrustBarSection />
      <ServicesSection />
      <AboutSection />
      <SmileGallerySection />
      <ProcessSection />
      <DoctorSection />
      <TestimonialsSection />
      <FAQSection />
      <BookingSection />
      <LocationMapSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
