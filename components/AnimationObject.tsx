import { motion } from "motion/react";

const objectAnimation = {
  initial: {
    left: "0%",
  },
  animate: {
    left: "100%",
  },
  exit: {
    left: ["100%", "0%"],
  },
};

const objectAnimation2 = {
  initial: {
    right: "0%",
  },
  animate: {
    right: "100%",
  },
  exit: {
    right: ["100%", "0%"],
  },
};

const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const AnimationObject = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return index % 2 != 0 ? (
          <motion.div
            key={index}
            variants={objectAnimation2}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-1/6 w-full bg-white relative"
          />
        ) : (
          <motion.div
            key={index}
            variants={objectAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-1/6 w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default AnimationObject;
