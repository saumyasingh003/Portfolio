"use client";

import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const socials = [
  {
    href: "https://www.linkedin.com/in/saumyasingh003/",
    label: "LinkedIn",
    icon: FaLinkedinIn,
  },
  {
    href: "https://github.com/saumyasingh003",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "mailto:saumyasingh98982@gmail.com",
    label: "Email",
    icon: FaEnvelope,
  },
];

const ContactWindow = () => {
  return (
    <div className="bg-neutral-950 p-6 text-white sm:p-10">
      <h2 className="accent mb-8 text-3xl font-bold sm:text-4xl">Contact Me</h2>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <p className="mb-6 text-lg text-white/85">
          Want to discuss a project or just say hi? My inbox is always open.
        </p>

        <a
          href="mailto:saumyasingh98982@gmail.com"
          className="accent mb-4 block text-xl font-medium transition hover:opacity-80 sm:text-2xl"
        >
          saumyasingh98982@gmail.com
        </a>

        <div className="mb-8 flex items-center gap-2 text-white/80">
          <FaMapMarkerAlt className="accent" />
          <span>Patna, Bihar, India</span>
        </div>

        <div className="flex gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-xl transition hover:-translate-y-1 hover:bg-white/20"
            >
              <s.icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactWindow;
