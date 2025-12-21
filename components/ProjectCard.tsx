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

      <div className="flex-1 flex flex-col justify-end space-y-6">

        {/* Milestones List */}
        <div className="space-y-4">
          {project.milestones.map((milestone, index) => (
            <div key={index} className="space-y-1.5">
              <div className="flex justify-between items-end text-[10px] uppercase tracking-wider font-semibold">
                <span className="text-zao-text/80">{milestone.title}</span>
                <div className="flex items-center gap-2">
                  <span className="text-zao-muted">{milestone.timeline}</span>
                  <span className="text-zao-secondary font-orbitron">{milestone.progress}%</span>
                </div>
              </div>
              <TechProgressBar progress={milestone.progress} totalSegments={10} />
            </div>
          ))}
        </div>

        <CTAButtons primary={project.ctas.primary} secondary={project.ctas.secondary} />
      </div>
    </GlassCard>
  );
}
