
import { useEffect, useState } from "react";
import { ArrowDown, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const aboutElement = document.querySelector("#about");
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-20 moroccan-pattern relative overflow-hidden perspective-1000">
      {/* 3D Background Elements */}
      <div className="absolute inset-0">
        {/* Floating 3D Cards */}
        <div 
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform-gpu animate-float-3d"
          style={{
            transform: `translate3d(${mousePosition.x * 20}px, ${mousePosition.y * 20}px, 0px) rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * 10}deg)`,
            transformStyle: 'preserve-3d',
          }}
        ></div>
        
        <div 
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl transform-gpu animate-float-3d-delayed"
          style={{
            transform: `translate3d(${mousePosition.x * -15}px, ${mousePosition.y * -15}px, 0px) rotateX(${mousePosition.y * -8}deg) rotateY(${mousePosition.x * -8}deg)`,
            transformStyle: 'preserve-3d',
          }}
        ></div>

        {/* Rotating 3D Geometric Shapes */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 transform-gpu animate-spin-3d">
          <div className="w-full h-full bg-gradient-to-br from-primary/30 to-transparent rounded-full transform-gpu animate-pulse-glow"></div>
        </div>

        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 transform-gpu animate-spin-3d-reverse">
          <div className="w-full h-full bg-gradient-to-br from-accent/30 to-transparent rounded-lg transform-gpu animate-pulse-glow-delayed"></div>
        </div>

        {/* 3D Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[linear-gradient(90deg,transparent_98%,rgba(255,255,255,0.1)_100%),linear-gradient(0deg,transparent_98%,rgba(255,255,255,0.1)_100%)] bg-[length:50px_50px] transform-gpu animate-grid-move"></div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Moroccan Flag Accent with 3D effect */}
        <div className={`inline-flex items-center gap-3 mb-8 transform-gpu hover:scale-110 transition-transform duration-300 ${
          isVisible ? "animate-fade-in" : "opacity-0"
        }`}>
          <div className="flex shadow-lg transform-gpu hover:rotate-3 transition-transform duration-300">
            <div className="w-6 h-4 bg-morocco-red rounded-l-md"></div>
            <div className="w-6 h-4 bg-morocco-green rounded-r-md"></div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-card/30 px-3 py-1 rounded-full backdrop-blur-sm transform-gpu hover:scale-105 transition-transform duration-300">
            <MapPin className="w-4 h-4" />
            <span>Rabat, Morocco</span>
          </div>
        </div>

        {/* Main Heading with 3D Text Effect */}
        <div className="relative mb-8">
          <h1 className={`text-5xl md:text-7xl lg:text-9xl font-bold leading-tight transform-gpu ${
            isVisible ? "animate-slide-in-left" : "opacity-0"
          }`}
          style={{
            transform: `translate3d(${mousePosition.x * 10}px, ${mousePosition.y * 10}px, 0px)`,
            textShadow: `
              0 0 20px rgba(var(--primary), 0.3),
              0 0 40px rgba(var(--primary), 0.2),
              0 0 60px rgba(var(--primary), 0.1)
            `,
          }}>
            <span className="gradient-text block transform-gpu hover:scale-105 transition-transform duration-500">AMCHAAR</span>
            <span className="text-foreground/90 block mt-2 transform-gpu hover:scale-105 transition-transform duration-500">Anas</span>
          </h1>
          
          {/* Enhanced 3D Geometric accents */}
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl transform-gpu animate-float-3d"></div>
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-2xl transform-gpu animate-float-3d-delayed"></div>
          
          {/* 3D Cube decoration */}
          <div className="absolute top-1/2 right-10 w-16 h-16 transform-gpu animate-spin-3d">
            <div className="w-full h-full bg-gradient-to-br from-primary/40 to-accent/40 rounded-lg transform-gpu rotate-45"></div>
          </div>
        </div>

        {/* Subtitle with 3D floating effect */}
        <div className="relative mb-6">
          <p className={`text-xl md:text-3xl lg:text-4xl text-muted-foreground mb-2 transform-gpu ${
            isVisible ? "animate-slide-in-right" : "opacity-0"
          }`} 
          style={{ 
            animationDelay: "0.2s",
            transform: `translate3d(${mousePosition.x * 5}px, ${mousePosition.y * 5}px, 0px)`,
          }}>
            <span className="inline-block min-w-[300px] md:min-w-[400px] lg:min-w-[500px] transform-gpu hover:scale-105 transition-transform duration-300">
              {roles[currentRoleIndex]}
            </span>
          </p>
          
          {/* 3D Underline decoration */}
          <div className={`w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full transform-gpu hover:scale-x-150 transition-transform duration-300 ${
            isVisible ? "animate-scale-in" : "opacity-0"
          }`} style={{ animationDelay: "0.4s" }}></div>
        </div>

        {/* Tagline with 3D hover effects */}
        <p className={`text-lg md:text-xl max-w-4xl mx-auto mb-12 leading-relaxed transform-gpu ${
          isVisible ? "animate-fade-in" : "opacity-0"
        }`} style={{ animationDelay: "0.5s" }}>
          Solving real problems through{" "}
          <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded-md transform-gpu hover:scale-110 hover:rotate-1 transition-all duration-300 inline-block">smart code</span>{" "}
          and{" "}
          <span className="text-accent font-semibold bg-accent/10 px-2 py-1 rounded-md transform-gpu hover:scale-110 hover:-rotate-1 transition-all duration-300 inline-block">sharp research</span>.
        </p>

        {/* Currently Working Widget with 3D card effect */}
        <div className={`inline-flex items-center gap-3 floating-card px-6 py-3 rounded-2xl mb-12 transform-gpu hover:scale-105 hover:rotate-1 transition-all duration-300 ${
          isVisible ? "animate-scale-in" : "opacity-0"
        }`} 
        style={{ 
          animationDelay: "0.7s",
          transform: `translate3d(${mousePosition.x * 3}px, ${mousePosition.y * 3}px, 0px)`,
        }}>
          <Sparkles className="w-5 h-5 text-primary animate-pulse-glow" />
          <span className="text-sm font-medium">Currently working on LLM evaluation metrics and Eval App with NORMA Dev</span>
        </div>

        {/* CTA Buttons with 3D effects */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transform-gpu ${
          isVisible ? "animate-fade-in" : "opacity-0"
        }`} style={{ animationDelay: "0.9s" }}>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-4 rounded-xl shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-strong)] transition-all duration-300 transform-gpu hover:scale-105 hover:-rotate-1 hover:translate-y-[-2px]"
            onClick={scrollToAbout}
          >
            Explore My Work
          </Button>
        </div>

        {/* Scroll Indicator with 3D hover effect */}
        <button 
          onClick={scrollToAbout}
          className={`group animate-bounce transform-gpu hover:scale-125 hover:rotate-12 transition-all duration-300 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "1.1s" }}
        >
          <div className="w-8 h-8 rounded-full bg-card/50 backdrop-blur-sm flex items-center justify-center group-hover:bg-card/70 transition-all duration-300 transform-gpu hover:shadow-lg">
            <ArrowDown className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
