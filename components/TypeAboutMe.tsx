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
        2000,
        "Web Developer",
        5000,
        "Software Engineer",
        5000,
        "Project Manager",
        5000,
        "Mobile Developer",
        5000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};

export default TypeAboutMe;
