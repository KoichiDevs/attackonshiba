import React from 'react'

const Contact = () => {
    return (
        <section className='w-full h-auto bg-bottombg bg-contact py-32 bg-cover overflow-hidden sm:bg-right bg-[center_right_-18rem] border-t-[1.5rem] border-bottombg relative'>
            <div className='max-w-[1700px] mx-auto w-full px-14 flex lg:items-center justify-between lg:flex-row flex-col gap-y-8'>
                <div className='text-main font-aot sm:text-5xl text-3xl'>
                    <h1>For business inquiries and</h1>
                    <h1>proposals, please send us an email</h1>
                    <p className='text-xl font-mono mt-5'>contact@attackonshiba.com</p>
                </div>

                <div className='w-fit h-fit px-10 py-3 bg-main cursor-pointer hover:scale-[1.1] hover:opacity-100 transition-all ease-in-out duration-300 font-bree opacity-70'>
                    <p>Send a message</p>
                </div>

            </div>

        </section>
    )
}

export default Contact
