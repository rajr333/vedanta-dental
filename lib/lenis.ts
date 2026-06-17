"use client";
import Lenis from "lenis";
import { gsap } from "gsap";

let lenisInstance: Lenis | null = null;

export function initLenis(): Lenis {
  lenisInstance = new Lenis({
    duration: 1.1,
    easing: (t) => 1 - Math.pow(1 - t, 3),
    smoothWheel: true,
  });
  gsap.ticker.add((time) => { lenisInstance?.raf(time * 1000); });
  gsap.ticker.lagSmoothing(0);
  return lenisInstance;
}
export function destroyLenis(): void { lenisInstance?.destroy(); lenisInstance = null; }
