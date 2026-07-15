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
  return (
    <div className="fixed bottom-0 left-0 z-40 flex w-full items-center justify-between gap-3 overflow-x-auto pb-2 pl-2 pr-8">
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
  );
};

export default Dock;
