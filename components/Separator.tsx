"use client";

import { motion } from "framer-motion";
import { Fullscreen } from "lucide-react";
import React from "react";

const Separator = () => {
  return (
    <div className="my-10 text-primary-orange">
      <motion.div>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 0 100vw"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: [
              "15, 120, 25, 25",
              "16, 25, 92, 92",
              "40, 250, 22, 22",
            ],
            translateX: ["0%", "3%", "0%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="h-4 w-full"
        >
          <line x1={0} y1={12} x2="100vw" y2={12} />
        </motion.svg>

        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 0 100vw"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: [
              "15, 120, 25, 25",
              "16, 25, 92, 92",
              "40, 250, 22, 22",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="h-4 w-full"
        >
          <line x1="100vw" y1={12} x2={0} y2={12} />
        </motion.svg>

        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 0 100vw"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: [
              "15, 120, 25, 25",
              "16, 25, 92, 92",
              "40, 250, 22, 22",
            ],
            translateX: ["0%", "3%", "0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="h-4 w-full"
        >
          <line x1="100vw" y1={12} x2={0} y2={12} />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Separator;
