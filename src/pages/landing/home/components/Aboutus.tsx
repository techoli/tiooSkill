import React from "react";
import dot1 from "../../../../images/aboutusimgs/dot1.png";
import dot2 from "../../../../images/aboutusimgs/dot2.png";
import dot3 from "../../../../images/aboutusimgs/dot3.png";
import std from "../../../../images/aboutusimgs/std.png";
import { Link } from "react-router-dom";

function Aboutus() {
  return (
    <div className="px-4 sm:px-16 text-[#413f69]  mt-10">
      <div className="px-3 sm:px-10 text-center">
        <h1 className="text-[32px] sm:text-[50px]">About Us</h1>
        <p className="text-[16px] sm:text-[20px]">
          Our Story CICD was born out of a vision to bridge the gap between
          aspiring product managers and the fast-evolving tech landscape. Our
          founders recognized the need for hands-on, practical training that
          prepares individuals for the demands of the industry.
        </p>
        <p className="text-[16px] sm:text-[20px] mt-5">
          Our Mission Our mission is to empower individuals with the knowledge
          and experience needed to excel in product management roles. We believe
          in learning by doing and ensuring our graduates are industry-ready.
        </p>
        <p className="text-[16px] sm:text-[20px] mt-5">
          Our team of seasoned product managers, instructors, and industry
          experts are dedicated to guiding you on your journey to success.
        </p>
      </div>
      <div className="bg-[#e3e2ff] py-4 sm:py-10 px-4 sm:px-10 rounded-[15px] mt-16">
        <div className="flex sm:flex-row flex-col gap-4">
          <div className="flex-1  sm:hidden mt-3">
            <img src={std} className="object-cover" />
          </div>
          <div className="flex-1">
            <h1 className="text-[24px] sm:text-[50px]">
              Real-World Experience
            </h1>
            <p className="text-[16px] sm:text-[18px]">
              Our internship program offers you a chance to put your skills to
              the test in real work environments. Gain hands-on experience,
              build your portfolio, and establish connections in the tech
              industry.
            </p>
            <h2 className="text-[18px] sm:text-[30px] mt-4 mb-5">
              Internship highlights
            </h2>
            <div className="flex gap-3 mb-4 items-center">
              <img src={dot1} className="w-[32px] h-[32px]" />
              <p className="text-[14px] sm:text-[18px] font-[400]">
                Collaborate on live projects under the guidance of experienced
                mentors.
              </p>
            </div>
            <div className="flex gap-3 mb-4 items-center">
              <img src={dot2} className="w-[32px] h-[32px]" />
              <p className="text-[14px] sm:text-[18px] font-[400]">
                Experience the fast-paced tech industry firsthand
              </p>
            </div>
            <div className="flex gap-3 mb-4 items-center">
              <img src={dot3} className="w-[32px] h-[32px]" />
              <p className="text-[14px] sm:text-[18px] font-[400]">
                Develop a network of professionals and mentors that can shape
                your career.
              </p>
            </div>
          </div>
          <div className="flex-1 hidden sm:flex">
            <img src={std} className="object-cover" />
          </div>
        </div>
        <h2 className="text-[18px] sm:text-[50px] mt-4 sm:mt-10 text-center">
          Success stories
        </h2>
        <div className="w-full successimg h-[177px] sm:h-[610px] text-center px-4 sm:px-20 py-4 sm:py-14 ">
          <Link
            to="/"
            className="underline text-[12px] sm:text-[32px] text-[#FFF] text-center"
          >
            Read about our alumni who successfully transitioned from interns to
            product managers in renowned tech companies
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
