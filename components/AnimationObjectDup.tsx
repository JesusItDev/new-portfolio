import { motion } from "motion/react";

const objectAnimation2 = {
  initial: {
    right: "50%",
  },
  animate: {
    right: "100%",
  },
  exit: {
    right: ["100%", "50%"],
  },
};

const reverseIndex = (index: number) => {
  const totalSteps = 4;
  return totalSteps - index - 1;
};

const AnimationObjectDup = () => {
  return (
    <>
      {[...Array(4)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={objectAnimation2}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(-index) * 0.05,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default AnimationObjectDup;
