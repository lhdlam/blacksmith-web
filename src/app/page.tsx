import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { HeroSection } from "@/components/HeroSection";
import { PartnersSection } from "@/components/PartnersSection";
import { ProductsSection } from "@/components/ProductsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { QuoteSection } from "@/components/QuoteSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ThanksSection } from "@/components/ThanksSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        <ProjectsSection />
        <QuoteSection />
        <ThanksSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
