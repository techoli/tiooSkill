import React from "react";
import phone from "../../../../images/contactimg/phone.png";
import mail from "../../../../images/contactimg/mail-04.png";
import chair from "../../../../images/contactimg/ph_office-chair.png";
import Contact from "./Contact";
import { BsWhatsapp } from "react-icons/bs";
function Header() {
  return (
    <div className="relative h-[1292px] sm:h-[792px]">
      <div className="w-full contbg h-[232px] "></div>
      <Contact />

      <div className="w-full sm:w-[550px] px-4 sm:px-20 mt-[570px] sm:mt-8">
        <h1 className="text-[32px]">Questions or Comments</h1>
        <p className=" text-[#87909E] mb-10">Contact us now</p>

        <div className=" w-full flex gap-3 mt-5 bg-[#FFF] p-8 rounded-[8px] shadow-xl relative items-end">
          <p className="absolute top-1 text-[#87909E]">Email us</p>
          <img src={mail} />
          <a className="underline" href="mailto:aniekpenoudom@gmail.com">
            admin@joincicd.com
          </a>{" "}
        </div>
        <div className="flex mt-5 gap-3 bg-[#FFF] p-8 rounded-[8px] shadow-xl relative items-end">
          <p className="absolute top-1 text-[#87909E]">Whatsapp us</p>
          {/* <img src={phone} /> */}
          <BsWhatsapp className="h-[32px] w-[32px] fill-[#949ca8]" />
          <a
            className="underline"
            href="http://wa.me/+2347018481060"
            target="_blank"
          >
            + 234 701 848 1060
          </a>
        </div>
        <div className="flex mt-5 gap-3 bg-[#FFF] p-8 rounded-[8px] shadow-xl relative items-end">
          <p className="absolute top-1 text-[#87909E]">Address</p>
          <img src={chair} />
          <p>3 Atabara Street, off cairo street, Wuse Abuja.</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
