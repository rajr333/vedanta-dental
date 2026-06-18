"use client";
import Image from "next/image";

export default function DoctorSection() {
  return (
    <section id="doctor" className="section-padding" style={{ background: "var(--mint)" }}>
      <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
        <div className="order-last md:order-first">
          <p className="text-label mb-3">◆ MEET YOUR DENTIST</p>
          <h2 className="text-display" style={{ color: "var(--ink)", marginBottom: "0.5rem" }}>Dr. Rakesh Sharma, BDS</h2>
          <p style={{ fontSize: "0.9rem", color: "var(--teal)", fontWeight: 600, marginBottom: "2rem" }}>Lead Dental Surgeon</p>
          
          <p style={{ fontSize: "1.05rem", color: "var(--stone)", marginBottom: "2rem" }}>
            With years of experience in comprehensive dental care, Dr. Rakesh Sharma is dedicated to providing pain-free, modern treatments. His approachable nature and commitment to excellence ensure that every patient feels comfortable and confident.
          </p>

          <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2.5rem" }}>
            <div>
              <p style={{ fontSize: "1.5rem", fontFamily: "var(--font-display)", color: "var(--ink)" }}>10+</p>
              <p style={{ fontSize: "0.75rem", color: "var(--stone)", textTransform: "uppercase", fontWeight: 600 }}>Years Exp.</p>
            </div>
            <div>
              <p style={{ fontSize: "1.5rem", fontFamily: "var(--font-display)", color: "var(--ink)" }}>5k+</p>
              <p style={{ fontSize: "0.75rem", color: "var(--stone)", textTransform: "uppercase", fontWeight: 600 }}>Patients</p>
            </div>
          </div>

          <blockquote style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontStyle: "italic", color: "var(--ink)", borderLeft: "3px solid var(--teal)", paddingLeft: "1.5rem" }}>
            "Every patient deserves to leave with more confidence than they walked in with."
          </blockquote>
        </div>

        <div style={{ borderRadius: "24px", overflow: "hidden", boxShadow: "0 12px 40px rgba(15,32,39,0.10)", position: "relative" }}>
          <Image src="/images/doctor/dr-portrait.jpg" alt="Dr. Rakesh Sharma" width={600} height={700} style={{ width: "100%", height: "100%", aspectRatio: "4/5", objectFit: "cover", objectPosition: "25% center", filter: "saturate(0.8)" }} />
          <div style={{ position: "absolute", inset: 0, backgroundColor: "var(--teal)", opacity: 0.08, mixBlendMode: "multiply", pointerEvents: "none" }}></div>
        </div>
      </div>
    </section>
  );
}
