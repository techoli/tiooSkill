import React, { useState } from "react";
import { IoMdClose, IoIosWarning } from "react-icons/io";
import { AiOutlineInfoCircle } from "react-icons/ai";

function NoticeBanner() {
  const [shownotice, setShownotice] = useState(true);
  const doAction = () => {
    setShownotice(!shownotice);
  };

  return (
    <div
      className={` items-center justify-center flex px-5 sm:px-36 py-5 z-50 fixed w-full h-[50px] bg-[#FFF] top-[69px] gap-5 ${
        !shownotice && `hidden`
      }`}
    >
      <AiOutlineInfoCircle className="text-[22px] text-[#545454]" />
      <p className="sm:text-[18px] text-[14px]">
        4th quarter cohort begins from 9th October to December sign up now and
        get started{" "}
      </p>
      <div
        className="absolute cursor-pointer right-[10px] sm:right-[70px] "
        onClick={doAction}
      >
        <IoMdClose className="text-[22px] text-[#545454]" />
      </div>
    </div>
  );
}

export default NoticeBanner;
