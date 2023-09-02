import React, { useState } from "react";
import { COURSES } from "../../../data/data";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

function Header() {
  const [activeright, setActiveright] = useState(false);
  const [activeleft, setActiveleft] = useState(false);
  const [activeitem, setActiveitem] = useState(0);

  const toggleNav = (val: string) => {
    if (val == "r") {
      console.log(activeitem);
      console.log("its been toogled right");
      setActiveright(true);
      setActiveleft(false);
      if (activeitem == 3) {
        setActiveitem(0);
      } else {
        setActiveitem(activeitem + 1);
      }
    }
    if (val == "l") {
      console.log("its been toogled left");
      setActiveright(false);
      setActiveleft(true);
      if (activeitem == 0) {
        setActiveitem(3);
      } else {
        setActiveitem(activeitem - 1);
      }
    }
  };
  return (
    <div className="bg-[#E3E2FF] px-4 sm:px-20 py-20 relative  ">
      <AiOutlineRight
        onClick={() => toggleNav("r")}
        className={` z-10 absolute right-[3px] sm:right-[20px] top-[380px] h-[24px] sm:h-[48px] w-[24px] sm:w-[48px] ${
          activeright && `fill-[gray]`
        }`}
      />
      <AiOutlineLeft
        onClick={() => toggleNav("l")}
        className={`z-10 absolute left-[3px] sm:left-[20px] top-[380px] h-[24px] sm:h-[48px] w-[24px] sm:w-[48px] ${
          activeleft && `fill-[gray]`
        }`}
      />
      <h1 className="text-[32px] sm:text-[50px] leading-[60px]">Our Courses</h1>
      <p className="text-[18px] mb-8">
        Explore our catalogue of courses and begin your learnimg journey
      </p>
      <div className="flex w-full gap-6  overflow-hidden">
        {COURSES.map((item) => (
          <div
            style={{
              transform: `translateX(-${activeitem * 370}px)`,
              transitionDuration: "1s",
            }}
            className="min-w-[352px]   bg-[#FFF] rounded-[8px] relative "
          >
            <div className="w-full">
              <img className="w-full rounded-t-[8px]" src={item.img} />
            </div>
            <div className="relative p-4 flex flex-col gap-5">
              <h1 className=" text-[20px] ">{item.heading}</h1>
              <p className=" text-[14px] ">{item.text}</p>
              <button className="  border-[#4F46E5] border-2 w-[160px] h-[50px] rounded-[8px]">
                download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
