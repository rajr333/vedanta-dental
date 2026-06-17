"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  { q: "How do I book an appointment?", a: "You can book directly through our website by clicking any 'Book Appointment' button, or by calling us at our clinic number." },
  { q: "Do you accept walk-ins?", a: "Yes, walk-ins are welcome until 7 PM, though we recommend booking in advance to minimize your wait time." },
  { q: "Is the treatment painful?", a: "We prioritize patient comfort and use modern, pain-free techniques and local anesthesia to ensure a smooth experience." },
  { q: "What should I bring to my first visit?", a: "Please bring a valid ID and any past dental records or X-rays if you have them." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding" style={{ background: "var(--off-white)" }}>
      <div className="max-w-3xl mx-auto">
        <p className="text-label mb-3 text-center">◆ GOT QUESTIONS?</p>
        <h2 className="text-display text-center" style={{ color: "var(--ink)", marginBottom: "3rem" }}>Frequently Asked Questions</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {FAQS.map((faq, i) => (
            <div key={i} style={{ background: "white", borderRadius: "16px", padding: "1.5rem", cursor: "pointer", boxShadow: "0 4px 20px rgba(15,32,39,0.04)" }} onClick={() => setOpenIndex(openIndex === i ? null : i)}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", minHeight: "44px" }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--ink)", paddingRight: "1rem" }}>{faq.q}</h3>
                <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }} style={{ color: "var(--teal)" }}>
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </motion.div>
              </div>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: "hidden" }}>
                    <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "var(--stone)" }}>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
