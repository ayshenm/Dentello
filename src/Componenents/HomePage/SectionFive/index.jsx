import React from "react";
import img1 from "../../../assets/images/cta-banner.png";
import { Link } from "react-router-dom";

const SectionFive = () => {
  return (
    <div className=" w-full h-full flex gap-24 items-center justify-center  bg-blue-950 mt-32">
      <div className="w-[30vw]">
        <img src={img1} alt="" className="w-full" />
      </div>
      <div className="w-[42vw] flex flex-col gap-8">
        <h4 className="capitalize text-blue-700 text-2xl font-bold">
          Book Dentail Appointment
        </h4>
        <h2 className="capitalize text-white text-5xl font-bold ">
          We Are open And Welcoming Patients
        </h2>

        <Link to="/book">
          <button className="text-white uppercase w-48 h-14 b rounded-md bg-gradient-to-r  from-blue-400 to-blue-700  hover:from-blue-700 hover:to-blue-400 ">
            book appointment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SectionFive;
