"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const STEPS = [
  { num: "01", title: "Book Your Appointment", desc: "Schedule online or call us." },
  { num: "02", title: "Free Initial Consultation", desc: "We discuss your goals." },
  { num: "03", title: "Personalized Plan", desc: "Tailored treatment just for you." },
  { num: "04", title: "Walk Out Smiling", desc: "Experience a renewed smile." },
];

export default function ProcessSection() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(lineRef.current, { scaleX: 0 }, {
      scaleX: 1, transformOrigin: "left center", duration: 1.5, ease: "power2.out",
      scrollTrigger: { trigger: "#process", start: "top 70%" },
    });
  }, []);

  return (
    <section id="process" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <p className="text-label mb-3 text-center">◆ YOUR VISIT, SIMPLIFIED</p>
        <h2 className="text-display text-center" style={{ color: "var(--ink)", marginBottom: "4rem" }}>Getting Treated Is Easy</h2>

        <div style={{ position: "relative" }}>
          <div className="hidden md:block" style={{ position: "absolute", top: "2.5rem", left: 0, right: 0, height: 2, background: "var(--teal-pale)", zIndex: 0 }}>
            <div ref={lineRef} style={{ width: "100%", height: "100%", background: "var(--teal)" }} />
          </div>

          <div className="md:hidden" style={{ position: "absolute", top: 0, bottom: 0, left: "2.5rem", width: 2, background: "var(--teal-pale)", zIndex: 0 }}>
            <div style={{ width: "100%", height: "100%", background: "var(--teal)" }} />
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {STEPS.map((s, i) => (
              <div key={s.num} className="flex flex-col items-start md:items-center text-left md:text-center pl-20 md:pl-0" style={{ position: "relative", zIndex: 1, background: "var(--off-white)", padding: "1.5rem", borderRadius: "16px" }}>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "4rem", color: "var(--teal)", opacity: 0.2, lineHeight: 1, marginBottom: "1rem", position: "absolute", left: "-0.5rem", top: "1rem", backgroundColor: "var(--off-white)" }} className="md:static md:bg-transparent">{s.num}</p>
                <div className="md:mt-0 relative">
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--ink)", marginBottom: "0.5rem" }}>{s.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--stone)" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
