import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import doctor1 from "../../../assets/images/doctor-1.png";
import doctor2 from "../../../assets/images/doctor-2.png";
import doctor3 from "../../../assets/images/doctor-3.png";
import doctor4 from "../../../assets/images/doctor-4.png";
import { GoDotFill } from "react-icons/go";
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from "react";

const SectionFour = () => {
  const [show, setShow] = useState(false);
  const [detail, setDetail] = useState("");

  const handledetail = (item) => {
    setDetail(item);
    setShow(true);
  };

  const handleclose = () => {
    setShow(false);
  };

  const [data, Setdata] = useState([
    {
      id: 1,
      image: doctor1,
      name: "howard holmes",
      job: "general dentist",
      education1: "State University of New York at Stony Brook",
      education2:
        "State University of New York at Buffalo School of Dental Medicine",
      text: "Dr. Howard Holmes has been practicing dentistry and creating beautiful smiles in Nesconset, NY since 2010 before recently partnering with The Smilist Dental in Smithtown, NY. Dr. Howard Holmes prides himself in providing patients with the highest quality dental care in the same warm, caring, and professional manner he would extend to members of his own family.",
    },
    {
      id: 2,
      image: doctor2,
      name: "Ella Tompson",
      job: "Oral & Maxillofacial Surgeon",
      education1: "Columbia University College of Dental Medicine ",
      education2: "Residency, Downstate Kings County Hospital",
      text: "Dr. Howard Holmes has been practicing dentistry and creating beautiful smiles in Nesconset, NY since 2010 before recently partnering with The Smilist Dental in Smithtown, NY. Dr. Howard Holmes prides himself in providing patients with the highest quality dental care in the same warm, caring, and professional manner he would extend to members of his own family.",
    },

    {
      id: 3,
      image: doctor3,
      name: "Vincent Cooper",
      job: "Oral Surgeon ",
      education1: " University of Illinois at Champaign, Urbana, IL",
      education2: "Columbia School of Dental and Oral Surgery",
      text: "Dr. Howard Holmes has been practicing dentistry and creating beautiful smiles in Nesconset, NY since 2010 before recently partnering with The Smilist Dental in Smithtown, NY. Dr. Howard Holmes prides himself in providing patients with the highest quality dental care in the same warm, caring, and professional manner he would extend to members of his own family.",
    },
    {
      id: 4,
      image: doctor4,
      name: "Danielle Bryant",
      job: "Prosthodontist/Periodontist",
      education1: "Binghamton University",
      education2:
        "NYU College of Dentistry, Omicron Kappa Upsilon Honor Society",
      text: "Dr. Howard Holmes has been practicing dentistry and creating beautiful smiles in Nesconset, NY since 2010 before recently partnering with The Smilist Dental in Smithtown, NY. Dr. Howard Holmes prides himself in providing patients with the highest quality dental care in the same warm, caring, and professional manner he would extend to members of his own family.",
    },
  ]);
  return (
    <div className=" w-full h-full pt-32 flex items-center justify-center flex-col gap-14 relative">
      <div className="flex items-center justify-center flex-col gap-3">
        <h4 className="text-blue-700 text-2xl uppercase font-bold">
          our doctor
        </h4>
        <h2 className="text-blue-950 text-6xl capitalize font-bold">
          best expert dentist
        </h2>
      </div>
      {show && (
        <div className="absolute top-[17vw]">
          <div className="w-[50vw] h-[36vw]  rounded-md flex  text-blue-950 justify-center py-6 gap-8 bg-stone-200 relative">
            <img
              src={detail.image}
              className="w-[16vw] h-[22vw] object-cover rounded-md"
              alt=""
            />
            <div
              className="  bottom-[34vw] left-[48vw]  text-blue-700  absolute "
              onClick={handleclose}
            >
              <span className="text-2xl font-bold">{<IoMdCloseCircle />}</span>
            </div>
            <div className="w-[28vw] ">
              <h4 className="text-blue-950 font-medium text-3xl capitalize">
                {detail.name}{" "}
              </h4>

              <h3 className="text-blue-700 font-semibold text-base capitalize mt-4">
                general dentist
              </h3>
              <h4 className="text-blue-700 font-medium text-2xl capitalize mt-4">
                location{" "}
              </h4>
              <span className="text-base text-medium text-blue-950 capitalize mt-2">
                breakhead
              </span>
              <h4 className="text-blue-700 font-medium text-2xl capitalize mt-4">
                education{" "}
              </h4>
              <div>
                <div className="flex gap-2 items-center mt-2">
                  <span>{<GoDotFill />}</span>
                  <p className="text-base font-medium">{detail.education1}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <span>{<GoDotFill />}</span>
                  <p className="text-base font-medium">{detail.education2}</p>
                </div>
                <h4 className="text-blue-700 font-medium text-2xl capitalize mt-4">
                  personal biography{" "}
                </h4>
              </div>
              <p className="text-base font-medium">{detail.text}</p>
            </div>
          </div>
        </div>
      )}

      <div className="flex  gap-4">
        {data.map((item) => (
          <div key={item.id}>
            <div className="w-[18vw] h-[32vw] border-[1px]  border-gray-300 rounded-md flex flex-col items-center py-[2vw]  ">
              <img
                src={item.image}
                alt=""
                className="object-cover w-[14vw]  "
              />
              <div className="flex flex-col gap-2 items-center py-6">
                <Link>
                  <span
                    className="text-blue-950 font-bold text-2xl capitalize hover:text-blue-700"
                    onClick={() => handledetail(item)}
                  >
                    {item.name}
                  </span>
                </Link>
                <span className="capitalize text-blue-700 text-lg">
                  dentist
                </span>
                <div className="">
                  <ul className="flex gap-3 ">
                    <Link to="https://www.facebook.com/login/">
                      <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-blue-700">
                        <span className="font-bold text-lg text-blue-700 hover:text-white  transition-all duration-150">
                          <FaFacebookF />
                        </span>
                      </div>
                    </Link>

                    <Link to="https://www.instagram.com/">
                      <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-blue-700 ">
                        <span className="font-bold text-lg text-blue-700 hover:text-white  transition-all duration-150">
                          <FaInstagram />
                        </span>
                      </div>
                    </Link>

                    <Link to="https://twitter.com/?lang=tr">
                      <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-blue-700">
                        <span className="font-bold text-lg text-blue-700 hover:text-white  transition-all duration-150">
                          <FaTwitter />
                        </span>
                      </div>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFour;
