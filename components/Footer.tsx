"use client";

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "var(--teal-pale)", padding: "4rem 1.5rem 2rem" }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "white", marginBottom: "0.2rem" }}>Vedanta Dental Care</p>
          <p style={{ fontSize: "0.8rem", color: "var(--teal-bright)", fontStyle: "italic", marginBottom: "0.75rem" }}>Caring your smile...</p>
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
          <a href="tel:+917000560853" style={{ display: "block", fontSize: "0.85rem", opacity: 0.8, marginBottom: "0.6rem", color: "inherit", textDecoration: "none" }}>+91 70005 60853</a>
          <p style={{ fontSize: "0.85rem", opacity: 0.8, lineHeight: 1.5 }}>10:00 AM – 2:00 PM<br/>3:00 PM – 7:00 PM</p>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.5rem", textAlign: "center", fontSize: "0.75rem", opacity: 0.6 }}>
        © 2025 Vedanta Dental Care. All rights reserved.
      </div>
    </footer>
  );
}
