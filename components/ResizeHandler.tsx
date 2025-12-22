"use client";

import { useEffect, useRef } from "react";

export function ResizeHandler() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                const height = Math.ceil(entry.contentRect.height + 64); // adding padding 
                window.parent.postMessage({ type: "resize", height }, "*");
            }
        });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return <div ref={containerRef} className="absolute inset-x-0 top-0 -z-10 h-full pointer-events-none" />;
}
