"use client";
import Image from "next/image";
import { Check } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div style={{ borderRadius: "24px", overflow: "hidden", boxShadow: "0 12px 40px rgba(15,32,39,0.10)" }}>
          <Image src="/images/clinic/interior-1.webp" alt="Clinic Interior" width={600} height={600} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
        </div>
        <div>
          <p className="text-label mb-3">◆ WHY PATIENTS CHOOSE US</p>
          <h2 className="text-display" style={{ color: "var(--ink)", marginBottom: "1.5rem" }}>
            Care That Feels Like Family
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--stone)", marginBottom: "2rem" }}>
            At Vedanta Dental Care, we believe that a visit to the dentist should be a calm, welcoming experience. We combine gentle, patient-first care with modern techniques right here in the heart of Muzaffarpur, ensuring every smile gets the attention it deserves.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
            {["Modern Sterile Equipment", "Pain-Free Techniques", "Transparent Pricing"].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontWeight: 500, color: "var(--ink)" }}>
                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 24, height: 24, borderRadius: "50%", background: "var(--mint)", color: "var(--teal)" }}>
                  <Check size={14} strokeWidth={3} />
                </span>
                {item}
              </div>
            ))}
          </div>

          <div style={{ background: "var(--teal-pale)", padding: "1.5rem", borderRadius: "16px", display: "flex", flexDirection: "column", gap: "0.5rem", border: "1px solid var(--glass-border)" }}>
            <p style={{ fontWeight: 600, color: "var(--ink)" }}>📍 Yadav Nagar, Muzaffarpur, Bihar 843113</p>
            <a href="https://maps.app.goo.gl/i1pPfFhg76ZE1xFi9" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.85rem", color: "var(--teal)", fontWeight: 600, textDecoration: "none" }}>Get Directions →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
