import React from "react";
import headerimg from "../../../images/headerimg/headerimgs.png";
import Button from "../../../components/UI/Button";
import im1 from "../../../images/headerimg/bgim1.png";
import im2 from "../../../images/headerimg/bgim2.png";
import im3 from "../../../images/headerimg/bgim3.png";
import im4 from "../../../images/headerimg/bgim4.png";
import { Link } from "react-router-dom";

function Header() {
  const doAction = () => {};
  return (
    <div className="px-4 py-5 sm:px-16 sm:py-20 relative">
      <img
        src={im1}
        className="absolute top-[-25px] sm:top-0 left-[-45px] sm:left-[-5px] z-[-1]"
      />
      <img
        src={im2}
        className="absolute top-[-190px] sm:top-0 right-[-190px] sm:right-0 z-[-1]"
      />
      <img
        src={im3}
        className="sm:h-[476px] h-[149px] sm:w-[600px] w-[208px] absolute sm:bottom-[-230px] bottom-[-30px] left-[-90px] sm:left-[-290px] z-[-1]"
      />
      <img
        src={im4}
        className=" absolute right-[18px] sm:right-[167px] bottom-[2px] sm:bottom-[10px] z-[-1]"
      />
      <div className="w-full px-3 sm:px-10  bg-[#FFF] rounded-[15px] sm:rounded-[32px] py-10 mt-16 sm:mt-8">
        <div className="w-full flex sm:flex-row flex-col gap-3">
          <div className="flex-1">
            <h1 className="text-[32px] sm:text-[48px] font-[700] text-[#45426a] leading-[45px] sm:leading-[60px] text-center sm:text-left">
              Your Journey to Product Management Excellence Begins Here{" "}
            </h1>
            <p className="sm:text-left text-center text-[16px] font-[700] mt-5">
              At CICD, we're not just a product management training academy –
              we're your gateway to a dynamic and rewarding career in the tech
              industry. Our comprehensive program is designed to transform
              aspiring individuals into skilled and confident product managers,
              equipped with real-world experience through internships in leading
              tech companies.
            </p>
            <div className="w-full flex sm:justify-start justify-center">
              <div className="w-[200px] mt-5 ">
                <Button text1="Enroll Now" onclick={doAction} />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img src={headerimg} className="rounded-[10px] object-cover mt-7" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
