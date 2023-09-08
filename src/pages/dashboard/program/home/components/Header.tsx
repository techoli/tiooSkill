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
  // setuser(user);
  const doAction = () => {};
  return (
    <>
      <div className="flex justify-between py-3 mt-20">
        <div className="h-full">
          <h1 className="text-[32px]">Welcome {user?.first_name}</h1>
          <p className="">
            Explore your product management courses, access each course
            curriculum, and start learning!
          </p>
        </div>
        {user?.paid ? (
          <div className="h-[45px]">
            <Button2
              variant={"secondary"}
              text1={"Start Learning"}
              onclick={doAction}
            />
          </div>
        ) : (
          <div className="flex items-center h-full">
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
