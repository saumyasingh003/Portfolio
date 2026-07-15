"use client";

import React from "react";

const projects = [
  {
    title: "Vashudha",
    desc: "An AI-powered sustainability and carbon footprint tracking platform that helps users monitor emissions, adopt eco-friendly habits, and understand climate impact through interactive insights and analytics. It promotes sustainable living with data-driven visualizations, green goals, and awareness-focused features.",
    link: "https://carbon-footprint-tracker-mu.vercel.app/",
    github: "https://github.com/saumyasingh003/Carbon-Footprint-Tracker",
  },
  {
    title: "CareerMind",
    desc: "An AI-driven career coaching platform that provides personalized career guidance, AI mock interviews, ATS-friendly resume building, salary insights, and AI-generated cover letters. It helps students and professionals prepare for jobs with intelligent career development tools.",
    link: "https://career-mind.vercel.app/",
    github: "https://github.com/saumyasingh003/CareerMind",
  },
  {
    title: "Zora",
    desc: "A Jira-style project management and collaboration platform designed for teams and organizations. It includes Kanban boards, sprint planning, issue tracking, role-based access control, and multi-organization workspace management for streamlined project workflows.",
    link: "https://zora-two.vercel.app/",
    github: "https://github.com/saumyasingh003/Zora",
  },
  {
    title: "Automentor",
    desc: "An AI-powered meeting assistant platform that enables real-time transcription, AI-generated meeting summaries, action items, and smart collaboration during video meetings. It improves productivity by automating meeting documentation and follow-ups.",
    link: "https://automentor-three.vercel.app/",
    github: "https://github.com/saumyasingh003/automentor",
  },
];

const ProjectsWindow = () => {
  return (
    <div className="bg-neutral-950 p-6 text-white sm:p-10">
      <h2 className="accent mb-1 text-3xl font-bold sm:text-4xl">Projects</h2>
      <p className="mb-8 italic text-white/60">Some of my personal projects</p>

  

      <div className="grid grid-cols-1 gap-5">
        {projects.map((p) => (
          <div
            key={p.title}
            className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <h3 className="accent mb-2 text-xl font-semibold">{p.title}</h3>
            <p className="mb-5 flex-1 text-sm leading-relaxed text-white/70">
              {p.desc}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="accent inline-block w-fit rounded-full border border-white/25 px-5 py-2 text-sm font-medium transition hover:bg-white/10"
              >
                View Project
              </a>
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="accent inline-block w-fit rounded-full border border-white/25 px-5 py-2 text-sm font-medium transition hover:bg-white/10"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="https://github.com/saumyasingh003"
          target="_blank"
          rel="noopener noreferrer"
          className="accent rounded-full border border-white/25 px-8 py-3 font-medium transition hover:bg-white/10"
        >
          More Projects on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectsWindow;
