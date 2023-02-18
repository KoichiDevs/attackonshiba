import React from 'react'

const Container = (props) => {
    return (
        <section className='bg-myblack w-full h-auto py-20'>
            <div className='w-full mx-auto max-w-[1700px] px-10'>
                {props.children}
            </div>
        </section>
    )
}

export default Container