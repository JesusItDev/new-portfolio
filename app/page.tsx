import Socials from "@/components/Socials";
import CodeLineRetriever from "@/components/CodeLineRetriever";
import { Button } from "@/components/ui/button";
import { silkScreen } from "./layout";
import { MdClose, MdMinimize, MdOutlineSquare } from "react-icons/md";

export default function Home() {
  return (
    <div>
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className=" flex flex-col items-center justify-center align-center h-full">
            <div className="text-center lg:pt-14">
              <h1 className="text-5xl xl:text-7xl font-semibold leading-[1.5]">
                Hello i'm Jesús
              </h1>
              <h2 className="text-2xl xl:text-4xl font-semibold leading-[1.5]">
                <span className="text-primary-orange">Software Engineer</span>
              </h2>
              <div className="w-3/5 mx-auto">
                <p className=" leading-[1.5]  my-5">
                  Computer systems engineer | Web Developer with 3 years of
                  experience in various technical roles, ranging from Software
                  Developer to Project Manager
                </p>
              </div>
              <div className="mb-5">
                <Button variant="outline">Download CV!</Button>
              </div>
              <div className="flex justify-center mb-8">
                <Socials />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full flex-col">
          <span className="spanDivider"></span>
          <span className="spanDivider"></span>
          <span className="spanDivider"></span>
          <span className="spanDivider"></span>
        </div>

        {/* TERMINAL WINDOW */}
        <div className="h-[25px] bg-[#666666] mx-auto my-0 rounded-t-[5px] box-border w-3/4 flex items-end">
          <div
            className={`h-[23px] bg-[#202124] rounded-t-[5px] w-[150px] ml-1 ${silkScreen.variable}`}
          >
            <p className="font-terminal! text-[10px] ml-1">Command Prompt</p>
          </div>
          <div className="flex flex-row ml-auto mr-1 gap-1 mb-1">
            <div>
              <MdMinimize />
            </div>
            <div>
              <MdOutlineSquare />
            </div>
            <div>
              <MdClose />
            </div>
          </div>
        </div>
        <div
          className={`container mx-auto flex bg-[#202124] h-[100px] w-3/4 ${silkScreen.variable}`}
        >
          <div className="font-terminal ml-2 mt-.05">
            <CodeLineRetriever />
          </div>
        </div>
      </section>
    </div>
  );
}
