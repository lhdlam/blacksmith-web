"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { PARTNERS } from "@/data/site";

const GAP = 20;
const AUTOPLAY_MS = 5000;
const SPEED_MS = 500;
const COUNT = PARTNERS.length;
/* Render the list 3× so the track can always slide forward, then jump back one
   full set (without transition) once it reaches the third copy. */
const SLIDES = [...PARTNERS, ...PARTNERS, ...PARTNERS];

export function PartnersSection() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [perView, setPerView] = useState(4);
  const [index, setIndex] = useState(COUNT);
  const [animate, setAnimate] = useState(false);
  const [paused, setPaused] = useState(false);

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const update = () => {
      setWidth(el.clientWidth);
      setPerView(window.matchMedia("(max-width: 767px)").matches ? 1 : 4);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setAnimate(true);
      setIndex((i) => i + 1);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  const handleTransitionEnd = useCallback(() => {
    if (index >= COUNT * 2) {
      setAnimate(false);
      setIndex(index - COUNT);
    }
  }, [index]);

  const slideWidth = width > 0 ? (width - GAP * (perView - 1)) / perView : 0;
  const offset = index * (slideWidth + GAP);

  return (
    <section className="bg-background px-0 md:px-[17%] md:pt-[6%] md:pb-[5%]">
      <Reveal animation="fadeInUp">
        <div className="rounded-[6px] bg-surface px-0 pt-[30px] pb-[20px] md:-mt-[9.5px] md:px-[47.5px] md:pt-[47.5px] md:pb-[38px]">
          <h2 className="mb-[20px] pb-[20px] text-center font-prata text-[22px] leading-[1.2em] tracking-[1.8px] text-partners-title md:text-[26px] md:leading-[26px]">
            Đối tác chiến lược
          </h2>
          <div
            ref={viewportRef}
            className="mx-auto w-[256px] max-w-full overflow-hidden md:w-full"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className="flex"
              style={{
                gap: `${GAP}px`,
                transform: `translate3d(${-offset}px, 0, 0)`,
                transition: animate ? `transform ${SPEED_MS}ms ease` : "none",
                visibility: width > 0 ? "visible" : "hidden",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {SLIDES.map((partner, i) => (
                <div
                  key={`${partner.name}-${i}`}
                  className="shrink-0"
                  style={{ width: `${slideWidth}px` }}
                  aria-hidden={i < index || i >= index + perView}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={partner.src}
                    alt={partner.name}
                    width={320}
                    height={200}
                    className="mb-[20px] block h-auto w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
