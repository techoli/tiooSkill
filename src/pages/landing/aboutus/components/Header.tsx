import React from "react";
import headp from "../../../../images/headerimg/headpart.png";

function Header() {
  return (
    <div>
      <div className="sm:px-20 px-4 py-10 sm:py-20 relative bg-[#4F46E5] h-[181px] sm:h-[344px] mt-16 sm:mt-14 ">
        <div className="bg-[#D30011] w-[23px] sm:w-[36px] h-[30px] sm:h-[49px] absolute top-0 right-[20px] sm:right-[400px]"></div>
        <div className="bg-[#FFC14D] w-[23px] sm:w-[36px] h-[30px] sm:h-[49px] absolute bottom-0 left-[40px]"></div>
        <p className="text-[16px] sm:text-[18px] text-white">ABOUT CICD</p>
        <h1 className="text-[24px] sm:text-[50px] text-white leading-[35px] sm:leading-[65px]">
          Our vision is to empower every . <br />
          <span className="text-[24px] text-[#FFC14D] sm:text-[50px]">
            human mind..
          </span>
        </h1>
        <img src={headp} className="absolute right-0 top-0 hidden sm:block" />
      </div>
      <div className=" px-4 sm:px-28 py-8 sm:py-12 flex gap-5 flex-col bg-[#E3E2FF]">
        <p className="text-[16px] sm:text-[18px]">
          CICD is dedicated to empowering individuals and teams with the skills,
          knowledge, and confidence to excel in the dynamic world of project
          management.
        </p>
        <p className="text-[16px] sm:text-[18px]">
          With a profound understanding of the pivotal role that effective
          project management plays in achieving organizational success, we have
          meticulously crafted our programs to cater to a diverse range of
          learners. Whether you're an aspiring project manager aiming to
          kickstart your career, a seasoned professional seeking to enhance your
          skill set, or a team leader aiming to optimize your group's
          efficiency, our comprehensive courses are tailored to meet your
          specific needs.
        </p>
        <p className="text-[16px] sm:text-[18px]">
          Whether you're looking to earn a certification, enhance your team's
          capabilities, or embark on a transformative learning journey, [Company
          Name] is here to guide you every step of the way. Join us and discover
          the boundless opportunities that effective project management can
          unlock. Your success is our project!
        </p>
      </div>
    </div>
  );
}

export default Header;
