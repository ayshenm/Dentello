import React from "react";
import { FaCalendarDays } from "react-icons/fa6";
import { Link } from "react-router-dom";
import img1 from "../../../assets/images/blog-1.jpg";
import img2 from "../../../assets/images/blog-2.jpg";
import img3 from "../../../assets/images/blog-3.jpg";

const SectionSix = () => {
  return (
    <div className=" w-full h-full py-32 flex items-center justify-center flex-col gap-14 bg-stone-100">
      <div className="flex items-center justify-center flex-col gap-3">
        <h4 className="text-blue-700 text-2xl uppercase font-bold">OUR BLOG</h4>
        <h2 className="text-blue-950 text-6xl capitalize font-bold">
          Latest Blog & News
        </h2>
      </div>

      <div className="flex gap-10">
        <div className="w-[23vw] h-[38vw] bg-slate-50 rounded-md ">
          <img src={img1} alt="" className="rounded-md object-cover" />
          <div className="relative bottom-20 left-6 rounded-md w-48 h-12 bg-blue-700 text-white text-lg flex items-center justify-center gap-4">
            <span>{<FaCalendarDays />}</span>
            <span className="text-base">24th March 2022</span>
          </div>
          <div className="flex flex-col gap-4 px-6 mb-10 ">
            <h3 className="text-3xl font-bold text-blue-950 hover:text-blue-700">
              Cras accumsan nulla nec lacus ultricies placerat
            </h3>
            <p className="text-gray-500  text-base">
              Curabitur sagittis libero tincidunt tempor finibus. Mauris at
              dignissim ligula, nec tristique orci.
            </p>
            <Link to="/readmore">
              <span className="uppercase text-blue-700 font-semibold text-sm">
                Read more
              </span>
              <div className="w-[5.5vw] h-[0.2vw] bg-blue-700"></div>
            </Link>
          </div>
        </div>

        <div className="w-[23vw] h-[38vw] bg-slate-50 rounded-md ">
          <img src={img2} alt="" className="rounded-md object-cover" />
          <div className="relative bottom-20 left-6 rounded-md w-48 h-12 bg-blue-700 text-white text-lg flex items-center justify-center gap-4">
            <span>{<FaCalendarDays />}</span>
            <span className="text-base">24th March 2022</span>
          </div>
          <div className="flex flex-col gap-4 px-6 mb-10 ">
            <h3 className="text-3xl font-bold text-blue-950 hover:text-blue-700">
              Cras accumsan nulla nec lacus ultricies placerat
            </h3>
            <p className="text-gray-500  text-base">
              Curabitur sagittis libero tincidunt tempor finibus. Mauris at
              dignissim ligula, nec tristique orci.
            </p>
            <Link to="/readmore">
              <span className="uppercase text-blue-700 font-semibold text-sm">
                Read more
              </span>
              <div className="w-[5.5vw] h-[0.2vw] bg-blue-700"></div>
            </Link>
          </div>
        </div>

        <div className="w-[23vw] h-[38vw] bg-slate-50 rounded-md ">
          <img src={img3} alt="" className="rounded-md object-cover" />
          <div className="relative bottom-20 left-6 rounded-md w-48 h-12 bg-blue-700 text-white text-lg flex items-center justify-center gap-4">
            <span>{<FaCalendarDays />}</span>
            <span className="text-base">24th March 2022</span>
          </div>
          <div className="flex flex-col gap-4 px-6 mb-10 ">
            <h3 className="text-3xl font-bold text-blue-950 hover:text-blue-700">
              Cras accumsan nulla nec lacus ultricies placerat
            </h3>
            <p className="text-gray-500  text-base">
              Curabitur sagittis libero tincidunt tempor finibus. Mauris at
              dignissim ligula, nec tristique orci.
            </p>
            <Link to="/readmore">
              <span className="uppercase text-blue-700 font-semibold text-sm">
                Read more
              </span>
              <div className="w-[5.5vw] h-[0.2vw] bg-blue-700"></div>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <Link to="/readmore">
          <button
            type="submit"
            className="text-white capitalize text-lg font-bold w-28 h-14 b rounded-md bg-gradient-to-r  from-blue-400 to-blue-700  hover:from-blue-700 hover:to-blue-400 "
          >
            more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SectionSix;
