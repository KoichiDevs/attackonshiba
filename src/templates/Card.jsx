import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Card = ({ title, subheader, number, message }) => {

    const [ref, inView] = useInView({triggerOnce: true, threshold: 0.8})

    return (
        <motion.div initial={{scale: 0.5, opacity: 0}} animate={ inView ? {scale: 1, opacity: 100} : {}} transition={{duration: 1.3, ease: [.21, 1.03, .27, 1]}} className='md:max-w-[21rem] text-white' ref={ref}>
            <div className="w-full h-14 bg-cardname flex items-center justify-center z-10 relative">
                <p className='font-bree text-xl tracking-wider'>{title}</p>
            </div>
            <div className='w-full h-auto p-8 pb-16 bg-paper bg-cover mt-[-0.6rem] bg-bottom'>
                <div className='text-cardtext font-aot w-full justify-between items-center flex lg:text-3xl text-xl'>
                    <p className='uppercase'>{subheader}</p>
                    <p>{number}</p>
                </div>
                <p className='text-button font-pop text-justify indent-7 mt-6 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
        </motion.div>
    )
}

export default Card