import React from 'react'
import Button from '../../components/assets/Button'
import { Link } from 'react-router-dom'

export const Advbackimage = () => {
  return (
   <>
   <section style={{backgroundImage: 'url(/images/criminal-handcuffs_53876-139638.jpg)', backgroundSize: 'cover', paddingTop: '150px', paddingBottom: '150px'}}>
    <div className="text-center text-white">
    <h1 className='fs-1 mt-5 fw-bold'>Your Path to Health Begins Here</h1>
    <p className='fs-5 mt-4'>Take the first step toward improved health. We are prepared to offer you excellent care and individualized therapy.</p>
    <h1 className='fs-4 mt-4 mb-5'>Schedule your appointment right away.</h1>
    <Link to={'#'}><Button className={"text-white border-white"}>MAKE AN APPOINTMENT</Button></Link>
    </div>
   </section>
   </>
  )
}
