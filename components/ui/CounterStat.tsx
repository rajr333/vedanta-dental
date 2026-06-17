"use client";
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface Props { target: number; suffix?: string; decimals?: number; className?: string; }

export default function CounterStat({ target, suffix = "", decimals = 0, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target, duration: 1.6, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
      onUpdate: () => { el.textContent = `${obj.val.toFixed(decimals)}${suffix}`; },
    });
    return () => { ScrollTrigger.getAll().forEach((st) => { if (st.trigger === el) st.kill(); }); };
  }, [target, suffix, decimals]);

  return <span ref={ref} className={className}>0{suffix}</span>;
}
