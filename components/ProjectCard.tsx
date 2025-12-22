"use client";

import { useState } from "react";
import { Project } from "@/lib/types";
import { TechProgressBar } from "./TechProgressBar";
import CTAButtons from "./CTAButtons";
import { GlassCard } from "./GlassCard";

interface ProjectCardProps {
  project: Project;
  onDetailClick?: (project: Project) => void;
  showDeepDive?: boolean;
  isEmbed?: boolean;
}

export default function ProjectCard({
  project,
  onDetailClick,
  showDeepDive = true,
  isEmbed = false
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const variants: ("primary" | "secondary" | "tertiary")[] = ["primary", "secondary", "tertiary"];
  return (
    <GlassCard className={`${isEmbed ? 'p-4 sm:p-5' : 'p-5 sm:p-6'} flex flex-col h-full transition-all duration-300 hover:border-zao-accent/30`}>
      <header className={isEmbed ? 'mb-3' : 'mb-4'}>
        <div className="flex justify-between items-start gap-4">
          <h3 className={`${isEmbed ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'} font-bold font-orbitron text-zao-text mb-1 tracking-wide uppercase`}>
            {project.name}
          </h3>
          {showDeepDive && (
            <button
              onClick={() => onDetailClick?.(project)}
              className="text-[9px] uppercase font-bold text-zao-accent/70 hover:text-zao-accent transition-colors border border-zao-accent/20 px-2 py-0.5 rounded flex-shrink-0"
            >
              Details
            </button>
          )}
        </div>
        <div className="flex gap-2 mb-2">
          <span className="text-[8px] uppercase font-bold text-zao-muted bg-zao-card/30 px-1.5 py-0.5 rounded border border-zao-border/20">
            {project.category}
          </span>
        </div>
        {!isEmbed && (
          <p className="text-zao-muted text-sm leading-relaxed min-h-[40px]">
            {project.shortDescription}
          </p>
        )}
        {isEmbed && (
          <p className="text-zao-muted text-[11px] leading-tight line-clamp-2">
            {project.shortDescription}
          </p>
        )}
      </header>

      <div className={`flex-1 flex flex-col justify-end ${isEmbed ? 'space-y-3' : 'space-y-4'}`}>

        <div className={isEmbed ? 'space-y-3' : 'space-y-4'}>
          {/* Always show the first milestone */}
          {project.milestones.length > 0 && (
            <div className="space-y-1.5">
              <div className="flex justify-between items-end text-[9px] uppercase tracking-wider font-semibold">
                <span className="text-zao-accent">{project.milestones[0].title}</span>
                <div className="flex items-center gap-2">
                  <span className="text-zao-muted opacity-70">{project.milestones[0].timeline}</span>
                  <span className="text-zao-accent font-orbitron">{project.milestones[0].progress}%</span>
                </div>
              </div>
              <TechProgressBar
                progress={project.milestones[0].progress}
                totalSegments={isEmbed ? 12 : 20}
                variant="primary"
              />
            </div>
          )}

          {/* Expandable Section */}
          {project.milestones.length > 1 && (
            <div className={isEmbed ? 'space-y-2' : 'space-y-3'}>
              <div className={`space-y-3 overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "max-h-[500px] opacity-100 py-1" : "max-h-0 opacity-0"}`}>
                {project.milestones.slice(1).map((milestone, index) => (
                  <div key={index + 1} className="space-y-1.5">
                    <div className="flex justify-between items-end text-[9px] uppercase tracking-wider font-semibold">
                      <span className="text-zao-text/50">{milestone.title}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-zao-muted/50">{milestone.timeline}</span>
                        <span className={`${index === 0 ? "text-zao-secondary" : "text-zao-muted"} font-orbitron opacity-70`}>
                          {milestone.progress}%
                        </span>
                      </div>
                    </div>
                    <TechProgressBar
                      progress={milestone.progress}
                      totalSegments={isEmbed ? 12 : 20}
                      variant={variants[index + 1] || "tertiary"}
                    />
                  </div>
                ))}
              </div>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[9px] uppercase tracking-widest text-zao-muted/80 hover:text-zao-accent transition-colors flex items-center gap-1 group"
              >
                <span>{isExpanded ? "Less Info" : "Expand Roadmap"}</span>
                <svg
                  className={`w-2.5 h-2.5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
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

        <div className={isEmbed ? 'pt-1' : 'pt-2'}>
          <CTAButtons primary={project.ctas.primary} secondary={project.ctas.secondary} isEmbed={isEmbed} />
        </div>
      </div>
    </GlassCard>
  );
}
