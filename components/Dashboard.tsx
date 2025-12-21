"use client";

import { useState, useMemo } from "react";
import ProjectCard from "@/components/ProjectCard";
import { ActivityFeed } from "@/components/ActivityFeed";
import { ProjectModal } from "@/components/ProjectModal";
import { Project } from "@/lib/types";

interface DashboardProps {
    initialProjects: Project[];
}

export default function Dashboard({ initialProjects }: DashboardProps) {
    const [activeCategory, setActiveCategory] = useState<string>("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const categories = ["All", "Ecosystem", "Platforms", "Community"];

    const filteredProjects = useMemo(() => {
        return initialProjects.filter((project) => {
            const matchesCategory = activeCategory === "All" || project.category === activeCategory;
            const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery, initialProjects]);

    return (
        <section className="py-6 sm:py-8 lg:py-12">
            <div className="container-main">
                {/* Intro section */}
                <div className="max-w-4xl mb-12">
                    <p className="text-lg sm:text-xl text-zao-text leading-relaxed font-light italic">
                        "ZAO is a live ecosystem of creators, communities, and tools. This dashboard tracks the infrastructure building for independent artists."
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

                    {/* Main Content Area */}
                    <div className="flex-1 space-y-8 w-full">

                        {/* Filter & Search Bar */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-zao-border/30">
                            <div className="flex flex-wrap gap-2">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`
                      px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all
                      ${activeCategory === cat
                                                ? "bg-zao-accent text-zao-bg shadow-[0_0_15px_rgba(73,243,195,0.3)]"
                                                : "text-zao-muted hover:text-zao-text border border-zao-border/50 hover:border-zao-accent/30"}
                    `}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            <div className="relative group max-w-xs w-full">
                                <input
                                    type="text"
                                    placeholder="Search projects..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-zao-card/30 border border-zao-border/50 rounded-lg px-4 py-2 text-xs text-zao-text focus:outline-none focus:border-zao-accent/50 transition-all pl-10"
                                />
                                <svg className="absolute left-3 top-2.5 w-4 h-4 text-zao-muted group-focus-within:text-zao-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>

                        {/* Project Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredProjects.length > 0 ? (
                                filteredProjects.map((project) => (
                                    <ProjectCard
                                        key={project.id}
                                        project={project}
                                        onDetailClick={setSelectedProject}
                                    />
                                ))
                            ) : (
                                <div className="col-span-full py-20 text-center">
                                    <p className="text-zao-muted italic">No matching projects found in this sector.</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar Area */}
                    <aside className="w-full lg:w-80 shrink-0 sticky top-24 lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto pr-2 custom-scrollbar">
                        <ActivityFeed />
                    </aside>

                </div>
            </div>

            {/* Modal Overlay */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
}
