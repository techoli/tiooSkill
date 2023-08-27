import React from "react";
import { button } from "../../types/type";

const Button: React.FC<button> = ({ height, width, text1, onclick, hover }) => {
  return (
    <div
      //   className={`flex justify-center items-center font-[poppins] h-[${height}px] w-[${width}px] bg-[#4F46E5] rounded-[8px] text-[white]`}
      className={`flex text-center py-[15px] px-[33px] justify-center items-center font-[poppins] h-full w-full text-white ${
        text1 == "Join Discount List"
          ? `bg-[#FFF] border border-[#4F46E5] text-[#4F46E5]`
          : `bg-[#4F46E5] text-[#FFF]`
      } ] rounded-[10px] sm:rounded-[10px] cursor-pointer ${
        hover && `hover:bg-[#EC2958]`
      }`}
      onClick={onclick}
    >
      <p className={`text-[12px] sm:text-[18px] font-[700] text-white`}>
        {text1}
      </p>
    </div>
  );
};

export default Button;
