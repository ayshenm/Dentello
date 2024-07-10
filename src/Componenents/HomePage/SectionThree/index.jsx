import React from "react";
import img1 from "../../../assets/images/about-banner.png";
import { Link } from "react-router-dom";

const SectionThree = () => {
  return (
    <div className=" w-full h-full mt-32 flex  pt-32 gap-28 items-center justify-center">
      <div className="w-[32vw]">
        <img src={img1} alt="" className="w-full" />
      </div>
      <div className="w-[37vw] flex flex-col gap-4">
        <h4 className="uppercase text-blue-700 text-2xl font-bold">about us</h4>
        <h2 className="uppercase text-blue-950 text-4xl font-bold ">
          we are the best dental service
        </h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
          totam, similique unde, necessitatibus corrupti magnam nihil
          consectetur doloribus nulla ut nam accusantium sapiente consequuntur
          molestiae quo illo ducimus quae autem.
        </p>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
          odio quia ea non nam commodi, fugiat esse eos. Inventore molestias eos
          vel omnis assumenda natus vitae, fuga dolore ab quia.
        </p>

        <Link to="/about">
          <button className="w-[8vw] h-14 text-white uppercase  rounded-sm bg-gradient-to-r  from-blue-400 to-blue-700  hover:from-blue-700 hover:to-blue-400 ">
            read more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SectionThree;
