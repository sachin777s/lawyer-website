import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Layout() {

    const ScrollToTop = () => {
        const { pathname } = useLocation();

        useEffect(() => {
            // "document.documentElement.scrollTo" is the magic for React Router Dom v6
            document.documentElement.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant",
            });
        }, [pathname]);

        return <></>;
    }
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <main className='mx-auto max-w-[1680px] pt-[90px]'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
