import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full  bg-slate-50 h-20 flex justify-center items-center gap-48 ">
      <div>
        <span className="text-blue-950 text-3xl font-bold small:text-3xl">
          <Link to="/">Dentelo.</Link>
        </span>
      </div>
      <div className="">
        <ul className="text-blue-950 capitalize text-lg  font-semibold flex gap-10">
          <Link
            to="/"
            className="hover:text-blue-700 transition ease-in-out delay-150"
          >
            home
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-700 transition ease-in-out delay-150"
          >
            about
          </Link>
          <Link
            to="/menu"
            className="hover:text-blue-700 transition ease-in-out delay-150"
          >
            Blog
          </Link>

          <Link
            to="/service"
            className="hover:text-blue-700 transition ease-in-out delay-150"
          >
            service
          </Link>
          <Link
            to="/contact2"
            className="hover:text-blue-700 transition ease-in-out delay-150"
          >
            contact
          </Link>
        </ul>
      </div>

      <div>
        <Link to="/book">
          <button className="text-white uppercase w-48 h-14 b rounded-md bg-gradient-to-r  from-blue-400 to-blue-700  hover:from-blue-700 hover:to-blue-400 ">
            book appointment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
