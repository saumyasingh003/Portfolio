"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoWifi } from "react-icons/io5";
import { BsBatteryFull } from "react-icons/bs";
import mandala from "../public/mandala art.jpg";

const LockScreen = () => {
  const [unlocked, setUnlocked] = useState(false);
  const [now, setNow] = useState<Date | null>(null);

  // Live clock — start only on client to avoid hydration mismatch
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  // Lock body scroll while the lock screen is showing
  useEffect(() => {
    document.body.style.overflow = unlocked ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [unlocked]);

  const time = now
    ? `${((now.getHours() % 12) || 12).toString().padStart(2, "0")}:${now
        .getMinutes()
        .toString()
        .padStart(2, "0")}`
    : "";

  const date = now
    ? now.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      })
    : "";

  const ampm = now ? (now.getHours() >= 12 ? "P M" : "A M") : "";

  const handleUnlock = () => setUnlocked(true);

  return (
    <div
      onClick={handleUnlock}
      role="button"
      tabIndex={0}
      aria-label="Unlock to view portfolio"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleUnlock();
      }}
      className={`
        font-(family-name:--font-quantico)
        fixed inset-0 z-9999 cursor-pointer select-none
        flex flex-col items-center justify-center
        overflow-hidden bg-black text-white
        transition-all duration-700 ease-in-out
        ${
          unlocked
            ? "pointer-events-none -translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }
      `}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={mandala}
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Status bar */}
      <div
        className="absolute top-3 right-4 z-20 flex items-center gap-1.5 text-xs font-semibold sm:top-4 sm:right-6 sm:text-sm"
        style={{ color: "#D1603D" }}
      >
        <span>India</span>
        <IoWifi className="text-sm sm:text-base" />
        <span>91%</span>
        <BsBatteryFull className="text-xl sm:text-2xl" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <p
          className="text-xl font-semibold tracking-wide sm:text-2xl md:text-3xl"
          style={{ color: "#D1603D" }}
        >
          {date}
        </p>

        <h1
          className="my-4 text-[28vw] font-medium leading-none tracking-tight tabular-nums md:text-[22rem] flex items-baseline justify-center"
          style={{ color: "#D1603D" }}
        >
          <span>{time}</span>
          {ampm && (
            <span className="text-[5vw] md:text-[4rem] font-semibold uppercase opacity-75 ml-2 md:ml-4 select-none">
              {ampm}
            </span>
          )}
        </h1>

        <h2 className="mt-6 text-3xl sm:text-4xl text-[#B66D0D] font-bold tracking-tight drop-shadow-lg">
          Saumya&rsquo;s Portfolio
        </h2>

        <p className="mt-16 animate-pulse text-sm text-white/70">
          Click anywhere to enter
        </p>
      </div>
    </div>
  );
};

export default LockScreen;
