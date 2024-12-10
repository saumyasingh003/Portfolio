import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      {/* navbar */}
      <div className="fixed top-0 w-full flex justify-between items-center px-16 py-5 z-50 bg-transparent ">
        <a
          href="/"
          className="text-2xl text-gray-900 hover:text-gray-600 font-bold"
        >
          It's Saumya
        </a>


        <div className="hidden md:flex space-x-5 text-lg mr-12">
          <a
            href="#about"
            className="relative bg-white  rounded-full shadow-xl px-4  py-2  text-black font-bold text-xl hover:text-black hover:scale-105 mb-4 after:content-[''] after:absolute after:bg-gray-900 after:rounded-full after:w-2 after:h-2 after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-[-8px] after:opacity-0 hover:after:opacity-100 hover:after:bg-gray-900 hover:after:w-3 hover:after:h-3 hover:after:bottom-[-12px] transition-all duration-200"
          >
            About
          </a>
          <a
            href="#projects"
            className="relative bg-white  rounded-full shadow-xl px-4  py-2  text-black  font-bold text-xl hover:text-black hover:scale-105 mb-4 after:content-[''] after:absolute after:bg-gray-900 after:rounded-full after:w-2 after:h-2 after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-[-8px] after:opacity-0 hover:after:opacity-100 hover:after:bg-gray-900 hover:after:w-3 hover:after:h-3 hover:after:bottom-[-12px] transition-all duration-200"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="relative bg-white  rounded-full shadow-xl px-4  py-2  text-black font-bold text-xl hover:text-black hover:scale-105 mb-4 after:content-[''] after:absolute after:bg-gray-900 after:rounded-full after:w-2 after:h-2 after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-[-8px] after:opacity-0 hover:after:opacity-100 hover:after:bg-gray-900 hover:after:w-3 hover:after:h-3 hover:after:bottom-[-12px] transition-all duration-200"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="relative bg-white  rounded-full shadow-xl  px-4  py-2  text-black font-bold text-xl hover:text-black hover:scale-105 mb-4 after:content-[''] after:absolute after:bg-gray-900 after:rounded-full after:w-2 after:h-2 after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-[-8px] after:opacity-0 hover:after:opacity-100 hover:after:bg-gray-900 hover:after:w-3 hover:after:h-3 hover:after:bottom-[-12px] transition-all duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
