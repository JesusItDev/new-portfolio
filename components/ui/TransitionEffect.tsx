"use client";

import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import AnimationObject from "../AnimationObject";

const TransitionEffect = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex flex-col">
            <AnimationObject />
          </div>
          <motion.div
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
            }}
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default TransitionEffect;
