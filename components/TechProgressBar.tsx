"use client";

import { useEffect, useState } from "react";

interface TechProgressBarProps {
    progress: number; // 0 to 100
    totalSegments?: number;
    variant?: "primary" | "secondary" | "tertiary";
}

export function TechProgressBar({
    progress,
    totalSegments = 20,
    variant = "primary",
}: TechProgressBarProps) {
    // Use state to trigger animation on mount
    const [activeSegmentCount, setActiveSegmentCount] = useState(0);

    useEffect(() => {
        // Calculate how many segments should be filled
        const targetSegments = Math.round((progress / 100) * totalSegments);
        // Simple timeout to trigger animation after render
        const timer = setTimeout(() => {
            setActiveSegmentCount(targetSegments);
        }, 100);
        return () => clearTimeout(timer);
    }, [progress, totalSegments]);

    const variantStyles = {
        primary: {
            active: "bg-zao-accent shadow-[0_0_8px_#49f3c3]",
            inactive: "bg-zao-card/50",
            glow: "#49f3c3",
        },
        secondary: {
            active: "bg-zao-secondary shadow-[0_0_8px_#00f0ff]",
            inactive: "bg-zao-card/40",
            glow: "#00f0ff",
        },
        tertiary: {
            active: "bg-zao-muted shadow-[0_0_8px_#8a9a8a]",
            inactive: "bg-zao-card/30",
            glow: "#8a9a8a",
        },
    };

    const currentVariant = variantStyles[variant];

    return (
        <div className="w-full flex gap-1 h-2.5">
            {Array.from({ length: totalSegments }).map((_, index) => {
                const isActive = index < activeSegmentCount;
                return (
                    <div
                        key={index}
                        className={`
              flex-1 rounded-sm transition-all duration-300 ease-out
              ${isActive
                                ? `${currentVariant.active} scale-y-100`
                                : `${currentVariant.inactive} scale-y-75 opacity-20`
                            }
            `}
                        style={{
                            // Staggered delay for "filling up" effect
                            transitionDelay: `${index * 25}ms`,
                        }}
                    />
                );
            })}
        </div>
    );
}
