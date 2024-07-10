import React from "react";
import bgImg from "../../assets/images/blogbg.jpg";
import blogimg from "../../assets/images/hygiene5.webp";

import Swiper8 from "../HomePage/Swiper8";

const News = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col ">
      <div
        className="relative w-full   h-[40vw]  flex  items-center justify-center bg-no-repeat bg-center bg-cover "
        style={{ backgroundImage: "url(" + bgImg + ")" }}
      >
        <div className=" w-full  h-[40vw]  justify-center items-center absolute z-40 bg-black opacity-[0.3]"></div>
        <div className="flex flex-col w-[35vw] items-center justify-center text-center gap-10 relative z-50">
          <h2 className="text-4xl font-bold text-blue-950 uppercase">
            Dentelo Blog
          </h2>
          <p className="text-6xl font-bold text-white ">
            Dental health tips and resources for our patients
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-14 mt-32">
        <div className="flex flex-col gap-4 text-blue-950 w-[30vw] ">
          <h4 className="text-6xl font-bold">Blog</h4>
          <p className="text-3xl font-semibold">
            Bringing you the latest & greatest on oral care health. your source
            for all news & information to keep you healthy from the inside out
          </p>
        </div>
        <div className="w-[40vw] h-[40vw]  ">
          <img
            src={blogimg}
            alt=""
            className="rounded-md object-cover w-full h-full "
          />
        </div>
      </div>

      <div className="w-full mt-32">
        <Swiper8 />
      </div>
    </div>
  );
};

export default News;
