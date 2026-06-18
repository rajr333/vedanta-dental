"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import BookingModal from "./BookingModal";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Doctor", href: "#doctor" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [statusText, setStatusText] = useState("10 AM - 2 PM & 3 PM - 7 PM");

  useEffect(() => {
    const updateStatus = () => {
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const istDate = new Date(utc + (3600000 * 5.5));
      const h = istDate.getHours();
      
      if (h >= 10 && h < 14) {
        setIsOpen(true);
        setStatusText("Open · Closes 2 PM");
      } else if (h >= 15 && h < 19) {
        setIsOpen(true);
        setStatusText("Open · Closes 7 PM");
      } else {
        setIsOpen(false);
        if (h >= 14 && h < 15) setStatusText("Closed · Opens 3 PM");
        else if (h < 10) setStatusText("Closed · Opens 10 AM");
        else setStatusText("Closed");
      }
    };
    updateStatus();
    const interval = setInterval(updateStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? "glass-nav py-3" : "bg-transparent py-5"}`}>
        <div className="flex items-center justify-between px-6 md:px-12 max-w-7xl mx-auto">
          <a href="#" className="flex flex-col" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "var(--teal)", fontWeight: 600, lineHeight: 1.1 }}>
              Vedanta <span style={{ color: "var(--ink)" }}>Dental Care</span>
            </span>
            <span style={{ fontSize: "0.65rem", color: "var(--stone)", fontStyle: "italic", fontWeight: 600, marginTop: "0.1rem" }}>Caring your smile...</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <a key={l.label} href={l.href} style={{ fontSize: "0.85rem", color: "var(--ink-soft)", fontWeight: 500 }} className="hover:text-teal transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1.5" style={{ fontSize: "0.75rem", color: isOpen ? "var(--success)" : "var(--stone)" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: isOpen ? "var(--success)" : "var(--stone)", display: "inline-block" }} />
              {statusText}
            </div>
            <button onClick={() => setBookingOpen(true)} style={{
              background: "var(--teal)", color: "white", padding: "0.65rem 1.5rem",
              borderRadius: "9999px", fontSize: "0.8rem", fontWeight: 600, textDecoration: "none", minHeight: "44px"
            }}>
              Book Appointment
            </button>
          </div>

          <button onClick={() => setMenuOpen(true)} className="md:hidden" style={{ color: "var(--teal)" }}>
            <Menu size={26} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: "fixed", inset: 0, zIndex: 200, background: "white", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2rem" }}
          >
            <button onClick={() => setMenuOpen(false)} style={{ position: "absolute", top: "1.5rem", right: "1.5rem", color: "var(--teal)" }}>
              <X size={28} />
            </button>
            {LINKS.map((l, i) => (
              <motion.a
                key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "var(--ink)" }}
              >
                {l.label}
              </motion.a>
            ))}
            <button onClick={() => { setMenuOpen(false); setBookingOpen(true); }} style={{
              display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "1rem",
              background: "var(--teal)", color: "white", padding: "0.9rem 2rem", borderRadius: "9999px", fontWeight: 600, minHeight: "44px"
            }}>
              <Phone size={18} /> Book Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
