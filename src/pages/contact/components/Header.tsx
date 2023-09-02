import React from "react";
import phone from "../../../images/contactimg/phone.png";
import mail from "../../../images/contactimg/mail-04.png";
import chair from "../../../images/contactimg/ph_office-chair.png";
import Contact from "./Contact";
function Header() {
  return (
    <div className="relative h-[1792px] sm:h-[792px]">
      <div className="w-full contbg h-[232px] "></div>
      <Contact />

      <div className="w-full sm:w-[550px] px-4 sm:px-20 mt-8">
        <h1 className="text-[32px]">Questions or Comments</h1>
        <p className=" text-[#87909E] mb-10">Contact us now</p>

        <div className=" w-full flex gap-3 mt-5 bg-[#FFF] p-8 rounded-[8px] shadow-xl relative items-end">
          <p className="absolute top-1 text-[#87909E]">Email us</p>
          <img src={mail} />
          <a className="underline" href="mailto:aniekpenoudom@gmail.com">
            aniekpenoudom@gmail.com
          </a>{" "}
        </div>
        <div className="flex mt-5 gap-3 bg-[#FFF] p-8 rounded-[8px] shadow-xl relative items-end">
          <p className="absolute top-1 text-[#87909E]">Call us</p>
          <img src={phone} />
          <a className="underline" href="tel:+ 2347018481060">
            + 234 701 848 1060
          </a>
        </div>
        <div className="flex mt-5 gap-3 bg-[#FFF] p-8 rounded-[8px] shadow-xl relative items-end">
          <p className="absolute top-1 text-[#87909E]">Address</p>
          <img src={chair} />
          <p>3 Atabara Street, off cairo street</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
