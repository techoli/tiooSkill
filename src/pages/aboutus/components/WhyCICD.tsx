import React from "react";
import whycicd from "../../../images/aboutus/whycicd.png";
import Button from "../../../components/UI/Button";

function WhyCICD() {
  const doAction = () => {};
  return (
    <div className="bg-[#D5E5E9] px-4 sm:px-20 py-5 sm:py-10 mb-10">
      <div className="flex w-full gap-7">
        <div className="w-[40%] hidden sm:block">
          <img src={whycicd} />
        </div>
        <div className="w-full sm:w-[55%]">
          <h1 className="text-[32px] mt-5">Why CICD?</h1>
          <p className="text-[18px]">
            What sets CICD apart is our dedication to fostering a collaborative
            learning environment. We believe in the power of interactive
            discussions, hands-on exercises, and peer-to-peer engagement. Our
            aim is not only to equip you with tools and techniques but also to
            nurture critical thinking, problem-solving, and effective
            communication – all crucial elements of successful project
            management.
          </p>
          <p className="text-[18px]">
            Through our meticulously designed curriculum, interactive workshops,
            and practical case studies, you will gain not only theoretical
            knowledge but also the practical skills needed to thrive in today's
            complex project landscapes.
          </p>
        </div>
      </div>
      <div className="mt-12 px-4 sm:px-52 flex justify-center items-center flex-col">
        <p className="text-[16px] sm:text-[18px] text-center mb-8">
          Join us on this journey of discovery, growth, and transformation.
          Together, we'll unleash the full potential of product management and
          redefine what's possible in a world of limitless innovation.
        </p>
        <div className=" w-[200px]">
          <Button onclick={doAction} text1="Enroll Now" />
        </div>
      </div>
    </div>
  );
}

export default WhyCICD;
