import React from 'react'
import Button from '../../components/assets/Button'
import { Link, useLocation } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

export const Introducation = () => {

    const {pathname} = useLocation();
    console.log(pathname)

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src="/images/gradient.avif" className='rounded-full mt-5 mb-5' alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="mt-5">
                            <p className='fs-4'>Advocate Introduction</p>
                            <h1 className='fs-2 fw-bold mt-4'>Adv. Tiwari Counsultancy</h1>
                            <p className='fs-5 mt-4'>I am a cardiology clinical physician with Cath-Lab experience in Interventional Cardiology, have published research papers, and am familiar with EUMDR, FDA, ISO, and NPMA regulations.</p>
                            {
                                pathname === "/"
                             ?<Link to={'/about'}><Button  className={"mt-5 mb-5 fw-bold"}>Read More</Button></Link>
                             :<ScrollLink to="contact-form" offset={-50} duration={500}><Button  className={"mt-5 mb-5 fw-bold"}>Apoint</Button></ScrollLink>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
