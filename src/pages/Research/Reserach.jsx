import React, { useEffect, useState } from 'react'
import PageHeading from '../../components/PageHeading'
import { NavLink } from 'react-router-dom'
import { FaSearch } from "react-icons/fa"
import Card from './Card';

export default function Research() {

  const [research, setResearch] = useState([]);
  const [searchedResearch, setsearchedResearch] = useState([])

  const [searchQuery, setSearchQuery] = useState("");

  //For search research
  useEffect(() => {
    const searchedResearch = research.filter((singleResearch) => {
      const title = singleResearch.title.toLowerCase();
      return title.includes(searchQuery.toLowerCase());
    })
    setsearchedResearch(searchedResearch);
  }, [searchQuery]);

  useEffect(() => {
    ; (async () => {
      const response = await fetch("/research/research.json");
      const data = await response.json();
      setResearch(data);
      setsearchedResearch(data);
    })();
  }, [])

  return (
    <>
      <PageHeading text={"Research"} />
      <div className='pl-6 py-2 border-b cursor-pointer'>
        <NavLink
          to={"/"}
          className="flex items-center gap-1"
        >
          <span>Home</span>
          <span>&gt;</span>
          <span>Research</span>
        </NavLink>
      </div>

      <div className='mt-16 w-full flex items-center justify-center'>
        <div className="w-full max-w-[38rem] h-full flex rounded-full overflow-hidden border border-[var(--main-color)]">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
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
            searchedResearch.length !== 0 ?
              searchedResearch.map((research, i) => {
                return (
                  <Card key={i} research={research} />
                )
              })
              : <h1 className='text-3xl font-semibold'>...Oops! No Search Matched</h1>
          }
        </div>
      </section>
    </>
  )
}
