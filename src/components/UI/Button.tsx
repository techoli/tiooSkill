import React from "react";
import { button } from "../../types/type";

export const Button: React.FC<button> = ({
  height,
  width,
  text1,
  onclick,
  variant = "default",
}) => {
  return (
    <div
      //   className={`flex justify-center items-center font-[poppins] h-[${height}px] w-[${width}px] bg-[#4F46E5] rounded-[8px] text-[white]`}
      className={`flex text-center py-[15px] px-[33px] justify-center items-center h-full w-full text-white  rounded-[10px] sm:rounded-[10px] cursor-pointer ${
        variant == "default" ? `bg-[#4F46E5]` : `bg-[#FFF]`
      }`}
      onClick={onclick}
    >
      <p className={`text-[12px] sm:text-[18px] font-[700] text-white`}>
        {text1}
      </p>
    </div>
  );
};

export const Button2: React.FC<button> = ({
  height,
  width,
  text1,
  onclick,
  variant = "default",
}) => {
  return (
    <div
      //   className={`flex justify-center items-center font-[poppins] h-[${height}px] w-[${width}px] bg-[#4F46E5] rounded-[8px] text-[white]`}
      className={`flex text-center border-[1px] py-[15px] px-[33px] justify-center items-center h-full w-full text-white  rounded-[10px] sm:rounded-[4px] cursor-pointer ${
        variant == "default"
          ? `bg-[#4F46E5] border-none`
          : variant == "secondary"
          ? `bg-[#FFF] border-[#4F46E5] `
          : `bg-[#FFF] border-[black] `
      }`}
      onClick={onclick}
    >
      <p
        className={`text-[12px] sm:text-[18px] font-[700] ${
          variant == "default"
            ? `text-white`
            : variant == "secondary"
            ? `text-[#4F46E5]`
            : `text-black`
        } `}
      >
        {text1}
      </p>
    </div>
  );
};

export const Button3: React.FC<button> = ({
  height,
  width,
  text1,
  onclick,
  variant = "default",
  image,
}) => {
  return (
    <div
      //   className={`flex justify-center items-center font-[poppins] h-[${height}px] w-[${width}px] bg-[#4F46E5] rounded-[8px] text-[white]`}
      className={`gap-2 flex text-center border-[1px] py-[15px] px-[33px] justify-center items-center h-full w-full text-white  rounded-[10px] sm:rounded-[4px] cursor-pointer ${
        variant == "default"
          ? `bg-[#4F46E5] border-none`
          : variant == "secondary"
          ? `bg-[#FFF] border-[#4F46E5] `
          : `bg-[#FFF] border-[black] `
      }`}
      onClick={onclick}
    >
      <img src={image} />
      <p
        className={`text-[12px] sm:text-[18px] font-[700] ${
          variant == "default"
            ? `text-white`
            : variant == "secondary"
            ? `text-[#4F46E5]`
            : `text-black`
        } `}
      >
        {text1}
      </p>
    </div>
  );
};
