"use client";
import Image from "next/image";

const SERVICES = [
  { name: "Teeth Whitening", desc: "Brighten your smile in a single visit with safe, effective whitening.", img: "/images/services/whitening.webp" },
  { name: "Bonding", desc: "Repair chips and gaps with seamless, natural-looking composite bonding.", img: "/images/services/bonding.webp" },
  { name: "Check-ups", desc: "Routine exams and cleanings to keep your smile healthy year-round.", img: "/images/services/checkup.webp" },
  { name: "Cosmetic Procedures", desc: "Complete smile makeovers tailored to your features and goals.", img: "/images/services/cosmetic.webp" },
  { name: "Dental Implants", desc: "Permanent, natural-feeling replacements for missing teeth.", img: "/images/services/implants.webp" },
  { name: "Dentures", desc: "Comfortable, custom-fit dentures for full or partial tooth loss.", img: "/images/services/dentures.webp" },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <p className="text-label mb-3">◆ WHAT WE OFFER</p>
        <h2 className="text-display" style={{ color: "var(--ink)", marginBottom: "3rem", maxWidth: 600 }}>
          Comprehensive Dental Care, All in One Place
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div key={s.name} className="card-soft" style={{ overflow: "hidden" }}>
              <div style={{ position: "relative", height: 200 }}>
                <Image src={s.img} alt={s.name} fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "1.5rem" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", color: "var(--ink)", marginBottom: "0.5rem" }}>{s.name}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--stone)", marginBottom: "1rem" }}>{s.desc}</p>
                <a href="#booking" style={{ fontSize: "0.8rem", color: "var(--teal)", fontWeight: 600, textDecoration: "none" }}>Learn More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
