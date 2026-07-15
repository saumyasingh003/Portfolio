"use client";

import React from "react";

const points = [
  "Studying core subjects including C, C++, Java, Python, AI, DSA, OS, TOC, DBMS, and Networking.",
  "Learning software engineering principles and development methodologies.",
  "Working on full-stack web applications using React, Node.js, and Express.",
  "Building RESTful APIs and responsive UI components for production-ready systems.",
];

const EducationWindow = () => {
  return (
    <div className="bg-neutral-950 p-6 text-white sm:p-10">
      <h2 className="accent mb-8 text-3xl font-bold sm:text-4xl">Education</h2>

      <div className="grid gap-8 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 md:grid-cols-2">
        <div>
          <h3 className="accent mb-2 text-2xl font-semibold">Amity University, Patna</h3>
          <p className="font-medium text-white/90">
            B.Tech in Computer Science Engineering
          </p>
          <p className="mb-6 text-xs uppercase tracking-widest text-white/50">
            2022 – Present
          </p>
          <a
            href="https://amity.edu/Bihar/"
            target="_blank"
            rel="noopener noreferrer"
            className="accent inline-block rounded-full border border-white/25 px-6 py-2 text-sm font-medium transition hover:bg-white/10"
          >
            Visit University
          </a>
        </div>

        <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-white/75">
          {points.map((pt, i) => (
            <li key={i}>{pt}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EducationWindow;
