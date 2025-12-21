"use client";

import { GlassCard } from "./GlassCard";

const ACTIVITIES = [
    { id: 1, type: "proposal", text: "New governance proposal: [ZAO-04] WaveWarZ Season 2 Budget", time: "2h ago" },
    { id: 2, type: "milestone", text: "ZAO Cards reached 70% progress on Public Minting UI", time: "5h ago" },
    { id: 3, type: "news", text: "Paragraph: 'The Future of Independent Music Data'", time: "1d ago" },
    { id: 4, type: "event", text: "Upcoming: ZAO Festival Q1 Lineup Announcement", time: "3d away" },
    { id: 5, type: "activity", text: "Nexus: 3 new contributors joined the core dev team", time: "1d ago" },
];

export function ActivityFeed() {
    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-zao-accent animate-pulse" />
                <h3 className="text-sm font-bold font-orbitron text-zao-text uppercase tracking-widest">
                    Ecosystem Activity
                </h3>
            </div>

            <div className="space-y-3">
                {ACTIVITIES.map((item) => (
                    <GlassCard key={item.id} className="p-3 bg-zao-card/20 border-none group hover:bg-zao-card/40 transition-all">
                        <div className="flex flex-col gap-1">
                            <p className="text-xs text-zao-text/90 leading-snug group-hover:text-zao-accent transition-colors">
                                {item.text}
                            </p>
                            <div className="flex justify-between items-center mt-1">
                                <span className={`
                  text-[9px] uppercase font-bold px-1.5 py-0.5 rounded
                  ${item.type === "proposal" ? "bg-zao-secondary/20 text-zao-secondary" :
                                        item.type === "milestone" ? "bg-zao-accent/20 text-zao-accent" :
                                            "bg-zao-muted/20 text-zao-muted"}
                `}>
                                    {item.type}
                                </span>
                                <span className="text-[10px] text-zao-muted italic">
                                    {item.time}
                                </span>
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </div>

            <button className="w-full py-2 text-[10px] uppercase font-bold text-zao-muted hover:text-zao-accent transition-colors border border-zao-border/30 rounded hover:border-zao-accent/30">
                View Full History
            </button>
        </div>
    );
}
