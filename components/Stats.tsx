"use client";

import CountUp from "react-countup";

const Stats = () => {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:justify-center gap-10 mt-5 md:mt-15">
      {/* <div className="w-full mx-auto md:w-auto"> */}
      <div className="text-2xl md:text-4xl text-center md:text-left">
        <CountUp
          className="text-primary-orange text-3xl md:text-4xl"
          delay={2}
          end={40}
          duration={6}
        />
        <h2>
          Projects
          <br />
          made
        </h2>
      </div>
      <div className="text-2xl md:text-4xl text-center md:text-left">
        <CountUp
          className="text-primary-orange text-3xl md:text-4xl"
          delay={2}
          end={500}
          duration={6}
        />
        <h2>
          Code <br />
          commits
        </h2>
      </div>
      <div className="text-2xl md:text-4xl text-center md:text-left">
        <CountUp
          className="text-primary-orange text-3xl md:text-4xl"
          delay={2}
          end={3}
          duration={6}
        />
        <h2>
          Years of <br />
          experience
        </h2>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Stats;
