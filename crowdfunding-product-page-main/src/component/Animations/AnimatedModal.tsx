
import { motion } from "framer-motion";
import React from "react";
interface TypeProp{
    children:React.ReactNode;
}
export default function AnimatedModal({children}:TypeProp) {
  return (
    <motion.div
    initial={{scale:0.50}}
    animate={{scale:1}}
    exit={{scale:0.50}}
    transition={{duration:0.56,ease: "easeInOut"}}
    
    className="bg-white overflow-y-auto h-[30rem] flex items-start flex-col p-6 rounded-lg shadow-lg max-w-3xl w-full"
    >
        {children}
    </motion.div>
  )
}
