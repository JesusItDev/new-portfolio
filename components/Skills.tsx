"use client";

import React, { useState, useEffect } from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { motion } from "framer-motion";

const Skills = () => {
  const iconsArray = [
    <TbBrandTypescript className="w-full h-full" />,
    <FaReact className="w-full h-full" />,
    <FaNodeJs className="w-full h-full" />,
    <RiNextjsLine className="w-full h-full" />,
  ];

  const [icon, setIcon] = useState(
    <TbBrandTypescript className="w-full h-full" />
  );
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setIcon(iconsArray[index]);
      index = (index + 1) % iconsArray.length;
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-5/12 w-full mx-auto flex flex-row flex-wrap justify-center gap-2 mt-10 md:h-2/6">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeatDelay: 6, repeat: Infinity }}
        className="h-5/12 w-5/12 max-h-36 max-w-36 md:h-full md:w-2/13 md:max-h-56 md:max-w-56"
      >
        {icon}
      </motion.div>

      <div
        className={`h-5/12 w-5/12 max-h-36 max-w-36 md:h-full md:w-2/13 md:max-h-56 md:max-w-56 ${
          animate ? "" : ""
        }`}
      >
        {icon}
        {/* <FaReact className="w-full h-full" /> */}
      </div>
      <div
        className={`h-5/12 w-5/12 max-h-36 max-w-36 md:h-full md:w-2/13 md:max-h-56 md:max-w-56 ${
          animate ? "" : ""
        }`}
      >
        {icon}
        {/* <FaNodeJs className="w-full h-full" /> */}
      </div>
      <div
        className={`h-5/12 w-5/12 max-h-36 max-w-36 md:h-full md:w-2/13 md:max-h-56 md:max-w-56 ${
          animate ? "" : ""
        }`}
      >
        {icon}
        {/* <RiNextjsLine className="w-full h-full" /> */}
      </div>
    </div>
  );
};

export default Skills;
