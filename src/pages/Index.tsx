import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { AISection } from "@/components/AISection";
import { ContactSection } from "@/components/ContactSection";
import { BannerSection } from "@/components/BannerSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <CaseStudiesSection />
      <AISection />
      <SkillsSection />
      <BannerSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
