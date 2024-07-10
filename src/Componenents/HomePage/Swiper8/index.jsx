import React from 'react'
import img1 from "../../../assets/images/advisory3.webp";
import img2 from "../../../assets/images/hygiene3.webp";
import img3 from "../../../assets/images/hygiene4.jpg";
import img4 from "../../../assets/images/aligment4.jpg";
import img5 from "../../../assets/images/advisory6.webp";
import img6 from "../../../assets/images/hygiene1.jpeg";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import "./swiper.css";


import { Pagination, Navigation } from "swiper/modules";

const Swiper8 = () => {

   const data = [
    {
        id:1,
        image:img1,
        title:"  What is an oral cancer screening? Should I get this during my routine dental exam?"
      },
      {
        id:2,
        image:img2,
        title:"  Cras accumsan nulla nec lacus ultricies placerat"
      },
      {
        id:3,
        image:img3,
        title:"  Cras accumsan nulla nec lacus ultricies placerat"
      },
      {
        id:4,
        image:img4,
        title:"  Cras accumsan nulla nec lacus ultricies placerat"
      },
      {
        id:5,
        image:img5,
        title:"  Cras accumsan nulla nec lacus ultricies placerat"
    
      },
      {
        id:6,
        image:img6,
        title:"  Cras accumsan nulla nec lacus ultricies placerat"
      
      }
]
  return (
    <Swiper
    slidesPerView={3}
    spaceBetween={30}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="max-w-[90%]"
  >
    <div className=" ">
    
      {data.map((item) => (
        <SwiperSlide key={item.id}>
         <div className=" flex h-[16vw] w-[90vw]  mb-14">
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

export default Swiper8