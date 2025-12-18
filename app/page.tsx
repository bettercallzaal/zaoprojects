import { projects } from "@/data/projects";
import { HERO_CONTENT } from "@/lib/constants";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <>
      {/* Hero Section - Compact for mobile-first */}
      <section className="py-8 sm:py-12">
        <div className="container-main">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-zao-text mb-3 sm:mb-4 text-balance">
              {HERO_CONTENT.headline}
            </h2>
            <p className="text-sm sm:text-base text-zao-muted leading-relaxed mb-4 sm:mb-6">
              {HERO_CONTENT.subhead}
            </p>
            <div className="flex flex-row gap-2 sm:gap-4">
              <a
                href={HERO_CONTENT.primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-3 py-2 sm:px-5 sm:py-2.5 bg-zao-accent text-zao-bg text-sm sm:text-base font-medium rounded-lg hover:bg-zao-accent-hover transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-zao-accent focus:ring-offset-2 focus:ring-offset-zao-bg"
              >
                {HERO_CONTENT.primaryCta.label}
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <a
                href={HERO_CONTENT.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-3 py-2 sm:px-5 sm:py-2.5 border border-zao-border text-zao-text text-sm sm:text-base font-medium rounded-lg hover:border-zao-accent hover:text-zao-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-zao-accent focus:ring-offset-2 focus:ring-offset-zao-bg"
              >
                {HERO_CONTENT.secondaryCta.label}
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-6 sm:py-12 scroll-mt-16">
        <div className="container-main">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-zao-text mb-2">
              Ecosystem Projects
            </h2>
            <p className="text-sm text-zao-muted max-w-2xl">
              Track progress across the ZAO ecosystem.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
