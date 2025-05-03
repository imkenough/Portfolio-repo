import { NextResponse } from "next/server";
import { getEnhancedRepositories } from "@/lib/github";

export async function GET() {
  try {
    const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "imkenough";
    const repos = await getEnhancedRepositories(username, { per_page: 10 });
    return NextResponse.json(repos);
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error);
    return NextResponse.json(
      { error: "Failed to fetch repositories" },
      { status: 500 }
    );
  }
}
