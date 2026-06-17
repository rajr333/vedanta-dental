"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function SmileGallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    gsap.from(".gallery-img", {
      opacity: 0, scale: 0.95, duration: 0.8, stagger: 0.1, ease: "power2.out",
      scrollTrigger: { trigger: "#gallery", start: "top 80%" },
    });
  }, []);

  return (
    <section id="gallery" className="section-padding" style={{ background: "var(--off-white)" }}>
      <div className="max-w-7xl mx-auto">
        <p className="text-label mb-3 text-center">◆ REAL RESULTS</p>
        <h2 className="text-display text-center" style={{ color: "var(--ink)", marginBottom: "3rem" }}>Smiles We're Proud Of</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 1, 2, 3, 4].map((num, i) => {
            const src = `/images/gallery/smile-${num}.webp`;
            return (
              <div key={i} className="gallery-img" style={{ position: "relative", aspectRatio: "1/1", borderRadius: "16px", overflow: "hidden", cursor: "pointer" }} onClick={() => setSelectedImage(src)}>
                <Image src={src} alt={`Smile ${i + 1}`} fill style={{ objectFit: "cover", transition: "transform 0.4s" }} className="hover:scale-105" />
              </div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedImage(null)} style={{ position: "fixed", inset: 0, zIndex: 400, background: "rgba(15,32,39,0.9)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
            <button onClick={() => setSelectedImage(null)} style={{ position: "absolute", top: "1.5rem", right: "1.5rem", color: "white" }}><X size={32} /></button>
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} style={{ position: "relative", width: "100%", maxWidth: 800, aspectRatio: "1/1", borderRadius: "16px", overflow: "hidden" }} onClick={(e) => e.stopPropagation()}>
              <Image src={selectedImage} alt="Expanded smile" fill style={{ objectFit: "contain" }} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
