import React, { useState } from "react";
import { Button2 } from "../../../../../components/UI/Button";
import { signinTIoo } from "../../../../../services/apiservices";
import { alertActions } from "../../../../../components/component/alertActions";

function Header() {
  const [users, setuser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    paid: "",
  });
  const [loading, setloading] = useState(false);

  const token = localStorage.getItem("token");
  const user2 = JSON.parse(localStorage.getItem("account") || "{}");
  const paid = JSON.parse(localStorage.getItem("paid") || "{}");
  // setuser(user);
  const doAction = () => {};
  const doRedirect = async () => {
    setloading(true);
    try {
      var headert = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      const signintioo = await signinTIoo("", headert);
      if (signintioo.status == 200) {
        setloading(false);
        console.log(signintioo);
        window.open(signintioo.data.message.payload.redirect);
      }
    } catch (error) {
      setloading(false);
      alertActions.error("Something went wrong");
    }
    // window.location.href = "https://www.w3schools.com";
  };
  return (
    <>
      <div className="flex flex-col justify-between py-3 mt-20 sm:flex-row">
        {paid?.paid ? (
          <div className="h-[45px] sm:hidden block">
            <Button2
              variant="default"
              text1={loading ? "Loading..." : "Start Learning"}
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
          <h1 className="text-[32px]">Welcome {user2?.last_name}</h1>
          <p className="">
            Explore your product management courses, access each course
            curriculum, and start learning!
          </p>
        </div>
        {paid?.paid ? (
          <div className="h-[45px] sm:block hidden">
            {/* <a href="https://www.w3schools.com" target="_blank"> */}
            <Button2
              variant={"default"}
              text1={loading ? "Loading..." : "Start Learning"}
              onclick={doRedirect}
            />
            {/* </a> */}
          </div>
        ) : (
          <div className="items-center hidden h-full sm:flex">
            <div className="h-[40px] flex flex-col justify-center">
              {/* <Button2 text1="Start Learning" onclick={doAction} /> */}
              <p>Product Management</p>
              <p className="text-[#4F46E5] text-[34px]">N15,000</p>
            </div>
          </div>
        )}
      </div>
      <hr className=" h-[2px] gradient" />
    </>
  );
}

export default Header;
