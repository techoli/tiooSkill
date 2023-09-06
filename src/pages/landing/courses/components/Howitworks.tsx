import React from "react";
import { HOWITWORKSDATA } from "../../../../data/data";
import { Link } from "react-router-dom";
import wrkimg from "../../../../images/courses/wrksimg.png";

function Howitworks() {
  return (
    <div className="px-4 py-4 sm:px-20 sm:py-10">
      <div className="flex flex-col gap-0 mt-10 sm:flex-row sm:gap-10">
        <div className="flex-1 hidden mt-16 sm:block">
          <img
            src={wrkimg}
            className="h-[344px] sm:h-[540px] object-cover mt-8 "
          />
        </div>
        <div className=" flex-1 text-[56px] relative">
          <h1 className="text-[24px] sm:text-[50px]"> How it works</h1>
          {HOWITWORKSDATA?.map((items) => (
            <div
              key={items.id}
              className=" border-[#87909E] border-b-2 mt-5 flex gap-4"
            >
              <div className="w-[32px] mt-2">
                <img src={items.img} className="w-fumm" />
              </div>
              <div className="w-full">
                <h1 className="text-[18px] sm:text-[30px] ">{items.heading}</h1>
                <p className="text-[14px] sm:text-[16px] mb-5 ">{items.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 block mt-16 sm:hidden">
          <img
            src={wrkimg}
            className="h-[344px] sm:h-[540px] object-cover mt-8 "
          />
        </div>
      </div>
      <div className="mt-12 text-center">
        <h1 className="text-[32px] sm:text-[50px]">Who Should Enroll?</h1>
        <p className="text-[18px] sm:text-[20px]">
          Product management is a multifaceted role that involves various skills
          and responsibilities related to the development, launch, and
          management of products or services.
        </p>
        <p className="mt-5 text-[18px] sm:text-[20px]">
          The CICD project management program is open to Aspiring Product
          Managers, those who are interested in pursuing a career in product
          management, Entrepreneurs, Engineers and Designers, Business Analyst,
          and anyone interested in innovation.
        </p>
        <p className="mt-5 text-[18px] sm:text-[20px]">
          If you're passionate about bringing new ideas to life and creating
          value for users, learning about product management can provide you
          with a structured approach to innovation.
        </p>
      </div>
    </div>
  );
}

export default Howitworks;
