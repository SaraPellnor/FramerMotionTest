import { motion } from "framer-motion"

const AnimationTwo = () => {
  return (
    <motion.h1
      style={{ color: "lightgreen" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 7, delay: 1 }}>
      Jag är på gång...
    </motion.h1>
  )
}

export default AnimationTwo
