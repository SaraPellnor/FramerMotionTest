import {motion} from "framer-motion"

const AnimationOne = () => {
  return (
    <motion.h1
    style= {{color: "whitesmoke"}}
    initial={{x: -1500}}
    animate={{x: 0}}
    transition={{
      type: "tween",
      duration: "2",
      delay: "2"
    }}>
      Slajdar in...
    </motion.h1>
  )
}

export default AnimationOne
