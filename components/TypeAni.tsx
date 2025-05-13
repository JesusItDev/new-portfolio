"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

interface TypeAniProps {
  content: Array<string>; // or a more specific type if you know what it will be
}

const TypeAni = (content: TypeAniProps) => {
  return (
    <TypeAnimation
      sequence={[
        2000,
        "C:\\" + content.content[0],
        5000,
        "C:\\" + content.content[1],
        5000,
        "C:\\" + content.content[2],
        5000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default TypeAni;
