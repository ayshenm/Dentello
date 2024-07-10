import React from 'react'
import img1 from "../../../assets/images/cert1.jpeg";
import img2 from "../../../assets/images/cert5.jpg";
import img3 from "../../../assets/images/cert3.jpg";
import img4 from "../../../assets/images/cert4.jpg";
import img5 from "../../../assets/images/cert5.jpg";
import img6 from "../../../assets/images/cert3.jpg";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./swiper.css";




import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Swiper9 = () => {

    const data = [
        {
            id:1,
            image:img1,
       
          },
          {
            id:2,
            image:img2,
        
          },
          {
            id:3,
            image:img3,
         
          },
          {
            id:4,
            image:img4,
       
          },
          {
            id:5,
            image:img5,
     
        
          },
          {
            id:6,
            image:img6,
  
          
          }
    ]
  return (
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
  
    className="max-w-[90%]"
  >
    <div className=" ">
    
      {data.map((item) => (
        <SwiperSlide key={item.id}>
        <div className=" flex h-[40vw] w-[55vw] mb-14 ">
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

export default Swiper9