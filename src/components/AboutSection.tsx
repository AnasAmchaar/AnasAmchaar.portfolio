
import { Brain, Code, Telescope, Trophy } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI/ML Expertise",
      description: "Deep learning, LLMs, and intelligent system design"
    },
    {
      icon: Code,
      title: "Full-Stack Development", 
      description: "Python, backend systems, and scalable architectures"
    },
    {
      icon: Telescope,
      title: "Research Passion",
      description: "Academic research in AI evaluation and digital health"
    },
    {
      icon: Trophy,
      title: "Goal-Oriented",
      description: "Building towards mastering the AI domain"
    }
  ];

  return (
    <section id="about" className="py-3xl section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bento-grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Profile Photo Card */}
          <div className="lg:col-span-4">
            <div className="floating-card p-8 rounded-3xl">
              <div className="relative group">
                <img 
                  src="/lovable-uploads/906a5a1e-5eff-4747-a914-93fb3c0baa8a.png" 
                  alt="AMCHAAR Anas - Professional Photo"
                  className="w-full aspect-square object-cover rounded-2xl shadow-[var(--shadow-medium)] group-hover:shadow-[var(--shadow-strong)] transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent rounded-2xl group-hover:from-background/20 transition-all duration-500"></div>
                
                {/* Decorative elements */}
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-morocco-red rounded-full"></div>
                <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-morocco-green rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="section-header">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-8"></div>
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="floating-card p-6 rounded-2xl">
                Yo, Hello everyone! I'm a passionate AI/ML engineering student at{" "}
                <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded-md">ENSAM Rabat</span>,
                and Also a Data team member at <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded-md">AtlasIA</span>.
              </p>
              
              <p className="floating-card p-6 rounded-2xl">
                My academic journey has been driven by an obsession with building{" "}
                <span className="text-accent font-semibold bg-accent/10 px-2 py-1 rounded-md">intelligent systems</span>{" "}
                that solve real-world problems. From developing LLM-powered applications
                to conducting research on developing the future of AI, I'm constantly exploring
                the boundaries of what's possible with AI.
              </p>
              
              <p className="floating-card p-6 rounded-2xl">
                Beyond code, I have a deep love for{" "}
                <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded-md">space and astronomy</span>.
                The vastness of the universe reminds me that there's always more to discover,
                whether it's in the cosmos or in the depths of neural networks layers.
              </p>
              
              <p className="floating-card p-6 rounded-2xl">
                My long-term goal is simple yet ambitious: to{" "}
                <span className="gradient-text font-semibold">master the AI domain</span>{" "}
                and contribute to building the next generation of intelligent systems
                that will shape our future.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="lg:col-span-3">
            <div className="bento-grid grid-cols-1 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={highlight.title}
                  className="floating-card p-6 rounded-2xl group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
