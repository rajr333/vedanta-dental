"use client";
import StarRating from "./ui/StarRating";

const REVIEWS = [
  { name: "Rahul S.", rating: 5, quote: "Absolutely the best dental clinic in Muzaffarpur. The clinic is spotless and the doctor makes sure you feel zero pain during the procedure." },
  { name: "Neha K.", rating: 5, quote: "Got my teeth whitened here. The results were amazing and the entire staff was so polite and welcoming. Highly recommend!" },
  { name: "Amit V.", rating: 5, quote: "I was always scared of dentists, but Dr. [Name] changed that. Very patient, explained everything clearly. Truly 5-star service." },
];

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p className="text-label mb-3">◆ WHAT OUR PATIENTS SAY</p>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}><StarRating rating={5} /></div>
          <h2 className="text-display" style={{ color: "var(--ink)" }}>78 Reviews. One Consistent Story.</h2>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory pb-6" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          <style dangerouslySetInnerHTML={{ __html: `::-webkit-scrollbar { display: none; }` }} />
          {REVIEWS.map((r, i) => (
            <div key={i} className="card-soft min-w-[85vw] md:min-w-0 snap-center shrink-0" style={{ padding: "2rem", borderLeft: "4px solid var(--teal)" }}>
              <StarRating rating={r.rating} small />
              <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "1.1rem", color: "var(--ink)", margin: "1.5rem 0" }}>"{r.quote}"</p>
              <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--stone)" }}>— {r.name}</p>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a href="#" style={{ fontSize: "0.9rem", color: "var(--teal)", fontWeight: 600, textDecoration: "none" }}>Read all reviews on Google →</a>
        </div>
      </div>
    </section>
  );
}
