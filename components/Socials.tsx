import { FaGithub, FaLinkedin } from "react-icons/fa";
const Socials = () => {
  return (
    <div className="flex flex-row gap-3">
      <a
        className="h-9 w-9 rounded-full flex justify-center items-center text-white text-base hover:text-primary-orange hover:transition-all duration-500"
        href="https://github.com/JesusItDev"
        target="_blank"
      >
        <FaGithub size={30} />
      </a>
      <a
        className="h-9 w-9 rounded-full flex justify-center items-center text-white text-base hover:text-primary-orange hover:transition-all duration-500"
        href="https://www.linkedin.com/in/jemmarg"
        target="_blank"
      >
        <FaLinkedin size={30} />
      </a>
    </div>
  );
};

export default Socials;
