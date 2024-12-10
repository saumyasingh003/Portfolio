import React from "react";
import karens from "../assets/karens.jpeg";
import vidyasanskar from "../assets/vidyasanskar.png";
import amity from "../assets/amity.jpeg";
import { MdSchool } from "react-icons/md";
const Timeline = () => {
  return (
    <div className="  mt-28 flex justify-start md:justify-center w-full">
      <ol className="sm:items-center sm:flex-row flex flex-col  ">
        <li className="relative   w-full group z-40">
          <div className="flex flex-col md:flex-row md:gap-0 gap-2 items-center">
            <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <MdSchool className="md:h-8 md:w-8 h-12 w-12 text-blue-800" />
            </div>
            <div className=" sm:flex-row flex   md:w-[30vw] bg-gray-200 md:h-1 h-[26vh] w-1 dark:bg-gray-700"></div>
          </div>

          <div className="md:hidden group-hover:block absolute max-[768px]:top-0 max-[768px]:left-full ml-4 md:ml-0 mt-3 sm:pe-8 z-40">
            <div className="max-w-lg w-[60vw] md:w-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="md:w-[18vw] w-[60vw] h-[20vh]  rounded-t-lg"
                  src={karens}
                  alt=""
                />
              </a>
              <div className="p-2">
                <a href="#">
                  <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                    St. Karen's Secondary School ,Patna
                  </h5>
                  <h5 className="mb-2 text-sm font-bold   text-gray-900 dark:text-white">
                    10th - 86%
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </li>

        <li className="relative mb-6 sm:mb-0 w-full group z-40">
          <div className="flex md:flex-row flex-col items-center">
            <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <MdSchool className="md:h-8 md:w-8 h-12 w-12 text-blue-800" />
            </div>
            <div className=" sm:flex-row flex   md:w-[30vw] bg-gray-200 md:h-1 h-[26vh] w-1 dark:bg-gray-700"></div>
          </div>

          <div className="md:hidden group-hover:block absolute mt-3 sm:pe-8 z-40 max-[768px]:top-0 max-[768px]:left-full md:ml-0 ml-3">
            <div className="max-w-lg w-[60vw] md:w-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="md:w-[18vw] w-[60vw] h-[20vh] rounded-t-lg"
                  src={vidyasanskar}
                  alt=""
                />
              </a>
              <div className="p-2">
                <a href="#">
                  <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                    Vidya Sanskar School ,Patna
                  </h5>
                  <h5 className="mb-2 text-sm font-bold   text-gray-900 dark:text-white">
                    12th - 77%
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </li>

        <li className="relative mb-44   sm:mb-0 w-full group z-40  ">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <MdSchool className="md:h-8 md:w-8 h-12 w-12 text-blue-800" />
            </div>
            <div className="hidden sm:flex bg-gray-200 h-1 dark:bg-gray-700"></div>
          </div>

          <div className="md:hidden group-hover:block absolute md:left-[-470%] left-full ml-3 md:ml-0 max-[768px]:top-0  mt-3 sm:pe-8 z-40 w-[20vw] ">
            <div className="max-w-lg md:w-full w-[60vw] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="md:w-[18vw] w-[60vw] h-[20vh] rounded-t-lg"
                  src={amity}
                  alt=""
                />
              </a>
              <div className="p-2">
                <a href="#">
                  <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                    Amity University,Patna
                  </h5>
                  <h5 className="mb-2 text-sm font-bold   text-gray-900 dark:text-white">
                    Current CGPA - 8.3
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Timeline;
