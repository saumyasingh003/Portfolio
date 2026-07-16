"use client";

import React from "react";

const experience = [
  "Frontend Architecture",
  "Backend Development",
  "REST API Design",
  "Database Design",
  "End-to-End Solutions",
  "AWS Deployment",
  "AI-Driven Features",
  "Performance Optimization",
];

const AboutWindow = () => {
  return (
    <div className="bg-neutral-950 p-4 text-white sm:p-10">
      <h2 className="accent mb-6 text-2xl font-bold sm:text-4xl">About Me</h2>

      {/* Bio panel */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-8">
        <p className="mb-4 text-sm leading-relaxed text-white/85 sm:text-base">
          Full Stack Developer with hands-on experience in building scalable web
          applications using <span className="font-semibold accent">React.js</span>,{" "}
          <span className="font-semibold accent">Next.js</span>,{" "}
          <span className="font-semibold accent">Node.js</span>,{" "}
          <span className="font-semibold accent">Prisma</span>, and{" "}
          <span className="font-semibold accent">MongoDB</span>. Strong
          understanding of frontend architecture, backend development, REST APIs,
          and database design.
        </p>

        <p className="mb-4 text-sm leading-relaxed text-white/85 sm:text-base">
          Proven ability to design and deploy end-to-end solutions, including the
          independently developed{" "}
          <span className="font-semibold accent">Rhizobee</span> platform,
          covering UI/UX, server-side logic, and AWS deployment.
        </p>

        {/* Experience includes */}
        <p className="mb-3 text-sm font-semibold accent sm:text-base">My experience includes:</p>
        <ul className="mb-5 grid list-disc grid-cols-1 gap-x-8 gap-y-2 pl-5 text-xs text-white/85 sm:grid-cols-2 sm:text-sm lg:grid-cols-3">
          {experience.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p className="mb-4 text-sm leading-relaxed text-white/85 sm:text-base">
          Experienced in integrating AI-driven features into applications, focusing
          on practical use cases such as intelligent systems and workflow
          optimization.
        </p>

        <p className="text-sm leading-relaxed text-white/85 sm:text-base">
          Passionate about writing clean, maintainable code, optimizing performance,
          and building user-centric products. Actively seeking opportunities to
          contribute to impactful projects and collaborate with high-performing
          teams.
        </p>

        {/* Education */}
        <div className="mt-6 border-t border-white/10 pt-4">
          <p className="mb-3 text-sm font-semibold accent sm:text-base">Education</p>
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
            <div>
              <h4 className="text-sm font-semibold text-white sm:text-base">Amity University, Patna</h4>
              <p className="text-xs italic text-white/70 sm:text-sm">
                Bachelor of Technology in Computer Science and Engineering
              </p>
            </div>
            <div className="text-xs text-white/70 sm:text-right sm:text-sm">
              <p>Sep 2022 &ndash; May 2026</p>
              <p className="italic">CGPA: 8.3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWindow;
