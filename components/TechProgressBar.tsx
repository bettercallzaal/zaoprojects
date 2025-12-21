"use client";

import { useEffect, useState } from "react";

interface TechProgressBarProps {
    progress: number; // 0 to 100
    totalSegments?: number;
}

export function TechProgressBar({
    progress,
    totalSegments = 20,
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

    return (
        <div className="w-full flex gap-1 h-3">
            {Array.from({ length: totalSegments }).map((_, index) => {
                const isActive = index < activeSegmentCount;
                return (
                    <div
                        key={index}
                        className={`
              flex-1 rounded-sm transition-all duration-300 ease-out
              ${isActive
                                ? "bg-zao-accent shadow-[0_0_8px_#49f3c3] scale-y-100"
                                : "bg-zao-card/50 scale-y-75 opacity-30"
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
