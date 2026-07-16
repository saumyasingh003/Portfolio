"use client";

import React from "react";
import {
  LuUser,
  LuFolder,
  LuFileText,
  LuBriefcase,
  LuZap,
  LuMail,
  LuImage,
} from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

type DockProps = {
  onOpen: (id: string) => void;
  onOpenGallery: () => void;
};

const RESUME_URL =
  "https://drive.google.com/file/d/1jmq7V-VeSHqVSAosqaSeqNjvxpw_D5j7/view?usp=sharing";

const leftSections = [
  { id: "about", label: "About", icon: LuUser },
  { id: "projects", label: "Projects", icon: LuFolder },
  { id: "resume", label: "Resume", icon: LuFileText },
];

const socials = [
  { href: "https://github.com/saumyasingh003", label: "GitHub", icon: FaGithub, color: "text-white bg-[#181717]" },
  { href: "mailto:saumyasingh98982@gmail.com", label: "Gmail", icon: SiGmail, color: "text-[#EA4335] bg-white" },
  { href: "https://www.linkedin.com/in/saumyasingh003/", label: "LinkedIn", icon: FaLinkedin, color: "text-white bg-[#0A66C2]" },
];

const rightSections = [
  { id: "experience", label: "Experience", icon: LuBriefcase },
  { id: "skills", label: "Skills", icon: LuZap },
  { id: "contact", label: "Contact", icon: LuMail },
];

// A grouped, rounded tray — matches the reference's segmented dock
const trayClass =
  "flex items-center gap-3 rounded-3xl bg-white/10 p-3 shadow-lg ring-1 ring-white/10 backdrop-blur-xl";

const pillClass =
  "group flex items-center gap-3 rounded-2xl bg-white/10 px-6 py-4 text-white transition hover:bg-white/25";

const iconClass =
  "flex h-16 w-16 items-center justify-center rounded-2xl shadow-md transition hover:-translate-y-1";

const Dock = ({ onOpen, onOpenGallery }: DockProps) => {
  // Mobile utility class for icon-only button style
  const mobIconClass =
    "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white transition hover:-translate-y-1 hover:bg-white/20 cursor-pointer";

  return (
    <>
      {/* Desktop Dock (hidden on mobile, flex on md and up) */}
      <div className="hidden md:flex fixed bottom-0 left-0 z-40 w-full items-center justify-between gap-3 overflow-x-auto pb-2 pl-2 pr-8">
        {/* Left tray — section pills */}
        <div className={trayClass}>
          {leftSections.map((s) => (
            <button
              key={s.id}
              onClick={() =>
                s.id === "resume" ? window.open(RESUME_URL, "_blank") : onOpen(s.id)
              }
              className={pillClass}
              title={s.label}
            >
              <s.icon className="text-2xl" />
              <span className="hidden text-lg font-medium md:inline">{s.label}</span>
            </button>
          ))}
        </div>

        {/* Center tray — app icons */}
        <div className={trayClass}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              className={`${iconClass} ${s.color}`}
            >
              <s.icon className="text-3xl" />
            </a>
          ))}

          {/* Gallery — change wallpaper (Photos-style icon) */}
          <button
            onClick={onOpenGallery}
            title="Gallery — change background"
            className={`${iconClass} bg-linear-to-tr from-sky-400 via-fuchsia-400 to-amber-300 text-white`}
          >
            <LuImage className="text-3xl" />
          </button>
        </div>

        {/* Right tray — section pills */}
        <div className={trayClass}>
          {rightSections.map((s) => (
            <button
              key={s.id}
              onClick={() => onOpen(s.id)}
              className={pillClass}
              title={s.label}
            >
              <s.icon className="text-2xl" />
              <span className="hidden text-lg font-medium md:inline">{s.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Unified Dock (flex on mobile, hidden on md and up) */}
      <div className="flex md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-full max-w-[95%] justify-center px-2">
        <div className="flex items-center gap-2 rounded-2xl bg-white/10 p-2 shadow-lg ring-1 ring-white/10 backdrop-blur-xl max-w-full overflow-x-auto no-scrollbar scroll-smooth">
          {/* Left sections (About, Projects, Resume) */}
          {leftSections.map((s) => (
            <button
              key={`${s.id}-mob`}
              onClick={() =>
                s.id === "resume" ? window.open(RESUME_URL, "_blank") : onOpen(s.id)
              }
              className={mobIconClass}
              title={s.label}
            >
              <s.icon className="text-xl" />
            </button>
          ))}

          {/* Divider */}
          <div className="h-6 w-[1px] bg-white/20 shrink-0" />

          {/* Center sections (Socials + Gallery) */}
          {socials.map((s) => (
            <a
              key={`${s.label}-mob`}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition hover:-translate-y-1 shadow-md cursor-pointer ${s.color}`}
            >
              <s.icon className="text-xl" />
            </a>
          ))}

          <button
            onClick={onOpenGallery}
            title="Gallery — change background"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-tr from-sky-400 via-fuchsia-400 to-amber-300 text-white transition hover:-translate-y-1 shadow-md cursor-pointer"
          >
            <LuImage className="text-xl" />
          </button>

          {/* Divider */}
          <div className="h-6 w-[1px] bg-white/20 shrink-0" />

          {/* Right sections (Experience, Skills, Contact) */}
          {rightSections.map((s) => (
            <button
              key={`${s.id}-mob`}
              onClick={() => onOpen(s.id)}
              className={mobIconClass}
              title={s.label}
            >
              <s.icon className="text-xl" />
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dock;
