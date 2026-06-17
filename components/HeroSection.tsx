"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import StarRating from "./ui/StarRating";
import BookingModal from "./BookingModal";

export default function HeroSection() {
  const imgRef = useRef<HTMLDivElement>(null);
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        y: -40, ease: "none",
        scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true },
      });
      gsap.from(".hero-fade", {
        opacity: 0, y: 24, duration: 0.9, stagger: 0.12, ease: "power2.out",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="section-padding" style={{ paddingTop: "9rem", background: "linear-gradient(180deg, var(--teal-pale) 0%, var(--off-white) 100%)" }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="hero-fade text-label mb-4">◆ MUZAFFARPUR'S TRUSTED DENTAL CARE</p>
          <h1 className="hero-fade text-hero" style={{ color: "var(--ink)", marginBottom: "1.5rem" }}>
            Your Smile Deserves <span style={{ color: "var(--teal)" }}>Expert Care</span>
          </h1>
          <p className="hero-fade" style={{ fontSize: "1.05rem", color: "var(--stone)", maxWidth: 460, marginBottom: "2rem" }}>
            From routine check-ups to complete smile makeovers — Vedanta Dental Care brings 4.9-star rated treatment to Yadav Nagar, Muzaffarpur.
          </p>

          <div className="hero-fade flex items-center gap-6 mb-8" style={{ fontSize: "0.85rem", color: "var(--ink-soft)" }}>
            <StarRating rating={4.9} />
            <span>78 Happy Patients</span>
            <span>·</span>
            <span style={{ color: "var(--success)" }}>Open Until 7 PM</span>
          </div>

          <div className="hero-fade flex gap-4 flex-wrap">
            <button onClick={() => setBookingOpen(true)} style={{ background: "var(--teal)", color: "white", padding: "1rem 2rem", borderRadius: "9999px", fontWeight: 600, fontSize: "0.9rem", minHeight: "44px" }}>
              Book Appointment
            </button>
            <a href="tel:+910000000000" style={{ display: "flex", alignItems: "center", border: "1.5px solid var(--teal)", color: "var(--teal)", padding: "0.5rem 2rem", borderRadius: "9999px", fontWeight: 600, fontSize: "0.9rem", minHeight: "44px" }}>
              📞 Call Now
            </a>
          </div>
        </div>

        <div ref={imgRef} style={{ position: "relative", width: "100%" }}>
          <div style={{ borderRadius: "24px", overflow: "hidden", boxShadow: "0 24px 60px rgba(15,32,39,0.12)", position: "relative", aspectRatio: "1/1.1" }}>
            <Image src="/images/hero/hero-smile.webp" alt="Confident smile" fill style={{ objectFit: "cover" }} />
          </div>
          <div className="absolute -bottom-4 md:-bottom-6 left-4 md:-left-6 bg-white rounded-2xl p-4 md:p-6 shadow-[0_12px_32px_rgba(15,32,39,0.12)] flex items-center gap-3">
            <span style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", color: "var(--teal)" }}>4.9</span>
            <div>
              <StarRating rating={4.9} small />
              <p style={{ fontSize: "0.7rem", color: "var(--stone)" }}>78 Google Reviews</p>
            </div>
          </div>
        </div>
      </div>
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </section>
  );
}
