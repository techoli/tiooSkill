import React from "react";
import { Input } from "../../components/UI/Input";
import { Button2, Button } from "../../components/UI/Button";
import { useNavigate } from "react-router-dom";

function Emailconfirm() {
  const nav = useNavigate();
  const doChange = () => {};
  const doAction = () => {
    nav("/program", { replace: true });
  };
  return (
    <div className="w-full h-[100vh] bg-[#322D92] flex justify-center items-center ">
      <div className="flex gap-5 flex-col bg-[#FFF] w-[515px] h-[275px] rounded-[8px] px-20 py-14 ">
        <h1 className="text-[24px]">Your Email Has Been Verified</h1>
        <p className="text-[#87909E] text-[24px]">
          Sign in and start learning 😊
        </p>
        <div className="w-[200px]">
          <Button text1="CONTINUE" onclick={doAction} />
        </div>
      </div>
    </div>
  );
}

export default Emailconfirm;
