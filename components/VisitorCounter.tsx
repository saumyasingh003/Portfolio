"use client";

import React, { useEffect, useState } from "react";
import { LuUsers } from "react-icons/lu";

const FALLBACK_KEY = "saumya_portfolio_fallback_unique_visitors";
const VISITED_KEY = "saumya_portfolio_visited_unique";

const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    let active = true;

    const fetchVisitorCount = async () => {
      try {
        const res = await fetch("/api/visitors");
        if (!res.ok) throw new Error("API response error");
        const data = await res.json();
        
        if (data && typeof data.count === "number") {
          if (active) {
            setCount(data.count);
            setIsLive(true);
          }
          return;
        }
      } catch (err) {
        console.warn("Counter API failed, falling back to simulated counter:", err);
      }

      // Fallback: If API fails, simulate a realistic visitor counter using localStorage
      if (active) {
        const isVisited = localStorage.getItem(VISITED_KEY);
        let localCount = parseInt(localStorage.getItem(FALLBACK_KEY) || "0", 10);
        if (!localCount || isNaN(localCount)) {
          // Initialize with 1 as the first visit
          localCount = 0;
        }

        if (!isVisited) {
          localCount += 1;
          localStorage.setItem(FALLBACK_KEY, String(localCount));
          localStorage.setItem(VISITED_KEY, "true");
        } else if (localCount === 0) {
          localCount = 1;
        }

        setCount(localCount);
        setIsLive(false);
      }
    };

    fetchVisitorCount();

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="flex h-9 items-center gap-2 rounded-full border border-white/10 bg-black/45 px-4 shadow-lg backdrop-blur-md transition-all hover:border-white/20 select-none shrink-0 w-fit">
      {/* Live Status Dot */}
      <span
        className={`h-1.5 w-1.5 rounded-full shrink-0 ${
          isLive ? "bg-green-500 animate-pulse" : "bg-[#B66D0D]"
        }`}
        title={isLive ? "Live API Counter" : "Simulated Local Counter"}
      />
      
      {/* Icon */}
      <LuUsers className="text-sm text-[#D1603D] shrink-0" />
      
      {/* Label */}
      <span className="text-[10px] font-bold uppercase tracking-widest text-[#B66D0D] shrink-0">
        Visitors:
      </span>

      {/* Glow Count Number */}
      <span className="text-xs font-bold text-white font-mono drop-shadow-[0_0_6px_rgba(209,96,61,0.4)] shrink-0">
        {count !== null ? count.toLocaleString() : "..."}
      </span>
    </div>
  );
};

export default VisitorCounter;
