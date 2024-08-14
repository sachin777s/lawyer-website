import React from 'react'
import { Advform } from '../Home/Advform'
import PageHeading from "../../components/PageHeading"
import { NavLink } from 'react-router-dom'

export default function Appointment() {
    return (
        <>
            <PageHeading text={"Make Your Appointment"} />
            <div className='pl-6 py-2 border-b cursor-pointer'>
                <NavLink
                    to={"/"}
                    className="flex items-center gap-1"
                >
                    <span>Home</span>
                    <span>&gt;</span>
                    <span>Appoint</span>
                </NavLink>
            </div>
            <Advform />
        </>
    )
}
