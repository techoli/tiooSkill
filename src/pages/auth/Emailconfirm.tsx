import React, { useEffect, useState } from "react";
import { Input } from "../../components/UI/Input";
import { Button2, Button } from "../../components/UI/Button";
import { useNavigate, useParams } from "react-router-dom";
import { verifyEmail } from "../../services/apiservices";

function Emailconfirm() {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const [errormsg, seterrormsg] = useState("Something went wrong");

  const { id } = useParams();
  const nav = useNavigate();
  const doAction = () => {
    nav("/signin", { replace: true });
  };
  useEffect(() => {
    setloading(true);
    // localStorage.removeItem("account");
    const confirm = async () => {
      try {
        const verify = await verifyEmail({ token: id });
        if (verify.status == 200) {
          localStorage.removeItem("signaccount");
          setloading(false);
        }
      } catch (error: any) {
        setloading(false);
        seterror(true);
        if (error?.code == "ERR_NETWORK") {
          seterrormsg(error?.message);
        } else {
          seterrormsg(error?.response?.data?.message);
        }
      }
    };
    confirm();
  }, []);

  return (
    <div className="w-full h-[100vh] bg-[#322D92] flex justify-center items-center ">
      {error && !loading ? (
        <div className=" items-center  flex gap-5 flex-col bg-[#FFF] w-[515px] sm:h-[275px] h-full rounded-[8px] px-5 sm:px-20 py-20 sm:py-14 ">
          <h1 className="text-[24px] ">{errormsg} </h1>
          <div className="w-[200px]">
            <Button text1="CONTINUE" onclick={doAction} />
          </div>
        </div>
      ) : loading ? (
        <div className=" items-center  flex gap-5 flex-col bg-[#FFF] w-[515px] sm:h-[275px] h-full rounded-[8px] px-5 sm:px-20 py-20 sm:py-14 ">
          <h1 className="text-[24px] ">Verifying Email...</h1>
        </div>
      ) : (
        <div className=" items-center sm:items-start flex gap-5 flex-col bg-[#FFF] w-[515px] sm:h-[275px] h-full rounded-[8px] px-5 sm:px-20 py-20 sm:py-14 ">
          <h1 className="text-[24px]">Your Email Has Been Verified</h1>
          <p className="text-[#87909E] text-[24px]">
            Sign in and start learning 😊
          </p>
          <div className="w-[200px]">
            <Button text1="CONTINUE" onclick={doAction} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Emailconfirm;
