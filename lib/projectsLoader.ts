import Papa from "papaparse";
import { Project, Milestone } from "./types";
import { projects as fallbackProjects } from "@/data/projects";

// The URL of your published Google Sheet CSV
// To get this: File > Share > Publish to web > Select Sheet1 & CSV > Publish
const GOOGLE_SHEET_CSV_URL = process.env.NEXT_PUBLIC_PROJECTS_CSV_URL || "";

export async function fetchProjects(): Promise<Project[]> {
    if (!GOOGLE_SHEET_CSV_URL) {
        console.warn("No GOOGLE_SHEET_CSV_URL provided, using fallback data.");
        return fallbackProjects;
    }

    try {
        const response = await fetch(GOOGLE_SHEET_CSV_URL, {
            next: { revalidate: 3600 } // Cache for 1 hour
        });
        const csvData = await response.text();

        return new Promise((resolve, reject) => {
            Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true,
                complete: (results) => {
                    const parsedProjects: Project[] = results.data.map((row: any) => {
                        // Reconstruct milestones array
                        const milestones: Milestone[] = [];
                        for (let i = 1; i <= 3; i++) {
                            const title = row[`milestone${i}_title`];
                            const timeline = row[`milestone${i}_timeline`];
                            const progress = parseInt(row[`milestone${i}_progress`]);

                            if (title) {
                                milestones.push({
                                    title,
                                    timeline: timeline || "TBD",
                                    progress: isNaN(progress) ? 0 : progress
                                });
                            }
                        }

                        return {
                            id: row.id || row.name?.toLowerCase().replace(/\s+/g, '-'),
                            name: row.name,
                            category: (row.category as any) || "Ecosystem",
                            shortDescription: row.description || "",
                            milestones: milestones,
                            ctas: {
                                primary: {
                                    label: row.cta_primary_label || "Learn More",
                                    href: row.cta_primary_href || "#",
                                    helperText: row.cta_primary_helper || ""
                                },
                                secondary: {
                                    label: row.cta_secondary_label || "Join",
                                    href: row.cta_secondary_href || "#",
                                    helperText: row.cta_secondary_helper || ""
                                }
                            }
                        };
                    });
                    resolve(parsedProjects);
                },
                error: (error: any) => {
                    console.error("CSV Parsing Error:", error);
                    resolve(fallbackProjects);
                }
            });
        });
    } catch (error) {
        console.error("Failed to fetch projects from Google Sheets:", error);
        return fallbackProjects;
    }
}
