"use client";

import React from "react";

const skillGroups = [
  {
    category: "Programming Languages",
    items: ["C++", "JavaScript", "TypeScript"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    category: "Version Control & Tools",
    items: ["Git", "GitHub", "Postman", "Vercel"],
  },
  {
    category: "Core CS Fundamentals",
    items: [
      "Data Structures & Algorithms",
      "DBMS",
      "OOPs",
      "Operating Systems",
    ],
  },
  {
    category: "Soft Skills",
    items: [
      "Teamwork",
      "Leadership",
      "Communication",
      "Problem Solving",
      "Public Speaking",
    ],
  },
];

const stats = [
  { value: "4+", label: "Internships" },
  { value: "10+", label: "Projects" },
  { value: "Full-Stack", label: "Experience" },
  { value: "CSE Student", label: "Background" },
];

const SkillsWindow = () => {
  return (
    <div className="bg-neutral-950 p-4 text-white sm:p-10">
      <h2 className="accent mb-2 text-2xl font-bold sm:text-4xl">What I Know</h2>
      <p className="mb-6 italic text-sm text-white/60 sm:text-base">
        A developer who loves exploring every tech stack.
      </p>

      {/* Stats */}
      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-5 text-center"
          >
            <p className="text-xl font-bold sm:text-3xl">{s.value}</p>
            <p className="mt-1 text-[10px] uppercase tracking-widest text-white/60 sm:text-xs">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* Skills grouped by category */}
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6"
          >
            <p className="accent mb-3 text-sm font-semibold sm:mb-4 sm:text-base">{group.category}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 transition hover:-translate-y-0.5 hover:bg-white/20 sm:px-4 sm:py-2 sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsWindow;
