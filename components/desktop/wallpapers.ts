import type { StaticImageData } from "next/image";
import mandala from "../../public/mandala art.jpg";
import rust from "../../public/rust.jpg";
import midnight from "../../public/midnight.jpg";
import aurora from "../../public/aurora.jpg";
import sunset from "../../public/sunset.jpg";
import forest from "../../public/forest.jpg";
import graphite from "../../public/graphite.jpg";
import ocean from "../../public/ocean.jpg";

export type Wallpaper = {
  id: string;
  name: string;
  /** Static image used for the full background */
  image: StaticImageData;
  /** Small image used for the gallery thumbnail preview */
  preview: string;
  /** Accent color that windows/UI adopt when this wallpaper is active */
  accent: string;
};

export const WALLPAPERS: Wallpaper[] = [
  { id: "mandala", name: "Mandala", image: mandala, preview: "/mandala art.jpg", accent: "#e5e7eb" },
  { id: "rust", name: "Rust", image: rust, preview: "/rust.jpg", accent: "#e0793f" },
  { id: "midnight", name: "Midnight", image: midnight, preview: "/midnight.jpg", accent: "#38bdf8" },
  { id: "aurora", name: "Aurora", image: aurora, preview: "/aurora.jpg", accent: "#c084fc" },
  { id: "sunset", name: "Sunset", image: sunset, preview: "/sunset.jpg", accent: "#fb7185" },
  { id: "forest", name: "Forest", image: forest, preview: "/forest.jpg", accent: "#34d399" },
  { id: "graphite", name: "Graphite", image: graphite, preview: "/graphite.jpg", accent: "#a1a1aa" },
  { id: "ocean", name: "Ocean", image: ocean, preview: "/ocean.jpg", accent: "#22d3ee" },
];
