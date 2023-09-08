import React, { useState } from "react";
import { Input } from "../../components/UI/Input";
import { Button, Button2, Button3 } from "../../components/UI/Button";
import img from "../../images/authimg/gimage.png";
import { useNavigate } from "react-router-dom";
import abs1 from "../../images/authimg/abs.png";
import abs3 from "../../images/authimg/abs1.png";
import abs2 from "../../images/authimg/abs2.png";
import { error } from "console";
import { signUp } from "../../services/apiservices";
import { alertActions } from "../../components/component/alertActions";

function Signup() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [cpass, setcpass] = useState("");
  const [showerr, setshowerr] = useState(false);
  const [loading, setloading] = useState(false);
  const [errmess, seterrmess] = useState({
    fname: "",
    lname: "",
    email: "",
    pass: "",
    cpass: "",
  });
  const nav = useNavigate();

  const doSignin = () => {
    nav("/signin", { replace: true });
  };

  const doSignup = () => {
    setloading(true);

    localStorage.setItem(
      "account",
      JSON.stringify({
        first_name: fname,
        last_name: lname,
        email: email,
        password: pass,
        paid: false,
      })
    );
    localStorage.setItem(
      "login",
      JSON.stringify({
        email: email,
        password: pass,
      })
    );
    // signUp({
    //   first_name: fname,
    //   last_name: lname,
    //   email: email,
    //   password: pass,
    // });
    setloading(false);
    // nav("/verification", { replace: true });
    alertActions.success("Account Created successfully");
    nav("/program", { replace: true });
  };

  const doChange = () => {};

  //Field validation
  const validateField = (e: any) => {
    let { name, value } = e.target;
    seterrmess((prev: any) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "fname":
          if (!value) {
            stateObj[name] = "Field is required";
          }
          break;

        case "lname":
          if (!value) {
            stateObj[name] = "Field is required";
          }
          break;

        case "email":
          if (!value) {
            stateObj[name] = "Field is required";
          }
          if (
            value &&
            (value.split("").includes(".") == false ||
              value.split("").includes("@") == false)
          ) {
            stateObj[name] = "This is not a correct email format";
          }
          break;

        case "pass":
          if (value && value.length < 7) {
            stateObj[name] = "Too short";
          }
          break;

        case "cpass":
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
          <h1 className="text-[24px] text-[#4F46E5]">Sign Up</h1>
          <p className="mt-4 ">
            Already Registered?{" "}
            <span
              onClick={doSignin}
              className="underline text-[#4F46E5] cursor-pointer"
            >
              Sign In
            </span>
          </p>
        </div>
        <div>
          <Input
            onblur={validateField}
            label="Full Name"
            name="fname"
            value={fname}
            onchange={(e: any) => {
              setfname(e.target.value);
            }}
          />
          {errmess.fname && (
            <p className="text-[red] text-[14px] ml-2">{errmess.fname}</p>
          )}
          <Input
            onblur={validateField}
            label="Last Name"
            name="lname"
            value={lname}
            onchange={(e: any) => setlname(e.target.value)}
          />
          {errmess.lname && (
            <p className="text-[red] text-[14px] ml-2">{errmess.lname}</p>
          )}
          <Input
            onblur={validateField}
            label="Email"
            name="email"
            value={email}
            onchange={(e: any) => setemail(e.target.value)}
          />
          {errmess.email && (
            <p className="text-[red] text-[14px] ml-2">{errmess.email}</p>
          )}
          <div className="flex gap-5 ">
            <div>
              {" "}
              <Input
                onblur={validateField}
                label="Password"
                name="pass"
                value={pass}
                onchange={(e: any) => {
                  setpass(e.target.value);
                  validateField(e);
                }}
              />{" "}
              {errmess.pass && (
                <p className="text-[red] text-[14px] ml-2">{errmess.pass}</p>
              )}
            </div>
            <div>
              {" "}
              <Input
                onblur={validateField}
                label="Confirm Password"
                name="cpass"
                value={cpass}
                onchange={(e: any) => {
                  setcpass(e.target.value);
                  validateField(e);
                }}
              />
              {errmess.cpass && (
                <p className="text-[red] text-[14px] ml-2">{errmess.cpass}</p>
              )}
            </div>
          </div>

          <p className="mt-5">
            By signing up, you confirm that you've read and accepted our{" "}
            <span className="underline text-[#4F46E5] cursor-pointer">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="underline text-[#4F46E5] cursor-pointer">
              Privacy Policy
            </span>
          </p>
        </div>
        <div className="h-[40px]">
          <Button2
            text1={loading ? "Loading..." : "Sign Up"}
            onclick={doSignup}
          />
        </div>
        <div className="flex items-center justify-center gap-1 mt-6 w-[80%] m-[auto]">
          <hr className="h-[1.5px] bg-[#87909E]  flex-1 " />
          <p className="text-[18px] flex-1 text-center">Or sign up with</p>
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

export default Signup;
