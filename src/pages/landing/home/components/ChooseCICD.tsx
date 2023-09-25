import React from "react";
import { CICDdata, CICDdata2 } from "../../../../data/data";
import { Link } from "react-router-dom";
import choose1 from "../../../../images/choosecicdimg/choose1.png";
import choose2 from "../../../../images/choosecicdimg/choose2.png";

function ChooseCICD() {
  return (
    <div className="bg-[#0E096C] px-4 sm:px-24  text-[#FFFF] py-4 sm:py-14">
      <div className="flex flex-col gap-10 sm:flex-row">
        <div className="flex-1 mt-5">
          <img src={choose1} className="object-cover h-full" />
        </div>
        <div className=" flex-1 text-[56px] relative ">
          <h1 className="text-[32px] sm:text-[48px] text-[#FFFF]">
            Why Choose CICD?
          </h1>
          {CICDdata?.map((items) => (
            <div key={items.id} className="flex gap-3 mt-5 ">
              <div className="w-[30px]  ">
                <img src={items.img} className="w-full h-[30px]" />
              </div>
              <div className="  w-[90%]">
                <h1 className="text-[22px] sm:text-[30px] text-[#FFFF]">
                  {items.heading}
                </h1>
                <p className="text-[14px] sm:text-[16px] text-[#FFFF]">
                  {items.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full sm:w-[60%] m-[auto] mt-10 sm:mt-20">
        <h1 className="text-[24px] sm:text-[50px] text-center text-[#FFFF] ">
          Our Courses
        </h1>
        <p className="text-[14px] sm:text-[16px] text-[#FFFF] text-center">
          Explore our range of courses that cover product discovery, roadmap
          planning, user experience design, and more. Our curriculum is
          meticulously designed to equip you with the skills demanded by the
          industry
        </p>
      </div>

      <div className="flex flex-col gap-10 mt-10 sm:flex-row">
        <div className=" flex-1 text-[56px] relative">
          {CICDdata2?.map((items) => (
            <div key={items.id} className=" border-[#87909E] border-b-2 mt-5">
              <h1 className="text-[18px] sm:text-[30px] text-[#FFFF]">
                {items.heading}
              </h1>
              <p className="text-[14px] sm:text-[16px] mb-5 text-[#FFFF]">
                {items.text}
              </p>
              <div className="flex justify-center w-full gap-3 mb-5 text-white sm:justify-start">
                {/* <p className="text-[30px]">&#8601;</p>
                 */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19 6L6 19M6 19V6.52M6 19H18.48"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <Link to="/signup" className="underline">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 mt-8">
          <img src={choose2} className="h-[344px] sm:h-[656px] object-cover" />
        </div>
      </div>
    </div>
  );
}

export default ChooseCICD;
