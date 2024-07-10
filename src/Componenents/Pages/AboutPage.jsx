import React, { useEffect, useRef } from "react";
import bgImg from "../../assets/images/aboutbg.webp";
import img1 from "../../assets/images/about1.webp";
import img2 from "../../assets/images/about2.jpg";
import img3 from "../../assets/images/about3.jpg";
import about from "../../assets/videos/about.mp4";
import location1 from "../../assets/images/location1.webp";
import location2 from "../../assets/images/location2.webp";
import location3 from "../../assets/images/location3.webp";
import location4 from "../../assets/images/location4.webp";
import location5 from "../../assets/images/location5.jpg";
import dentsist1 from "../../assets/images/dentist1.webp";
import dentsist2 from "../../assets/images/dentist2.jpg";
import dentsist3 from "../../assets/images/dentist3.jpg";

import { LuMapPin } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";

import { MdOutlineMail } from "react-icons/md";

import { IoIosTime } from "react-icons/io";
import { LuMessageCircle } from "react-icons/lu";
import Swiper7 from "../HomePage/Swiper7";

const AboutPage = () => {
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center  w-full ">
      <div className="w-full flex items-end justify-center relative h-screen">
        <video
          ref={videoRef}
          loop
          autoplay="{true}"
          muted
          className=" object-cover  w-full h-screen   absolute top-0 left-0  z-10"
        >
          <source src={about} type="video/mp4" />
        </video>

        <div className=" w-full  h-screen flex justify-center items-center  bg-black opacity-[0.2] z-50 relative"></div>
      </div>

      <div className="flex gap-24 mt-32 items-center justify-center  w-[85vw]   h-[43vw] bg-slate-200 rounded-tl-xl rounded-br-xl  rounded-tr-[16vw] rounded-bl-[16vw]">
        <div className="w-[30vw] h-[30vw] ml-16">
          <img
            src={img1}
            alt=""
            className="w-full h-full object-cover rounded-tr-xl rounded-bl-xl rounded-tl-[12vw] rounded-br-[12vw] "
          />
        </div>
        <div className="flex flex-col gap-8 w-[55vw] h-[43vw]   rounded-tr-[16vw] rounded-br-xl bg-blue-700 items-center justify-center">
          <div className="w-[40vw] flex flex-col gap-8 text-white">
            <h2 className=" text-5xl font-semibold capitalize text-center">
              about our dentist clinic
            </h2>
            <p className=" text-xl font-medium ">
              A Warm Welcome To Our Clinic Our clients are our priority, we
              offer quality dental services with a team of specialists. More
              details about our services below.
            </p>
            <p className=" text-base font-medium">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness.
            </p>
            <p className=" text-base font-medium">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 w-[85vw] items-center justify-center mt-32">
        <div className="flex items-center justify-center flex-col gap-3">
          <h2 className="text-blue-950 text-4xl capitalize font-bold text-center w-[55vw]">
            What Makes Our Office the Right Fit for Your Dental Needs?
          </h2>
        </div>

        <div className="flex gap-20">
          <div className="flex">
            <div className="w-[23vw] h-[28vw] bg-slate-50 rounded-md">
              <img
                src={dentsist1}
                alt=""
                className="rounded-tr-md rounded-tl-md object-cover "
              />

              <div className="flex flex-col gap-4 px-6 mb-10 items-center justify-center py-8">
                <h3 className="text-2xl capitalize font-bold text-blue-700 hover:text-blue-700">
                  personalized care
                </h3>
                <p className="text-gray-500  text-base font-semibold text-center">
                  Curabitur sagittis libero tincidunt tempor finibus. Mauris at
                  dignissim ligula, nec tristique orci.
                </p>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="w-[23vw] h-[28vw] bg-slate-50 rounded-md">
              <img
                src={dentsist2}
                alt=""
                className="rounded-tr-md rounded-tl-md object-cover "
              />

              <div className="flex flex-col gap-4 px-6 mb-10 items-center justify-center py-8">
                <h3 className="text-2xl capitalize font-bold text-blue-700 hover:text-blue-700">
                  comfortable office
                </h3>
                <p className="text-gray-500  text-base font-semibold text-center">
                  Curabitur sagittis libero tincidunt tempor finibus. Mauris at
                  dignissim ligula, nec tristique orci.
                </p>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="w-[23vw] h-[28vw] bg-slate-50 rounded-md">
              <img
                src={dentsist3}
                alt=""
                className="rounded-tr-md rounded-tl-md object-cover "
              />

              <div className="flex flex-col gap-4 px-6 mb-10 items-center justify-center py-8">
                <h3 className="text-2xl capitalize font-bold text-blue-700 hover:text-blue-700">
                  Health-First Approach
                </h3>
                <p className="text-gray-500  text-base font-semibold text-center">
                  Curabitur sagittis libero tincidunt tempor finibus. Mauris at
                  dignissim ligula, nec tristique orci.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-10 flex-col mt-32">
        <h2 className="text-4xl text-blue-950 font-bold ">
          Our Convenient Locations
        </h2>
        <div className="w-[85vw] h-[24vw]  flex bg-stone-100 rounded-md">
          <img
            src={location2}
            alt=""
            className="object-cover w-[23vw] h-[24vw]"
          />
          <div className="w-[62vw]">
            <div className="h-[8vw]  bg-gradient-to-r  from-blue-400 to-blue-700 flex items-center ">
              <h4 className="text-white font-bold text-4xl pl-16">
                JOHNS CREEK
              </h4>
            </div>
            <div className="flex gap-12">
              <div className="flex-col flex gap-6 pl-16 pt-4">
                <div className="flex-col flex gap-4  ">
                  <span className="text-base font-bold">Address</span>
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r  from-blue-400 to-blue-700 flex items-center justify-center">
                      <span className="text-white text-xl">{<LuMapPin />}</span>
                    </div>

                    <span className="text-lg">
                      3235 Roswell Rd NE Ste 400 Atlanta, <br /> GA 30305
                    </span>
                  </div>
                </div>

                <div className="flex-col flex  gap-4  ">
                  <span className="text-base font-bold ">Email</span>
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r  from-blue-400 to-blue-700 flex items-center justify-center">
                      <span className="text-white text-xl">
                        {<MdOutlineMail />}
                      </span>
                    </div>

                    <span className="text-lg font-medium">
                      example@gmail.com
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-col flex gap-6 pl-20 pt-4">
                <div className="flex-col flex gap-4  ">
                  <span className="text-base font-bold ">Hours</span>
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r  from-blue-400 to-blue-700 flex items-center justify-center">
                      <span className="text-white text-xl">
                        {<IoIosTime />}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg">Mon: Closed</span>
                      <span className="text-lg">Tues - Fri: 7:30am - 4pm</span>
                    </div>
                  </div>
                </div>

                <div className="flex-col flex  gap-4  ">
                  <span className="text-base font-bold">Call</span>
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r  from-blue-400 to-blue-700 flex items-center justify-center">
                      <span className="text-white text-xl">{<FiPhone />}</span>
                    </div>

                    <span className="text-lg font-medium">+94 123 34 56</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[85vw] h-[24vw]  flex bg-stone-100">
          <img
            src={location1}
            alt=""
            className="object-cover w-[23vw] h-[24vw]"
          />
          <div className="w-[62vw]">
            <div className="h-[8vw]  bg-gradient-to-r  from-blue-400 to-blue-700 flex items-center ">
              <h4 className="text-white font-bold text-4xl pl-16">BUCKHEAD</h4>
            </div>
            <div className="flex gap-12">
              <div className="flex-col flex gap-6 pl-16 pt-4">
                <div className="flex-col flex gap-4  ">
                  <span className="text-base font-bold">Address</span>
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r  from-blue-400 to-blue-700 flex items-center justify-center">
                      <span className="text-white text-xl">{<LuMapPin />}</span>
                    </div>

                    <span className="text-lg">
                      3235 Roswell Rd NE Ste 400 Atlanta, <br /> GA 30305
                    </span>
                  </div>
                </div>

                <div className="flex-col flex  gap-4  ">
                  <span className="text-base font-bold ">Email</span>
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r  from-blue-400 to-blue-700 flex items-center justify-center">
                      <span className="text-white text-xl">
                        {<MdOutlineMail />}
                      </span>
                    </div>

                    <span className="text-lg font-medium">
                      example@gmail.com
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-col flex gap-6 pl-20 pt-4">
                <div className="flex-col flex gap-4  ">
                  <span className="text-base font-bold ">Hours</span>
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r  from-blue-400 to-blue-700 flex items-center justify-center">
                      <span className="text-white text-xl">
                        {<IoIosTime />}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg">Mon: Closed</span>
                      <span className="text-lg">Tues - Fri: 7:30am - 4pm</span>
                    </div>
                  </div>
                </div>

                <div className="flex-col flex  gap-4  ">
                  <span className="text-base font-bold">Call</span>
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r  from-blue-400 to-blue-700 flex items-center justify-center">
                      <span className="text-white text-xl">{<FiPhone />}</span>
                    </div>

                    <span className="text-lg font-medium">
                    +94 123 34 56
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[85vw] h-[24vw]  flex bg-stone-100">
          <img
            src={location3}
            alt=""
            className="object-cover w-[23vw] h-[24vw]"
          />
          <div className="w-[62vw]">
            <div className="h-[8vw]  bg-gradient-to-r  from-blue-400 to-blue-700 flex items-center ">
              <h4 className="text-white font-bold text-4xl pl-16">
                PONCEY-HIGHLAND
              </h4>
            </div>
            <div className="flex gap-12">
              <div className="flex-col flex gap-6 pl-16 pt-4">
                <div className="flex-col flex gap-4  ">
                  <span className="text-base font-bold">Address</span>
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r  from-blue-400 to-blue-700 flex items-center justify-center">
                      <span className="text-white text-xl">{<LuMapPin />}</span>
                    </div>

                    <span className="text-lg">
                      3235 Roswell Rd NE Ste 400 Atlanta, <br /> GA 30305
                    </span>
                  </div>
                </div>

                <div className="flex-col flex  gap-4  ">
                  <span className="text-base font-bold ">Email</span>
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r  from-blue-400 to-blue-700 flex items-center justify-center">
                      <span className="text-white text-xl">
                        {<MdOutlineMail />}
                      </span>
                    </div>

                    <span className="text-lg font-medium">example@gmail.com</span>
                  </div>
                </div>
              </div>

              <div className="flex-col flex gap-6 pl-20 pt-4">
                <div className="flex-col flex gap-4  ">
                  <span className="text-base font-bold ">Hours</span>
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r  from-blue-400 to-blue-700 flex items-center justify-center">
                      <span className="text-white text-xl">
                        {<IoIosTime />}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg">Mon: Closed</span>
                      <span className="text-lg">Tues - Fri: 7:30am - 4pm</span>
                    </div>
                  </div>
                </div>

                <div className="flex-col flex  gap-4  ">
                  <span className="text-base font-bold">Call</span>
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r  from-blue-400 to-blue-700 flex items-center justify-center">
                      <span className="text-white text-xl">{<FiPhone />}</span>
                    </div>

                    <span className="text-lg font-medium">
                    +94 123 34 56
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[85vw] h-[24vw]  flex bg-stone-100">
          <img
            src={location4}
            alt=""
            className="object-cover w-[23vw] h-[24vw]"
          />
          <div className="w-[62vw]">
            <div className="h-[8vw]  bg-gradient-to-r  from-blue-400 to-blue-700 flex items-center ">
              <h4 className="text-white font-bold text-4xl pl-16">EAST COBB</h4>
            </div>
            <div className="flex gap-12">
              <div className="flex-col flex gap-6 pl-16 pt-4">
                <div className="flex-col flex gap-4  ">
                  <span className="text-base font-bold">Address</span>
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r  from-blue-400 to-blue-700 flex items-center justify-center">
                      <span className="text-white text-xl">{<LuMapPin />}</span>
                    </div>

                    <span className="text-lg">
                      3235 Roswell Rd NE Ste 400 Atlanta, <br /> GA 30305
                    </span>
                  </div>
                </div>

                <div className="flex-col flex  gap-4  ">
                  <span className="text-base font-bold ">Email</span>
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r  from-blue-400 to-blue-700 flex items-center justify-center">
                      <span className="text-white text-xl">
                        {<MdOutlineMail />}
                      </span>
                    </div>

                    <span className="text-lg font-medium">
                      example@gmail.com
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-col flex gap-6 pl-20 pt-4">
                <div className="flex-col flex gap-4  ">
                  <span className="text-base font-bold ">Hours</span>
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r  from-blue-400 to-blue-700 flex items-center justify-center">
                      <span className="text-white text-xl">
                        {<IoIosTime />}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg">Mon: Closed</span>
                      <span className="text-lg">Tues - Fri: 7:30am - 4pm</span>
                    </div>
                  </div>
                </div>

                <div className="flex-col flex  gap-4  ">
                  <span className="text-base font-bold">Call</span>
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r  from-blue-400 to-blue-700 flex items-center justify-center">
                      <span className="text-white text-xl">{<FiPhone />}</span>
                    </div>

                    <span className="text-lg font-medium">+94 123 34 56</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[85vw] h-[24vw]  flex bg-stone-100">
          <img
            src={location5}
            alt=""
            className="object-cover w-[23vw] h-[24vw]"
          />
          <div className="w-[62vw] ">
            <div className="h-[8vw]  bg-gradient-to-r  from-blue-400 to-blue-700 flex items-center ">
              <h4 className="text-white font-bold text-4xl pl-16">
                BROOKHAVEN
              </h4>
            </div>
            <div className="flex gap-12 ">
              <div className="flex-col flex gap-6 pl-16 pt-4 ">
                <div className="flex-col flex gap-4  ">
                  <span className="text-base font-bold">Address</span>
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r  from-blue-400 to-blue-700 flex items-center justify-center">
                      <span className="text-white text-xl">{<LuMapPin />}</span>
                    </div>

                    <span className="text-lg">
                      3235 Roswell Rd NE Ste 400 Atlanta, <br /> GA 30305
                    </span>
                  </div>
                </div>

                <div className="flex-col flex  gap-4">
                  <span className="text-base font-bold ">Email</span>
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r  from-blue-400 to-blue-700 flex items-center justify-center">
                      <span className="text-white text-xl">
                        {<MdOutlineMail />}
                      </span>
                    </div>

                    <span className="text-lg font-medium">example@gmail.com</span>
                  </div>
                </div>
              </div>

              <div className="flex-col flex gap-6 pl-20 pt-4">
                <div className="flex-col flex gap-4  ">
                  <span className="text-base font-bold ">Hours</span>
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r  from-blue-400 to-blue-700 flex items-center justify-center">
                      <span className="text-white text-xl">
                        {<IoIosTime />}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg">Mon: Closed</span>
                      <span className="text-lg">Tues - Fri: 7:30am - 4pm</span>
                    </div>
                  </div>
                </div>

                <div className="flex-col flex  gap-4  ">
                  <span className="text-base font-bold">Call</span>
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r  from-blue-400 to-blue-700 flex items-center justify-center">
                      <span className="text-white text-xl">{<FiPhone />}</span>
                    </div>

                    <span className="text-lg font-medium">+94 123 34 56</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-slate-200 h-full mt-32 flex flex-col items-center justify-center gap-12 py-20 ">
        <h2 className="text-4xl text-blue-950 font-bold  capitalize w-[30vw] text-center">
          Dentelo Dentistry Patients Are The Best
        </h2>
        <Swiper7 /> 
      </div>
    </div>
  );
};

export default AboutPage;
