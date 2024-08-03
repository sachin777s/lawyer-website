import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Layout() {
    return (
        <>
            <Navbar />
            <main className='mx-auto max-w-[1610px] pt-[90px]'>
                <Outlet />
            </main>
            <Footer/>
        </>
    )
}
