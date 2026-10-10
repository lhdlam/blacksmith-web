"use client";

import { useEffect, useState } from "react";
import { HERO_SLIDES } from "@/data/site";
import { cn } from "@/lib/utils";

/* Swiper fade (speed 3000ms) + autoplay delay 3500ms: the first slide is held
   3500ms, then each subsequent cycle is fade 3000ms + hold 3500ms = 6500ms. */
const FIRST_DELAY_MS = 3500;
const CYCLE_MS = 6500;

export function HeroSection() {
  const [step, setStep] = useState(0);
  // Ken Burns needs a post-mount state change so the first slide's zoom transitions.
  const [mounted, setMounted] = useState(false);
  const activeIndex = step % HERO_SLIDES.length;

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const timer = setTimeout(
      () => setStep((s) => s + 1),
      step === 0 ? FIRST_DELAY_MS : CYCLE_MS,
    );
    return () => clearTimeout(timer);
  }, [step]);

  return (
    <section className="relative hidden h-screen overflow-hidden bg-[#191919] md:block">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {HERO_SLIDES.map((src, i) => {
          const active = i === activeIndex;
          return (
            <div
              key={src}
              className={cn(
                "absolute inset-0 overflow-hidden transition-opacity duration-[3000ms] ease-[ease]",
                active ? "opacity-100" : "opacity-0",
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform ease-linear motion-reduce:scale-100 motion-reduce:transition-none",
                  active && mounted ? "scale-[1.3] duration-[20s]" : "scale-100 duration-[10s]",
                )}
                style={{ backgroundImage: `url(${src})` }}
              />
            </div>
          );
        })}
      </div>

      <div className="absolute inset-0 bg-black opacity-45" aria-hidden="true" />

      <div className="relative mx-auto flex h-full max-w-[1140px] items-end">
        <div className="mb-[100px] w-full p-[10px]">
          <h2 className="mb-5 font-prata text-[26px] leading-[26px] font-normal tracking-[1.8px] text-white">
            LGP Blacksmith and Design - Nét đẹp sáng tạo
          </h2>
          <div className="mb-5 py-[2px]">
            <div className="w-[78px] border-t-2 border-solid border-white" />
          </div>
          <h2 className="font-prata text-[59px] leading-[73.75px] font-normal tracking-[4px] text-white">
            Sáng tạo từ thép,
            <br />
            Kiến tạo nên giá trị độc bản
          </h2>
        </div>
      </div>
    </section>
  );
}
