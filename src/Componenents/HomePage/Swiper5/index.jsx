import React from 'react'
import imp1 from "../../../assets/images/hygiene1.jpeg";
import imp2 from "../../../assets/images/hyiene2.jpg";
import imp3 from "../../../assets/images/hygiene3.webp";
import imp4 from "../../../assets/images/hygiene4.jpg";
import imp5 from "../../../assets/images/hygiene5.webp";
import imp6 from "../../../assets/images/hygiene6.avif";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

import { Pagination, Navigation } from "swiper/modules";

const Swiper5 = () => {

    const data = [
        {
          id: 1,
          image: imp1
        },
        {
            id: 2,
            image: imp2
          },
          {
            id: 3,
            image: imp3
          },
          {
            id: 4,
            image: imp4
          },
          {
            id: 5,
            image: imp5
          },
          {
            id: 6,
            image: imp6
          }
    ]
  return (
    <Swiper
    slidesPerView={4}
    spaceBetween={30}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="max-w-[90%]"
  >
    <div className="">
    
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <div className=" flex h-[16vw] w-[90vw] mb-14 ">
            <img
              src={item.image}
              alt=""
              className=" object-cover rounded-md"
            />
      
            
          </div>
        </SwiperSlide>
      ))}
    </div>
  </Swiper>
  )
}

export default Swiper5