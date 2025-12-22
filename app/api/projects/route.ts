import { fetchProjects } from "@/lib/projectsLoader";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get("limit");
    const category = searchParams.get("category");
    const id = searchParams.get("id");

    let projects = await fetchProjects();

    // Filter by ID
    if (id) {
        projects = projects.filter((p) => p.id === id);
    }

    // Filter by Category
    if (category && category !== "All") {
        projects = projects.filter((p) => p.category.toLowerCase() === category.toLowerCase());
    }

    // Limit results
    if (limit) {
        const limitNum = parseInt(limit);
        if (!isNaN(limitNum)) {
            projects = projects.slice(0, limitNum);
        }
    }

    return NextResponse.json(projects, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        },
    });
}

export async function OPTIONS() {
    return NextResponse.json({}, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        },
    });
}
