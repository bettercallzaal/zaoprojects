"use client";

import { useState } from "react";
import { Project } from "@/lib/types";
import { TechProgressBar } from "./TechProgressBar";
import CTAButtons from "./CTAButtons";
import { GlassCard } from "./GlassCard";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const variants: ("primary" | "secondary" | "tertiary")[] = ["primary", "secondary", "tertiary"];
  return (
    <GlassCard className="p-5 sm:p-6 flex flex-col h-full">
      <header className="mb-4">
        <h3 className="text-lg sm:text-xl font-bold font-orbitron text-zao-text mb-2 tracking-wide uppercase">
          {project.name}
        </h3>
        <p className="text-zao-muted text-sm leading-relaxed min-h-[40px]">
          {project.shortDescription}
        </p>
      </header>

      <div className="flex-1 flex flex-col justify-end space-y-4">

        <div className="space-y-4">
          {/* Always show the first milestone */}
          {project.milestones.length > 0 && (
            <div className="space-y-1.5">
              <div className="flex justify-between items-end text-[10px] uppercase tracking-wider font-semibold">
                <span className="text-zao-accent">{project.milestones[0].title}</span>
                <div className="flex items-center gap-2">
                  <span className="text-zao-muted">{project.milestones[0].timeline}</span>
                  <span className="text-zao-accent font-orbitron">{project.milestones[0].progress}%</span>
                </div>
              </div>
              <TechProgressBar progress={project.milestones[0].progress} totalSegments={10} variant="primary" />
            </div>
          )}

          {/* Expandable Section */}
          {project.milestones.length > 1 && (
            <div className="space-y-3">
              <div className={`space-y-4 overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "max-h-[500px] opacity-100 py-2" : "max-h-0 opacity-0"}`}>
                {project.milestones.slice(1).map((milestone, index) => (
                  <div key={index + 1} className="space-y-1.5">
                    <div className="flex justify-between items-end text-[10px] uppercase tracking-wider font-semibold">
                      <span className="text-zao-text/60">{milestone.title}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-zao-muted/60">{milestone.timeline}</span>
                        <span className={`${index === 0 ? "text-zao-secondary" : "text-zao-muted"} font-orbitron opacity-80`}>
                          {milestone.progress}%
                        </span>
                      </div>
                    </div>
                    <TechProgressBar
                      progress={milestone.progress}
                      totalSegments={10}
                      variant={variants[index + 1] || "tertiary"}
                    />
                  </div>
                ))}
              </div>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[10px] uppercase tracking-widest text-zao-muted hover:text-zao-accent transition-colors flex items-center gap-1 group"
              >
                <span>{isExpanded ? "Show less" : "See more tasks"}</span>
                <svg
                  className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
        </div>

        <div className="pt-2">
          <CTAButtons primary={project.ctas.primary} secondary={project.ctas.secondary} />
        </div>
      </div>
    </GlassCard>
  );
}
