import React from 'react'



import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

import { Pagination, Navigation } from "swiper/modules";

const Swiper7 = () => {

    const data = [
        {
          id: 1,
          text:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cumque sed esse aliquam soluta est exercitationem tempora deserunt. Perspiciatis eligendi odit",
          name:"E.Nilson"
        },
        {
            id: 2,
            text:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cumque sed esse aliquam soluta est exercitationem tempora deserunt. Perspiciatis eligendi odit",
            name:"E.Nilson"
          },
          {
            id: 3,
            text:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cumque sed esse aliquam soluta est exercitationem tempora deserunt. Perspiciatis eligendi odit",
            name:"E.Nilson"
          },
          {
            id: 4,
            text:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cumque sed esse aliquam soluta est exercitationem tempora deserunt. Perspiciatis eligendi odit",
            name:"E.Nilson"
          },
          {
            id: 5,
            text:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cumque sed esse aliquam soluta est exercitationem tempora deserunt. Perspiciatis eligendi odit",
          name:"E.Nilson"
          },
          {
            id: 6,
            text:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cumque sed esse aliquam soluta est exercitationem tempora deserunt. Perspiciatis eligendi odit",
          name:"E.Nilson"
          }
    ]
  return (
    <Swiper
    slidesPerView={3}
    spaceBetween={50}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="max-w-[90%]"
  >
    <div className=" ">
    
      {data.map((item) => (
        <SwiperSlide key={item.id}>
         <div className=" ">
      <div className='bg-stone-100 h-[20vw] w-[27vw]  rounded-tr-[8vw] rounded-bl-[8vw] rounded-tl-xl rounded-br-xl mb-14 flex flex-col gap-6 items-center justify-center '>
              <p className='text-lg font-medium  w-[23vw]'>"{item.text} "</p>
              <h4 className='text-base font-bold'>{item.name}</h4>
      </div>
      
            
          </div>
        </SwiperSlide>
      ))}
    </div>
  </Swiper>
  )
}

export default Swiper7