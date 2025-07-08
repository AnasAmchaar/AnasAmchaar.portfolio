
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "IkhbarIA",
      description: "AI-powered newsletter with advanced LLM integration and automated scraping pipeline. Processes news articles in real-time and generates concise, accurate summaries.",
      technologies: ["Python", "LLMs", "Web Scraping", "NLP", "API Development"],
      features: [
        "Real-time news article processing",
        "Multi-source content aggregation", 
        "Intelligent summarization algorithms",
        "RESTful API for integration"
      ],
      github: "https://github.com/AnasAmchaar/IkhbarIA",
      demo: "Not deployed",
      status: "Completed (Not deployed)"
    },
    {
      title: "NORMA Eval App",
      description: "Evaluation platform for LLMs, designed to assess AI agents on various metrics like semantic similarity, intent classification, and latency. It integrates automated and manual evaluation processes to ensure scalability and accuracy.",
      technologies: ["Python", "LLMs", "Backend Development", "Machine Learning", "Evaluation Metrics", "Next.js", "Firbase", "LangChain"],
      features: [
        "Semantic similarity evaluation",
        "Intent classification",
        "LLM-as-a-judge",
        "Automated evaluation pipeline",
      ],
      status: "Confidential"
    },
    {
      title: "Moroccan Ghibli Style Image Generator",
      description: "Built a Ghibli Style Image Generator based on Flux.1-dev and fine-tuned on Moroccan Culture Images.",
      technologies: ["Fine-Tuning", "Gradio Space", "Diffusing Architecture"],
      features: [
        "Generate Moroccan Ghibli Style Images"
      ],
      hugginface: "https://huggingface.co/spaces/atlasia/flux_moroccan_ghibli_style",
      demo: "https://huggingface.co/spaces/atlasia/flux_moroccan_ghibli_style",
      status: "Deployed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production": return "bg-accent text-accent-foreground";
      case "Completed": return "bg-primary text-primary-foreground";
      case "Published": return "bg-morocco-green text-white";
      case "Development": return "bg-morocco-red text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-3xl section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-2xl">
          <h2 className="section-header">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions that blend cutting-edge AI with practical applications
          </p>
        </div>

        <div className="bento-grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="floating-card p-8 rounded-3xl space-y-6 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className={`px-4 py-2 rounded-xl text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="space-y-4">
                <h4 className="font-semibold text-sm uppercase tracking-wide text-foreground">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-2 bg-card/50 text-muted-foreground rounded-xl text-sm border border-border/50 hover:border-primary/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h4 className="font-semibold text-sm uppercase tracking-wide text-foreground">
                  Key Features
                </h4>
                <div className="bento-grid grid-cols-1 gap-3">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3 p-3 bg-card/30 rounded-xl">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t border-border/50">
                {project.github && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 rounded-xl"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                )}
                {project.demo && project.demo !== "Not deployed" && (
                  <Button
                    size="sm"
                    className="flex items-center gap-2 rounded-xl"
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                )}
                {project.hugginface && (
                  <Button
                    size="sm"
                    className="flex items-center gap-2 rounded-xl"
                    onClick={() => window.open(project.hugginface, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Hugging Face
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
