import React, { useState, useEffect } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { RiCloseFill } from 'react-icons/ri'
import { motion } from 'framer-motion'

const Nav = () => {


    const list = [
        {
            label: 'about',
            target: '#about'
        },
        {
            label: 'tokenomics',
            target: '#tokenomics'
        },
        {
            label: 'roadmap',
            target: '#roadmap'
        },
        {
            label: 'Whitepaper',
            target: 'https://www.attackonshiba.com/atos-whitepaper.pdf'
        },

    ]
    const [active, setActive] = useState(false)

    const setToggle = () => {
        setActive(curr => !curr)
    }

    const [scrolled, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        if (position >= 100) {
            setScrollPosition(true);
        } else {
            setScrollPosition(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 100 }} transition={{ duration: 0.7 }} className='w-full h-auto lg:h-auto px-10 py-4 text-white z-50 top-0 left-0 absolute' style={active ? { position: "fixed" } : {}}>
            <div className="absolute w-full h-[120%] top-0 left-0 z-0 shadow-nav opacity-70 transition-all ease-in-out duration-300" style={scrolled ? {} : { opacity: "0%" }}></div>
            <div className="max-w-[1600px] w-full h-auto flex items-center justify-end mx-auto z-10 relative">

                <ul className={`items-center flex lg:relative fixed right-0 lg:w-auto lg:h-auto w-full h-full top-0 justify-center lg:justify-start flex-col lg:flex-row bg-[#111111] lg:bg-transparent gap-y-20 text-xl lg:text-sm opacity-0 transition-all ease-in-out duration-300 lg:opacity-100 lg:pointer-events-auto pointer-events-none font-saira ${scrolled ? "gap-x-12" : "gap-x-16"}`} style={active ? { opacity: "100%", pointerEvents: "auto" } : {}}>

                    <li className='absolute lg:hidden block text-4xl top-10 right-10'><RiCloseFill onClick={setToggle} /></li>
                    {list.map((items) => {
                        return (
                            <div className='flex flex-col items-center gap-y-[5px] select-none' key={items} >
                                <a href={`${items.target}`} className="peer">
                                    <li className="uppercase font-medium cursor-pointer peer hover:text-header transition-colors ease-in-out duration-300" onClick={() => { setActive(false) }}>{items.label}</li>
                                </a>
                                <div className='h-[2px] w-0 bg-header peer-hover:w-full transition-all ease-in-out duration-300'></div>
                            </div>
                        )
                    })}
                </ul>

                <HiMenuAlt3 className='text-4xl block lg:hidden' onClick={setToggle} />
            </div>
        </motion.nav>
    )
}

export default Nav