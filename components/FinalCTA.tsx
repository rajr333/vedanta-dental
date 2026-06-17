"use client";
import StarRating from "./ui/StarRating";

export default function FinalCTA() {
  return (
    <section id="booking" style={{ background: "var(--teal)", padding: "6rem 1.5rem", textAlign: "center" }}>
      <h2 className="font-display text-3xl md:text-5xl" style={{ color: "white", marginBottom: "1rem" }}>Your Best Smile Starts Here</h2>
      <p style={{ color: "var(--teal-pale)", maxWidth: 480, margin: "0 auto 2rem", fontSize: "1rem" }}>
        Same-week appointments available. Walk-ins welcome until 7 PM.
      </p>
      <a href="#" style={{ background: "white", color: "var(--teal)", padding: "1rem 2.5rem", borderRadius: "9999px", fontWeight: 700, textDecoration: "none", display: "inline-block", marginBottom: "1.5rem" }}>
        Book Appointment
      </a>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem", color: "white", fontSize: "0.85rem" }}>
        <StarRating rating={4.9} small />
        4.9 Rating from 78+ Patients in Muzaffarpur
      </div>
    </section>
  );
}
