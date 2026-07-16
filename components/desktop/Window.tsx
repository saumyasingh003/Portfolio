"use client";

import React, { useEffect, useRef, useState } from "react";

type WindowProps = {
  title: string;
  accent?: string;
  onClose: () => void;
  children: React.ReactNode;
};

const Window = ({ title, accent = "#e5e7eb", onClose, children }: WindowProps) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const drag = useRef<{ startX: number; startY: number; ox: number; oy: number } | null>(null);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!drag.current) return;
      setPos({
        x: drag.current.ox + (e.clientX - drag.current.startX),
        y: drag.current.oy + (e.clientY - drag.current.startY),
      });
    };
    const onUp = () => (drag.current = null);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  const startDrag = (e: React.MouseEvent) => {
    if (isMobile) return;
    drag.current = { startX: e.clientX, startY: e.clientY, ox: pos.x, oy: pos.y };
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Window */}
      <div
        style={
          {
            transform: isMobile ? undefined : `translate(${pos.x}px, ${pos.y}px)`,
            "--win-accent": accent,
          } as React.CSSProperties
        }
        className="relative flex h-[80vh] md:h-auto md:max-h-[85vh] w-full max-w-7xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 shadow-2xl"
      >
        {/* Title bar */}
        <div
          onMouseDown={isMobile ? undefined : startDrag}
          className={`flex h-11 shrink-0 items-center gap-2 border-b border-white/10 bg-neutral-900 px-4 ${
            isMobile ? "" : "cursor-grab active:cursor-grabbing"
          }`}
        >
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="h-3.5 w-3.5 rounded-full bg-[#ff5f57] transition hover:brightness-90"
              aria-label="Close"
            />
            <span className="h-3.5 w-3.5 rounded-full bg-[#febc2e]" />
            <span className="h-3.5 w-3.5 rounded-full bg-[#28c840]" />
          </div>
          <p className="flex-1 text-center text-sm font-medium text-white/70">
            {title}
          </p>
          <div className="w-14" />
        </div>

        {/* Content */}
        <div className="no-scrollbar overflow-y-auto bg-neutral-950 text-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Window;
