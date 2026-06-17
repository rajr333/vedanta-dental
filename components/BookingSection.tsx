"use client";

export default function BookingSection() {
  return (
    <section style={{ background: "var(--teal-pale)", padding: "5rem 1.5rem", textAlign: "center" }}>
      <div className="max-w-3xl mx-auto">
        <p className="text-label mb-3">◆ READY TO SMILE?</p>
        <h2 className="text-display" style={{ color: "var(--ink)", marginBottom: "1.5rem" }}>Book Your Appointment Today</h2>
        <p style={{ fontSize: "1.05rem", color: "var(--stone)", marginBottom: "2.5rem" }}>
          Same-week appointments available. Walk-ins welcome until 7 PM.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
          <a href="#booking" style={{ background: "var(--teal)", color: "white", padding: "1rem 2.5rem", borderRadius: "9999px", fontWeight: 600, textDecoration: "none", display: "inline-block" }}>
            BOOK APPOINTMENT
          </a>
          <p style={{ fontSize: "0.9rem", color: "var(--stone)" }}>Or call us directly: <span style={{ fontWeight: 600, color: "var(--ink)" }}>+91 XXXXX XXXXX</span></p>
        </div>
      </div>
    </section>
  );
}
