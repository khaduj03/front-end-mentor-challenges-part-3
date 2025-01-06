import { motion } from "framer-motion";

interface TypeButton {
  onClick: () => void;
  className: string;
  name: string;
  isHoverable: boolean;
}

export default function Button({ onClick, className, name, isHoverable }: TypeButton) {
  return (
      <motion.button
        whileHover={isHoverable ? { scale: 0.95 } : {}}
        className={className}
        onClick={isHoverable ? onClick : undefined} 
      >
        {name}
      </motion.button>
  );
}
