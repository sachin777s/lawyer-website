import React from 'react'
import { IoCloseSharp } from 'react-icons/io5'

export default function ImageModal({ image, setIsModalOpen }) {
    return (
        <div className="z-[200] fixed top-0 left-0 h-screen w-screen flex items-center justify-center backdrop-brightness-[0.2]">
            <div
                className='p-2 border-2 border-white bg-white rounded-md absolute right-8 top-8'
                onClick={() => setIsModalOpen(false)}
            >
                <IoCloseSharp size={24} />
            </div>
            <div className='max-w-[64rem] flex items-center justify-center'>
                <img src={image.img} alt="" />
            </div>
        </div>
    )
}
