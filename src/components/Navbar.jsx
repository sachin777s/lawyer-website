import React from 'react';
import Logo from "../assets/logo.png"
import Button from './assets/Button';
import { NavLink } from 'react-router-dom';

export default function Navbar() {


  return (
    <header className='w-full h-[90px] bg-[rgb(244_244_255)] shadow-md'>
      <nav className='mx-auto max-w-[1680px] h-full flex items-center justify-between px-2 md:px-4'>

        <NavLink
          className="h-full flex items-center origin-left scale-75 md:scale-100"
          to={"/"}
        >
          <img
            className='h-[70%]'
            src={Logo}
            alt=""
          />
        </NavLink>

        <div className="">

        </div>
      </nav>
    </header>
  )
}
