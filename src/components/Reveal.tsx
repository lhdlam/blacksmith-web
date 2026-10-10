"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { RevealAnimation } from "@/types/site";

interface RevealProps {
  animation: RevealAnimation;
  /** Elementor's `_animation_mobile: none` — skip the animation below 768px. */
  disableOnMobile?: boolean;
  className?: string;
  children: React.ReactNode;
}

/* Mirrors Elementor's entrance animations: hidden until the element enters the
   viewport, then plays the keyframe once (2s, `.animated-slow`). */
export function Reveal({ animation, disableOnMobile, className, children }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"pending" | "visible" | "static">("pending");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (disableOnMobile && window.matchMedia("(max-width: 767px)").matches) {
      setState("static");
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible");
          io.disconnect();
        }
      },
      { threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [disableOnMobile]);

  return (
    <div
      ref={ref}
      className={cn(
        state === "pending" && "reveal-pending",
        state === "visible" && `reveal-${animation}`,
        className,
      )}
    >
      {children}
    </div>
  );
}
