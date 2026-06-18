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
    
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: target, 
        duration: 1.6, 
        ease: "power2.out",
        scrollTrigger: { 
          trigger: el, 
          start: "top 95%", 
          toggleActions: "play none none none" 
        },
        onUpdate: () => { 
          if (el) el.textContent = `${obj.val.toFixed(decimals)}${suffix}`; 
        },
      });
    }, el);

    return () => ctx.revert();
  }, [target, suffix, decimals]);

  return <span ref={ref} className={className}>0{suffix}</span>;
}
