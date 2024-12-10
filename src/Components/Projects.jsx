import React from "react";
import airbnb from "../Components/assets/airbnb.png";
import indiaTours from "../Components/assets/indiatours.png";
import medico from "../Components/assets/medico.png";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
const Projects = () => {
  return (
    <div className="mb-40">
      <div
        id="projects"
        className="relative md:w-screen h-full bg-white flex flex-col justify-center md:items-center p-4 md:ml-10 "
      >
        <div className="w-full h-full bg-white">
          <div className="relative text-left  ">
            <h1 className="md:text-6xl text-4xl font-extrabold text-gray-900 ">
              Projects
            </h1>
            <div className="w-1/4 h-1 bg-gray-900 mt-4 text-left"></div>
          </div>

          <div>
            <p className="font-normal text-left italic text-xl">
              SOME OF MY PERSONAL PROJECTS..
            </p>
          </div>
        </div>

        {/* Project Cards Container */}
        <div className="">
          <div className=" flex md:flex-row flex-col justify-center md:gap-20 gap-10  mb-10 m-auto md:mr-20">
            <CardContainer className="inter-var">
              <CardBody className="md:w-96  h-full rounded md:overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl p-6 flex flex-col">
               
                <CardItem
                   translateZ="50"
                   translateX={10}
                  className="px-6 py-4 flex flex-col flex-grow"
                >
                  <a
                    href="https://india-tours.vercel.app"
                    target="_blank"
                    className="font-bold text-xl mb-2 text-black"
                  >
                    IndiaTours!
                  </a>
                  <p className="text-gray-700 text-base flex-grow">
                    React-driven animations designed to create a dynamic and
                    engaging travel experience across whole India.
                  </p>
                </CardItem>
                <CardItem
                  translateZ="100"
                  rotateX={20}
                  rotateZ={-10}
                  className="w-full mt-4"
                >
                  <img
                    className="w-full h-[32vh] object-fit rounded-lg  hover:shadow-xl"
                    src={indiaTours}
                    alt="India Tours"
                  />
                </CardItem>
                <div className="px-6 pt-6 mt-6 pb-2">
                  <CardItem
                    translateZ={20}
                    translateX={-40}
                    as="button"
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-900 hover:text-white transition duration-300"
                  >
                    #diversity
                  </CardItem>
                  <CardItem
                   
                    as="button" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-900 hover:text-white transition duration-300">
                    #culture
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    translateX={40}
                    as="button" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-900 hover:text-white transition duration-300">
                    #adventure
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
            <CardContainer className="inter-var">
              <CardBody className="md:w-[400px] w-96  h-full rounded md:overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl p-6 flex flex-col">
               
                <CardItem
                   translateZ="50"
                   translateX={10}
                  className="px-6 py-4 flex flex-col flex-grow"
                >
                  <a
                    href="https://india-tours.vercel.app"
                    target="_blank"
                    className="font-bold text-xl mb-2 text-black"
                  >
                     Airbnb Clone
                  </a>
                  <p className="text-gray-700 text-base flex-grow">
                  A website where users can explore their next destination, rent accommodations, and list their homes on Airbnb, built using React.
                  </p>
                </CardItem>
                <CardItem
                  translateZ="100"
                  rotateX={20}
                  rotateZ={-10}
                  className="w-full mt-4"
                >
                  <img
                    className="w-full h-[32vh] object-fit rounded-lg  group-hover/card:shadow-xl"
                    src={airbnb }
                    alt="Airbnb Clone"
                  />
                </CardItem>
                <div className="px-6 pt-6 mt-6 pb-2">
                  <CardItem
                    translateZ={20}
                    translateX={-40}
                    as="button"
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-900 hover:text-white transition duration-300"
                  >
                   #destination
                  </CardItem>
                  <CardItem
                   
                    as="button" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-900 hover:text-white transition duration-300">
                    #rent
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    translateX={40}
                    as="button" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-900 hover:text-white transition duration-300">
                    #airbnb
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
            <CardContainer className="inter-var">
              <CardBody className="md:w-[400px] w-96  h-full rounded md:overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl p-6 flex flex-col">
               
                <CardItem
                   translateZ="50"
                   translateX={10}
                  className="px-6 py-4 flex flex-col flex-grow"
                >
                  <a
                    href="https://india-tours.vercel.app"
                    target="_blank"
                    className="font-bold text-xl mb-2 text-black"
                  >
                   Medico
                  </a>
                  <p className="text-gray-700 text-base flex-grow">
                  A website where users can book appointments, admins can manage
                  doctor details (add, view, and delete), access all
                  doctor-related information, and review user feedback.
                  </p>
                </CardItem>
                <CardItem
                  translateZ="100"
                  rotateX={20}
                  rotateZ={-10}
                  className="w-full mt-4"
                >
                  <img
                    className="w-full h-[32vh] object-fit rounded-lg  group-hover/card:shadow-xl"
                    src={medico}
                    alt="Medico"
                  />
                </CardItem>
                <div className="px-6 pt-6 mt-6 pb-2">
                  <CardItem
                    translateZ={20}
                    translateX={-40}
                    as="button"
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-900 hover:text-white transition duration-300"
                  >
                    #hospital
                  </CardItem>
                  <CardItem
                   
                    as="button" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-900 hover:text-white transition duration-300">
                    #appointments
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    translateX={40}
                    as="button" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-900 hover:text-white transition duration-300">
                    #doctor
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
