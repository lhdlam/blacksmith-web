import type { Metadata } from "next";
import { Heebo, Prata, Roboto } from "next/font/google";
import "./globals.css";

const prata = Prata({
  weight: "400",
  subsets: ["latin", "vietnamese"],
  variable: "--font-prata",
});

const roboto = Roboto({
  weight: ["300", "400", "500"],
  subsets: ["latin", "vietnamese"],
  variable: "--font-roboto",
});

const heebo = Heebo({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-heebo",
});

export const metadata: Metadata = {
  title:
    "Blacksmith & Design - Sản phẩm trưng bày: bàn, ghế, cầu thang, lan can, hàng mỹ thuật, hardware, trang trí decor",
  description:
    "LGP Blacksmith and Design – Nét đẹp sáng tạo. Sáng tạo từ thép, Kiến tạo nên giá trị độc bản.",
  icons: {
    icon: [
      { url: "/seo/favicon-32.png", sizes: "32x32" },
      { url: "/seo/favicon-192.png", sizes: "192x192" },
    ],
    apple: "/seo/apple-touch-icon.png",
  },
  openGraph: {
    locale: "vi_VN",
    type: "website",
    siteName: "Blacksmith & Design",
    title: "Blacksmith & Design",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${prata.variable} ${roboto.variable} ${heebo.variable}`}>
      <body className="overflow-x-clip antialiased">{children}</body>
    </html>
  );
}
