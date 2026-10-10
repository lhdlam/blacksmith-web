import type { GalleryImage, NavItem, Partner, Project } from "@/types/site";

export const NAV_ITEMS: NavItem[] = [
  { label: "Trang chủ", href: "/", active: true },
  { label: "Dịch vụ", href: "https://lgp-blacksmith.com/vi/dich-vu/" },
  { label: "Dự án", href: "https://lgp-blacksmith.com/vi/du-an/" },
  { label: "Sản phẩm", href: "https://lgp-blacksmith.com/vi/san-pham/" },
  { label: "Liên hệ", href: "https://lgp-blacksmith.com/vi/lien-he/" },
];

export const HERO_SLIDES = ["/images/hero-1.png", "/images/hero-2.jpg", "/images/hero-3.jpg"];

export const GALLERY_TABS = ["Grand Forge", "Eurokorten"];

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: "/images/gallery/grand-forge-12.jpg", width: 654, height: 779, tag: 0 },
  { src: "/images/gallery/grand-forge-11.jpg", width: 655, height: 779, tag: 0 },
  { src: "/images/gallery/grand-forge-10.jpg", width: 653, height: 779, tag: 0 },
  { src: "/images/gallery/grand-forge-8.jpg", width: 654, height: 779, tag: 0 },
  { src: "/images/gallery/grand-forge-7.jpg", width: 653, height: 780, tag: 0 },
  { src: "/images/gallery/grand-forge-6.jpg", width: 653, height: 779, tag: 0 },
  { src: "/images/gallery/grand-forge-5.jpg", width: 655, height: 779, tag: 0 },
  { src: "/images/gallery/grand-forge-1.jpg", width: 745, height: 779, tag: 0 },
  { src: "/images/gallery/eurokorten-15.jpg", width: 288, height: 512, tag: 1 },
  { src: "/images/gallery/eurokorten-14.jpg", width: 750, height: 500, tag: 1 },
  { src: "/images/gallery/eurokorten-3.jpg", width: 512, height: 342, tag: 1 },
  { src: "/images/gallery/eurokorten-17.jpg", width: 342, height: 512, tag: 1 },
  { src: "/images/gallery/eurokorten-13.jpg", width: 512, height: 342, tag: 1 },
  { src: "/images/gallery/eurokorten-11.jpg", width: 512, height: 342, tag: 1 },
];

export const PROJECTS: Project[] = [
  {
    title: "Tropic Garden Penthouse",
    description:
      "Dự án Penthouse hợp tác với T3 Architects (Sài Gòn). Nghiên cứu kỹ thuật và thi công nội thất từ thép, kết cấu kim loại, thiết kế đồ trang trí kim loại trên tường ngang cầu thang, dàn đèn chiếu sáng, giàn phơi trên sân thượng.",
    images: [
      { src: "/images/projects/tropic-1.png", width: 458, height: 677 },
      { src: "/images/projects/tropic-2.png", width: 661, height: 419 },
    ],
  },
  {
    title: "Biệt thự tại đường Trần Ngọc Diện, Q.2",
    description:
      "Cộng tác với Unique Design (Sài Gòn). Nghiên cứu và thi công lắp đặt ban công, giàn che và cổng chính hoành tráng, hoa lệ. Cổng vào nặng 4,5 tấn và mất 2900 giờ làm việc. Lấy cảm hứng từ Công viên Monceau của Pháp vào năm 1870.",
    images: [
      { src: "/images/projects/villa-1.png", width: 737, height: 472 },
      { src: "/images/projects/villa-2.png", width: 403, height: 268 },
    ],
  },
  {
    title: "Penthouse Quận 3",
    description:
      "Làm việc trực tiếp với Khách hàng. Chúng tôi đã thiết kế và tạo ra các bức tường trang trí (bằng thép mạ đồng) che cửa thang máy, thực hiện tượng “cây trong gió” và bếp nướng barbecue tùy chỉnh bằng gang. Dự án này cho thấy sự linh hoạt và sức sáng tạo của chúng tôi.",
    images: [
      { src: "/images/projects/penthouse-d3-1.png", width: 699, height: 466 },
      { src: "/images/projects/penthouse-d3-2.png", width: 446, height: 670 },
    ],
  },
];

export const PARTNERS: Partner[] = [
  { name: "mekong200", src: "/images/partners/mekong.jpg" },
  { name: "phutai200", src: "/images/partners/phutai.jpg" },
  { name: "rochdale200", src: "/images/partners/rochdale.jpg" },
  { name: "unique200", src: "/images/partners/unique.jpg" },
  { name: "ashley200", src: "/images/partners/ashley.jpg" },
  { name: "galaxy200", src: "/images/partners/galaxy.jpg" },
];
