import React from "react";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsFacebook } from "react-icons/bs";
import cicd from "../../images/footerimg/CICD.png";

function Footer() {
  return (
    <div className="  w-full relative py-10 px-5 sm:px-24 mt-8 sm:mt-20 mb-5 border-[#afb3ba] border-t-2">
      <div className="w-full flex justify-between">
        <img
          src={cicd}
          className="w-[60px] h-[20px] sm:h-[30px] sm:w-[100px]"
        />
        <div className=" flex  gap-3 w-[130px] items-center justify-center  ">
          <AiOutlineTwitter className="w-[32px] h-[32px]" />
          <SlSocialLinkedin className="w-[32px] h-[32px]" />
          <AiOutlineInstagram className="w-[32px] h-[32px]" />
          <BsFacebook className="w-[32px] h-[32px]" />
        </div>
      </div>
      <div className="w-full mt-10">
        <p className="text-[10px] sm:text-[16px] text-center font-[Lora]">
          ©️2023 CICD Limited. All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
