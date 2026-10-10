import { cn } from "@/lib/utils";

interface SeeAllLinkProps {
  href: string;
  /** Rendered width of the "XEM THÊM →" SVG (source viewBox 139.1 × 24). */
  width: number;
  className?: string;
}

/* The target renders this label as an SVG image (SEE-ALL-vn2-arrow-.svg). */
export function SeeAllLink({ href, width, className }: SeeAllLinkProps) {
  return (
    <a href={href} className={cn("inline-block", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/see-all-arrow.svg" alt="Xem thêm" width={width} height={Math.round((width * 24) / 139.1)} className="inline-block max-w-full" />
    </a>
  );
}
