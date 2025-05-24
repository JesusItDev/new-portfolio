import { FaReact, FaNodeJs } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import React, { useState, useEffect } from "react";

const Skills = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-5/12 w-full mx-auto flex flex-row flex-wrap justify-center gap-2 mt-10 md:h-2/6">
      <div className="h-5/12 w-5/12 max-h-36 max-w-36 md:h-full md:w-2/13 md:max-h-56 md:max-w-56">
        <TbBrandTypescript className="w-full h-full" />
      </div>
      <div className="h-5/12 w-5/12 max-h-36 max-w-36 md:h-full md:w-2/13 md:max-h-56 md:max-w-56">
        <FaReact className="w-full h-full" />
      </div>
      <div className="h-5/12 w-5/12 max-h-36 max-w-36 md:h-full md:w-2/13 md:max-h-56 md:max-w-56">
        <FaNodeJs className="w-full h-full" />
      </div>
      <div className="h-5/12 w-5/12 max-h-36 max-w-36 md:h-full md:w-2/13 md:max-h-56 md:max-w-56">
        <RiNextjsLine className="w-full h-full" />
      </div>
    </div>
  );
};

export default Skills;
