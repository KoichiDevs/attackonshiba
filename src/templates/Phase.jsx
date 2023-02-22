import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Phase = ({ text, content }) => {

    const [ref, inView] = useInView()
    return (
        <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={inView ? { scale: 1, opacity: 100 } : {}} transition={{ duration: 0.3 }} className='w-[20rem] h-[25rem] relative' ref={ref}>
            <img src="/paper.webp" alt="Paper" className='w-full object-fit h-full absolute z-0'></img>
            <div className="w-full h-full p-16 z-10 relative">
                <h1 className='font-aot text-center absolute top-[3px] left-0 right-0 mx-auto text-button text-3xl'>
                    {text}
                </h1>
                <div className='text-button text-left text-sm flex flex-col gap-y-[3px] font-pop my-auto h-fit absolute top-0 bottom-0 max-w-[11.6rem]'>
                    {content}
                </div>
            </div>
        </motion.div>
    )
}

export default Phase