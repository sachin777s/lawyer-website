import React from 'react'

export default function PageHeading({ text }) {
    return (
        <section className='w-full min-h-[18rem] bg-[url(/images/heading-bg.jpg)] flex items-center justify-center'>
            <h1 className='min-h-[18rem] w-full text-center text-5xl text-white font-semibold backdrop-brightness-[0.3] flex items-center justify-center'>
                {text}
            </h1>
        </section>
    )
}
