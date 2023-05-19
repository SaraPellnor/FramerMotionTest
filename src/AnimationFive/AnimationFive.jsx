import { motion } from "framer-motion"

const AnimationFive = () => {
    return (
        <motion.div
            style={{
                margin: "7em",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "5em",
                height: "5em",
                backgroundColor: "pink",
                borderRadius: "50%",
                border: "solid 2px whitesmoke",
                boxShadow: "rgba(242, 246, 247, 0.47) 0px 0px 20px 4px"
            }}
            whileHover={{
                rotate: 360,
                scale: [null, 3, 2.7]
            }}
            transition={{
                duration: 1
            }}
        >
            <div
                style={{
                    width: "3em",
                    height: "2em",
                    backgroundColor: "rgb(32, 39, 37)",
                    borderRadius: 20,
                    border: "solid 2px whitesmoke"
                }}></div>
        </motion.div>
    )
}

export default AnimationFive