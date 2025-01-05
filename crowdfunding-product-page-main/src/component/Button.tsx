import { motion } from "framer-motion";
interface typeButton{
    onClick:()=>void;
    className:string;
    name:string;
    isHoverable:boolean;
}
export default function Button({onClick , className ,name ,isHoverable }:typeButton) {
  return (
    <div>
      <motion.button
        whileHover={isHoverable?{ scale: 0.95 }:{scale:1}}
        className={className}
        onClick={onClick}
      >
       {name}
      </motion.button>
    </div>
  );
}
