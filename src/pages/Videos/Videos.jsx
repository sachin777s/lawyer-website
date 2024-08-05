import React, { useState } from 'react'
import PageHeading from '../../components/PageHeading'
import { NavLink } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { FaPlayCircle } from "react-icons/fa"
import Podcast1 from "../../assets/videos/padcasts/podcast_01.mp4"
import VideoPlayModal from './VideoPlayModal';

export default function Videos() {

  const videos = [
    Podcast1,
    Podcast1,
    Podcast1,
    Podcast1
  ]

  const [videoPlay, setVideoPlay] = useState();
  const [isvideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <PageHeading text={"Gallery"} />
      <div className='py-2 border-b cursor-pointer'>
        <NavLink
          to={"/"}
          className="flex items-center gap-1"
        >
          <NavLink to={"/"}>Home</NavLink>
          <span>&gt;</span>
          <NavLink to={"/videos"}>Videos</NavLink>
        </NavLink>
      </div>

      <section className='mt-12 w-full '>
        <div className="w-full">
          <h2 className='text-3xl text-center'>In-Depth Interview:</h2>
          <h1 className='text-4xl text-center font-semibold'>Adv. Siam on Indian Criminal Laws</h1>
        </div>
        <div className="mt-6 mb-12 px-2 md:px-4 lg:px-8 xl:px-12 2xl:px-16 ">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            spaceBetween={50}
            slidesPerView={1}
            navigation
          >
            {
              videos.map((video, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div onClick={
                      () => {
                        setVideoPlay(video)
                        setIsVideoOpen(true)
                      }
                    } className='px-2 bg-[url(https://cdn.pixabay.com/photo/2022/04/10/16/41/lawyer-7123798_640.jpg)] bg-cover min-h-[30rem]'>
                      <div className='w-full min-h-[30rem] backdrop-brightness-50 flex items-center justify-center gap-8'>
                        <h1 className='text-4xl text-white font-semibold max-w-[46rem]'>
                          Dr. Siam on Cardiovascular Health Dr. Siam on Cardiovascular Health
                        </h1>
                        <FaPlayCircle color='white' className='w-[200px]' size={64} />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
        {
          isvideoOpen && <VideoPlayModal setIsVideoOpen={setIsVideoOpen} video={videoPlay} />
        }
      </section>
    </>
  )
}
