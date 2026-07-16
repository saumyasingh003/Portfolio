import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const API_NAMESPACE = "saumyasingh_visits_v5";
const API_KEY = "unique_visitors";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const hasVisited = cookieStore.get("saumya_portfolio_visited_unique");

    const url = hasVisited
      ? `https://api.counterapi.dev/v1/${API_NAMESPACE}/${API_KEY}`
      : `https://api.counterapi.dev/v1/${API_NAMESPACE}/${API_KEY}/up`;

    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      throw new Error(`API returned status ${res.status}`);
    }
    const data = await res.json();

    const response = NextResponse.json({
      count: data.count,
    });

    if (!hasVisited) {
      // Set visited cookie for 1 year
      response.cookies.set("saumya_portfolio_visited_unique", "true", {
        maxAge: 60 * 60 * 24 * 365,
        path: "/",
        httpOnly: true,
        sameSite: "lax",
      });
    }

    return response;
  } catch (err) {
    console.error("Counter API failed in route handler:", err);
    return NextResponse.json(
      { error: "Failed to fetch counter value" },
      { status: 500 }
    );
  }
}
