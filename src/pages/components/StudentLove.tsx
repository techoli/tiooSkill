import React, { useState } from "react";
import test from "../../images/stdloveimg/test.png";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import Button from "../../components/UI/Button";
import DummySlideBtn from "../../components/component/Dummyslidebtm";

function StudentLove() {
  const [activeright, setActiveright] = useState(true);
  const [activeleft, setActiveleft] = useState(false);
  const [activeitem, setActiveitem] = useState(1);
  const toggleNav = (val: string) => {
    if (val == "r") {
      console.log("its been toogled right");
      setActiveright(true);
      setActiveleft(false);
      if (activeitem == 5) {
        setActiveitem(1);
      } else {
        setActiveitem(activeitem + 1);
      }
    }
    if (val == "l") {
      console.log("its been toogled left");
      setActiveright(false);
      setActiveleft(true);
      if (activeitem == 1) {
        setActiveitem(5);
      } else {
        setActiveitem(activeitem - 1);
      }
    }
  };

  const doClick = () => {};
  return (
    <div className="px-4 sm:px-16 mt-8 sm:mt-20 relative">
      <h1 className="text-[24px] sm:text-[50px] text-[#4F46E5] text-center">
        Why Students Love Us
      </h1>
      <p className="text-[16px] text-center">
        We have a proven record of giving quality and life-long value
      </p>
      <div className="w-full  relative">
        <div
          className={`  absolute left-0 top-[100px] w-[48px] h-[48px] rounded-[44px] border border-[#b5b1b8] hidden sm:flex items-center justify-center text-[#b5b1b8]  shadow-xl ${
            activeleft ? `bg-[#4F46E5]  text-[white]` : `bg-[#FFF] text-[black]`
          }  text-[white]`}
          onClick={() => toggleNav("l")}
        >
          <AiOutlineLeft
            className={`${activeleft ? `text-[white]` : `text-[black]`}`}
          />
        </div>
        <div
          className={`absolute right-0 top-[100px] w-[48px] h-[48px] rounded-[44px] border border-[#b5b1b8] hidden sm:flex items-center justify-center text-[#b5b1b8]   shadow-xl ${
            activeright ? `bg-[#4F46E5] text-[white]` : `bg-[#FFF] text-[black]`
          }  text-[white]`}
          onClick={() => toggleNav("r")}
        >
          <AiOutlineRight
            className={`${activeright ? `text-[white]` : `text-[black]`}`}
          />
        </div>
        <div className="relative h-[250px] m-[auto] w-full sm:w-[80%] mt-14  flex">
          <div className="w-[1002px] ">
            <div className="w-full bg-[#6561F8] h-[178px] absolute rotate-[-5deg] rounded-[8px]"></div>
            <div className="w-full bg-[#B3B1FF] h-[178px] absolute left-[7px] rotate-[3deg] rounded-[8px]"></div>
            <div className="w-full bg-[#E3E2FF] h-[178px] absolute rounded-[8px] text-center px-4 sm:px-20 py-10">
              <p className="text-[14px] sm:text-[20px] ">
                What I love most about being in CICD is the hands-on experience
                with real life projects. They really go deep with implementation
                and practice{" "}
              </p>
              <div className="flex gap-3 items-center justify-center mt-6">
                <img src={test} />
                <p className="">Andrew Etim</p>
              </div>
            </div>
            <div className=" absolute bottom-4 right-0 left-0  block sm:hidden">
              <DummySlideBtn />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-8 px-4 sm:px-28 py-8 sm:py-20 text-center stdlovebg mb-10 rounded-[20px]">
        <h1 className="mb-10 text-[18px] sm:text-[32px] text-[#FFF]">
          Enroll Now and Start Your Journey
        </h1>
        <p className="text-[#FFF]">
          Our enrollment is now open. Secure your spot and embark on
          <br /> your journey to becoming a skilled product manager
        </p>
        <div className="w-[200px] m-[auto] mt-7">
          {" "}
          <Button text1="Enroll Now" onclick={doClick} />
        </div>
      </div>
    </div>
  );
}

export default StudentLove;
