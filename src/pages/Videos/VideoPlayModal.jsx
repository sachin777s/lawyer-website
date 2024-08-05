import React from 'react'
import { IoCloseSharp } from "react-icons/io5"

export default function VideoPlayModal({ video, setIsVideoOpen }) {
    return (
        <div className='px-2 z-[200] fixed top-0 left-0 w-screen h-screen bg-black flex items-center justify-center'>
            <div className='w-full max-w-[60rem]'>
                <div
                    className='p-2 border-2 border-white bg-white rounded-md absolute right-8 top-8'
                    onClick={() => setIsVideoOpen(false)}
                >
                    <IoCloseSharp size={24}/>
                </div>
                <video src={video} controls></video>
            </div>
        </div>
    )
}
