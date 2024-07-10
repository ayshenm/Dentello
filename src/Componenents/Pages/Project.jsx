import React from "react";
import bgImg from "../../assets/images/teambg.jpg";
import project from "../../assets/videos/certification.mp4";
import Swiper9 from "../HomePage/Swiper9";

const Project = () => {
  return (
    <div className="flex items-center justify-center w-full flex-col">
      <div className="flex items-center justify-center  w-full">
        <div
          className="relative w-[85vw]   h-[30vw] mt-24 flex items-center justify-center bg-no-repeat bg-cover bg-center rounded-tl-xl rounded-br-xl rounded-tr-[16vw] rounded-bl-[16vw] "
          style={{ backgroundImage: "url(" + bgImg + ")" }}
        >
          <div className=" w-full  h-[30vw]  justify-center items-center absolute z-40 bg-blue-400 opacity-[0.3] rounded-tl-xl rounded-br-xl  rounded-tr-[16vw] rounded-bl-[16vw]"></div>
          <div className="flex flex-col w-[55vw] items-center justify-center text-center gap-10 relative z-50">
            <h2 className="text-6xl font-bold text-blue-950 capitalize">
              our project
            </h2>
          </div>
        </div>

        <div></div>
      </div>

      <div className="flex flex-col items-center justify-center gap-10  mt-32">
        <h2 className="text-blue-950 text-5xl font-semibold">
          Protect And Repair Infected Teeth
        </h2>
        <p className=" w-[45vw] text-center text-lg font-medium">
          When a cavity is left too long, or a tooth has experienced trauma,
          oral bacteria can infect the nerve, which can be painful. If left
          untreated and a root canal doesn't remove infection, this may
          eventually result in tooth loss. While a root canal sounds scary, it's
          a relatively simple and painless procedure with local anesthesia. Or
          you can opt for sedation if that makes you more comfortable.
        </p>
        <video loop className="w-[70vw]   h-[25vw] rounded-lg" controls>
          <source src={project} type="video/mp4" />
        </video>
      </div>

      <div className="w-full mt-32 flex flex-col items-center justify-center gap-8">
        <h2 className="text-6xl font-bold text-blue-950 capitalize">
          our certifications
        </h2>
        <Swiper9 />
      </div>
    </div>
  );
};

export default Project;
