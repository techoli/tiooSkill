import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import cicd from "../../images/footerimg/CICD.png";
import { HiMenuAlt2 } from "react-icons/hi";
import mobh from "../../images/headerimg/mobileh.png";
import logobg from "../../images/navimg/logobg.png";
import { Button2 } from "../UI/Button";
import { NAV_DATA } from "../../data/data";
import profile from "../../images/authimg/profile.png";
// import { alertActions } from "../component/alertActions";
import { alertActions } from "../component/alertActions";
import { ToastContainer, toast } from "react-toastify";

function Navbar() {
  const [showlogout, setshowlogout] = useState(false);
  const { pathname } = useLocation();
  const user = JSON.parse(localStorage.getItem("login") || "{}");
  const user2 = JSON.parse(localStorage.getItem("account") || "{}");

  const nav = useNavigate();

  const doSignin = () => {
    nav("/signin", { replace: true });
  };
  const doLogout = () => {
    localStorage.removeItem("login");
    alertActions.success("Logout successful");
    nav("/", { replace: true });
  };
  const toogleProfile = () => {};
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
        {user?.email && user2.first_name ? (
          <div
            className="relative flex items-center gap-5 cursor-pointer "
            onClick={() => setshowlogout(!showlogout)}
          >
            <img src={profile} className="h-[48px] w-[48px]" />
            <p className="text-[18px]">{user2?.first_name}</p>

            {showlogout && (
              <div className=" cursor-pointer absolute rounded-[5px] shadowc bg-[#FFF] w-full bottom-[-85px]">
                <div className="p-2" onClick={() => setshowlogout(!showlogout)}>
                  <p>KYC</p>
                </div>
                <hr className="h-[2px] bg-[#b6b3b3]" />
                <div className="flex p-2" onClick={doLogout}>
                  <p>Logout</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center h-[55%]  gap-7">
            {NAV_DATA.map((item) => (
              <div className="flex flex-col items-center h-full ">
                <Link to={item.url}>{item.text}</Link>
                {pathname === item.url && (
                  <button
                    className={`h-2 w-2 mx-1 rounded-full transition-colors bg-[#4F46E5]  `}
                  ></button>
                )}
              </div>
            ))}

            <div className="h-[30px]">
              <Button2 text1="Sign in" onclick={doSignin} variant="secondary" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
