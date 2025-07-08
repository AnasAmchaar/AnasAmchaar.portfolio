
import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import WritingSection from "@/components/WritingSection";
import ContactSection from "@/components/ContactSection";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Add dark class to html element
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NavigationBar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <WritingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
