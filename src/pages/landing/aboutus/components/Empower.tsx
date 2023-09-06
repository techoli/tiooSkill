import React from "react";
import empower from "../../../../images/aboutus/Empower.png";

function Empower() {
  return (
    <div className="px-4 sm:px-20 py-10 bg-[#00A3B6] flex relative z-[-2]">
      <div className="w-[163px] h-[318px] absolute bg-[#F2F3F8] right-[160px] top-[-28px]  rotate-[13deg] z-[-1] hidden sm:block"></div>
      <div className="w-full sm:w-[55%]">
        <p className="text-[14px] text-white">OUR STORY</p>
        <h1 className="text-[24px] sm:text-[31px] text-white mb-4">
          Empowering Visionaries, Mastering Products
        </h1>
        <div className="pr-0 sm:pr-10">
          <p className="text-[16px] sm:text-[20px] text-white">
            Our Story CICD was born out of a vision to bridge the gap between
            aspiring product managers and the fast-evolving tech landscape. Our
            founders recognized the need for hands-on, practical training that
            prepares individuals for the demands of the industry.
          </p>
          <p className="text-[16px] sm:text-[20px] text-white mt-4">
            As we propel learners toward success, we are dedicated to elevating
            the practice of product management across industries, cultivating a
            global network of professionals who champion best practices, ethical
            considerations, and innovation-driven approaches.
          </p>
        </div>
      </div>
      <div className="w-[40%] hidden sm:block">
        <img src={empower} className="z-20" />
      </div>
    </div>
  );
}

export default Empower;
