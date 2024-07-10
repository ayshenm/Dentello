import React from "react";
import bgImg from "../../assets/images/teambg.jpg";
import team from "../../assets/images/team.jpg";
import img1 from "../../assets/images/dr_soon.png";
import img2 from "../../assets/images/dr_habibi.png";
import img3 from "../../assets/images/dr_lo.png";
import img4 from "../../assets/images/dr_leo_ntoumenopoulos.png";
import img5 from "../../assets/images/dr_james_ntoumenopoulos.png";
import img6 from "../../assets/images/dr_claudia_marino.png";
import img7 from "../../assets/images/dr_bridgwood.png";
import img8 from "../../assets/images/dr_marino-1.png";
import img9 from "../../assets/images/dr_emilia_bonfanti-1.png";
import img10 from "../../assets/images/elise_oreilly-2.png";
import img11 from "../../assets/images/rosie_lowe-1.png";

const OutTeam = () => {
  const data = [
    {
      id: 1,
      image: img1,
      name: "Dr. Tom Jossef ",
      title: "Principal Dentist",
      text: "Dr. Justin is dedicated to professional growth and stays updated on the latest advances in dentistry by attending world-class dental conferences, lectures, and workshops.",
    },
    {
      id: 2,
      image: img2,
      name: "Dr. Jhon Doe ",
      title: "Principal Dentist",
      text: "Dr. Justin is dedicated to professional growth and stays updated on the latest advances in dentistry by attending world-class dental conferences, lectures, and workshops.",
    },
    {
      id: 3,
      image: img3,
      name: "Dr. Edward Anthon ",
      title: "Principal Dentist",
      text: "Dr. Justin is dedicated to professional growth and stays updated on the latest advances in dentistry by attending world-class dental conferences, lectures, and workshops.",
    },
    {
      id: 4,
      image: img4,

      name: "Dr. Micheal Joshua ",
      title: " Dentist",
      text: "Dr. Justin is dedicated to professional growth and stays updated on the latest advances in dentistry by attending world-class dental conferences, lectures, and workshops.",
    },
    {
      id: 5,
      image: img5,
      name: "Dr. Richard Davis",
      title: " Dentist",
      text: "Dr. Justin is dedicated to professional growth and stays updated on the latest advances in dentistry by attending world-class dental conferences, lectures, and workshops.",
    },
    {
      id: 6,
      image: img6,
      name: "Dr. Melissa Scott ",
      title: " Dentist",
      text: "Dr. Justin is dedicated to professional growth and stays updated on the latest advances in dentistry by attending world-class dental conferences, lectures, and workshops.",
    },
    {
      id: 7,
      image: img7,

      name: "Dr. Rose Frank ",
      title: " Dentist",
      text: "Dr. Justin is dedicated to professional growth and stays updated on the latest advances in dentistry by attending world-class dental conferences, lectures, and workshops.",
    },
    {
      id: 8,
      image: img8,
      name: "Dr. Eric Gray",
      title: " Dentist",
      text: "Dr. Justin is dedicated to professional growth and stays updated on the latest advances in dentistry by attending world-class dental conferences, lectures, and workshops.",
    },
    {
      id: 9,
      image: img9,
      name: "Dr. Naly Nicholas",
      title: " Dentist",
      text: "Dr. Justin is dedicated to professional growth and stays updated on the latest advances in dentistry by attending world-class dental conferences, lectures, and workshops.",
    },
    {
      id: 10,
      image: img10,
      name: "Klara Patrick ",
      title: "Hygienists",
      text: "Dr. Justin is dedicated to professional growth and stays updated on the latest advances in dentistry by attending world-class dental conferences, lectures, and workshops.",
    },
    {
      id: 11,
      image: img11,
      name: " Emilly Richard",
      title: " Hygienists",
      text: "Dr. Justin is dedicated to professional growth and stays updated on the latest advances in dentistry by attending world-class dental conferences, lectures, and workshops.",
    },
  ];
  return (
    <div className="w-full  flex items-center justify-center flex-col">
      <div
        className="relative w-full   h-[40vw]  flex  items-center justify-center bg-no-repeat bg-center bg-cover "
        style={{ backgroundImage: "url(" + bgImg + ")" }}
      >
        <div className=" w-full  h-[40vw]  justify-center items-center absolute z-40 bg-black opacity-[0.4]"></div>
        <div className="flex flex-col w-[55vw] items-center justify-center text-center gap-10 relative z-50">
          <h2 className="text-4xl font-bold text-blue-950 uppercase">
            MEET OUR TEAM
          </h2>
          <p className="text-4xl font-bold text-white ">
            Changing smiles. Changing lives. Changing dentistry.
          </p>
        </div>
      </div>

      <div className=" flex items-center justify-center mt-32 flex-col gap-16">
        <div className="flex items-center justify-center flex-col gap-6">
          <h3 className="text-xl font-bold text-blue-950 uppercase">
            Get to Know Our Skilled and Professional Team
          </h3>

          <p className="text-2xl font-medium text-center w-[55vw] text-blue-950">
            Come and experience the warm, welcoming atmosphere with the
            professional dentists at Dentelo
          </p>
        </div>

        <div className="w-[60vw] h-[35vw] flex items-center justify-center flex-col gap-6">
          <img
            src={team}
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
          <p className="text-blue-950 text-lg font-medium w-[70vw] text-center">
            {" "}
            We recognize that all our patients are unique and deserve to receive
            dental care that reflects their individual needs. Our experienced
            and talented dental team is committed to working with you and your
            family to create a comfortable, stress-free, and rewarding dental
            experience every time you visit our practice.
          </p>
        </div>
      </div>

      <div className="flex gap-12 flex-wrap items-center justify-center mt-32">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-[28vw] h-[30vw]  rounded-md flex  text-blue-950 justify-center py-6 gap-8 bg-stone-200 px-6"
          >
            <img
              src={item.image}
              className="w-[16vw] h-[22vw] object-cover rounded-md"
              alt=""
            />

            <div className="w-[28vw]  ">
              <h4 className="text-blue-950 font-medium text-3xl capitalize">
                {item.name}
              </h4>

              <h3 className="text-blue-700 font-semibold text-lg capitalize mt-4">
                {item.title}
              </h3>
              <p className="text-blue-950 text-base font-medium mt-5">
                {item.text}
              </p>
              <div></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutTeam;
