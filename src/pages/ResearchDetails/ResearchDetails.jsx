import React, { useEffect, useState } from 'react'
import PageHeading from '../../components/PageHeading'
import { NavLink, useParams } from 'react-router-dom'

export default function ResearchDetails() {

    const params = useParams();
    const [research, setResearch] = useState({});

    useEffect(() => {
        ; (async () => {
            const response = await fetch("/research/research.json");
            const data = await response.json();
            const id = params.id;
            setResearch(data[id - 1]);
        })();
    }, [])

    return (
        <>
            <PageHeading text={"Research Details"} />
            <div className='py-2 border-b cursor-pointer'>
                <NavLink
                    to={"/"}
                    className="flex items-center gap-1"
                >
                    <NavLink to={"/"}>Home</NavLink>
                    <span>&gt;</span>
                    <NavLink to={"/research"}>Research</NavLink>
                    <span>&gt;</span>
                    <NavLink to={"/research-details"}>Research Details</NavLink>
                </NavLink>
            </div>
            <div className="mt-16" >
                <div className='flex items-center justify-center'>
                    <img
                        className='px-0 md:px-4 lg:px-8 xl:px-12 2xl:px-16 w-full max-w-[52rem] rounded-xl'
                        src={research.imgUrl}
                        alt=""
                    />
                </div>
                <h1 className='max-w-[72rem] mt-8 mx-auto font-semibold text-center text-3xl md:text-5xl'>
                    {research.title}
                </h1>
                <p className='text-xl mt-6 mb-12 mx-auto max-w-[72rem] text-center'>
                    {research.content}
                </p>
            </div>
        </>
    )
}
