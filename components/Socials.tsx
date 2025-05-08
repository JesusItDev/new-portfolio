import { FaGithub, FaLinkedin } from "react-icons/fa";
const Socials = () => {
  return (
    <div className="flex flex-row gap-3">
      <a href="https://github.com/JesusItDev" target="_blank">
        <FaGithub size={30} />
      </a>
      <a href="www.linkedin.com/in/jemmarg" target="_blank">
        <FaLinkedin size={30} />
      </a>
    </div>
  );
};

export default Socials;
