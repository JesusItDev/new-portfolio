"use client";

import { AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import AnimationObject from "../AnimationObject";
import AnimationObjectDup from "../AnimationObjectDup";

const TransitionEffect = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex flex-col">
            <AnimationObject />
            {/* <AnimationObjectDup /> */}
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default TransitionEffect;
