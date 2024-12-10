import React from "react";
import telephone from "../Components/assets/telephone.png";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import Marketing from "../Components/assets/Marketing.mp4";

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative w-screen h-full  flex flex-col justify-center items-center md:p-0 p-4  md:ml-20 mt-20"
    >
      <div className="w-full h-full bg-white">
        <div className="flex md:flex-row flex-col md:justify-between md:items-start mb-6">
          {/* Left content */}
          <div className="md:w-1/2 w-full">
            <h1 className="md:text-6xl text-3xl font-extrabold text-gray-900 mb-4">
              Contact Me
            </h1>
            <p className="uppercase mt-4 text-2xl text-gray-400 mb-10">
              Discuss a project or just want to say hi? My inbox is open for all
            </p>
            <a
              href="mailto:saumyasingh98982@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:text-5xl text-2xl text-gray-600 hover:text-black block"
            >
              saumyasingh98982@gmail.com
            </a>

            <div className="flex space-x-4 mt-4 text-center mb-10">
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
              <a
                href="mailto:saumyasingh98982@gmail.com"
                className="icon-button google"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className="text-gray-900 text-3xl" />
              </a>
            </div>
          </div>

          {/* Right video */}
          <div className="hidden w-1/2 md:flex justify-center -mt-20">
            <video
              src={Marketing}
              alt="Contact video"
              className="md:w-[400px] w-72 h-72 md:h-[400px] object-cover bg-black"
              autoPlay
              loop
              muted
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
