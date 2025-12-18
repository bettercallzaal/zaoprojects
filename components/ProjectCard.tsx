import { Project } from "@/lib/types";
import ProgressBar from "./ProgressBar";
import CTAButtons from "./CTAButtons";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="bg-zao-card border border-zao-border rounded-xl p-4 sm:p-6 hover:border-zao-accent/50 transition-colors duration-300">
      <header className="mb-3">
        <h3 className="text-base sm:text-lg font-semibold text-zao-text mb-1">
          {project.name}
        </h3>
        <p className="text-zao-muted text-sm leading-relaxed">
          {project.shortDescription}
        </p>
      </header>

      <div className="space-y-2 sm:space-y-3 mb-4">
        <div>
          <span className="text-xs uppercase tracking-wider text-zao-accent font-medium">
            Next Milestone
          </span>
          <p className="text-zao-text text-sm mt-1">{project.nextMilestone}</p>
        </div>
        <div>
          <span className="text-xs uppercase tracking-wider text-zao-accent font-medium">
            Next TODO
          </span>
          <p className="text-zao-text text-sm mt-1">{project.nextTodo}</p>
        </div>
      </div>

      <div className="mb-4">
        <ProgressBar progress={project.progress} projectName={project.name} />
      </div>

      <CTAButtons primary={project.ctas.primary} secondary={project.ctas.secondary} />
    </article>
  );
}
