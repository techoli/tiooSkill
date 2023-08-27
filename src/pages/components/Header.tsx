import React from "react";
import headerimg from "../../images/headerimg/headerimgs.png";
import Button from "../../components/UI/Button";
import im1 from "../../images/headerimg/bgim1.png";
import im2 from "../../images/headerimg/bgim2.png";
import im3 from "../../images/headerimg/bgim3.png";
import im4 from "../../images/headerimg/bgim4.png";

function Header() {
  const doAction = () => {};
  return (
    <div className="px-16 py-20 relative">
      <img src={im1} className="absolute top-0 left-[-5px]" />
      <img src={im2} className="absolute top-0 right-0 z-[-1]" />
      <img src={im3} className="absolute bottom-[-290px] left-0 z-[-1]" />
      <img src={im4} className="absolute right-[167px] bottom-[10px] z-[-1]" />
      <div className="w-full px-10  bg-[#FFF] rounded-[32px] py-10">
        <div className="w-full"></div>
        <div className="w-full flex gap-3">
          <div className="flex-1">
            <h1 className="text-[48px] font-[700] text-[#45426a] leading-[60px]">
              Your Journey to Product Management Excellence Begins Here{" "}
            </h1>
            <p className="text-[16px] font-[700] mt-5">
              At CICD, we're not just a product management training academy –
              we're your gateway to a dynamic and rewarding career in the tech
              industry. Our comprehensive program is designed to transform
              aspiring individuals into skilled and confident product managers,
              equipped with real-world experience through internships in leading
              tech companies.
            </p>
            <div className="w-[200px] mt-5">
              <Button text1="Enroll Now" onclick={doAction} />
            </div>
          </div>
          <div className="flex-1">
            <img src={headerimg} className="rounded-[10px] object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
