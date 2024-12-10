import { useEffect, useRef } from "react";
import mainimage from "../Components/assets/mainimage.png";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Navbar from "./Navbar/Navbar";
import background from "../Components/assets/bg.png";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Experience from "./Experience";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";


const Home = () => {
  const scrollRef = useRef(null);
  const scroll = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scroll.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      return () => scroll.current.destroy();
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const element = scrollRef.current.querySelector("h1");
      if (element) {
        element.style.transform = "translateY(0px)";
      }
    };

    // Add scroll event listener
    document.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener on component unmount
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [text] = useTypewriter({
    words: [
      "Web Development",
      "Front-end Development",
      "Web Designing",
      "Back-end Development",
    ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div>
      <div
        id="main-container"
        ref={scrollRef}
        data-scroll-container
        className="z-30"
      >
        <Navbar />

        {/* home */}
        <div className="relative flex md:flex-row flex-col-reverse max-[768px]:gap-10 md:justify-between w-full h-full md:h-[100vh] justify-center items-center md:overflow-x-hidden">
          {/* Background Image */}
          <img
            src={background}
            alt="Background"
            className="hidden md:block absolute inset-0 w-full h-full object-cover -z-10"
          />
          <div>
            <div className="absolute inset-x-0 bottom-0">
              <div className="w-full h-24 rounded-t-full"></div>
            </div>

            <div className="w-full h-full flex flex-col  justify-center items-center  text-gray-900 relative md:ml-40 mb-72  md:mb-[5rem]">
              <p className="mb-1 font-sansita-bold lg:text-7xl md:text-5xl text-3xl relative">
                Hi!, I am
              </p>
              <p className=" mb-2 font-sansita-bold lg:text-7xl md:text-5xl text-3xl ">
                Saumya Singh
              </p>
              <div className="text-center absolute top-full  w-full md:mt-10 ">
                <h1 className="md:text-4xl text-xl font-bold h-20    text-center">
                  I am into {"<"}{" "}
                  <span className="text-teal-600 font-bold">{text}</span>
                  <Cursor cursorStyle="/>" />
                </h1>

                <div className="flex justify-center space-x-4 md:mt-5">
                  <a
                    href="#contact"
                    className="bg-yellow-400 hover:text-black text-gray-900 font-bold md:py-5 h-fit py-2 flex items-center  md:px-10 px-6 rounded-2xl md:rounded-full"
                  >
                    Contact Me
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1zzzU-c37ptE9RRmqa_9p-yZkSar1qtKM/view?usp=drive_link"
                    target="_blank"
                    className="bg-yellow-400 hover:text-black text-gray-900 font-bold md:py-5 h-fit py-2 flex items-center  md:px-10 px-6 rounded-2xl md:rounded-full"
                  >
                    Download CV
                  </a>
                </div>
              <div className="flex space-x-4  justify-center mt-4 text-center">
                <a
                  href="https://www.linkedin.com/in/saumyasingh003/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="text-gray-900 text-3xl" />
                </a>
                <a
                  href="https://github.com/saumyasingh003"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-gray-900 text-3xl" />
                </a>
              </div>
              </div>

            </div>
          </div>

          <div className="mt-32">
            <div className="md:w-1/2 w-full flex justify-center">
              <div
                className="md:ml-auto md:mr-48"
                data-scroll
                data-scroll-speed="4"
                data-scroll-direction="horizontal"
              >
                <div className="relative md:overflow-hidden bg-gray-900 border  border-blue-500 rounded-t-full md:w-[30vw] w-[70vw] h-[20rem] max-w-sm md:h-[30rem]">
                  <img
                    src={mainimage}
                    alt="Image"
                    className=" h-[20rem] w-[70vw]  rounded-t-full  md:w-[40vw] md:h-[30rem]  object-fit shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
