import { projects } from "@/data/projects";
import { HERO_CONTENT } from "@/lib/constants";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <section className="py-6 sm:py-8">
      <div className="container-main space-y-8">
        {/* Simplified Intro */}
        <div className="max-w-3xl space-y-4">
          <p className="text-base sm:text-lg text-zao-text leading-relaxed">
            ZAO is a live ecosystem of creators, communities, and tools. This dashboard shows what's happening now and what's coming next. Join us as we build infrastructure for independent artists.
          </p>
          <div className="flex gap-4 text-sm">
            <a
              href="https://nexus.thezao.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zao-accent hover:text-zao-accent-hover font-medium hover:underline underline-offset-4"
            >
              Join the ecosystem &rarr;
            </a>
            <a
              href="https://paragraph.xyz/@thezao"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zao-muted hover:text-zao-text transition-colors"
            >
              Read updates &rarr;
            </a>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
