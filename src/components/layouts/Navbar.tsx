import React from "react";
import { Link, useNavigate } from "react-router-dom";
import cicd from "../../images/footerimg/CICD.png";
import { HiMenuAlt2 } from "react-icons/hi";
import mobh from "../../images/headerimg/mobileh.png";
import logobg from "../../images/navimg/logobg.png";
import { Button2 } from "../UI/Button";

function Navbar() {
  const nav = useNavigate();
  const doSignin = () => {
    nav("/signin", { replace: true });
  };
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
      <div className="items-center justify-between hidden w-full h-full mb-10 sm:flex">
        <img src={logobg} className="h-[38px] w-[122px]" />
        <div className="flex items-center gap-7">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/contact">Contact</Link>
          <div className="h-[30px]">
            <Button2 text1="Sign in" onclick={doSignin} variant="secondary" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
