"use client";

import CountUp from "react-countup";

const Stats = () => {
  return (
    <div className="flex flex-row justify-center gap-10 mt-10">
      <div className="text-4xl">
        <CountUp delay={2} end={3} duration={6} />
        <h2>Years of experience</h2>
      </div>
      <div className="text-4xl">
        <CountUp delay={2} end={100} duration={6} />
        <h2>Projects</h2>
      </div>
      <div className="text-4xl">
        <CountUp delay={2} end={100} duration={6} />
        <h2>Code commits</h2>
      </div>
    </div>
  );
};

export default Stats;
