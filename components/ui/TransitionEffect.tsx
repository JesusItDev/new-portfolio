"use client";

import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

const TransitionEffect = () => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <div className="h-screen w-screen fixed top-0 left-0 right-0 z-40 flex pointer-events-none"></div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionEffect;
