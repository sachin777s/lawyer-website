import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Card({ research }) {
    return (
        <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border border-2 rounded-xl w-96">
            <div
                class="relative h-56 mx-4 mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <img
                    className='h-full'
                    src={research.imgUrl}
                    alt="card-image"
                />
            </div>
            <div class="p-6">
                <h5 class="block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {research.title}
                </h5>
                <p class="block text-base antialiased leading-relaxed text-inherit">
                    {research.content.slice(0, 100)}...
                </p>
            </div>
            <div class="p-6 pt-0">
                <NavLink
                    to={`/research-details/${research.id}`}
                    className="align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[var(--main-color)] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                >
                    Read More
                </NavLink>
            </div>
        </div>
    )
}
