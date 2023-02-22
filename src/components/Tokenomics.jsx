import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Tokenomics = () => {

    const [circRef, circView] = useInView({ triggerOnce: true, threshold: 0.5 })

    const [count, setCount] = useState(0)

    useEffect(() => {

        if (circView) {
            setTimeout(() => {
                for (let i = 0; i < 7; i++) {
                    setTimeout(() => {
                        setCount(val => val + 1)
                    }, i * 120)
                }
            }, 500)

        }

    }, [circView])

    return (
        <section className='w-full h-full  py-20 relative md:bg-myblack bg-button'>

            <div className='md:block hidden absolute lg:top-0 top-[-10rem] bottom-0 my-auto w-full bg-button lg:h-[55%] h-[60%] z-0'></div>

            <div className='max-w-[1700px] px-10 flex relative z-10 lg:flex-row flex-col gap-y-6 mx-auto'>
                <div className='w-full flex items-center justify-center'>
                    <div className='lg:w-[22rem] w-[18rem] text-center lg:ml-20'>
                        <h1 className='font-aot text-main lg:text-6xl text-5xl'>Tokenomics</h1>
                        <div className='font-bree text-main lg:text-6xl text-5xl mt-7 flex justify-between'>
                            <div>
                                <h2 className='font-aot text-main lg:text-6xl text-5xl'>{count}%</h2>
                                <p className='lg:text-1xl text-2xl mt-2 text-[#C4B05E]'>Total Tax</p>
                            </div>
        
                            
                        </div>
                    </div>

                </div>
                <div className='w-full flex items-center justify-around overflow-hidden'>
                    <motion.img initial={{ opacity: 0, rotate: 360 }} animate={circView ? { x: ["100%", "0%"], rotate: 0, opacity: 100 } : {}} transition={{ duration: 2, ease: [.21, 1.03, .27, 1] }} src="/token.webp" alt="TokenShiba" className='lg:w-[24rem] w-[15rem]' ref={circRef}></motion.img>
                </div>
            </div>
        </section>
    )
}

export default Tokenomics
