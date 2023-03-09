import React from 'react'
import { motion } from 'framer-motion'

const SeenTemplate = ({ img }) => {
    return (
        <motion.div whileInView={{opacity: [0, 100], scale: [0.5, 1]}} transition={{duration: 0.6}} className="bg-[#4a2013] h-28 items-center flex p-10 rounded-lg shadow-xl">
            <img src={`/seen/${img}.webp`} alt={img} className="w-24" />
        </motion.div>
    )
}

export default SeenTemplate