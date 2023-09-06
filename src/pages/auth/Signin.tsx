import React from "react";
import { Input } from "../../components/UI/Input";
import { Button, Button2, Button3 } from "../../components/UI/Button";
import img from "../../images/authimg/gimage.png";
import { useNavigate } from "react-router-dom";
import abs1 from "../../images/authimg/abs.png";
import abs3 from "../../images/authimg/abs1.png";
import abs2 from "../../images/authimg/abs2.png";

function Signin() {
  const nav = useNavigate();
  const doChange = () => {};
  const doSignup = () => {
    nav("/signup", { replace: true });
  };
  return (
    <div className="px-20 py-20 gap-5 bg-[#322D92] flex w-full relative">
      <img src={abs1} className="absolute top-[-40px] left-[-40px]" />
      <img src={abs2} className="absolute bottom-0 right-0" />
      <img src={abs3} className="absolute bottom-0 left-0" />
      <div className="flex-1">
        <h1 className="text-[64px] text-white mt-20">
          Accelerate Your Product Management Growth with CICD
        </h1>
      </div>
      <div className="bg-[#FFF] flex flex-col flex-1 px-10 py-5 gap-5 rounded-[8px]">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-[24px] text-[#4F46E5]">Sign In</h1>
          <p className="mt-4 ">
            Not Registered?{" "}
            <span
              className="underline text-[#4F46E5] cursor-pointer"
              onClick={doSignup}
            >
              Sign Up
            </span>
          </p>
        </div>
        <div>
          <Input label="Email" name="email" value="" onchange={doChange} />
          <Input label="Password" name="pass" value="" onchange={doChange} />

          <p className="mt-1 text-[#E83636] text-right cursor-pointer">
            Forgot password?
          </p>
        </div>
        <div className="h-[40px] mt-4">
          <Button2 text1="Sign In" onclick={doChange} />
        </div>
        <div className="flex items-center justify-center gap-1 mt-6 w-[80%] m-[auto]">
          <hr className="h-[1.5px] bg-[#87909E]  flex-1 " />
          <p className="text-[18px] flex-1 text-center">Or sign in with</p>
          <hr className="h-[1.5px] bg-[#87909E]  flex-1" />
        </div>
        <div className="h-[40px] mt-6 mb-16">
          <Button3
            text1="Continue with Google"
            onclick={doChange}
            variant="n"
            image={img}
          />
        </div>
      </div>
    </div>
  );
}

export default Signin;
