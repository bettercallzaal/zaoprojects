import { ReactNode } from "react";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
    return (
        <div
            className={`
        relative overflow-hidden rounded-xl border border-zao-border/50
        bg-zao-glass backdrop-blur-md
        transition-all duration-300
        hover:border-zao-accent/30 hover:shadow-[0_0_20px_rgba(73,243,195,0.05)]
        ${className}
      `}
        >
            {/* Subtle top gradient line for depth */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zao-accent/20 to-transparent opacity-50" />

            {children}
        </div>
    );
}
