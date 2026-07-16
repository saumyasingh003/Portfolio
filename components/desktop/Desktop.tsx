"use client";

import React, { useState } from "react";
import Image from "next/image";
import MenuBar from "./MenuBar";
import Widgets from "./Widgets";
import Dock from "./Dock";
import Window from "./Window";
import Gallery from "./Gallery";
import { WALLPAPERS } from "./wallpapers";
import VisitorCounter from "../VisitorCounter";

import AboutWindow from "./windows/AboutWindow";
import SkillsWindow from "./windows/SkillsWindow";
import ProjectsWindow from "./windows/ProjectsWindow";
import ExperienceWindow from "./windows/ExperienceWindow";
import EducationWindow from "./windows/EducationWindow";
import ContactWindow from "./windows/ContactWindow";

// Map dock/menu ids to a window title + the section to render
const WINDOWS: Record<string, { title: string; content: React.ReactNode }> = {
  about: { title: "About", content: <AboutWindow /> },
  projects: { title: "Projects", content: <ProjectsWindow /> },
  experience: { title: "Experience", content: <ExperienceWindow /> },
  education: { title: "Education", content: <EducationWindow /> },
  skills: { title: "Skills", content: <SkillsWindow /> },
  contact: { title: "Contact", content: <ContactWindow /> },
};

const Desktop = () => {
  const [open, setOpen] = useState<string | null>(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [wallpaperId, setWallpaperId] = useState(WALLPAPERS[0].id);

  const handleOpen = (id: string) => {
    if (WINDOWS[id]) setOpen(id);
  };

  const active = open ? WINDOWS[open] : null;
  const wallpaper =
    WALLPAPERS.find((w) => w.id === wallpaperId) ?? WALLPAPERS[0];

  return (
    <main className="relative h-screen w-full overflow-hidden bg-black font-(family-name:--font-quantico)">
      {/* Background image */}
      <Image src={wallpaper.image} alt="" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-black/30" />

      {/* Top menu bar */}
      <MenuBar onOpen={handleOpen} />

      {/* Visitor Counter (Top-Right under MenuBar) */}
      <div className="absolute top-12 right-8 z-30">
        <VisitorCounter />
      </div>

      {/* Widgets floating on the desktop */}
      <div className="relative h-full w-full overflow-y-auto pb-32 md:pb-24">
        <Widgets />
      </div>

      {/* Dock */}
      <Dock onOpen={handleOpen} onOpenGallery={() => setGalleryOpen(true)} />

      {/* Active window */}
      {active && (
        <Window
          title={active.title}
          accent={wallpaper.accent}
          onClose={() => setOpen(null)}
        >
          {active.content}
        </Window>
      )}

      {/* Gallery / wallpaper picker */}
      {galleryOpen && (
        <Gallery
          current={wallpaperId}
          onSelect={(id) => setWallpaperId(id)}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </main>
  );
};

export default Desktop;
