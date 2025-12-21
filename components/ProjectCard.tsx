import { Project } from "@/lib/types";
import { TechProgressBar } from "./TechProgressBar";
import CTAButtons from "./CTAButtons";
import { GlassCard } from "./GlassCard";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
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

      <div className="flex-1 flex flex-col justify-end space-y-5">

        {/* Progress System */}
        <div className="space-y-2">
          <div className="flex justify-between items-end text-xs uppercase tracking-wider font-semibold">
            <span className="text-zao-accent">Progress</span>
            <span className="text-zao-secondary font-orbitron">{project.progress}%</span>
          </div>
          <TechProgressBar progress={project.progress} />
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 gap-3 p-3 rounded-lg bg-zao-bg/30 border border-zao-border/30">
          <div>
            <span className="block text-[10px] uppercase tracking-widest text-zao-muted mb-1">
              Next Milestone
            </span>
            <p className="text-zao-text text-xs sm:text-sm font-medium">
              {project.nextMilestone}
            </p>
          </div>
          <div className="pt-2 border-t border-zao-border/30">
            <span className="block text-[10px] uppercase tracking-widest text-zao-muted mb-1">
              Focus
            </span>
            <p className="text-zao-text text-xs sm:text-sm text-zao-muted/90">
              {project.nextTodo}
            </p>
          </div>
        </div>

        <CTAButtons primary={project.ctas.primary} secondary={project.ctas.secondary} />
      </div>
    </GlassCard>
  );
}
