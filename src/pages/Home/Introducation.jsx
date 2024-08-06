import React from 'react'
import Button from '../../components/assets/Button'

export const Introducation = () => {
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
                            <Button className={"mt-5 mb-5 fw-bold"}>Read More</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
