"use client";
import Image from "next/image";

export default function DoctorSection() {
  return (
    <section id="doctor" className="section-padding" style={{ background: "var(--mint)" }}>
      <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
        <div className="order-last md:order-first">
          <p className="text-label mb-3">◆ MEET YOUR DENTIST</p>
          <div className="mb-3">
            <h2 className="font-display font-medium text-ink" style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", lineHeight: 1.1, margin: 0 }}>
              Dr. Raghav Chaudhary, BDS
              <span className="block md:inline md:ml-3 text-stone" style={{ fontSize: "clamp(1.1rem, 3.5vw, 1.4rem)" }}>(Dr. B. Chowdhary)</span>
            </h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem", flexWrap: "wrap" }}>
            <p style={{ fontSize: "0.9rem", color: "var(--teal)", fontWeight: 600 }}>Dental Surgeon — Ex. Resident, Jawaharlal Nehru Hospital, Bhilai Steel Plant</p>
            <span style={{ fontSize: "0.75rem", background: "var(--teal-pale)", color: "var(--teal)", padding: "0.2rem 0.6rem", borderRadius: "99px", fontWeight: 600, whiteSpace: "nowrap" }}>Reg. No.: 8214/A</span>
          </div>
          
          <p style={{ fontSize: "1.05rem", color: "var(--stone)", marginBottom: "2rem" }}>
            A BDS graduate from Raipur and former resident at Jawaharlal Nehru Hospital, Bhilai Steel Plant, Dr. Chaudhary brings hospital-grade expertise to every patient at Vedanta Dental Care.
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

        <div style={{ background: "var(--teal-pale)", padding: "20px", borderRadius: "24px", boxShadow: "0 12px 40px rgba(15,32,39,0.10)" }}>
          <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 15px rgba(15,32,39,0.08)", border: "2px solid var(--teal)", position: "relative" }}>
            <Image src="/images/doctor/dr-portrait.jpg" alt="Dr. Raghav Chaudhary" width={600} height={700} style={{ width: "100%", height: "100%", aspectRatio: "4/5", objectFit: "cover", objectPosition: "25% center" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
