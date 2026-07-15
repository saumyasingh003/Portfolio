"use client";

import React from "react";

const experiences = [
  {
    logo: "/diarch_go_logo.jpg",
    company: "Diarch Go",
    role: "Full Stack Developer · Internship",
    period: "Jun 2026 – Present · Patna, Bihar, India · On-site",
    points: [
      "Enhanced the DiarchGo Admin Panel by improving the user interface and redesigning the search and filtering system, creating a more intuitive and efficient experience for administrators.",
      "Designed and developed the complete frontend for GrihBandhu, an end-to-end house construction platform, delivering a responsive and user-friendly interface that simplifies the customer journey.",
      "Worked with the MERN Stack and Next.js to build scalable, production-ready features.",
    ],
  },
  {
    logo: "/sociolinq_logo.jpg",
    company: "SociolinQ",
    role: "Full Stack Developer · Internship",
    period: "Nov 2025 – Jan 2026 · Kolkata, West Bengal, India · Remote",
    points: [
      "Architected and launched an HRMS dashboard using the MERN stack, boosting code reusability by 40% through reusable custom hooks and Higher-Order Components.",
      "Implemented and connected 15+ scalable REST APIs using Node.js and Express.js, supported by middleware validation and centralized error handling.",
      "Refined queries and aggregation pipelines, accelerating the efficiency of HR analytics and reporting modules.",
    ],
  },
  {
    logo: "/rizhobee.png",
    company: "Rizhobee",
    role: "Full Stack Developer",
    period: "Feb 2025 – Apr 2025",
    points: [
      "Independently designed and developed a full-fledged, responsive web platform — UI, server logic, and database architecture.",
      "Developed and integrated RESTful APIs for secure and efficient data flow.",
      "Leveraged AWS services for scalable deployment and optimized performance.",
    ],
  },
  {
    logo: "/airmuse.jpg",
    company: "Airmuse",
    role: "Frontend Developer",
    period: "Sep 2024 – Nov 2024",
    points: [
      "Integrated 10+ RESTful APIs with the frontend, improving reliability and performance.",
      "Designed 15+ responsive, user-friendly UIs, increasing engagement by 30%.",
      "Collaborated in an agile team using React, JavaScript, HTML, and CSS.",
    ],
  },
  {
    logo: "/salesqueen.jpg",
    company: "Salesqueen Software Solutions",
    role: "Frontend Developer",
    period: "May 2024 – Aug 2024",
    points: [
      "Developed modular, reusable React components to speed up development.",
      "Debugged and optimized frontend logic and API integrations, reducing UI issues by ~30%.",
      "Delivered production-ready features aligned with client requirements.",
    ],
  },
  {
    logo: "/iit.png",
    company: "IIT Patna",
    role: "Research Intern",
    period: "Mar 2024 – Jun 2024",
    points: [
      "Implemented ML algorithms such as linear and logistic regression with cross-validation.",
      "Collaborated on data-driven solutions in interdisciplinary teams.",
      "Presented research findings and insights effectively.",
    ],
  },
];

const ExperienceWindow = () => {
  return (
    <div className="bg-neutral-950 p-6 text-white sm:p-10">
      <h2 className="accent mb-8 text-3xl font-bold sm:text-4xl">Experience</h2>

      <div className="space-y-5">
        {experiences.map((e) => (
          <div
            key={e.company}
            className="grid gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 md:grid-cols-2"
          >
            <div className="flex items-start gap-4">
              {e.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={e.logo}
                  alt={`${e.company} logo`}
                  className="h-16 w-16 shrink-0 rounded-lg object-cover"
                />
              ) : (
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-white/10 text-2xl font-bold text-white/90">
                  {e.company.charAt(0)}
                </div>
              )}
              <div>
                <h3 className="accent text-xl font-semibold">{e.company}</h3>
                <p className="mt-1 font-medium text-white/90">{e.role}</p>
                <p className="text-xs uppercase tracking-widest text-white/50">
                  {e.period}
                </p>
              </div>
            </div>

            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-white/75">
              {e.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceWindow;
