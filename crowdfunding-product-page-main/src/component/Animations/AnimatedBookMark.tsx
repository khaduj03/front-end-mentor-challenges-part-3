import { motion } from "framer-motion";
import React from "react";

type AnimatedBookMarkProps = {
  children: React.ReactNode;
  isMarked: boolean;
  handleClickIsMarked: () => void;
};

export default function AnimatedBookMark({
  children,
  handleClickIsMarked,
  isMarked,
}: AnimatedBookMarkProps) {
  const bookmarkVariants = {
    unmarked: {
      backgroundColor: "#E5E7EB",
      color: "#9CA3AF",
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
    marked: {
      backgroundColor: "#3cb4ac",
      color: "#ffffff",
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  const bookmarkVariantsIcon = {
    unmarked: {
      transition: { type: "spring", stiffness: 500, damping: 30 },
    },
    marked: {
      rotate: 360,
      transition: { type: "spring", stiffness: 500, damping: 30 },
    },
  };

  return (
    <motion.button
      initial="unmarked"
      animate={isMarked ? "marked" : "unmarked"}
      variants={bookmarkVariants}
      whileHover={{ scale: 0.95 }}
      onClick={handleClickIsMarked}
      className={`w-44 h-12 rounded-3xl flex flex-row justify-between items-center ${
        isMarked ? "flex-row-reverse pl-9" : "flex-row pr-10"
      }`}
      aria-label="Bookmark this item"
    >
      <motion.svg
        initial="unmarked"
        animate={isMarked ? "marked" : "unmarked"}
        variants={bookmarkVariantsIcon}
        whileHover={{ scale: 0.95 }}
        width="54"
        height="54"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fill-rule="evenodd">
          <circle fill="#2F2F2F" cx="26" cy="26" r="24" />
          <path
            fill={`${isMarked ? "#fff" : "#3cb4ac"}`}
            d="M23 19v18l5-5.058L33 37V19z"
          />
        </g>
      </motion.svg>
      {children}
    </motion.button>
  );
}
