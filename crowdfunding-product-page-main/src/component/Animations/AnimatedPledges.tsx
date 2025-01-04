
import { motion } from "framer-motion";

export interface TypeProp{
    children:React.ReactNode

}

export default function AnimatedPledges({children }:TypeProp ) {
  return (
    <motion.div
    initial={{x:-100,opacity:0}}
    animate={{x:1,opacity:1}}
    transition={{duration:0.40}}
    >
        {children}
    </motion.div>
  )
}
