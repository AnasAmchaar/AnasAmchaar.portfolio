
import { Calendar, MapPin, Briefcase, Users } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "AI Software Engineer Intern",
      company: "NORMA Dev",
      location: "Rouen, France",
      period: "Jul 2025 - Present",
      description: "Developing an AI-powered evaluation platform designed to assess AI agents on various metrics like semantic similarity, intent classification, and latency. It integrates automated and manual evaluation processes to ensure scalability and accuracy.",
      technologies: ["Python", "LLMs", "Backend Development", "Machine Learning", "Evaluation Metrics", "Next.js", "Firbase", "LangChain"],
      achievements: [
        "Implemented funtion that calculate traditional metrics like ROUGE, BLEU, and METEOR to evaluate the quality of the LLM's responses",
        "Worked on the Open-Sourcing plan of the project.",
        "Contributed to AI research on the project to have a wider view on the possible upgrades."
      ]
    },
    {
      title: "Data team member",
      company: "AtlasIA",
      location: "Everywhere",
      period: "Sep 2024 - Present",
      description: "Working on Open Source project to elevate the moroccan contribution in AI research and development.",
      technologies: ["Anything that is AI"],
      achievements: [
        "Contributing to the development of the First Moroccan Meme Engine.",
        "Leading a team of 8 people to develop Moroccan Ghibli Style Image Generator.",
        "Working on AI-driven research initiatives"
      ]
    }
  ];

  return (
    <section id="experience" className="py-3xl section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-2xl">
          <h2 className="section-header">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building the future through hands-on experience in AI and software development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative"
            >
              {/* Timeline line */}
              <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>
              
              {/* Experience card */}
              <div className="floating-card p-8 ml-20 rounded-3xl">
                <div className="flex items-start gap-6">
                  {/* Timeline indicator */}
                  <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    {index === 1 ? (
                      <Users className="w-8 h-8 text-primary" />
                    ) : (
                      <Briefcase className="w-8 h-8 text-primary" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                      <p className="text-xl text-primary font-semibold mb-3">{exp.company}</p>
                      
                      <div className="flex flex-wrap gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2 bg-card/50 px-3 py-1 rounded-full">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-card/50 px-3 py-1 rounded-full">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg leading-relaxed">{exp.description}</p>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">
                        Technologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-xl text-sm font-medium border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">
                        Key Achievements
                      </h4>
                      <div className="bento-grid grid-cols-1 gap-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start gap-3 p-4 bg-card/30 rounded-xl">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
