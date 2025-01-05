
import { motion } from "framer-motion";
import React from "react";
interface TypeProp{
    children:React.ReactNode;
    className:string;
}
export default function AnimatedModal({children ,className}:TypeProp) {
  return (
    <motion.div
    initial={{scale:0.50}}
    animate={{scale:1}}
    exit={{scale:0.50}}
    transition={{duration:0.56,ease: "easeInOut"}}
    className={className}
    >
        {children}
    </motion.div>
  )
}
