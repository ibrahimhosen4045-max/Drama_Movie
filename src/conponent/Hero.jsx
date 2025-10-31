import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';



// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

// 🔹 লোকাল ইমেজগুলো ইম্পোর্ট করো
import img1 from '../assets/banner.jpg';
import img2 from '../assets/banner2.jpg';
import img3 from '../assets/movie.jpg';
import img4 from '../assets/squad.webp';
import img5 from '../assets/Wednesday.webp';

export default function Hero() {
  // 🔹 ইমেজগুলো array আকারে রাখো
  const images = [
    { id: 1, src: img1, alt: 'Picture 1' },
    { id: 2, src: img4, alt: 'Picture 2' },
    { id: 3, src: img3, alt: 'Picture 3' },
    { id: 4, src: img2, alt: 'Picture 4' },
    { id: 5, src: img5, alt: 'Picture 5' },
  ];

  return (
    <>
      <Swiper
        pagination={{ dynamicBullets: true }}
        autoplay={{
          delay: 3000, // 🔹 ৩ সেকেন্ড পরপর slide পরিবর্তন হবে
          disableOnInteraction: false, // ব্যবহারকারী টাচ করলে থামবে না
        }}
        modules={[Pagination, Autoplay]} // 🔹 Autoplay module যুক্ত করা হয়েছে
        className="mySwiper"
      >
        {/* 🔹 Array থেকে slide তৈরি */}
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <img className='h-[43vh] md:h-[70vh] lg:h-[80vh]  w-full' src={image.src} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

