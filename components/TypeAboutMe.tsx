"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

interface TypeAniProps {
  content: Array<string>; // or a more specific type if you know what it will be
}

const TypeAboutMe = (content: TypeAniProps) => {
  return (
    <TypeAnimation
      sequence={[
        "Web Developer",
        4000,
        "Software Engineer",
        4000,
        "Project Manager",
        4000,
        "Mobile Developer",
        4000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};

export default TypeAboutMe;
