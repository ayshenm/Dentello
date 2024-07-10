import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { IoIosTimer } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";

const SectionSeven = () => {
  return (
    <div className="w-full bg-blue-950 text-white flex  justify-center gap-6 py-10 ">
      <div className="w-[22vw] flex flex-col gap-4 ">
        <h3 className="text-4xl font-extrabold ">Dentelo.</h3>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eaque
          officia enim iste quam.
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r  from-blue-400 to-blue-700  flex items-center justify-center">
              <span>{<IoIosTimer />}</span>
            </div>
            <div className="flex flex-col">
              <span>Monday - Saturday:</span>
              <span className="">9:00am - 10:00Pm</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[15vw] flex flex-col gap-4 ">
        <h3 className="text-2xl font-bold capitalize">other links</h3>

        <div className="flex flex-col gap-2 capitalize ">
          <div className="flex gap-2  pb-2 items-center ">
            <span>{<BiChevronRight />}</span>
            <Link to="/">
              <span>home</span>
            </Link>
          </div>
          <div className="flex gap-2   pb-2 items-center">
            <span>{<BiChevronRight />}</span>
            <Link to="/about">
              {" "}
              <span>about us</span>
            </Link>
          </div>
          <div className="flex gap-2 pb-2 items-center">
            <span>{<BiChevronRight />}</span>
            <Link to="/service">
              {" "}
              <span>services</span>
            </Link>
          </div>
          <div className="flex gap-2 pb-2 items-center">
            <span>{<BiChevronRight />}</span>
            <Link to="/project">
              {" "}
              <span>project</span>
            </Link>
          </div>
          <div className="flex gap-2 pb-2 items-center">
            <span>{<BiChevronRight />}</span>
            <Link to="/ourteam">
              <span>our team</span>
            </Link>
          </div>
          <div className="flex gap-2 pb-2 items-center">
            <span>{<BiChevronRight />}</span>
            <span>latest blog</span>
          </div>
        </div>
      </div>

      <div className="w-[15vw] flex flex-col gap-4 ">
        <h3 className="text-2xl font-bold capitalize">our services</h3>

        <div className="flex flex-col gap-2 capitalize">
          <div className="flex gap-2  pb-2 items-center ">
            <span>{<BiChevronRight />}</span>
            <Link to="/root">
              {" "}
              <span>root canal</span>
            </Link>
          </div>
          <div className="flex gap-2   pb-2 items-center">
            <span>{<BiChevronRight />}</span>
            <Link to="/aligment">
              {" "}
              <span>aligment teeth</span>
            </Link>
          </div>
          <div className="flex gap-2 pb-2 items-center">
            <span>{<BiChevronRight />}</span>
            <Link to="/cosmetic">
              {" "}
              <span>cosmetic teeth</span>
            </Link>
          </div>
          <div className="flex gap-2 pb-2 items-center">
            <span>{<BiChevronRight />}</span>
            <Link to="/hygiene">
              {" "}
              <span>oral hygiene</span>
            </Link>
          </div>
          <div className="flex gap-2 pb-2 items-center">
            <span>{<BiChevronRight />}</span>
            <Link to="/advisory">
              {" "}
              <span>live advisory</span>
            </Link>
          </div>
          <div className="flex gap-2 pb-2 items-center">
            <span>{<BiChevronRight />}</span>
            <Link to="/cavity">
              {" "}
              <span>cavity ispection</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[22vw] flex flex-col gap-4 ">
        <h3 className="text-2xl font-bold capitalize">contact us</h3>

        <div className="flex flex-col gap-6">
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r  from-blue-400 to-blue-700 flex items-center justify-center">
              <Link to="/https://maps.google.com/">
                {" "}
                <span>{<LuMapPin />}</span>
              </Link>
            </div>

            <span>1247/Plot No. 39, 15th Phase, Kanpur</span>
          </div>

          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r  from-blue-400 to-blue-700  flex items-center justify-center">
              <span>{<FiPhone />}</span>
            </div>

            <span>+91-7052-101-786</span>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r  from-blue-400 to-blue-700 flex items-center justify-center">
              <span>{<MdOutlineMail />}</span>
            </div>

            <span>help@example.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSeven;
