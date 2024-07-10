import React from "react";
import Img1 from "../../../assets/images/blog-1.jpg";
import Img2 from "../../../assets/images/blog-2.jpg";
import Img3 from "../../../assets/images/blog-3.jpg";
import Img4 from "../../../assets/images/customer1.jpg";
import Img5 from "../../../assets/images/customer2.jpg";
import Img6 from "../../../assets/images/customer3.jpg";
import Img7 from "../../../assets/images/customer4.jpg";
import Img8 from "../../../assets/images/customer5.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './swiper.css';


import { Pagination, Navigation } from "swiper/modules";

const Swiper2 = () => {
  const data = [
    {
      id: 1,
      image: Img1,
    },
    {
      id: 2,
      image: Img2,
    },
    {
      id: 3,
      image: Img3,
    },
    {
      id: 4,
      image: Img4,
    },
    {
      id: 5,
      image: Img5,
    },
    {
      id: 6,
      image: Img6,
    },
    {
      id: 7,
      image: Img7,
    },
    {
      id: 8,
      image: Img8,  
    },
  ];
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="max-w-[100%] "
    >
      <div className="mb-20">
        {data.map((item) => (
          <SwiperSlide key={item.id}>
                 <div className="flex h-[20vw] w-[90vw] mb-14 ">
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
  );
};

export default Swiper2;
