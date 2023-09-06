import React from "react";
import { Input } from "../../components/UI/Input";
import { Button2 } from "../../components/UI/Button";
import { useNavigate } from "react-router-dom";
import abs1 from "../../images/authimg/abs.png";

function Emailverification() {
  const nav = useNavigate();
  const doChange = () => {
    nav("/confirmation", { replace: true });
  };
  return (
    <div className="w-full h-[100vh] bg-[#322D92] flex justify-center items-center ">
      <img src={abs1} className="absolute top-[-40px] left-[-40px]" />

      <div className="flex gap-5 flex-col bg-[#FFF] w-[615px] h-[353px] rounded-[8px] px-20 py-14 ">
        <div>
          <h1 className="text-center text-[24px]">Verify your email address</h1>
          <p className="text-center text-[18px] mt-5">
            We’ve sent an email to{" "}
            <span className="text-[18px] text-[#4F46E5] underline">
              aniekpenoudom@gmail.com.
            </span>{" "}
            Verify your email address to continue.{" "}
          </p>
        </div>
        <div>
          {/* <div className="h-[40px] mt-16">
            <Button2 text1="Send" onclick={doChange} />
          </div> */}
          <p className="mt-10 text-center text-[16px]">
            Not able to verify your account?{" "}
            <span className="text-[#4F46E5] underline cursor-pointer">
              Resend Email
            </span>{" "}
            or{" "}
            <span
              className="text-[#4F46E5] underline cursor-pointer"
              onClick={doChange}
            >
              Update email
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Emailverification;
