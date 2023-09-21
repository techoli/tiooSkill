import React from "react";
import phone from "../../../../images/contactimg/phone.png";
import mail from "../../../../images/contactimg/mail-04.png";
import chair from "../../../../images/contactimg/ph_office-chair.png";
import { BsWhatsapp } from "react-icons/bs";

function Contactus() {
  return (
    <div className="flex flex-col sm:flex-row px-4 sm:px-[60px] gap-6">
      {" "}
      <div className="flex-1">
        <h1 className="text-[24px] sm:text-[50px]">Contact Us</h1>
        <div className="flex gap-3 mt-5">
          <img src={mail} />
          <a className="underline" href="mailto:aniekpenoudom@gmail.com">
            admin@joincicd.com
          </a>{" "}
        </div>
        <div className="flex gap-3 mt-5">
          <BsWhatsapp className="h-[32px] w-[32px] fill-[#949ca8]" />
          <a
            className="underline"
            href="http://wa.me/+2347018481060"
            target="_blank"
          >
            + 234 701 848 1060
          </a>
        </div>
        <div className="flex gap-3 mt-5 ">
          <img src={chair} />
          <p>3 Atabara Street, off cairo street, Wuse Abuja.</p>
        </div>
      </div>
      <div className=" sm:w-[450px] pl-0 sm:pl-20 ">
        <div className="bg-[#FFF] h-[250px] sm:h-full p-5 relative ">
          <h1 className="text-[18px] sm:text-[32px]">Request info</h1>
          <input
            placeholder="admin@joincicd.com"
            className="border-[#b4bac2] border-2 rounded-[10px] mt-3 h-[68px] w-full p-4 "
            type="text"
          />
          <button className=" absolute bottom-5 block bg-[#E6E6FA] text-[#87909E] h-[50px] w-[100px] rounded-[10px]">
            {" "}
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
