import React from "react";

const workHistory = [
  {
    company: "Ruby Seven Studios",
    location: "Kochi, Kerala",
    role: "Software Developer",
    period: "Sept 2020 — Present",
    description: "Architecting high-performance casino games (Slots). Responsible for core gameplay mechanics, state management, and asset optimization for cross-platform play.",
    technologies: ["TypeScript", "JavaScript", "Cocos Creator", "Cocos-2dx", "Performance Tuning"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-16 tracking-tight">Professional Experience</h2>
      <div className="space-y-12">
        {workHistory.map((job, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-primary/20 hover:border-primary/50 transition-colors">
            {/* The Timeline Dot */}
            <div className="absolute w-4 h-4 rounded-full bg-primary -left-[9px] top-1.5 shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
                <p className="text-primary font-medium">{job.company}</p>
              </div>
              <p className="text-sm font-mono text-muted-foreground mt-2 md:mt-0">
                {job.period}
              </p>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-3xl">
              {job.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {job.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground border border-border">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}