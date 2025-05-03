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

const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const AnimationObject = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={objectAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 3,
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
