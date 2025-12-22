"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { ResizeHandler } from "@/components/ResizeHandler";
import { Project } from "@/lib/types";

interface EmbedDashboardProps {
    projects: Project[];
    cols: number;
    showBranding: boolean;
    primaryColor: string;
}

export function EmbedDashboard({ projects, cols, showBranding, primaryColor }: EmbedDashboardProps) {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <div className="p-4 relative" role="region" aria-label="ZAO Projects Dashboard">
            <ResizeHandler />

            <div className={`grid gap-6 grid-cols-1 ${cols > 1 ? `md:grid-cols-${cols}` : ''}`}>
                {projects.map((project) => (
                    <article key={project.id} className="w-full">
                        <ProjectCard
                            project={project}
                            onDetailClick={(p) => setSelectedProject(p)}
                        />
                    </article>
                ))}
            </div>

            {projects.length === 0 && (
                <div className="text-zao-muted text-xs italic text-center py-20 border border-dashed border-zao-border/30 rounded-lg">
                    No active infrastructure nodes found in this sector.
                </div>
            )}

            {showBranding && (
                <footer className="mt-8 flex justify-between items-center text-[10px] uppercase tracking-widest text-zao-muted/70 font-bold px-2">
                    <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-zao-accent animate-pulse" style={{ backgroundColor: primaryColor }} />
                        ZAO Fractal Nodes
                    </span>
                    <a
                        href="https://zaoprojects.vercel.app"
                        target="_top"
                        rel="noopener noreferrer"
                        className="hover:text-zao-accent transition-colors flex items-center gap-1"
                        style={{ color: primaryColor }}
                    >
                        FULL HUB <span className="text-[8px]">&rarr;</span>
                    </a>
                </footer>
            )}

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    );
}
