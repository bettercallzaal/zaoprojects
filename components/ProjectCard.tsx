"use client";

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
          <div className="space-y-1.5">
            <div className="flex justify-between items-end text-[9px] uppercase tracking-wider font-semibold">
              <span className="text-zao-accent">{project.milestone.title}</span>
              <div className="flex items-center gap-2">
                <span className="text-zao-muted opacity-70">{project.milestone.timeline}</span>
                <span className="text-zao-accent font-orbitron">{project.milestone.progress}%</span>
              </div>
            </div>
            <TechProgressBar
              progress={project.milestone.progress}
              totalSegments={isEmbed ? 12 : 20}
              variant="primary"
            />
          </div>
        </div>

        <div className={isEmbed ? 'pt-1' : 'pt-2'}>
          <CTAButtons primary={project.ctas.primary} secondary={project.ctas.secondary} isEmbed={isEmbed} />
        </div>
      </div>
    </GlassCard>
  );
}
