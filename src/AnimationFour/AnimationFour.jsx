import {motion} from "framer-motion"

const AnimationFour = () => {
  return (
    <motion.h1
    style= {{color: "lightblue"}}
    initial={{y: -1500}}
    animate={{y: 0}}
    transition={{
      type: "spring",
      duration: "2",
      delay: "1.5"
    }}>
      ...och här kommer jag!!!!
    </motion.h1>
  )
}

export default AnimationFour
