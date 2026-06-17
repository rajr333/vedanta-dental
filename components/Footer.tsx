"use client";

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "var(--teal-pale)", padding: "4rem 1.5rem 2rem" }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "white", marginBottom: "0.75rem" }}>Vedanta Dental Care</p>
          <p style={{ fontSize: "0.8rem", opacity: 0.7, lineHeight: 1.8 }}>
            Yadav Nagar, Muzaffarpur,<br />Bihar 843113
          </p>
        </div>
        <div>
          <p className="text-label" style={{ color: "var(--teal-bright)", marginBottom: "1rem" }}>QUICK LINKS</p>
          {["Services", "About", "Gallery", "FAQ"].map((l) => (
            <p key={l} style={{ fontSize: "0.85rem", opacity: 0.8, marginBottom: "0.6rem" }}><a href={`#${l.toLowerCase()}`} style={{ color: "inherit" }}>{l}</a></p>
          ))}
        </div>
        <div>
          <p className="text-label" style={{ color: "var(--teal-bright)", marginBottom: "1rem" }}>SERVICES</p>
          {["Teeth Whitening", "Implants", "Dentures", "Check-ups"].map((s) => (
            <p key={s} style={{ fontSize: "0.85rem", opacity: 0.8, marginBottom: "0.6rem" }}>{s}</p>
          ))}
        </div>
        <div>
          <p className="text-label" style={{ color: "var(--teal-bright)", marginBottom: "1rem" }}>CONTACT</p>
          <p style={{ fontSize: "0.85rem", opacity: 0.8, marginBottom: "0.6rem" }}>+91 XXXXX XXXXX</p>
          <p style={{ fontSize: "0.85rem", opacity: 0.8 }}>Open Today · Closes 7 PM</p>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.5rem", textAlign: "center", fontSize: "0.75rem", opacity: 0.6 }}>
        © 2025 Vedanta Dental Care. All rights reserved.
      </div>
    </footer>
  );
}
