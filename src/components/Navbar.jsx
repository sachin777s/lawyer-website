import React, { useState } from 'react';
import Logo from "../assets/logo.png"
import Button from './assets/Button';
import { Link, NavLink } from 'react-router-dom';


export default function Navbar() {

  const [isNavbarOpen, setisNavbarOpen] = useState(false);

  return (
    <header className='z-50 w-full h-[90px] fixed bg-[rgb(244_244_255)] shadow-md'>
      <nav className='mx-auto max-w-[1720px] h-full flex items-center justify-between px-2 md:px-4'>
        <NavLink
          className="h-full flex items-center origin-left scale-75 md:scale-100"
          to={"/"}>
          <img
            className='h-[180%]'
            src='/images/pngtree-lawyer-logo-template.png'
            alt=""
          />
        </NavLink>

        <div className={`h-screen w-full pt-20 lg:pt-0 lg:w-auto lg:h-auto flex items-center justify-start flex-col lg:flex-row fixed transition-all duration-500 ${isNavbarOpen ? "translate-x-[100%]" : "translate-x-0"} lg:translate-x-0 top-0 left-0 lg:static bg-[rgb(244_244_255)]`}>
          <NavLink
            style={({ isActive }) => ({
              borderBottom: isActive ? "3px solid var(--main-color)" : "",
              borderTop: isActive ? "3px solid var(--main-color)" : ""
            })}
            className="w-full lg:w-auto border-y-[3px] transition-all hover:bg-gray-300 text-[20px] font-medium py-1 px-4 inline-flex items-center justify-center"
            to={"/"}
          >
            <span className="mr-1 text-center">Home</span>
          </NavLink>

          <NavLink
            style={({ isActive }) => ({
              borderBottom: isActive ? "3px solid var(--main-color)" : "",
              borderTop: isActive ? "3px solid var(--main-color)" : ""
            })}
            className="w-full lg:w-auto border-y-[3px] transition-all hover:bg-gray-300 text-[20px] font-medium py-1 px-4 inline-flex items-center justify-center"
            to={"/about"}
          >
            <span className="mr-1">About</span>
          </NavLink>

          <NavLink
            style={({ isActive }) => ({
              borderBottom: isActive ? "3px solid var(--main-color)" : "",
              borderTop: isActive ? "3px solid var(--main-color)" : ""
            })}
            className="w-full lg:w-auto border-y-[3px] transition-all hover:bg-gray-300 text-[20px] font-medium py-1 px-4 inline-flex items-center justify-center"
            to={"/gallery"}
          >
            <span className="mr-1">Gallery</span>
          </NavLink>

          <NavLink
            style={({ isActive }) => ({
              borderBottom: isActive ? "3px solid var(--main-color)" : "",
              borderTop: isActive ? "3px solid var(--main-color)" : ""
            })}
            className="w-full lg:w-auto border-y-[3px] transition-all hover:bg-gray-300 text-[20px] font-medium py-1 px-4 inline-flex items-center justify-center"
            to={"/videos"}
          >
            <span className="mr-1">Videos</span>
          </NavLink>

          <NavLink
            style={({ isActive }) => ({
              borderBottom: isActive ? "3px solid var(--main-color)" : "",
              borderTop: isActive ? "3px solid var(--main-color)" : ""
            })}
            className="w-full lg:w-auto border-y-[3px] transition-all hover:bg-gray-300 text-[20px] font-medium py-1 px-4 inline-flex items-center justify-center"
            to={"/research"}
          >
            <span className="mr-1">Learning Zone</span>
          </NavLink>

          <NavLink
            style={({ isActive }) => ({
              borderBottom: isActive ? "3px solid var(--main-color)" : "",
              borderTop: isActive ? "3px solid var(--main-color)" : ""
            })}
            className="w-full lg:w-auto border-y-[3px] transition-all hover:bg-gray-300 text-[20px] font-medium py-1 px-4 inline-flex items-center justify-center"
            to={"/blogs"}
          >
            <span className="mr-1">Blogs</span>
          </NavLink>

          <Link to={"/appointment"}>
            <Button className={"ml-0 mt-6 lg:ml-3 lg:mt-0"}>APPOINTMENT</Button>
          </Link>
        </div>

        {/* Hamburger */}
        <div
          onClick={() => setisNavbarOpen(!isNavbarOpen)}
          class="z-50 block lg:hidden space-y-2"
        >
          <span className={`transition-all duration-200 ${!isNavbarOpen ? "translate-y-[5px] rotate-45" : "0"} block h-0.5 w-8 bg-gray-600`}></span>
          <span className={`transition-all duration-200 ${!isNavbarOpen ? "hidden" : "block"} h-0.5 w-8 bg-gray-600`}></span>
          <span className={`transition-all duration-200 ${!isNavbarOpen ? "-translate-y-[5px] -rotate-45" : "0"} block h-0.5 w-8 bg-gray-600`}></span>
        </div>
      </nav>
    </header>
  )
}
