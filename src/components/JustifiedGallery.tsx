"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { GalleryImage } from "@/types/site";

interface JustifiedGalleryProps {
  tabs: string[];
  images: GalleryImage[];
}

export interface JustifiedBox {
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface JustifiedLayout {
  boxes: JustifiedBox[];
  height: number;
}

/* Elementor e-gallery "justified": greedily add images to a row at the ideal
   height; the image that makes the row overflow the container still joins it,
   then the row is scaled so it exactly fills the width. The last row is
   stretched to full width too. */
export function computeJustifiedLayout(
  aspects: number[],
  containerWidth: number,
  idealHeight: number,
  gap: number,
): JustifiedLayout {
  const boxes: JustifiedBox[] = [];
  let top = 0;
  let row: number[] = [];

  const closeRow = () => {
    const sum = row.reduce((acc, a) => acc + a, 0);
    const height = (containerWidth - gap * (row.length - 1)) / sum;
    let left = 0;
    for (const aspect of row) {
      const width = aspect * height;
      boxes.push({ left, top, width, height });
      left += width + gap;
    }
    top += height + gap;
    row = [];
  };

  for (const aspect of aspects) {
    row.push(aspect);
    const sum = row.reduce((acc, a) => acc + a, 0);
    if (sum * idealHeight + gap * (row.length - 1) > containerWidth) closeRow();
  }
  if (row.length) closeRow();

  return { boxes, height: boxes.length ? top - gap : 0 };
}

const DESKTOP_QUERY = "(min-width: 1025px)";
const FALLBACK_WIDTH = 930;

export function JustifiedGallery({ tabs, images }: JustifiedGalleryProps) {
  const [active, setActive] = useState(0);
  const [width, setWidth] = useState(FALLBACK_WIDTH);
  const [desktop, setDesktop] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    ro.observe(el);
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onChange = () => setDesktop(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => {
      ro.disconnect();
      mq.removeEventListener("change", onChange);
    };
  }, []);

  const idealHeight = desktop ? 300 : 150;
  const gap = desktop ? 18 : 10;

  /* Layout every tag independently so hidden items keep a stable box to
     scale out of / into when switching tabs. */
  const { boxByIndex, heightByTag } = useMemo(() => {
    const boxMap = new Map<number, JustifiedBox>();
    const heights = new Map<number, number>();
    tabs.forEach((_, tag) => {
      const indices = images.flatMap((img, i) => (img.tag === tag ? [i] : []));
      const layout = computeJustifiedLayout(
        indices.map((i) => images[i].width / images[i].height),
        width,
        idealHeight,
        gap,
      );
      indices.forEach((imgIndex, k) => boxMap.set(imgIndex, layout.boxes[k]));
      heights.set(tag, layout.height);
    });
    return { boxByIndex: boxMap, heightByTag: heights };
  }, [tabs, images, width, idealHeight, gap]);

  return (
    <div>
      <div className="mb-[50px] flex flex-wrap justify-center">
        {tabs.map((label, i) => (
          <button
            key={label}
            type="button"
            onClick={() => setActive(i)}
            aria-pressed={active === i}
            className={cn(
              "cursor-pointer px-[14px] py-[7px] font-heebo text-[14px] leading-[1.5] font-medium tracking-[1.1px] transition-colors duration-300 md:text-[19px]",
              i === 0 && "mr-[40px]",
              active === i ? "text-white" : "text-nav-muted",
            )}
          >
            {label}
          </button>
        ))}
      </div>
      <div
        ref={containerRef}
        className="relative w-full transition-[height] duration-[350ms]"
        style={{ height: heightByTag.get(active) ?? 0 }}
      >
        {images.map((img, i) => {
          const box = boxByIndex.get(i);
          if (!box) return null;
          const visible = img.tag === active;
          return (
            <a
              key={img.src}
              href={img.src}
              target="_blank"
              rel="noreferrer"
              aria-hidden={!visible}
              tabIndex={visible ? undefined : -1}
              className={cn(
                "absolute block overflow-hidden transition-[opacity,transform] duration-[350ms]",
                visible ? "scale-100 opacity-100" : "pointer-events-none scale-0 opacity-0",
              )}
              style={{ left: box.left, top: box.top, width: box.width, height: box.height }}
            >
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${img.src})` }}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
