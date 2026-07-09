"use client";

import type { ReactNode } from "react";
import { useInViewOnce } from "@/hooks/use-in-view-once";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Subtle, once-per-element scroll reveal (opacity + translateY only).
 * Movement is defined in `.reveal-on-scroll` (globals.css) and gated behind
 * `prefers-reduced-motion: no-preference`; `useInViewOnce` returns `inView`
 * immediately under reduced motion, so content stays static and visible.
 */
export function Reveal({ children, className = "" }: RevealProps) {
  // threshold 0 so tall section wrappers reveal as soon as their top edge
  // enters, instead of requiring 20% visibility (which never happens when a
  // section is taller than the viewport → would stay stuck hidden).
  const { ref, inView } = useInViewOnce({ threshold: 0, rootMargin: "0px 0px -12% 0px" });

  return (
    <div
      ref={ref}
      className={`reveal-on-scroll${inView ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
    >
      {children}
    </div>
  );
}
