import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Phase = ({ text }) => {

    const [ref, inView] = useInView()
    return (
        <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={inView ? { scale: 1, opacity: 100 } : {}} transition={{ duration: 0.3 }} className='w-[20rem] h-[25rem] relative' ref={ref}>
            <img src="/paper.webp" alt="Paper" className='w-full object-fit h-full absolute z-0'></img>
            <div className="w-full h-full p-16 z-10 relative">
                <h1 className='font-rye text-center absolute top-0 left-0 right-0 mx-auto text-button text-3xl uppercase'>
                    {text}
                </h1>
                <p className='text-button text-center font-pop'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                </p>
            </div>
        </motion.div>
    )
}

export default Phase