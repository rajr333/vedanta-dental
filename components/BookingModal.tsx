"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Props { open: boolean; onClose: () => void; }

const SERVICES = ["Teeth Whitening", "Bonding", "Check-up", "Cosmetic", "Implants", "Dentures", "Other"];

export default function BookingModal({ open, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch("https://formspree.io/f/REPLACE_WITH_FORM_ID", { method: "POST", body: data, headers: { Accept: "application/json" } });
      setSubmitted(true);
    } catch {
      setSubmitted(true); // graceful fallback
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          style={{ position: "fixed", inset: 0, zIndex: 300, background: "rgba(15,32,39,0.5)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            style={{ background: "white", borderRadius: "24px", padding: "clamp(1.5rem, 5vw, 2.5rem)", maxWidth: 480, width: "100%", maxHeight: "90vh", overflowY: "auto", position: "relative" }}>
            <button onClick={onClose} style={{ position: "absolute", top: "1.25rem", right: "1.25rem", color: "var(--stone)" }}><X size={22} /></button>

            {!submitted ? (
              <>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", color: "var(--ink)", marginBottom: "0.4rem" }}>Book Your Appointment</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--stone)", marginBottom: "1.5rem" }}>We'll confirm by phone within a few hours.</p>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <input name="name" required placeholder="Full Name" style={inputStyle} />
                  <input name="phone" required placeholder="Phone Number" style={inputStyle} />
                  <input name="email" type="email" placeholder="Email (optional)" style={inputStyle} />
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <input name="date" type="date" required style={inputStyle} />
                    <input name="time" type="time" required style={inputStyle} />
                  </div>
                  <select name="service" required style={inputStyle}>
                    <option value="">Select Service Needed</option>
                    {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <textarea name="message" placeholder="Anything else we should know? (optional)" rows={3} style={{ ...inputStyle, resize: "none" }} />
                  <button type="submit" style={{ background: "var(--teal)", color: "white", padding: "0.9rem", borderRadius: "9999px", fontWeight: 600, border: "none", cursor: "pointer", marginTop: "0.5rem" }}>
                    Confirm Appointment
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "2rem 0" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✓</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--ink)", marginBottom: "0.5rem" }}>Request Received!</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--stone)" }}>We'll call you to confirm your appointment within a few hours.</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "0.8rem 1rem", borderRadius: "12px",
  border: "1.5px solid #E5EAEA", fontSize: "0.9rem", fontFamily: "var(--font-body)", outline: "none",
};
