import React, { useEffect, useState } from 'react'
import PageHeading from '../../components/PageHeading'
import { NavLink } from 'react-router-dom'
import { FaSearch } from "react-icons/fa"
import Card from './Card';

export default function Blogs() {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    ; (async () => {
      const response = await fetch("/blogs/blogs.json");
      const data = await response.json();
      setBlogs(data);
    })();
  }, [])

  return (
    <>
      <PageHeading text={"Blogs"} />
      <div className='pl-6 py-2 border-b cursor-pointer'>
        <NavLink
          to={"/"}
          className="flex items-center gap-1"
        >
          <span>Home</span>
          <span>&gt;</span>
          <span>Blogs</span>
        </NavLink>
      </div>

      <div className='mt-16 w-full flex items-center justify-center'>
        <div className="w-full max-w-[38rem] h-full flex rounded-full overflow-hidden border border-[var(--main-color)]">
          <input
            className='w-[90%] h-full px-4 py-1 text-xl border-none outline-none'
            type="text"
          />
          <button className='w-[10%] px-4 py-1 flex items-center justify-center bg-[var(--main-color)] outline-none border-none'>
            <FaSearch color='white' />
          </button>
        </div>
      </div>

      <section className='my-12 w-full'>
        <div className='px-0 md:px-4 lg:px-8 xl:px-12 2xl:px-16 flex justify-center flex-wrap gap-4'>
          {
            blogs.map((blog, i) => {
              return (
                <Card key={i} blog={blog} />
              )
            })
          }
        </div>
      </section>
    </>
  )
}
