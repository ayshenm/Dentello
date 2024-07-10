import React from "react";
import img1 from "../../../assets/images/service-icon-1.png";
import img2 from "../../../assets/images/service-icon-3.png";
import img3 from "../../../assets/images/service-icon-5.png";
import img4 from "../../../assets/images/service-icon-2.png";
import img5 from "../../../assets/images/service-icon-4.png";
import img6 from "../../../assets/images/service-icon-6.png";
import imgBig from "../../../assets/images/service-banner.png";
import { Link } from "react-router-dom";
const SectionTwo = () => {
  return (
    <div className=" w-full h-full flex items-center justify-center flex-col gap-14 mt-32">
      <div className="flex items-center justify-center flex-col gap-3">
        <h4 className="text-blue-700 text-2xl uppercase font-bold">
          our services
        </h4>
        <h2 className="text-blue-950 text-6xl capitalize font-bold">
          what we provide
        </h2>
      </div>

      <div className="flex gap-12 items-center justify-center">
        <div className="flex flex-col gap-4">
          <div className="w-[25vw] h-[12vw] border-[1px] border-gray-300 rounded-md flex gap-6 px-6 py-8 ">
            <img src={img1} alt="" className="object-cover w-[4vw] h-[4vw] " />
            <div className="flex flex-col gap-2">
              <Link to="/root">
                <h5 className="text-blue-950 font-bold text-2xl capitalize">
                  root canal
                </h5>
              </Link>
              <p className="text-base text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia doloribus
              </p>
            </div>
          </div>
          <div className="w-[25vw] h-[12vw] border-[1px] border-gray-300 rounded-md flex gap-6 px-6 py-8">
            <img src={img2} alt="" className="object-cover w-[4vw] h-[4vw] " />
            <div className="flex flex-col gap-2">
              <Link to="/cosmetic">
                <h5 className="text-blue-950 font-bold text-2xl capitalize">
                  cosmetic teeth
                </h5>
              </Link>
              <p className="text-base text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia doloribus
              </p>
            </div>
          </div>
          <div className="w-[25vw] h-[12vw] border-[1px] border-gray-300 rounded-md flex gap-6 px-6 py-8">
            <img src={img3} alt="" className="object-cover w-[4vw] h-[4vw] " />
            <div className="flex flex-col gap-2">
              <Link to="/advisory">
                <h5 className="text-blue-950 font-bold text-2xl capitalize">
                  live advisory
                </h5>
              </Link>
              <p className="text-base text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia doloribus
              </p>
            </div>
          </div>
        </div>

        <div className=" w-[20vw] ">
          <img src={imgBig} alt="" className="w-full" />
        </div>

        <div className="flex flex-col gap-4">
          <div className="w-[25vw] h-[12vw] border-[1px] border-gray-300 rounded-md flex gap-6 px-6 py-8">
            <img src={img4} alt="" className="object-cover w-[4vw] h-[4vw] " />
            <div className="flex flex-col gap-2">
              <Link to="/aligment">
                <h5 className="text-blue-950 font-bold text-2xl capitalize">
                  aligment teeth
                </h5>
              </Link>
              <p className="text-base text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia doloribus
              </p>
            </div>
          </div>
          <div className="w-[25vw] h-[12vw] border-[1px] border-gray-300 rounded-md flex gap-6 px-6 py-8">
            <img src={img5} alt="" className="object-cover w-[4vw] h-[4vw] " />
            <div className="flex flex-col gap-2">
              <Link to="/hygiene">
                <h5 className="text-blue-950 font-bold text-2xl capitalize">
                  oral hygiene
                </h5>
              </Link>
              <p className="text-base text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia doloribus
              </p>
            </div>
          </div>
          <div className="w-[25vw] h-[12vw] border-[1px] border-gray-300 rounded-md flex gap-6 px-6 py-8">
            <img src={img6} alt="" className="object-cover w-[4vw] h-[4vw] " />
            <div className="flex flex-col gap-2">
              <Link to="/cavity">
                <h5 className="text-blue-950 font-bold text-2xl capitalize">
                  cavity inspection
                </h5>
              </Link>
              <p className="text-base text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia doloribus
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
