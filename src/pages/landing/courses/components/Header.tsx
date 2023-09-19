import React, { useState } from "react";
import { COURSES } from "../../../../data/data";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import CenterModal from "../../../../components/component/CenterModal";
import CourseModal from "./CourseModal";
import arr from "../../../../images/courses/arrow-up.png";
import NoticeBanner from "../../../../components/UI/NoticeBanner";

function Header() {
  const [activeright, setActiveright] = useState(false);
  const [activeleft, setActiveleft] = useState(false);
  const [activeitem, setActiveitem] = useState(0);
  const [active, setActive] = useState(false);
  const [allcourse, setallcourse] = useState(false);
  const [item, setitem] = useState<undefined | string>("");
  const [course, setcourse] = useState<[] | never>([]);

  const toggleNav = (val: string) => {
    if (val == "r") {
      console.log(activeitem);
      console.log("its been toogled right");
      setActiveright(true);
      setActiveleft(false);
      if (activeitem == 9) {
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
        setActiveitem(9);
      } else {
        setActiveitem(activeitem - 1);
      }
    }
  };
  const trimText = (text: string, val: number) => {
    const iniVal = text.split(" ");
    const netText = [];
    if (iniVal.length > val - 1) {
      for (let i = 0; i < iniVal.length; i++) {
        if (i < val) {
          netText.push(iniVal[i]);
        }
      }
      return netText.join(" ") + "...";
    } else {
      return text;
    }
  };
  const togglecourse = () => {
    // if (allcourse) {
    //   setcourse([COURSES[0]]);
    // } else {
    //   setcourse(COURSES);
    // }
  };
  return (
    <>
      <div className=" left-0 w-full h-[60px] top-[60px] mt-20 mb-10">
        <NoticeBanner />
      </div>
      <div className="bg-[#E3E2FF] px-4 sm:px-20 py-20 relative  ">
        <AiOutlineRight
          onClick={() => toggleNav("r")}
          className={` sm:block hidden z-10 absolute right-[3px] sm:right-[20px] top-[380px] h-[24px] sm:h-[48px] w-[24px] sm:w-[48px] cursor-pointer ${
            activeright && `fill-[gray]`
          }`}
        />
        <AiOutlineLeft
          onClick={() => toggleNav("l")}
          className={`sm:block hidden z-10 absolute left-[3px] sm:left-[20px] top-[380px] h-[24px] sm:h-[48px] w-[24px] sm:w-[48px] cursor-pointer ${
            activeleft && `fill-[gray]`
          }`}
        />
        {!allcourse && (
          <p
            className="absolute right-4 top-[100px] block sm:hidden"
            onClick={() => setallcourse(!allcourse)}
          >
            See All
          </p>
        )}

        {!allcourse && (
          <div className="">
            <h1 className="text-[32px] sm:text-[50px] leading-[60px]">
              Our Courses
            </h1>
            <p className="text-[16px] sm:text-[18px] mb-8">
              Explore our catalogue of courses and begin your learnimg journey
            </p>
          </div>
        )}

        <div className="flex flex-col w-full gap-6 sm:hidden">
          {allcourse && (
            <div className="flex gap-4 py-4 border-b border-gray-500 ">
              <img src={arr} onClick={() => setallcourse(!allcourse)} />
              <h1>All Courses</h1>
            </div>
          )}
          <div className="flex flex-col gap-5 ">
            {allcourse &&
              COURSES.map((item) => (
                <div className="flex gap-3 h-[130px]">
                  <div className="w-[40%] ">
                    <img
                      src={item.img}
                      className="object-cover w-full h-full rounded-[8px]"
                    />
                  </div>
                  <div className="w-[55%] flex flex-col justify-between p-2">
                    <h1 className="text-[14px]">{item.heading}</h1>
                    {item.heading.split(" ").length < 7 && (
                      <p className="text-[12px]">{trimText(item.text, 6)}</p>
                    )}
                    <button
                      onClick={() => {
                        setActive(true);
                        setitem(item?.link);
                      }}
                      className="  border-[#4F46E5] border-2 w-[160px] h-[30px] rounded-[8px] text-[#4F46E5]"
                    >
                      download
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {!allcourse && (
          <div className="flex w-full gap-6 overflow-x-scroll sm:overflow-hidden ">
            {COURSES.map((item) => (
              <div
                style={{
                  transform: `translateX(-${activeitem * 370}px)`,
                  transitionDuration: "1s",
                }}
                className="min-w-[352px]   bg-[#FFF] rounded-[8px] relative"
              >
                <div className="w-full">
                  <img className="w-full rounded-t-[8px]" src={item.img} />
                </div>
                <div className="relative flex flex-col gap-5 p-4">
                  <h1 className=" text-[20px] ">{item.heading}</h1>
                  <p className=" text-[14px] ">{item.text}</p>
                  <button
                    onClick={() => {
                      setActive(true);
                      setitem(item?.link);
                    }}
                    className="  border-[#4F46E5] border-2 w-[160px] h-[50px] rounded-[8px] text-[#4F46E5]"
                  >
                    download
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <CenterModal isOpen={active} onClose={() => setActive(false)}>
        <CourseModal close={() => setActive(false)} />
      </CenterModal>
    </>
  );
}

export default Header;
