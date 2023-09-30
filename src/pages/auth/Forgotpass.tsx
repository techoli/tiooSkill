import React, { useState } from "react";
import { Input } from "../../components/UI/Input";
import { Button, Button2, Button3 } from "../../components/UI/Button";
import abs1 from "../../images/authimg/abs.png";
import abs3 from "../../images/authimg/abs1.png";
import abs2 from "../../images/authimg/abs2.png";
import { resetPassword } from "../../services/apiservices";
import { alertActions } from "../../components/component/alertActions";

function Forgotpass() {
  const [email, setemail] = useState("");
  const [loading, setloading] = useState(false);

  const doReset = async () => {
    setloading(true);
    try {
      const passReset = await resetPassword({ email });
      if (passReset.status == 200) {
        alertActions.success("Please check your email for reset link");
        setloading(false);
      }
    } catch (error: any) {
      setloading(false);
      if (error?.code == "ERR_NETWORK") {
        alertActions.error(error?.message);
      } else {
        alertActions.error(error?.response?.data?.message);
      }
      setloading(false);
    }
  };
  return (
    <div className="px-0 sm:px-20  sm:py-20 py-0 gap-5 bg-[#322D92] flex w-full relative h-[100vh]">
      <img
        src={abs1}
        className="absolute top-[-40px] left-[-40px] sm:block hidden"
      />
      <img src={abs2} className="absolute bottom-0 right-0 hidden sm:block" />
      <img src={abs3} className="absolute bottom-0 left-0 hidden sm:block" />
      <div className="flex-1 hidden sm:block">
        <h1 className="text-[56px] text-white mt-20">
          4th quarter cohort begins from 9th October to December sign up now and
          get started
        </h1>
      </div>
      <div className="bg-[#FFF] flex flex-col sm:flex-1 px-5 sm:px-10 py-5 gap-5 rounded-[8px] w-full h-[450px] ">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-[18px] sm:text-[24px] text-[#4F46E5]">
            Reset password
          </h1>
          <p className=" text-[14px] sm:text-[18px] mt-4 ">
            Please enter your email
          </p>
        </div>
        <div>
          <Input
            name="email"
            value={email}
            onchange={(e) => setemail(e.target.value)}
            label="Email"
          />
        </div>
        <div className="h-[40px] mt-4">
          <Button2
            text1={loading ? "Loading..." : "Submit"}
            onclick={doReset}
          />
        </div>
      </div>
    </div>
  );
}

export default Forgotpass;
