import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Custom hook for Lenis smooth scrolling.
 * Provides luxury desktop inertia scrolling while gracefully
 * falling back to native momentum scrolling on mobile / touch devices
 * and respecting reduced motion preferences.
 */
export const useSmoothScroll = () => {
  useEffect(() => {
    // Check if touch device or mobile screen
    const isTouchDevice =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches ||
      window.innerWidth <= 768;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // Mobile / Touch / Reduced Motion fallback to native smooth scrolling
    if (isTouchDevice || prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    // Attach for global navigation clicks or anchor scrolling if needed
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);
};

export default useSmoothScroll;
