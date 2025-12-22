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
    showDeepDive?: boolean;
}

export function EmbedDashboard({ projects, cols, showBranding, primaryColor, showDeepDive = false }: EmbedDashboardProps) {
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
                            showDeepDive={showDeepDive}
                            isEmbed={true}
                        />
                    </article>
                ))}
            </div>

            {projects.length === 0 && (
                <div className="text-zao-muted text-xs italic text-center py-20 border border-dashed border-zao-border/30 rounded-lg">
                    No active infrastructure nodes found in this sector.
                </div>
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
