"use client";

import React from "react";
import { LuCheck } from "react-icons/lu";
import { WALLPAPERS } from "./wallpapers";

type GalleryProps = {
  current: string;
  onSelect: (id: string) => void;
  onClose: () => void;
};

const Gallery = ({ current, onSelect, onClose }: GalleryProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-2xl rounded-2xl border border-white/15 bg-neutral-900/90 p-6 text-white shadow-2xl backdrop-blur-xl">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-xl font-semibold">Gallery &mdash; Choose a wallpaper</h3>
          <button
            onClick={onClose}
            className="rounded-full px-3 py-1 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            Close
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {WALLPAPERS.map((w) => {
            const selected = w.id === current;
            return (
              <button
                key={w.id}
                onClick={() => onSelect(w.id)}
                className={`group relative aspect-video overflow-hidden rounded-xl border-2 transition ${
                  selected ? "border-white" : "border-white/10 hover:border-white/40"
                }`}
                style={{ backgroundImage: `url("${encodeURI(w.preview)}")`, backgroundSize: "cover", backgroundPosition: "center" }}
                title={w.name}
              >
                {selected && (
                  <span className="absolute right-1.5 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-white text-black">
                    <LuCheck className="text-sm" />
                  </span>
                )}
                <span className="absolute inset-x-0 bottom-0 bg-black/40 py-1 text-center text-xs font-medium">
                  {w.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
