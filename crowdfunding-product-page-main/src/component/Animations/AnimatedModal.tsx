
import { motion } from "framer-motion";
import React from "react";
interface TypeProp{
    children:React.ReactNode;
    className:string;
}
export default function AnimatedModal({children ,className}:TypeProp) {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:0.45,ease: "linear"}}
    className={className}
    >
        {children}
    </motion.div>
  )
}
