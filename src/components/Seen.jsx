import React from 'react'
import SeenTemplate from '../templates/Seen'

const Seen = () => {

    const imglist = [
        'Benzinga',
        'Bing',
        'Bloomberg',
        'Cnbc',
        'DigitalJournal',
        'Google',
        'Marketwatch',
        'Medium',
        'Yahoo',
    ]

    return (
        <div className="bg-bottombg w-full py-20">
            <div className="text-5xl font-aot text-main text-center">As seen on:</div>

            <div className="flex w-fit mx-auto gap-16 flex-wrap items-center justify-center mt-20 px-20">
                {imglist.map((items, i) => {
                    return (
                        <SeenTemplate img={items} key={i} />
                    )
                })}
            </div>
        </div>
    )
}

export default Seen