import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-24 bg-slate-900 flex items-center justify-between px-40">
      <div>
        <span className="text-white text-lg">
          © 2024 All Rights Reserved by John Doe.
        </span>
      </div>

      <div className="">
        <ul className="capitalize text-slate-300 flex  gap-5 text-lg ">
          <Link to="https://www.facebook.com/login/">
            <div className="w-10 h-10 bg-gray-600 flex items-center justify-center rounded-full hover:bg-blue-700">
              <span className="font-bold  hover:text-white  transition-all duration-150">
                <FaFacebookF />
              </span>
            </div>
          </Link>
          <Link to="https://www.instagram.com/">
            <div className="w-10 h-10 bg-gray-600 flex items-center justify-center rounded-full hover:bg-blue-700">
              <span className="font-bold  hover:text-white  transition-all duration-150">
                <FaInstagram />
              </span>
            </div>
          </Link>
          <Link to="https://twitter.com/?lang=tr">
            <div className="w-10 h-10 bg-gray-600 flex items-center justify-center rounded-full hover:bg-blue-700">
              <span className="font-bold  hover:text-white  transition-all duration-150">
                <FaTwitter />
              </span>
            </div>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
