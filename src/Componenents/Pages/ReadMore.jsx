import React, { useState } from "react";
import img1 from "../../assets/images/blog-1.jpg";
import img2 from "../../assets/images/blog-2.jpg";
import img3 from "../../assets/images/blog-3.jpg";
import img4 from "../../assets/images/customer1.jpg";
import img5 from "../../assets/images/customer2.jpg";
import img6 from "../../assets/images/customer3.jpg";
import { Link } from "react-router-dom";
import { FaCalendarDays } from "react-icons/fa6";

const ReadMore = () => {
  const [data, setData] = useState([
    {
      id: 1,
      image: img1,
      title: "  Cras accumsan nulla nec lacus ultricies placerat",
      text: "Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci",
      link: "Read more",
    },
    {
      id: 2,
      image: img2,
      title: "  Cras accumsan nulla nec lacus ultricies placerat",
      text: "Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci",
      link: "Read more",
    },
    {
      id: 3,
      image: img3,
      title: "  Cras accumsan nulla nec lacus ultricies placerat",
      text: "Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci",
      link: "Read more",
    },
    {
      id: 4,
      image: img4,
      title: "  Cras accumsan nulla nec lacus ultricies placerat",
      text: "Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci",
      link: "Read more",
    },
    {
      id: 5,
      image: img5,
      title: "  Cras accumsan nulla nec lacus ultricies placerat",
      text: "Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci",
      link: "Read more",
    },
    {
      id: 6,
      image: img6,
      title: "  Cras accumsan nulla nec lacus ultricies placerat",
      text: "Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci",
      link: "Read more",
    },
  ]);
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center mt-14">
      {data.map((item) => (
        <div
          key={item.id}
          className="w-[23vw] h-[38vw] bg-slate-50 rounded-md "
        >
          <img
            src={item.image}
            alt=""
            className="rounded-md object-cover w-[23vw] h-[18vw]"
          />
          <div className="relative bottom-20 left-6 rounded-md w-48 h-12 bg-blue-700 text-white text-lg flex items-center justify-center gap-4">
            <span>{<FaCalendarDays />}</span>
            <span className="text-base">24th March 2022</span>
          </div>
          <div className="flex flex-col gap-4 px-6 mb-10 ">
            <h3 className="text-3xl font-bold text-blue-950 hover:text-blue-700">
              {item.title}
            </h3>
            <p className="text-gray-500  text-base">{item.text}</p>
            <Link to="/news">
              <span className="uppercase text-blue-700 font-semibold text-sm">
                {item.link}
              </span>
              <div className="w-[5.5vw] h-[0.2vw] bg-blue-700"></div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReadMore;
