import { motion } from "framer-motion"

const AnimationThree = () => {
  return (
    <motion.h1
      style={{ margin: "1em", color: "yellow" }}
      whileHover={{ scale: [null, 10, 9] }}
      transition={{ duration: 10 }}>
      Hooooovra här!!!
    </motion.h1>
  )
}

export default AnimationThree