import React from "react";
import bgImg from "../../assets/images/hygienebg.avif";
import img1 from "../../assets/images/rootcanal1.jpg";
import hygiene from "../../assets/videos/hygiene.mp4";
import rootcanal2 from "../../assets/images/rootcanal2.jpg";
import rootcanal3 from "../../assets/images/rootcanal3.jpg";
import rootcanal4 from "../../assets/images/blog-1.jpg";
import { FaTooth } from "react-icons/fa";
import Swiper from "../../Componenents/HomePage/Swiper";

import Swiper5 from "../HomePage/Swiper5";

const OralHygiene = () => {
  return (
    <div className="flex items-center justify-center w-full flex-col">
      <div className="flex items-center justify-center  w-full">
        <div
          className="relative w-[85vw]   h-[30vw] mt-24 flex  items-center justify-center bg-no-repeat bg-cover bg-center rounded-tl-xl rounded-br-xl rounded-tr-[16vw] rounded-bl-[16vw] "
          style={{ backgroundImage: "url(" + bgImg + ")" }}
        >
          <div className=" w-full  h-[30vw]  justify-center items-center absolute z-40 bg-blue-400 opacity-[0.3] rounded-tl-xl rounded-br-xl  rounded-tr-[16vw] rounded-bl-[16vw]"></div>
          <div className="flex flex-col w-[55vw] items-center justify-center text-center gap-10 relative z-50">
            <h2 className="text-6xl font-bold text-blue-950 capitalize">
              Oral Hygiene
            </h2>
            <p className="text-blue-950 w-[45vw] text-2xl font-semibold">
              Get gentle root canal therapy at every Dentelo Dentistry studio in
              Texas
            </p>
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
        <img
          src={img1}
          alt=""
          className="w-[70vw]   h-[25vw] object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-10  mt-32">
        <h2 className="text-blue-950 text-5xl font-semibold w-[55vw] text-center">
          The Unique Benefits Of Dental Implants
        </h2>
        <div className="flex gap-16">
          <div className="w-[18vw] h-[14vw] px-5 bg-slate-100 flex items-center justify-center flex-col gap-4 border-4 border-b-blue-700 border-l-blue-700 border-r-0 border-t-0 rounded-lg">
            <h4 className="text-blue-950 text-xl font-semibold">
              Long Lasting
            </h4>
            <p className="text-gray-500 text-base font-medium text-center">
              Dental implants are built to last. Expect your implants to last
              30+ years. With proper care, the rest of your life.
            </p>
          </div>

          <div className="w-[18vw] h-[14vw] px-5 bg-slate-100 flex items-center justify-center flex-col gap-4 border-4 border-t-blue-700 border-r-blue-700 border-l-0 border-b-0 rounded-lg">
            <h4 className="text-blue-950 text-xl font-semibold">
              Look And Feel Natural
            </h4>
            <p className="text-gray-500 text-base font-medium text-center">
              Dental implants look normal. It will be indistinguishable from a
              real tooth when you smile, speak, and eat.{" "}
            </p>
          </div>

          <div className="w-[18vw] h-[14vw] px-5 bg-slate-100 flex items-center justify-center flex-col gap-4 border-4 border-t-blue-700 border-l-blue-700 border-r-0 border-b-0 rounded-lg">
            <h4 className="text-blue-950 text-xl font-semibold">
              No Special Care
            </h4>
            <p className="text-gray-500 text-base font-medium text-center">
              Treat them like your other teeth. All you need to do is brush and
              floss regularly just like you would for your natural teeth.
            </p>
          </div>

          <div className="w-[18vw] h-[14vw] px-5 bg-slate-100 flex items-center justify-center flex-col gap-4 border-4 border-b-blue-700 border-r-blue-700 border-l-0 border-t-0 rounded-lg">
            <h4 className="text-blue-950 text-xl font-semibold">
              Keep Teeth Intact
            </h4>
            <p className="text-gray-500 text-base font-medium text-center">
              Implants aren't like a bridge. Bridges fill gaps, but remove
              healthy enamel from adjacent teeth. An implant does not.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-10  mt-32">
        <h2 className="text-blue-950 text-5xl font-semibold w-[55vw] text-center">
          The More You Know,The Better Your Oral Health Will Be
        </h2>
        <div className="flex gap-24 items-center justify-center w-[85vw]   h-[30vw] bg-slate-200 rounded-tl-xl rounded-br-xl  rounded-tr-[16vw] rounded-bl-[16vw]">
          <h3 className="text-4xl font-semibold w-[20vw] text-center">
            Oral Hygiene
          </h3>
          <video
            loop
            className="object-cover  w-[35vw] h-[23vw] rounded-lg"
            controls
          >
            <source src={hygiene} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="w-[85vw] mt-20">
        <Swiper5 />
      </div>

      <div className="flex gap-32 mt-32 items-center justify-center">
        <div className="flex flex-col gap-8">
          <div className="w-[40vw] flex flex-col gap-8">
            <h2 className="text-blue-950 text-5xl font-semibold ">
              Come In And See Us We'll Have You Grinning From The Chin Up
            </h2>
            <p className="text-blue-950 text-2xl font-medium ">
              Whatever dental procedure or treatment you need,we'll make sure
              your time with us is comfortable, enjoyable and informative.
            </p>
          </div>
          <div className="flex flex-col gap-6 ">
            <div className="flex gap-4">
              <span className="text-blue-700 font-bold text-3xl">
                {<FaTooth />}
              </span>
              <h5 className="text-blue-950 font-bold text-lg">
                The Best Dental Care
              </h5>
            </div>
            <div className="flex gap-4">
              <span className="text-blue-700 font-bold text-3xl">
                {<FaTooth />}
              </span>
              <h5 className="text-blue-950 font-bold text-lg">
                Fun, Friendly And Non-Judgey Staff
              </h5>
            </div>
            <div className="flex gap-4">
              <span className="text-blue-700 font-bold text-3xl">
                {<FaTooth />}
              </span>
              <h5 className="text-blue-950 font-bold text-lg">
                Honest And Transparent Treatment
              </h5>
            </div>
            <div className="flex gap-4">
              <span className="text-blue-700 font-bold text-3xl">
                {<FaTooth />}
              </span>
              <h5 className="text-blue-950 font-bold text-lg">
                Comfortable Chairs
              </h5>
            </div>
            <div className="flex gap-4">
              <span className="text-blue-700 font-bold text-3xl">
                {<FaTooth />}
              </span>
              <h5 className="text-blue-950 font-bold text-lg">
                TV's For Entertaining Distractions
              </h5>
            </div>
            <div className="flex gap-4">
              <span className="text-blue-700 font-bold text-3xl">
                {<FaTooth />}
              </span>
              <h5 className="text-blue-950 font-bold text-lg">
                Financing Options
              </h5>
            </div>
          </div>
        </div>

        <div className="w-[40vw] h-[30vw]">
          <img
            src={rootcanal2}
            alt=""
            className="w-full h-full object-cover rounded-tr-xl rounded-bl-xl rounded-tl-[13vw] rounded-br-[13vw] "
          />
        </div>
      </div>

      <div className="w-[87vw] mt-20">
        <Swiper />
      </div>

      <div className="flex gap-60 mt-32 items-center justify-center">
        <div className="w-[30vw] h-[20vw]  gap-8 flex flex-col">
          <img
            src={rootcanal3}
            alt=""
            className="w-full h-full object-cover rounded-tr-xl rounded-bl-xl rounded-tl-[8vw] rounded-br-[8vw] "
          />
          <img
            src={rootcanal4}
            alt=""
            className="ml-52 w-full h-full object-cover rounded-tr-xl rounded-bl-xl rounded-tl-[8vw] rounded-br-[8vw] "
          />
        </div>

        <div className="flex flex-col gap-8 ">
          <div className="w-[40vw] flex flex-col gap-8">
            <h2 className="text-blue-950 text-5xl font-semibold ">
              Don't Let Finances Come Between You And A Beautiful Healthy Smile
            </h2>
            <p className="text-blue-950 text-xl font-medium ">
              We understand the frustration of needing dental care while feeling
              it may not be affordable. You shouldn't have to worry about paying
              for your oral health. That's why we have several options to help
              you easily finance your dental treatment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OralHygiene;
