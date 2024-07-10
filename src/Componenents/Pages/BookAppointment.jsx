import React, { useEffect, useState } from "react";
import bgImg from "../../assets/images/bgimg.jpeg";
import { Link } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";

const BookAppointment = () => {
  const [show, setShow] = useState(false);
  const [hidden, setHidden] = useState(true);

  const handleclick = () => {
    setShow(true);
    setHidden(false);
  };
  const handleclose = () => {
    setShow(false);
    setHidden(true);
  };

  return (
    <div
      className="relative w-full h-screen  flex items-center justify-center bg-no-repeat bg-cover bg-center flex-col "
      style={{ backgroundImage: "url(" + bgImg + ")" }}
    >
      <div className=" w-full h-screen  justify-center items-center absolute z-40 bg-black opacity-[0.2]"></div>
      <div className="flex flex-col w-[55vw] items-center justify-center text-center  relative z-50">
        {hidden && (
          <div className="flex flex-col gap-14">
            <h2 className="text-6xl font-bold text-blue-950 capitalize">
              dentelo clinics booking website
            </h2>
            <Link>
              <button
                type="submit"
                onClick={handleclick}
                className="text-white capitalize text-lg font-bold w-40 h-14 b rounded-md bg-gradient-to-r  from-blue-400 to-blue-700  hover:from-blue-700 hover:to-blue-400 "
              >
                book now
              </button>
            </Link>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center justify-center  relative z-50">
        {show && (
          <div className="bg-stone-200 w-[52vw] h-[40vw] py-10 relative rounded-md">
            <div
              className="  bottom-[38vw] left-[50vw]  text-blue-700  absolute"
              onClick={handleclose}
            >
              <span className="text-2xl font-bold">{<IoMdCloseCircle />}</span>
            </div>
            <h2 className="capitalize text-blue-700 text-4xl font-bold w-[25vw] pl-10">
              <span className="text-blue-500">book your visit at</span> Dentelo
            </h2>
            <form>
              <div className="flex flex-col gap-3 pl-10 pt-10">
                <div className="flex gap-8">
                  <div>
                    <div className="flex flex-col">
                      <label className="text-blue-950 font-bold text-base ml-2 capitalize">
                        name
                      </label>
                      <input
                        className="mb-2 w-[18vw] h-[3vw] outline-none capitalize    bg-slate-50  rounded-md mt-2 pl-4 text-slate-600"
                        type="text"
                        placeholder="enter your name"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-blue-950 font-bold text-base ml-2 capitalize">
                        select date
                      </label>
                      <input
                        className="mb-2 w-[18vw] h-[3vw] outline-none capitalize    bg-slate-50  rounded-md mt-2 pl-4 text-slate-600 "
                        type="date"
                        placeholder="enter your phone number"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-blue-950 font-bold text-base ml-2 capitalize ">
                        select service
                      </label>
                      <select
                        id=""
                        className="w-[22vw] h-[3vw] font-medium capitalize outline-none  mb-2 bg-slate-50  rounded-md mt-2 pl-4 text-slate-600"
                      >
                        <option value="root canal">root canal</option>
                        <option value="cosmetic teeth">cosmetic teeth</option>
                        <option value="live advisory">live advisory</option>
                        <option value="aligment teeth">aligment teeth</option>
                        <option value="oral hygiene">oral hygiene</option>
                        <option value="cavity ispection">
                          cavity ispection
                        </option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col">
                      <label className="text-blue-950 font-bold text-base ml-2 capitalize">
                        phone number
                      </label>
                      <input
                        className="mb-2 w-[18vw] h-[3vw] outline-none capitalize    bg-slate-50  rounded-md mt-2 pl-4 text-slate-600 "
                        type="tel"
                        placeholder="enter your phone number"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-blue-950 font-bold text-base ml-2 capitalize ">
                        select hour
                      </label>
                      <input
                        className="mb-2 w-[18vw] h-[3vw] outline-none capitalize    bg-slate-50  rounded-md mt-2 pl-4 text-slate-600 "
                        type="time"
                        placeholder=""
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-blue-950 font-bold text-base ml-2 capitalize ">
                        select office
                      </label>
                      <select
                        id=""
                        className="w-[22vw] h-[3vw] font-medium capitalize outline-none  mb-2 bg-slate-50  rounded-md mt-2 pl-4 text-slate-600"
                      >
                        <option value="root canal">Jhons Creek</option>
                        <option value="cosmetic teeth">buckhead</option>
                        <option value="live advisory">poncey-highland</option>
                        <option value="aligment teeth">east job</option>
                        <option value="oral hygiene">brookhaven</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <button
                    type="submit"
                    className="text-white text-base font-bold  w-48 h-14 b rounded-md bg-gradient-to-r  from-blue-400 to-blue-700  hover:from-blue-700 hover:to-blue-400 "
                  >
                    Make an Appointment
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookAppointment;
