import React from 'react'
import Button from '../../components/assets/Button'
import { Link } from 'react-router-dom'

export const Advform = () => {
    return (
        <>
            <section name="contact-form" style={{ backgroundColor: '#ebebeb' }}>
                <div className="container">
                    <div className="text-center mt-5">
                        <p className='fs-4 pt-5'>REQUEST FOR CONSULTATION</p>
                        <h1 className='fs-3 mt-1 fw-bold'>Make Your Appointment</h1>
                    </div>
                    <div className="card mt-5 rounded-0 border-0">
                        <div className="row pb-5">
                            <div className="col-md-8 pb-5">
                                <div className="container text-white">
                                    <div className="card mt-5 ms-5 rounded-0 ps-5 pe-5" style={{ backgroundColor: '' }}>
                                        <form>
                                            <input className="form-coloum form-control form-control-lg mt-5 rounded-pill text-dark"
                                                type="text" placeholder="Full Name"
                                                aria-label=".form-control-lg example" />

                                            <input className="form-coloum form-control form-control-lg rounded-pill text-dark mt-5"
                                                type="email" placeholder="Your Email"
                                                aria-label=".form-control-lg example" />

                                            <input className="form-coloum form-control form-control-lg rounded-pill text-dark mt-5"
                                                type="number" placeholder="Mobile Number"
                                                aria-label=".form-control-lg example" />

                                            <select className="form-coloum form-select form-select-lg rounded-pill mt-5" aria-label="Large select example">
                                                <option selected>--Select Services--</option>
                                                <option value="1">Software Enginer</option>
                                                <option value="2">Frontend Developer</option>
                                                <option value="3">Full stak developer</option>
                                            </select>
                                            <input className="form-coloum form-control form-control-lg rounded-pill text-dark mt-5"
                                                type="file" placeholder="Your file"
                                                aria-label=".form-control-lg example" />
                                            <textarea className="form-coloum form-control form-control-lg  rounded-pill mt-5"
                                                type="message" placeholder="Type your message"
                                                aria-label=".form-control-lg example"></textarea>
                                            <Button className={' mt-5 mb-5 text-center'}>Send Massege</Button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h1 className='fs-3 mt-5'>Guangxi China.</h1>
                                <Link to={''}><i className="bi bi-geo-alt-fill fs-5 mt-5"></i></Link>
                                <p className='me-4'>Address: House 201, Ronghua Apartment, kunbin lane, Santang Town, Xingning District, Nanning, Guangxi, China.</p>
                                <hr />
                                <Link to={''}><i className="bi bi-telephone-fill fs-5 mt-5"></i></Link>
                                <p>Phone: (+86 ) 156 7673 6338</p>
                                <hr />
                                <Link to={''}><i class="bi bi-envelope-at-fill fs-4 mt-5"></i></Link>
                                <p>Email: consult@drsiamalmobarakcardio.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
