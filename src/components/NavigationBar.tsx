
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On mount, check localStorage for mode
  useEffect(() => {
    const mode = localStorage.getItem("theme-mode");
    if (mode === "light") {
      document.body.classList.add("light");
      setIsLightMode(true);
    } else {
      document.body.classList.remove("light");
      setIsLightMode(false);
    }
  }, []);

  // Toggle mode
  const toggleMode = () => {
    if (isLightMode) {
      document.body.classList.remove("light");
      localStorage.setItem("theme-mode", "dark");
      setIsLightMode(false);
    } else {
      document.body.classList.add("light");
      localStorage.setItem("theme-mode", "light");
      setIsLightMode(true);
    }
  };

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Writing", href: "#writing" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border/50" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-bold text-xl">
            <span className="gradient-text">AMCHAAR</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            {/* Light/Dark Mode Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle light/dark mode"
              onClick={toggleMode}
              className="ml-2"
            >
              {isLightMode ? <Moon /> : <Sun />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 animate-slide-in-left">
            <div className="py-4 space-y-4 flex flex-col items-start">
              {/* Light/Dark Mode Toggle Button (Mobile) */}
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle light/dark mode"
                onClick={toggleMode}
                className="mb-2 self-end"
              >
                {isLightMode ? <Moon /> : <Sun />}
              </Button>
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
