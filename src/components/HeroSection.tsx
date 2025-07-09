
import { useEffect, useState } from "react";
import { ArrowDown, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const roles = [
    "AI/ML Engineer",
    "AI Researcher", 
    "Backend Developer",
    "Data Scientist",
    "Data Analyst"
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToAbout = () => {
    const aboutElement = document.querySelector("#about");
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-20 moroccan-pattern relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Moroccan Flag Accent */}
        <div className={`inline-flex items-center gap-3 mb-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="flex shadow-lg">
            <div className="w-6 h-4 bg-morocco-red rounded-l-md"></div>
            <div className="w-6 h-4 bg-morocco-green rounded-r-md"></div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-card/30 px-3 py-1 rounded-full backdrop-blur-sm">
            <MapPin className="w-4 h-4" />
            <span>Rabat, Morocco</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="relative mb-8">
          <h1 className={`text-5xl md:text-7xl lg:text-9xl font-bold leading-tight ${
            isVisible ? "animate-slide-in-left" : "opacity-0"
          }`}>
            <span className="gradient-text block">AMCHAAR</span>
            <span className="text-foreground/90 block mt-2">Anas</span>
          </h1>
          
          {/* Geometric accent */}
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-2xl"></div>
        </div>

        {/* Subtitle with enhanced styling */}
        <div className="relative mb-6">
          <p className={`text-xl md:text-3xl lg:text-4xl text-muted-foreground mb-2 ${
            isVisible ? "animate-slide-in-right" : "opacity-0"
          }`} style={{ animationDelay: "0.2s" }}>
            <span className="inline-block min-w-[300px] md:min-w-[400px] lg:min-w-[500px]">
              {roles[currentRoleIndex]}
            </span>
          </p>
          
          {/* Underline decoration */}
          <div className={`w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full ${
            isVisible ? "animate-scale-in" : "opacity-0"
          }`} style={{ animationDelay: "0.4s" }}></div>
        </div>

        {/* Tagline */}
        <p className={`text-lg md:text-xl max-w-4xl mx-auto mb-12 leading-relaxed ${
          isVisible ? "animate-fade-in" : "opacity-0"
        }`} style={{ animationDelay: "0.5s" }}>
          Solving real problems through{" "}
          <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded-md">smart code</span>{" "}
          and{" "}
          <span className="text-accent font-semibold bg-accent/10 px-2 py-1 rounded-md">sharp research</span>.
        </p>

        {/* Currently Working Widget */}
        <div className={`inline-flex items-center gap-3 floating-card px-6 py-3 rounded-2xl mb-12 ${
          isVisible ? "animate-scale-in" : "opacity-0"
        }`} style={{ animationDelay: "0.7s" }}>
          <Sparkles className="w-5 h-5 text-primary animate-pulse-glow" />
          <span className="text-sm font-medium">Currently working on LLM evaluation metrics and Eval App with NORMA Dev</span>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 ${
          isVisible ? "animate-fade-in" : "opacity-0"
        }`} style={{ animationDelay: "0.9s" }}>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-4 rounded-xl shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-strong)] transition-all duration-300"
            onClick={scrollToAbout}
          >
            Explore My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-border hover:border-primary/50 px-10 py-4 rounded-xl font-semibold backdrop-blur-sm"
            onClick={() => window.open("mailto:anass.amchaar14@gmail.com", "_blank")}
          >
            Get In Touch
          </Button>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className={`group animate-bounce ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "1.1s" }}
        >
          <div className="w-8 h-8 rounded-full bg-card/50 backdrop-blur-sm flex items-center justify-center group-hover:bg-card/70 transition-all duration-300">
            <ArrowDown className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
