import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Button from '../../components/assets/Button';

export default function HeroSection() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true, }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide style={{ backgroundImage: 'url(/images/american-judge-black.jpg)', backgroundSize: 'cover' }}>
        <div className="text-light ms-5" style={{ marginTop: '300px', marginBottom: '150px' }}>
          <p className='fs-3 ms-5'>CLINICAL SKILLS</p>
          <h1 className='fs-1 fw-bold  ms-5'>Specialized Clinical Physician Skilled in</h1>
          <p className='fs-5 mt-4  ms-5'><span><i class="bi bi-check-lg me-3"></i></span>Cardiovascular Diseases & Hypertension</p>
          <p className='fs-5  ms-5'><span><i class="bi bi-check-lg me-3"></i></span>Internal Medicine Diseases</p>
          <p className='fs-5  ms-5'><span><i class="bi bi-check-lg me-3"></i></span>General Diseases</p>
        </div>
      </SwiperSlide>
      
      <SwiperSlide style={{ backgroundImage: 'url(/images/lawyer-man.jpg)', backgroundSize: 'cover' }}>
        <div className="text-light ms-5" style={{ marginTop: '300px', marginBottom: '150px' }}>
          <p className='fs-3 ms-5'>CLINICAL SKILLS</p>
          <h1 className='fs-1 fw-bold  ms-5'>Specialized Clinical Physician Skilled in</h1>
          <p className='fs-5 mt-4  ms-5'><span><i class="bi bi-check-lg me-3"></i></span>Cardiovascular Diseases & Hypertension</p>
          <p className='fs-5  ms-5'><span><i class="bi bi-check-lg me-3"></i></span>Internal Medicine Diseases</p>
          <p className='fs-5  ms-5'><span><i class="bi bi-check-lg me-3"></i></span>General Diseases</p>
        </div>
      </SwiperSlide>

      <SwiperSlide style={{ backgroundImage: 'url(/images/focus-wooden.jpg)', backgroundSize: 'cover' }}>
        <div className="text-light ms-5" style={{ marginTop: '300px', marginBottom: '150px' }}>
          <p className='fs-3 ms-5'>CLINICAL SKILLS</p>
          <h1 className='fs-1 fw-bold  ms-5'>Specialized Clinical Physician Skilled in</h1>
          <p className='fs-5 mt-4  ms-5'><span><i class="bi bi-check-lg me-3"></i></span>Cardiovascular Diseases & Hypertension</p>
          <p className='fs-5  ms-5'><span><i class="bi bi-check-lg me-3"></i></span>Internal Medicine Diseases</p>
          <p className='fs-5  ms-5'><span><i class="bi bi-check-lg me-3"></i></span>General Diseases</p>
        </div>
      </SwiperSlide>
      
      <SwiperSlide style={{ backgroundImage: 'url(/images/celebration-labour.jpg)', backgroundSize: 'cover' }}>
        <div className="text-light ms-5" style={{ marginTop: '300px', marginBottom: '150px' }}>
          <p className='fs-3 ms-5'>CLINICAL SKILLS</p>
          <h1 className='fs-1 fw-bold  ms-5'>Specialized Clinical Physician Skilled in</h1>
          <p className='fs-5 mt-4  ms-5'><span><i class="bi bi-check-lg me-3"></i></span>Cardiovascular Diseases & Hypertension</p>
          <p className='fs-5  ms-5'><span><i class="bi bi-check-lg me-3"></i></span>Internal Medicine Diseases</p>
          <p className='fs-5  ms-5'><span><i class="bi bi-check-lg me-3"></i></span>General Diseases</p>
        </div>
      </SwiperSlide>

    </Swiper>
  );
};