
import { FileText, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const WritingSection = () => {
  const writings = [
    {
      title: "Understanding LLM Evaluation Metrics",
      description: "A comprehensive breakdown of modern evaluation techniques for Large Language Models, covering BLEU, ROUGE, BERTScore, and novel approaches in simple, practical terms.",
      type: "Technical Deep Dive",
      date: "Jul 2025",
      readTime: "8 min read",
      tags: ["LLMs", "Evaluation", "Metrics", "Research"],
      link: "Not deployed yet"
    },
    {
      title: "Creating your custom Ghibli Text-to-Image model",
      description: "While Ghibli-style AI-generated images have become a global trend, we're taking a unique approach by creating something more culturally meaningful. We've developed a specialized Text-to-Image model fine-tuned from the Flux.1-dev diffusion model using LoRA, trained on a carefully curated dataset that celebrates Moroccan heritage.",
      type: "Guide & Tutorial",
      date: "May 2024", 
      readTime: "20 min read",
      tags: ["AI", "Diffusion", "LoRA", "Fine-Tuning", "Computer Vision"],
      link: "https://huggingface.co/blog/atlasia/creating-your-custom-ghibli-text-to-image-model"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Technical Deep Dive": return "bg-primary/10 text-primary";
      case "Case Study": return "bg-accent/10 text-accent";
      case "Research Paper": return "bg-morocco-green/10 text-morocco-green";
      case "Educational": return "bg-morocco-red/10 text-morocco-red";
      default: return "bg-muted/10 text-muted-foreground";
    }
  };

  return (
    <section id="writing" className="py-20 section-padding bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Writing & <span className="gradient-text">Research</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharing insights, research findings, and practical knowledge about AI, 
            machine learning, and the future of intelligent systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {writings.map((writing, index) => (
            <article
              key={writing.title}
              className="glass-card p-8 rounded-2xl hover:scale-[1.02] transition-all duration-300 space-y-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(writing.type)}`}>
                    {writing.type}
                  </span>
                  <FileText className="w-5 h-5 text-muted-foreground" />
                </div>
                
                <h3 className="text-2xl font-bold leading-tight hover:text-primary transition-colors cursor-pointer">
                  {writing.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {writing.description}
              </p>

              {/* Meta Info */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{writing.date}</span>
                </div>
                <span>•</span>
                <span>{writing.readTime}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {writing.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action */}
              <div className="pt-4">
                <Button
                  variant="outline"
                  className="w-full flex items-center gap-2 justify-center"
                  onClick={() => window.open(writing.link, "_blank")}
                >
                  <span>{writing.isPdf ? "Download PDF" : "Read Article"}</span>
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 px-4">
          <div className="max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-6 text-lg">
              Want to stay updated with my latest research and insights?
            </p>
            <Button 
              size="lg"
              onClick={() => window.open("https://huggingface.co/anasAmchaar", "_blank")}
              className="flex items-center gap-3 px-8 py-3 text-base font-medium hover:scale-105 transition-transform duration-200"
            >
              <span>Follow on Hugging Face</span>
              <ExternalLink className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WritingSection;
