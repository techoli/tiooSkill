import React, { useState } from "react";
import { Button2 } from "../../../../../components/UI/Button";

function Header() {
  const [users, setuser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    paid: "",
  });
  const user = JSON.parse(localStorage.getItem("login") || "{}");
  const user2 = JSON.parse(localStorage.getItem("account") || "{}");
  // setuser(user);
  const doAction = () => {};
  return (
    <>
      <div className="flex flex-col justify-between py-3 mt-20 sm:flex-row">
        {user?.paid ? (
          <div className="h-[45px] sm:hidden block">
            <Button2
              variant={"secondary"}
              text1={"Start Learning"}
              onclick={doAction}
            />
          </div>
        ) : (
          <div className="flex items-center h-full sm:hidden ">
            <div className="h-[40px] flex flex-col justify-center">
              {/* <Button2 text1="Start Learning" onclick={doAction} /> */}
              <p>Product Management</p>
              <p className="text-[#4F46E5] text-[24px]">N15,000</p>
            </div>
          </div>
        )}
        <div className="h-full">
          <h1 className="text-[32px]">Welcome {user2?.email}</h1>
          <p className="">
            Explore your product management courses, access each course
            curriculum, and start learning!
          </p>
        </div>
        {user?.paid ? (
          <div className="h-[45px] sm:block hidden">
            <Button2
              variant={"secondary"}
              text1={"Start Learning"}
              onclick={doAction}
            />
          </div>
        ) : (
          <div className="items-center hidden h-full sm:flex">
            <div className="h-[40px] flex flex-col justify-center">
              {/* <Button2 text1="Start Learning" onclick={doAction} /> */}
              <p>Product Management</p>
              <p className="text-[#4F46E5] text-[24px]">N15,000</p>
            </div>
          </div>
        )}
      </div>
      <hr className=" h-[2px] gradient" />
    </>
  );
}

export default Header;
