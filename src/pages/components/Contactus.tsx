import React from "react";
import phone from "../../images/contactimg/phone.png";
import mail from "../../images/contactimg/mail-04.png";
import chair from "../../images/contactimg/ph_office-chair.png";

function Contactus() {
  return (
    <div className="flex flex-col sm:flex-row px-4 sm:px-[60px] gap-6">
      {" "}
      <div className="flex-1">
        <h1 className="text-[24px] sm:text-[50px]">Contact Us</h1>
        <div className="flex gap-3 mt-5">
          <img src={mail} />
          <a className="underline" href="mailto:aniekpenoudom@gmail.com">
            aniekpenoudom@gmail.com
          </a>{" "}
        </div>
        <div className="flex mt-5 gap-3">
          <img src={phone} />
          <a className="underline" href="tel:+ 2347018481060">
            + 234 701 848 1060
          </a>
        </div>
        <div className="flex mt-5 gap-3 ">
          <img src={chair} />
          <p>
            3 Atabara Street, off cairo street, Ademola Adetukonbo, Crescent,
            Wuse 2, Abuja, FCT
          </p>
        </div>
      </div>
      <div className=" sm:w-[450px] pl-0 sm:pl-20 ">
        <div className="bg-[#FFF] h-[250px] sm:h-full p-5 relative ">
          <h1 className="text-[18px] sm:text-[32px]">Request info</h1>
          <input
            className="border-[#b4bac2] border-2 rounded-[10px] mt-3 h-[68px] w-full  "
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
