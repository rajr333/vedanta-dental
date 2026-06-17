"use client";
import CounterStat from "./ui/CounterStat";

const STATS = [
  { value: 4.9, decimals: 1, suffix: "★", label: "Average Rating" },
  { value: 78, suffix: "+", label: "Happy Reviews" },
  { value: 6, suffix: "", label: "Core Services" },
  { value: 6, suffix: " Days", label: "Open Weekly" },
];

export default function TrustBarSection() {
  return (
    <section style={{ background: "var(--mint)", padding: "2.5rem 1.5rem" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STATS.map((s) => (
          <div key={s.label}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "2.25rem", color: "var(--teal)" }}>
              <CounterStat target={s.value} decimals={s.decimals || 0} suffix={s.suffix} />
            </p>
            <p style={{ fontSize: "0.8rem", color: "var(--ink-soft)", marginTop: "0.3rem" }}>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
