
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img1 from '../Assets/banner-1.jpg'
import '../Style2.css'
function Home2() {
  return (
    <div className='lg:flex md:block ml-40'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
           <div className='slide-1 text-start p-5 p-5'>
            <div className='mt-32 leading-12 '>
            <p className='text-red-700  text-2xl'>Accessories</p>
            <h1 className='text-6xl font-bold'>Up to <span className='text-red-700'>40% off</span> Latest<span className='block'>Creation</span></h1>
            <button class="bg-white hover:bg-gray-100 mt-5 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
  Shop now <i class="fa-solid fa-arrow-right"></i>
</button>
</div>
           </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='slide-2 text-start'>
            <div className='mt-32 leading-loose p-5'>
            <p className='text-red-700  text-2xl'>Accessories</p>
            <h1 className='text-6xl font-bold'>Up to <span className='text-red-700'>35% off</span> Latest<span className='block'>Creation</span></h1>
            <button class="bg-white hover:bg-gray-100 mt-5 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
  Shop now <i class="fa-solid fa-arrow-right"></i>
</button>
</div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='slide-3 text-start'>
            <div className='mt-32 leading-12 p-5 '>
            <p className='text-red-700  text-2xl'>Accessories</p>
            <h1 className='text-6xl font-bold'>Up to <span className='text-red-700'>40% off</span> Latest<span className='block'>Creation</span></h1>
            <button class="bg-white hover:bg-gray-100 mt-5 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
  Shop now <i class="fa-solid fa-arrow-right"></i>
</button>
</div>
            </div>
        </SwiperSlide>
      </Swiper>
      <div className='images'>
        <div className='img-1 p-5 '>
            <p className='text-red-700 text-start'>Hand made</p>
            <h1 className='text-2xl font-bold text-start'>New modern style <span className='block'>Craft</span></h1>
        </div>
        <div className='img-2 text-start p-5'>
            <p className='text-red-700'>Popular</p>
            <h1 className='font-bold text-2xl'>energy with our</h1>
            <h1 className='font-bold text-2xl'>newest collection</h1>
        </div>
      </div>
      
       

    </div>
  )
}

export default Home2







