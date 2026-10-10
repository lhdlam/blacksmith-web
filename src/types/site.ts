export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface GalleryImage {
  src: string;
  width: number;
  height: number;
  tag: number;
}

export interface Project {
  title: string;
  description: string;
  images: { src: string; width: number; height: number }[];
}

export interface Partner {
  name: string;
  src: string;
}

export type RevealAnimation = "fadeInLeft" | "fadeInRight" | "fadeInUp" | "fadeIn";
