"use client";
interface Props { rating: number; small?: boolean; }

export default function StarRating({ rating, small }: Props) {
  const full = Math.floor(rating);
  const size = small ? 12 : 16;
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} style={{ fontSize: size, color: i < full ? "var(--gold-accent)" : "#E0E0E0" }}>★</span>
      ))}
    </div>
  );
}
