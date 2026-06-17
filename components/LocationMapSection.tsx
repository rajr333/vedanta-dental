"use client";

export default function LocationMapSection() {
  return (
    <section className="section-padding" style={{ background: "var(--off-white)" }}>
      <div className="max-w-7xl mx-auto">
        <p className="text-label mb-3">◆ FIND US</p>
        <h2 className="text-display" style={{ color: "var(--ink)", marginBottom: "2.5rem" }}>Visit Vedanta Dental Care</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 12px 32px rgba(15,32,39,0.08)", minHeight: 360 }}>
            <iframe
              src="https://www.google.com/maps?q=Vedanta+Dental+Care+Yadav+Nagar+Muzaffarpur+Bihar+843113&output=embed"
              width="100%" height="100%" style={{ border: 0, minHeight: 360 }} loading="lazy"
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", justifyContent: "center" }}>
            <div>
              <p className="text-label mb-2">ADDRESS</p>
              <p style={{ fontSize: "1rem", color: "var(--ink)" }}>
                Vedanta Dental Care, Yadav Nagar, Muz,<br />Muzaffarpur, Bihar 843113
              </p>
            </div>
            <div>
              <p className="text-label mb-2">HOURS</p>
              <p style={{ fontSize: "1rem", color: "var(--success)" }}>Open Today · Closes 7 PM</p>
            </div>
            <div>
              <p className="text-label mb-2">PHONE</p>
              <a href="tel:+910000000000" style={{ fontSize: "1rem", color: "var(--teal)", fontWeight: 600 }}>+91 XXXXX XXXXX</a>
            </div>
            <a href="https://www.google.com/maps/dir/?api=1&destination=Vedanta+Dental+Care+Yadav+Nagar+Muzaffarpur+Bihar+843113"
              target="_blank" rel="noopener noreferrer"
              style={{ background: "var(--teal)", color: "white", padding: "0.9rem 2rem", borderRadius: "9999px", fontWeight: 600, textAlign: "center", textDecoration: "none", width: "fit-content" }}>
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
