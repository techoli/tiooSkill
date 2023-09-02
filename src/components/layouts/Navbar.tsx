import React from "react";
import { Link } from "react-router-dom";
import cicd from "../../images/footerimg/CICD.png";
import { HiMenuAlt2 } from "react-icons/hi";
import mobh from "../../images/headerimg/mobileh.png";

function Navbar() {
  return (
    <div className=" px-[70px] w-full z-50 bg-[white] h-[70px] sm:h-[60px] fixed top-0">
      <div className="block sm:hidden absolute top-[20px] right-[10px] w-[32px] h-[32px]">
        <HiMenuAlt2
          className="w-full h-full"
          // onClick={() => setMobilenav(true)}
        />
      </div>
      <div className="block sm:hidden absolute top-[25px] left-[10px] w-[62px] h-[32px]">
        <img src={mobh} className="w-full" />
      </div>
      <div className="w-full hidden h-full  mb-10 justify-between items-center sm:flex">
        <img src={cicd} className="h-[20px]" />
        <div className="flex gap-7">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
