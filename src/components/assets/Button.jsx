import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Button({ className, onClick, type, isLink, to, children }) {
    return (
        <>
            {
                isLink
                    ? <NavLink
                        to={to}
                        className={`relative inline-flex items-center px-6 py-2 overflow-hidden text-lg font-medium text-[var(--main-color)] border-2 border-[var(--main-color)] rounded-full hover:text-white group hover:bg-gray-50 ${className}`}
                        onClick={onClick}
                        type='submit'
                    >
                        <span class="absolute left-0 block w-full h-0 transition-all bg-[var(--main-color)] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                        <span class="relative">{children}</span>
                    </NavLink>
                    : <button
                        className={`relative inline-flex items-center px-6 py-2 overflow-hidden text-lg font-medium text-[var(--main-color)] border-2 border-[var(--main-color)] rounded-full hover:text-white group hover:bg-gray-50 ${className}`}
                        onClick={onClick}
                        type={type}
                    >
                        <span class="absolute left-0 block w-full h-0 transition-all bg-[var(--main-color)] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                        <span class="relative">{children}</span>
                    </button>
            }
        </>
    )
}