
import React from 'react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 

import SwiperCore from 'swiper'; 
import 'swiper/swiper-bundle.css'; 
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';


SwiperCore.use([Pagination, Navigation]);

const MySwiper=()=> {
  const [swiperRef, setSwiperRef] = useState(null);

  const images = [
    { src: './assests/images/imgs1.jpg' },
    { src: './assests/images/imgs2.jpg' },
    { src: './assests/images/imgs1.jpg' },
    { src: './assests/images/imgs4.jpg' },
    { src: './assests/images/imgs5.jpg' },
    { src: './assests/images/imgs2.jpg' },
    { src: './assests/images/imgs4.jpg' },
    { src: './assests/images/imgs5.jpg' },
  ];

  return (
  
    <div className="mySwiper ">
       <h2 class="text-center text-white mt-4 mb-4"><span className='bg-primary px-3 mb-5'>LATEST NEWS</span></h2>
      <Swiper
      // style={{
      //   "--swiper-pagination-color": "#FFBA08",
      //   "--swiper-pagination-bullet-inactive-color": "#999999",
      //   "--swiper-pagination-bullet-inactive-opacity": "1",
      //   "--swiper-pagination-bullet-size": "16px",
      //   "--swiper-pagination-bullet-horizontal-gap": "6px",
      //   marginTop: "10px !important",
        
      // }}
        onSwiper={setSwiperRef}
        slidesPerView={1}
        spaceBetween={10}
        navigation={true} // Enable navigation arrows
        breakpoints={{
            426: {
              slidesPerView: 2,
            },

            769: {
              slidesPerView: 3,
            },
  
            
            1025: {
              slidesPerView: 4,
            },
          }}
      >
        

        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className='container'>
                <div className='card'>
                    <img src={image.src} alt={`Slide ${index + 1}`} className='swiper-slide img'/>
                    <div className='card-body'>
                        <div className='card-text'>
                            <h6 className=''>HUGE HELP TO HOMELESS PUPIL</h6>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla hic deserunt facere et animi</p>
                        </div>
                    </div>
                </div>
            </div>
          </SwiperSlide>
          
        ))}
      </Swiper>
    </div>
  );
}

export default MySwiper;
