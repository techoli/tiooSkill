import React, { useState } from "react";
import { Input, Inputpass } from "../../components/UI/Input";
import { Button, Button2, Button3 } from "../../components/UI/Button";
import abs1 from "../../images/authimg/abs.png";
import abs3 from "../../images/authimg/abs1.png";
import abs2 from "../../images/authimg/abs2.png";
import { doresetPassword, resetPassword } from "../../services/apiservices";
import { alertActions } from "../../components/component/alertActions";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Newpass() {
  const nav = useNavigate();
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [cpass, setcpass] = useState("");
  const [show, setshow] = useState(false);
  const [showpass, setshowpass] = useState(false);
  const [errmess, seterrmess] = useState({
    pass: "",
    cpass: "",
  });

  const [loading, setloading] = useState(false);
  const { id, emailid } = useParams();

  const doReset = async () => {
    setloading(true);
    if (!cpass || cpass !== pass) {
      alertActions.error("Passwords and confirm password is not the same");
      setloading(false);
      return;
    }
    if (pass.length < 7) {
      alertActions.error("Passwords is too short");
      setloading(false);
      return;
    }
    try {
      const passReset = await doresetPassword({
        email: emailid,
        code: id,
        password: pass,
      });
      if (passReset.status == 200) {
        alertActions.success("Password reset successfully");
        nav("/signin", { replace: true });

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
  const validateField = (e: any) => {
    let { name, value } = e.target;
    seterrmess((prev: any) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "pass":
          if (!value) {
            stateObj[name] = "Field is required";
          }
          if (value && value.length < 7) {
            stateObj[name] = "Too short";
          }
          break;

        case "cpass":
          if (!value) {
            stateObj[name] = "Field is required";
          }
          if (value !== pass) {
            stateObj[name] = "Password is different";
          }

          break;

        default:
          break;
      }

      return stateObj;
    });
  };
  return (
    <div className="px-0 sm:px-20  sm:py-20 py-0 gap-5 bg-[#322D92] flex w-full relative">
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
      <div className="bg-[#FFF] flex flex-col sm:flex-1 px-5 sm:px-10 py-5 gap-5 rounded-[8px] w-full ">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-[18px] sm:text-[24px] text-[#4F46E5]">
            Reset password
          </h1>
          {/* <p className=" text-[14px] sm:text-[18px] mt-4 ">
            Please enter your email
          </p> */}
        </div>
        <div>
          <Inputpass
            name="pass"
            value={pass}
            isShow={showpass}
            handleshowPass={() => setshowpass(!showpass)}
            onchange={(e) => {
              setpass(e.target.value);
              validateField(e);
            }}
            label="Password"
          />
          {errmess.pass && (
            <p className="text-[red] text-[14px] ml-2">{errmess.pass}</p>
          )}
          <Inputpass
            name="cpass"
            value={cpass}
            isShow={showpass}
            handleshowPass={() => setshowpass(!showpass)}
            onchange={(e) => {
              setcpass(e.target.value);
              validateField(e);
            }}
            label="Password"
          />
          {errmess.cpass && (
            <p className="text-[red] text-[14px] ml-2">{errmess.cpass}</p>
          )}
          <p
            className="mt-1 text-[#E83636] text-right cursor-pointer"
            onClick={() => {
              nav("/forgotpass", { replace: true });
            }}
          >
            Resend mail?
          </p>
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

export default Newpass;
