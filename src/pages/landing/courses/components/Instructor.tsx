import React from "react";
import insr from "../../../../images/courses/instr.png";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsFacebook } from "react-icons/bs";

function Instructor() {
  return (
    <div className="sm:px-20 px-4 py-16 bg-[#0E096C] flex flex-col sm:flex-row gap-12 mb-16">
      <div className="w-full sm:w-[40%] block sm:hidden">
        <img src={insr} className="object-cover" />
      </div>
      <div className="w-full sm:w-[55%] text-center sm:text-left">
        <h1 className="text-[32px] sm:text-[50px] text-white">
          Meet Your Instructor
        </h1>
        <p className="text-white text-[16px] sm:text-[18px]">
          Aniekpeno Udonmiel is an accomplished Product Manager with over 5
          years of hands-on experience in leading cross-functional teams to
          deliver innovative and impactful products to market. With a
          deep-rooted enthusiasm for both product development and mentorship,
          Aniekpeno has garnered a reputation for not only crafting successful
          products but also for cultivating the next generation of product
          management leaders.
        </p>
        <p className="mt-4 text-white text-[16px] sm:text-[18px] mb-5">
          With a foundation built on real-world experience, coupled with a
          genuine passion for cultivating talent, Aniekpemo Udonmiel continues
          to inspire and empower the next generation of product managers. His
          legacy is marked by a trail of successful products and thriving
          professionals who credit him for their growth and achievements in the
          exciting realm of product management.
        </p>
        <div className=" flex  gap-3 w-[130px] items-center justify-center mt-4 m-[auto] sm:m-0 ">
          <AiOutlineTwitter className="w-[32px] h-[32px] fill-white" />
          <SlSocialLinkedin className="w-[32px] h-[32px] fill-white" />
          <AiOutlineInstagram className="w-[32px] h-[32px] fill-white" />
          <BsFacebook className="w-[32px] h-[32px] fill-white" />
        </div>
      </div>
      <div className="w-[40%] hidden sm:block">
        <img src={insr} className="object-cover" />
      </div>
    </div>
  );
}

export default Instructor;
