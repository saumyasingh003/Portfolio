"use client";

import React from "react";
import Image from "next/image";
import { LuLayoutTemplate, LuCode, LuSmartphone } from "react-icons/lu";
import mainimage from "../../public/mainimage.png";

const doing = [
  {
    icon: LuLayoutTemplate,
    title: "Web Design",
    desc: "Modern, high-quality interfaces built at a professional level.",
  },
  {
    icon: LuCode,
    title: "Full-Stack Development",
    desc: "Scalable frontend and backend systems, APIs, and clean code.",
  },
  {
    icon: LuSmartphone,
    title: "Backend & Cloud",
    desc: "Node, Express, databases, and cloud deployment.",
  },
];

const Widgets = () => {
  return (
    <div className="relative z-10 flex w-full max-w-full flex-col gap-5 p-4 pt-14 md:max-w-[760px] md:p-8 md:pt-16">
      {/* Top row: profile + what I'm doing */}
      <div className="flex flex-col gap-5 sm:flex-row">
        {/* Profile card */}
        <div className="relative aspect-square w-full max-w-[220px] overflow-hidden rounded-3xl border border-white/15 shadow-2xl sm:w-56">
          <Image src={mainimage} alt="Saumya Singh" fill className="object-cover" />
        </div>

        {/* What I'm doing */}
        <div className="flex-1 rounded-3xl border border-white/15 bg-black/40 p-5 text-white shadow-2xl backdrop-blur-xl">
          <h3 className="mb-4 text-lg font-semibold">What I'm doing</h3>
          <div className="flex flex-col gap-4">
            {doing.map((d) => (
              <div key={d.title} className="flex gap-3">
                <d.icon className="mt-1 shrink-0 text-xl text-white/90" />
                <div>
                  <p className="font-semibold leading-tight">{d.title}</p>
                  <p className="text-sm text-white/70">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About me */}
      <div className="rounded-3xl border border-white/15 bg-black/40 p-6 text-white shadow-2xl backdrop-blur-xl">
        <h3 className="mb-4 text-2xl font-bold">About me</h3>
        <p className="mb-4 leading-relaxed text-white/85">
          Hi, I&rsquo;m <span className="font-semibold">Saumya Singh</span>, a
          developer focused on building scalable, efficient, and user-friendly
          web applications. I enjoy working across the stack &mdash; especially
          on backend systems, APIs, and performance-driven architecture.
        </p>
        <p className="leading-relaxed text-white/85">
          With internship experience in both frontend and full-stack roles,
          I&rsquo;ve collaborated with teams to deliver real-world products,
          written clean maintainable code, and created interfaces that feel
          simple yet powerful.
        </p>
      </div>
    </div>
  );
};

export default Widgets;
