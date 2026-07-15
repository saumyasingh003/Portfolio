import React from "react";

const About = () => {
  return (
    <>
      {/* ===================== ABOUT ===================== */}
      <section
        id="about"
        className="w-full  py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-20"
      >
        <hr className="border-t border-black mb-14" />
        <div className="max-w-6xl mx-auto grid gap-14 md:grid-cols-2 items-center">

          {/* LEFT — TEXT */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
              About Me
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-black/80 mb-4">
              I'm{" "}
              <span className="font-semibold text-black">Saumya Singh</span>, a
              developer focused on building scalable, efficient, and
              user-friendly web applications. I enjoy working across the stack,
              especially on backend systems, APIs, and performance-driven
              architecture.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-black/80 mb-6 ">
              With internship experience in both frontend and full-stack roles,
              I've collaborated with teams to deliver real-world products,
              written clean maintainable code, and created interfaces that feel
              simple yet powerful.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-black/80 ">
              Currently exploring advanced backend systems, cloud deployment,
              and scalable architectures — always learning, always shipping.
            </p>
          </div>

          {/* RIGHT — STATS */}
          <div className="border border-black p-6 sm:p-8 grid grid-cols-2 gap-6 sm:gap-8 w-full max-w-md mx-auto md:mx-0 md:ml-32">

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-black">4+</h3>
              <p className="uppercase tracking-widest text-xs sm:text-sm text-black/70">
                Internships
              </p>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-black">10+</h3>
              <p className="uppercase tracking-widest text-xs sm:text-sm text-black/70">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-black">
                Full-Stack
              </h3>
              <p className="uppercase tracking-widest text-xs sm:text-sm text-black/70">
                Experience
              </p>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-black">
                CSE Student
              </h3>
              <p className="uppercase tracking-widest text-xs sm:text-sm text-black/70">
                Background
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== WHAT I KNOW ===================== */}
     <section
  id="skills"
  className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-20"
>
  <hr className="border-t border-black mb-14" />

  <div className="max-w-6xl mx-auto text-center">

    {/* Heading */}
    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase text-black mb-4">
      What I Know
    </h2>

    <p className="italic text-sm sm:text-base text-black mb-12">
      Crazy software developer who wants to explore every tech stack
    </p>

    {/* Skills Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-0 border border-black">

      {[
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "MongoDB",
        "MySQL",
        "Prisma",
        "Python",
        "C++",
        "Git",
        "GitHub",
        "Tailwind CSS",
        "Bootstrap",
        "Pandas",
        "Docker"
      ].map((skill, i) => {
        const isBlack = i % 2 === 1;

        return (
          <div
            key={skill}
            className={`
              flex items-center justify-center
              py-6
              text-sm
              sm:text-base
              font-medium
              uppercase
              
        

              transition-all
              duration-300

              ${
                isBlack
                  ? "bg-black text-white hover:bg-white hover:text-black"
                  : "bg-white text-black hover:bg-black hover:text-white"
              }
            `}
          >
            {skill}
          </div>
        );
      })}

    </div>
  </div>
</section>

    </>
  );
};

export default About;
