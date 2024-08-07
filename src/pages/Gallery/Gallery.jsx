import React, { useState } from 'react'
import PageHeading from "../../components/PageHeading"
import { NavLink } from 'react-router-dom'
import LawyerImg from "../../assets/images/gallery/lawyer-pic.jpg"
import LawBooksImg from "../../assets/images/gallery/law_books.jpg"
import LawPrideImg from "../../assets/images/gallery/law_pride.webp"
import LawHamerImg from "../../assets/images/gallery/court_hamer.webp"
import ImageModal from './ImageModal'

export default function Gallery() {

  const [modalImage, setModalImage] = useState({});
  const [isModalOpen, setisModalOpen] = useState(false);

  const images = [
    {
      img: LawyerImg,
      title: "This is image title"
    },
    {
      img: LawBooksImg,
      title: "This is image title"
    },
    {
      img: LawPrideImg,
      title: "This is image title"
    },
    {
      img: LawHamerImg,
      title: "This is image title"
    },
    {
      img: LawyerImg,
      title: "This is image title"
    },
    {
      img: LawBooksImg,
      title: "This is image title"
    },
    {
      img: LawPrideImg,
      title: "This is image title"
    },
    {
      img: LawHamerImg,
      title: "This is image title"
    },
    {
      img: LawyerImg,
      title: "This is image title"
    }
  ]

  return (
    <>
      <PageHeading text={"Gallery"} />
      <div className='pl-6 py-2 border-b cursor-pointer'>
        <NavLink
          to={"/"}
          className="flex items-center gap-1"
        >
          <NavLink to={"/"}>Home</NavLink>
          <span>&gt;</span>
          <NavLink to={"/gallery"}>Gallery</NavLink>
        </NavLink>
      </div>
      <div className='my-12 w-full px-2 md:px-4 lg:px-8 xl:px-12 2xl:px-16 columns-1 md:columns-2 lg:columns-3 xl:columns-4 space-y-4 gap-4'>
        {
          images.map((image, i) => {
            return (
              <div
                onClick={() => {
                  setModalImage({ img: image.img, index: i })
                  setisModalOpen(true);
                }}
                className='group relative overflow-hidden'
              >
                <img
                  className=' transition-all duration-500 group-hover:scale-110'
                  src={image.img}
                  alt=""
                />
                <div className='translate-y-full transition-all duration-300 p-2 group-hover:translate-y-0 w-full text-white absolute bottom-0 left-0 backdrop-brightness-[0.35]'>
                  <span className='text-2xl'>{image.title.slice(0, 20)}...</span>
                </div>
              </div>
            )
          })
        }
      </div>

      {/* Image modal */}
      {
        isModalOpen && <ImageModal
          image={modalImage}
          images={images}
          setModalImage={setModalImage}
          setIsModalOpen={setisModalOpen}
        />
      }
    </>
  )
}
