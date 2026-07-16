"use client";

import React, { useEffect, useState } from "react";
import { FaApple } from "react-icons/fa";
import { IoWifi, IoSearch, IoBatteryFull } from "react-icons/io5";
import { BsGrid3X3GapFill } from "react-icons/bs";

const RESUME_URL =
  "https://drive.google.com/file/d/1jmq7V-VeSHqVSAosqaSeqNjvxpw_D5j7/view?usp=sharing";

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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleClose = () => setMenuOpen(false);
    window.addEventListener("click", handleClose);
    return () => window.removeEventListener("click", handleClose);
  }, [menuOpen]);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMenuOpen((prev) => !prev);
  };

  const handleMenuClick = (id: string) => {
    if (id === "resume") {
      window.open(RESUME_URL, "_blank");
    } else {
      onOpen(id);
    }
    setMenuOpen(false);
  };

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
    <header className="fixed top-0 left-0 z-50 flex h-9 w-full items-center justify-between bg-black/40 px-3 text-sm text-white backdrop-blur-md">
      {/* Left: apple + menus */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleMenu}
          className="flex items-center justify-center rounded p-1 transition hover:bg-white/15 cursor-pointer"
          aria-label="Toggle mobile menu"
        >
          <FaApple className="text-base" />
        </button>
        {MENUS.map((m, i) => (
          <button
            key={`${m.label}-${i}`}
            onClick={() => handleMenuClick(m.id)}
            className={`hidden rounded px-1.5 py-0.5 transition hover:bg-white/15 sm:inline cursor-pointer ${
              m.bold ? "font-bold" : "font-normal"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-10 left-3 z-50 w-48 overflow-hidden rounded-xl border border-white/10 bg-neutral-950/90 p-1 text-white shadow-2xl backdrop-blur-xl sm:hidden"
        >
          {MENUS.map((m, i) => (
            <button
              key={`${m.label}-mob-${i}`}
              onClick={() => handleMenuClick(m.id)}
              className={`w-full text-left rounded-lg px-3 py-2 text-sm transition hover:bg-white/15 cursor-pointer block ${
                m.bold ? "font-bold text-white/90" : "font-normal text-white/70"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      )}

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
