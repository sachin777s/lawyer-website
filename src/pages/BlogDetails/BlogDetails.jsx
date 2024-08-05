import React, { useEffect, useState } from 'react'
import PageHeading from '../../components/PageHeading'
import { NavLink, useParams } from 'react-router-dom'

export default function BlogDetails() {

    const params = useParams();
    const [blog, setBlog] = useState({});

    useEffect(() => {
        ; (async () => {
            const response = await fetch("/blogs/blogs.json");
            const data = await response.json();
            const id = params.id;
            setBlog(data[id - 1]);
        })();
    }, [])

    return (
        <>
            <PageHeading text={"Blog Details"} />
            <div className='py-2 border-b cursor-pointer'>
                <NavLink
                    to={"/"}
                    className="flex items-center gap-1"
                >
                    <NavLink to={"/"}>Home</NavLink>
                    <span>&gt;</span>
                    <NavLink to={"/blogs"}>Blogs</NavLink>
                </NavLink>
            </div>
            <div className="mt-16" >
                <div className='flex items-center justify-center'>
                    <img
                        className='px-0 md:px-4 lg:px-8 xl:px-12 2xl:px-16 w-full max-w-[52rem] rounded-xl'
                        src={blog.imgUrl}
                        alt=""
                    />
                </div>
                <h1 className='max-w-[72rem] mt-8 mx-auto font-semibold text-center text-3xl md:text-5xl'>
                    {blog.title}
                </h1>
                <p className='text-xl mt-6 mb-12 mx-auto max-w-[72rem] text-center'>
                    {blog.content}
                </p>
            </div>
        </>
    )
}
