import React from 'react'
import { ImLocation2 } from "react-icons/im"
import { IoLogoFacebook, IoMdCall, IoMdSend, } from "react-icons/io"
import { MdMail } from "react-icons/md"
import { NavLink } from 'react-router-dom'
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin, FaPinterest, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io"


export default function Footer() {
  return (
    <footer className='px-4 py-4 md:px-6 w-full bg-[var(--main-color)] text-white'>
      <div className='mx-auto max-w-[1680px]'>
        <div className="pb-6 flex items-center justify-between flex-col lg:flex-row gap-12 lg:gap-0">
          <div className="w-11/12 lg:w-2/6">
            <img className='h-[180px]' src='/images/pngtree-lawyer-logo-template.png' alt="" />
            <p className='mt-2'>
              I am a cardiology clinical physician with Cath-Lab experience in Interventional Cardiology, have published research papers, and am familiar with EUMDR, FDA, ISO, and NPMA regulations.
            </p>
            <div className="mt-6 flex items-center gap-1">
              <ImLocation2 size={52} />
              <span>
                Address: House 201, Ronghua Apartment, kunbin lane, Santang Town, Xingning District, Nanning, Guangxi, China.
              </span>
            </div>
            <div className="mt-6 flex items-center gap-1">
              <IoMdCall size={32} />
              <span>Phone:
                (+86 ) 156 7673 6338
              </span>
            </div>
            <div className="mt-6 flex items-center gap-1">
              <MdMail size={32} />
              <span>Email:
                consult@drsiamalmobarakcardio.com</span>
            </div>
          </div>

          <div className="w-11/12 lg:w-1/5">
            <h4 className='text-2xl'>Usefull Links</h4>
            <div className='mt-4'>
              <ul className="flex flex-col gap-1">
                <li>
                  <NavLink
                    className="hover:underline"
                    to={"/about"}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="hover:underline"
                    to={"/about"}
                  >
                    Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="hover:underline"
                    to={"/about"}
                  >
                    Videos
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="hover:underline"
                    to={"/about"}
                  >
                    Blogs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="hover:underline"
                    to={"/about"}
                  >
                    Appointment
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-11/12 lg:w-2/6">
            <div className=''>
              <h4 className='text-2xl'>NEWSLETTER</h4>
              <span className='opacity-80'>Subscribe to our newsletter!</span>
              <div className='mt-4 pr-2 flex items-center justify-center bg-white rounded-md overflow-hidden'>
                <input
                  className='w-full px-4 py-1 text-xl text-[var(--main-color)] border-none outline-none'
                  type="text"
                />
                <div><IoMdSend size={28} color='var(--main-color)' /></div>
              </div>
            </div>

            <div className='mt-4'>
              <h4 className='text-2xl'>WORKING HOURS</h4>
              <ul className='mt-6'>
                <li className='py-1 flex items-center justify-between'>
                  <span className="">Monday to Friday:</span>
                  <span className="">9.00 to 18.00</span>
                </li>
                <li className='py-1 border-t border-gray-500 flex items-center justify-between'>
                  <span className="">Saturday:</span>
                  <span className="">9.00 to 18.00</span>
                </li>
                <li className='py-1 border-t border-gray-500 flex items-center justify-between'>
                  <span className="">Sunday:</span>
                  <span className="text-red-500">Closed</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
        <div className="pt-4 border-t flex items-center justify-between flex-col lg:flex-row gap-6 lg:gap-0">
          <span>
            Copyrights © 2024 All Rights Reserved, Crafted with precision by Codfty.
          </span>
          <div className="flex items-center gap-4">
            <a href="#">
              <IoLogoFacebook size={32} />
            </a>
            <a href="#">
              <BsTwitterX size={32} />
            </a>
            <a href="#">
              <FaLinkedin size={32} />
            </a>
            <a href="#">
              <IoLogoInstagram size={32} />
            </a>
            <a href="#">
              <FaPinterest size={32} />
            </a>
            <a href="#">
              <FaYoutube size={32} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
