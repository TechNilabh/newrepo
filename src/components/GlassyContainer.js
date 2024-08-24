
"use client";
 
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
// import Link from "next/link";
 
export function GlassyContainer() {
  return (
    <>
    
    <CardContainer className="inter-var d-flex justify-content-evenly">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Memories
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Relieve the days of play and glee. Nostalgia is hell of a drug.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="memory_1.jpg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
         
          <CardItem
            translateZ={20}
            as="button" id ="access"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold" href="./memories" 
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Memories
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Relieve the days of play and glee. Nostalgia is hell of a drug.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="memory_1.jpg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
         
          <CardItem
            translateZ={20}
            as="button" id ="access"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold" href="./memories" 
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Memories
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Relieve the days of play and glee. Nostalgia is hell of a drug.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="memory_1.jpg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
         
          <CardItem
            translateZ={20}
            as="button" id ="access"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold" href="./memories" 
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Memories
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Relieve the days of play and glee. Nostalgia is hell of a drug.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="memory_1.jpg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
         
          <CardItem
            translateZ={20}
            as="button" id ="access"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold" href="./memories" 
          >
            Explore
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    </>
  );
}


// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './GlassyContainer.css'; // Ensure to create or use an existing CSS file

// const GlassyContainer = ({ imageSrc, hoverImageSrc, text, link }) => {
//   return (
//     <div className="glass container relative flex items-center justify-center w-full max-w-lg h-52 mb-4">
//       <img src={imageSrc} alt="Default Image" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 default-content" />
//       <img src={hoverImageSrc} alt="Hover Image" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 hover-content" />
//       <NavLink to={link} className="relative z-10 text-center text-white">
//         <div className="content">
//           <h2 className="text-2xl font-bold">{text}</h2>
//         </div>
//       </NavLink>
//     </div>
//   );
// };

