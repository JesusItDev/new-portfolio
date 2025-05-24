import { FaReact, FaNodeJs } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";

const Skills = () => {
  return (
    <div className="h-5/12 w-full mx-auto flex flex-row flex-wrap justify-center gap-2 mt-10 md:h-2/6 border border-blue-400">
      <div className="border border-amber-300 h-6/12 w-5/12 md:w-2/12 md:h-full">
        <TbBrandTypescript className="w-full h-full" />
      </div>
      <div className="border border-amber-300 h-6/12 w-5/12 md:w-2/12 md:h-full">
        <FaReact className="w-full h-full" />
      </div>
      <div className="border border-amber-300 h-6/12 w-5/12 md:w-2/12 md:h-full">
        <FaNodeJs className="w-full h-full" />
      </div>
      <div className="border border-amber-300 h-6/12 w-5/12 md:w-2/12 md:h-full">
        <RiNextjsLine className="w-full h-full" />
      </div>
    </div>
  );
};

export default Skills;
