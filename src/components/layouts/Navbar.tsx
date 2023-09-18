import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import cicd from "../../images/footerimg/CICD.png";
import { HiMenuAlt2 } from "react-icons/hi";
import { LiaTimesSolid } from "react-icons/lia";
import mobh from "../../images/headerimg/mobileh.png";
import logobg from "../../images/navimg/logobg.png";
import { Button2, Button3 } from "../UI/Button";
import { NAV_DATA } from "../../data/data";
import profile from "../../images/authimg/profile.png";
// import { alertActions } from "../component/alertActions";
import { alertActions } from "../component/alertActions";
import { ToastContainer, toast } from "react-toastify";
import mobilelogo from "../../images/navimg/logomd.png";

function Navbar() {
  const [showlogout, setshowlogout] = useState(false);
  const [mobilenav, setMobilenav] = useState(false);

  const { pathname } = useLocation();
  // const user = JSON.parse(localStorage.getItem("login") || "{}");
  const user2 = JSON.parse(localStorage.getItem("account") || "{}");

  const nav = useNavigate();

  const doSignin = () => {
    nav("/signin", { replace: true });
  };
  const doLogout = () => {
    localStorage.removeItem("account");
    alertActions.success("Logout successful");
    nav("/", { replace: true });
  };
  const toogleProfile = () => {};
  return (
    <div className=" px-[70px] w-full z-50 bg-[white] h-[70px] sm:h-[60px] fixed top-0  left-0  border-b-[2px]">
      <div className="block sm:hidden absolute top-[20px] right-[10px] w-[32px] h-[32px]">
        {mobilenav ? (
          <LiaTimesSolid
            className="w-full h-full"
            onClick={() => setMobilenav(false)}
          />
        ) : (
          <HiMenuAlt2
            className="w-full h-full"
            // onClick={() => setMobilenav(true)}
            onClick={() => setMobilenav(!mobilenav)}
          />
        )}
      </div>
      <div className=" block sm:hidden absolute top-[25px] left-[10px] w-[72px] h-[72px]">
        <img src={mobilelogo} className="w-full" />
      </div>
      <div className="items-center justify-between hidden w-full h-full mb-10 sm:flex">
        <img
          src={logobg}
          className="h-[38px] w-[122px] cursor-pointer"
          onClick={() => nav("/", { replace: true })}
        />
        {user2?.email ? (
          <div
            className="relative flex items-center gap-5 cursor-pointer "
            onClick={() => setshowlogout(!showlogout)}
          >
            <img src={profile} className="h-[48px] w-[48px]" />
            <p className="text-[18px]">{user2?.email}</p>

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
      {mobilenav && (
        <div className=" border-[gray] border-t pt-32 z-[-1] transition-transform duration-500 ease-in-out fixed flex flex-col items-center sm:hidden w-full h-full  gap-[25px] bg-[#FFF] text-white left-0">
          {/* <div className="flex items-center justify-between px-2 mb-4">
            <img className="w-[75px] h-[25px]" src={mobilelogo} alt="" />

            <h3 className="absolute left-[35px] top-[75px]">BETA</h3>
          </div> */}

          {NAV_DATA?.map((item, ind) => (
            <div
              className="flex flex-col px-4"
              onClick={() => setMobilenav(false)}
            >
              {item.text !== "More" && (
                <Link
                  to={item.url}
                  className={`font-[600] text-[18px] flex items-center  `}
                >
                  {item.text}
                </Link>
              )}
            </div>
          ))}
          <hr />
          {/* {more?.map((item, ind) => (
              <div className="flex flex-col px-4">
                <Link
                  to={"/"}
                  className={`font-[500] font-[poppins] text-[16px] flex items-center text-[#E4E1E1] `}
                >
                  {item}
                </Link>
              </div>
            ))} */}
          <div className="absolute bottom-0 flex flex-col w-full gap-5 p-5 border-t-[1px]">
            <div className="w-full ">
              <Button3
                text1="Sign in"
                variant="secondary"
                onclick={() => {
                  nav("/signin");
                }}
              />
            </div>
            <div className="w-full">
              {" "}
              <Button3
                text1="Enroll now"
                variant="default"
                onclick={() => {
                  nav("/signup");
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
