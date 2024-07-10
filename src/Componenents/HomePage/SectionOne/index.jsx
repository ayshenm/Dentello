import React from "react";
import img1 from "../../../assets/images/hero-banner.png";
import { Link } from "react-router-dom";

const SectionOne = () => {
  return (
    <div className="flex bg-slate-50 gap-10 items-center justify-center w-full h-full">
      <div className="w-[35vw] flex flex-col gap-8">
        <h4 className="uppercase text-blue-700 text-2xl font-bold">
          welcome to dentelo
        </h4>
        <h1 className="uppercase text-blue-950 text-6xl font-bold ">
          we are the best dental service
        </h1>
        <p className="text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          reprehenderit obcaecati repellat, ipsa dolores dignissimos assumenda
          quos, impedit nobis perferendis laboriosam autem quam? Architecto
          iusto
        </p>
        <div className="bg-white flex items-center  justify-center mr-10 py-4">
          <form action="" className="relative">
            <input
              type="email"
              placeholder="Your Email Adress..."
              className=" outline-none bg-slate-100 rounded-sm w-[30vw] h-16 pl-4"
            />
            <Link to="/">
              <button className="absolute right-0 top-0 bottom-0 w-[10vw] text-white uppercase  rounded-sm bg-gradient-to-r  from-blue-400 to-blue-700  hover:from-blue-700 hover:to-blue-400 ">
                get call back
              </button>
            </Link>
          </form>
        </div>
      </div>

      <div className="w-[35vw]">
        <img src={img1} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default SectionOne;
