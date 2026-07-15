"use client";

import React, { useEffect, useState } from "react";
import { FaApple } from "react-icons/fa";
import { IoWifi, IoSearch, IoBatteryFull } from "react-icons/io5";
import { BsGrid3X3GapFill } from "react-icons/bs";

type MenuBarProps = {
  onOpen: (id: string) => void;
};

const MENUS = [
  { label: "Portfolio", id: "about", bold: true },
  { label: "Resume", id: "resume" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

const MenuBar = ({ onOpen }: MenuBarProps) => {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const stamp = now
    ? now
        .toLocaleString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
        .replace(",", "")
    : "";

  return (
    <header className="fixed top-0 left-0 z-40 flex h-9 w-full items-center justify-between bg-black/40 px-3 text-sm text-white backdrop-blur-md">
      {/* Left: apple + menus */}
      <div className="flex items-center gap-4">
        <FaApple className="text-base" />
        {MENUS.map((m, i) => (
          <button
            key={`${m.label}-${i}`}
            onClick={() => onOpen(m.id)}
            className={`hidden rounded px-1 transition hover:bg-white/15 sm:inline ${
              m.bold ? "font-bold" : "font-normal"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Right: status */}
      <div className="flex items-center gap-3">
        <span className="hidden items-center gap-1 sm:flex">
          100% <IoBatteryFull className="text-lg" />
        </span>
        <IoWifi className="text-base" />
        <IoSearch className="text-base" />
        <BsGrid3X3GapFill className="text-xs" />
        <span className="whitespace-nowrap font-medium">{stamp}</span>
      </div>
    </header>
  );
};

export default MenuBar;
