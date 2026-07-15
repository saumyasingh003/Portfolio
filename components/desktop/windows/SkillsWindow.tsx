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
    <div className="bg-neutral-950 p-6 text-white sm:p-10">
      <h2 className="accent mb-2 text-3xl font-bold sm:text-4xl">What I Know</h2>
      <p className="mb-8 italic text-white/60">
        A developer who loves exploring every tech stack.
      </p>

      {/* Stats */}
      <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
          >
            <p className="text-2xl font-bold sm:text-3xl">{s.value}</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-white/60">
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
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <p className="accent mb-4 font-semibold">{group.category}</p>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90 transition hover:-translate-y-0.5 hover:bg-white/20"
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
