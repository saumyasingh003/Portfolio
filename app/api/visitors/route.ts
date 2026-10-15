import { NextResponse } from "next/server";
import { cookies } from "next/headers";

// counterapi.dev v1 was shut down (returns 410), so we use Abacus — free, no API key.
const API_BASE = "https://abacus.jasoncameron.dev";
const API_NAMESPACE = "saumyasingh-portfolio";
const API_KEY = "unique-visitors";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const hasVisited = cookieStore.get("saumya_portfolio_visited_unique");

    const url = hasVisited
      ? `${API_BASE}/get/${API_NAMESPACE}/${API_KEY}`
      : `${API_BASE}/hit/${API_NAMESPACE}/${API_KEY}`;

    const res = await fetch(url, { cache: "no-store" });

    let count: number;
    if (res.status === 404 && hasVisited) {
      // Counter has not been created yet (no first-time hit so far).
      count = 0;
    } else if (!res.ok) {
      throw new Error(`API returned status ${res.status}`);
    } else {
      const data = await res.json();
      count = data.value;
    }

    const response = NextResponse.json({ count });

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
