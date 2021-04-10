import React from "react";
import { motion } from "framer-motion";
import { Heading } from "@chakra-ui/layout";

export function SplitText({ children, ...rest }) {
  let words = children.split(" ");

  return words.map((word, i) => {
    return (
      <div
        key={children + i}
        style={{ display: "inline-block", overflow: "hidden" }}
      >
        <motion.div
          {...rest}
          style={{ display: "inline-block", willChange: "transform" }}
          custom={i}
        >
          {word + (i !== words.length - 1 ? "\u00A0" : "")}
        </motion.div>
      </div>
    );
  });
}

export function SplitTextRight({ children, ...rest }) {
  let words = children.split(" ");
  const MotionHeading = motion(Heading);
  return words.map((word, i) => {
    return (
      <MotionHeading
        {...rest}
        style={{ display: "inline-block", willChange: "transform" }}
        custom={i}
      >
        <div key={children + i} style={{ display: "inline-block" }}>
          {word + (i !== words.length - 1 ? "\u00A0" : "")}
        </div>
      </MotionHeading>
    );
  });
}
