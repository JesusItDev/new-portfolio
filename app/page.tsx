import Socials from "@/components/Socials";
import CodeLineRetriever from "@/components/CodeLineRetriever";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

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

        <div className="mt-5 container mx-auto flex justify-center bg-amber-200 h-[100px]">
          <CodeLineRetriever />
        </div>
      </section>
    </div>
  );
}
