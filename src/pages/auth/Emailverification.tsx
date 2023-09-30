import React from "react";
import { Input } from "../../components/UI/Input";
import { Button2 } from "../../components/UI/Button";
import { useNavigate } from "react-router-dom";
import abs1 from "../../images/authimg/abs.png";
import { resendEmail } from "../../services/apiservices";
import { alertActions } from "../../components/component/alertActions";

function Emailverification() {
  const user = JSON.parse(localStorage.getItem("signaccount") || "{}");
  const nav = useNavigate();
  const updateEmail = () => {
    nav("/signup", { replace: true });
  };

  const resendMail = async () => {
    try {
      const resend = await resendEmail({ email: user?.email });
      if (resend.status == 200) {
        alertActions.success("Email sent successfully");
      }
    } catch (error: any) {
      if (error?.code == "ERR_NETWORK") {
        alertActions.error(error?.message);
      } else {
        alertActions.error(error?.response?.data?.message);
      }
    }
  };

  return (
    <div className="w-full h-[100vh] bg-[#322D92] flex justify-center items-center ">
      <img
        src={abs1}
        className="absolute top-[-40px] left-[-40px]  hidden sm:block"
      />

      <div className="flex gap-5 flex-col bg-[#FFF] w-[615px] sm:h-[353px] h-full rounded-[8px] px-5 sm:px-20 py-20 sm:py-14 ">
        <div>
          <h1 className="text-center text-[24px]">Verify your email address</h1>
          <p className="text-center text-[18px] mt-5">
            We’ve sent an email to{" "}
            <span className="text-[18px] text-[#4F46E5] underline">
              {user?.email}
            </span>{" "}
            Verify your email address to continue.{" "}
          </p>
        </div>
        <div>
          {/* <div className="h-[40px] mt-16">
            <Button2 text1="Send" onclick={doChange} />
          </div> */}
          <p className="mt-5 sm:mt-10 text-center text-[16px]">
            Not able to verify your account?{" "}
            <span
              onClick={resendMail}
              className="text-[#4F46E5] underline cursor-pointer"
            >
              Resend Email
            </span>{" "}
            or{" "}
            <span
              className="text-[#4F46E5] underline cursor-pointer"
              onClick={updateEmail}
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
