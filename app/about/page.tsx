import TypeAboutMe from "@/components/TypeAboutMe";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";

const AboutMe = () => {
  return (
    <div className="md:h-[calc(100vh-6rem)] h-full ">
      <div className="text-center lg:pt-14 pt-10">
        <h2 className="text-3xl font-semibold md:text-6xl">
          I'm a{" "}
          <span className="text-primary-orange">
            <TypeAboutMe content={["Software Engineer", "Web Developer"]} />
          </span>
        </h2>
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Stats />
      </div>
    </div>
  );
};

export default AboutMe;
