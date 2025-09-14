import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ContactSection } from "@/components/ContactSection";

/**
 * Home page component containing all portfolio sections
 * Main landing page with complete portfolio content
 */
export const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
};
