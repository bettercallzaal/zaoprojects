"use client";

import { Project } from "@/lib/types";
import { GlassCard } from "./GlassCard";
import { TechProgressBar } from "./TechProgressBar";

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zao-bg/90 backdrop-blur-sm animate-in fade-in duration-300">
            <GlassCard className="max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-zao-muted hover:text-zao-accent transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="space-y-8">
                    <header>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-[10px] uppercase font-bold text-zao-accent border border-zao-accent/30 px-2 py-0.5 rounded">
                                {project.category}
                            </span>
                            <span className="text-[10px] uppercase font-bold text-zao-muted">
                                Project Deep Dive
                            </span>
                        </div>
                        <h2 className="text-3xl font-bold font-orbitron text-zao-text tracking-wide uppercase">
                            {project.name}
                        </h2>
                    </header>

                    <div className="space-y-8">
                        <section>
                            <h4 className="text-xs uppercase tracking-widest text-zao-muted mb-3 font-bold">About</h4>
                            <p className="text-zao-text/90 leading-relaxed text-sm">
                                {project.shortDescription}
                            </p>
                        </section>

                        <section>
                            <h4 className="text-xs uppercase tracking-widest text-zao-muted mb-4 font-bold">Main Goal</h4>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <div className="flex justify-between items-end text-[10px] uppercase tracking-wider font-semibold">
                                        <span className="text-zao-text">{project.milestone.title}</span>
                                        <span className="text-zao-secondary font-orbitron">{project.milestone.progress}%</span>
                                    </div>
                                    <TechProgressBar progress={project.milestone.progress} totalSegments={15} variant="primary" />
                                    <p className="text-[10px] text-zao-muted italic">Timeline: {project.milestone.timeline}</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <footer className="pt-6 border-t border-zao-border/30 flex justify-between items-center">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-zao-muted uppercase mb-1">Status</span>
                            <span className="text-xs font-bold text-zao-accent flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-zao-accent animate-pulse" />
                                Live Development
                            </span>
                        </div>
                        <div className="flex gap-4">
                            <a
                                href={project.ctas.primary.href}
                                target="_blank"
                                className="px-6 py-2 bg-zao-accent text-zao-bg font-bold uppercase text-xs rounded hover:bg-zao-accent-hover transition-all"
                            >
                                {project.ctas.primary.label}
                            </a>
                        </div>
                    </footer>
                </div>
            </GlassCard>
        </div>
    );
}
