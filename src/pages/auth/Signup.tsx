import React, { useState } from "react";
import { Input, Inputpass } from "../../components/UI/Input";
import { Button, Button2, Button3 } from "../../components/UI/Button";
import img from "../../images/authimg/gimage.png";
import { useNavigate } from "react-router-dom";
import abs1 from "../../images/authimg/abs.png";
import abs3 from "../../images/authimg/abs1.png";
import abs2 from "../../images/authimg/abs2.png";
import { error } from "console";
import { signUp, verifyEmail } from "../../services/apiservices";
import { alertActions } from "../../components/component/alertActions";

function Signup() {
  const user = JSON.parse(localStorage.getItem("account") || "{}");
  const [fname, setfname] = useState(user?.first_name);
  const [lname, setlname] = useState(user?.last_name);
  const [email, setemail] = useState(user?.email);
  const [pass, setpass] = useState("");
  const [cpass, setcpass] = useState("");
  const [showerr, setshowerr] = useState(false);
  const [show, setshow] = useState(false);
  const [showpass, setshowpass] = useState(false);
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

  const doSignup = async () => {
    setloading(true);
    if (!email || !fname || !lname) {
      alertActions.error("Please ensure all fields are correctly filled");
      setloading(false);
      return;
    }
    if (!cpass || cpass !== pass) {
      alertActions.error("Passwords and confirm password is not the same");
      setloading(false);
      return;
    }
    const userdata = {
      first_name: fname,
      last_name: lname,
      email: email,
      password: pass,
    };

    try {
      const userSignup = await signUp(userdata);
      setloading(false);

      if (userSignup?.status == 200) {
        console.log(userSignup);
        alertActions.success(userSignup?.data?.message);
        localStorage.setItem("account", JSON.stringify(userdata));
        nav("/verification", { replace: true });
      }
      // nav("/program", { replace: true });
    } catch (error: any) {
      console.log(error);
      if (error?.response?.data?.message == "Account Already Exist") {
        alertActions.error("Account Already Exist");
      }
      setloading(false);
    }
  };

  const sendMail = async (data: any) => {
    try {
      const mail = await verifyEmail(data);
      if (mail.status == 200) {
        // nav("/verification", { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
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
          setshow(true);
          break;
      }

      return stateObj;
    });
  };

  return (
    <div className="px-0 sm:px-20 py-0 sm:py-20 gap-5 bg-[#322D92] flex w-full relative">
      <img
        src={abs1}
        className="absolute top-[-40px] left-[-40px] hidden sm:block"
      />
      <img src={abs2} className="absolute bottom-0 right-0 hidden sm:block" />
      <img src={abs3} className="absolute bottom-0 left-0 hidden sm:block" />
      <div className="flex-1 hidden sm:block">
        <h1 className="text-[56px] text-white mt-20">
          Accelerate Your Product Management Growth with CICD
        </h1>
      </div>
      <div className="bg-[#FFF] flex flex-col flex-1 px-5 sm:px-10 py-5 gap-5 rounded-[8px]">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-[18px] sm:text-[24px] text-[#4F46E5]">Sign Up</h1>
          <p className="mt-4 text-[14px] sm:text-[18px]">
            Already Registered?{" "}
            <span
              onClick={doSignin}
              className="underline text-[#4F46E5] cursor-pointer text-[14px] sm:text-[18px]"
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
          <div className="flex flex-col gap-5 sm:flex-row ">
            <div>
              {" "}
              <Inputpass
                onblur={validateField}
                label="Password"
                name="pass"
                value={pass}
                isShow={showpass}
                handleshowPass={() => setshowpass(!showpass)}
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
              <Inputpass
                onblur={validateField}
                label="Confirm Password"
                name="cpass"
                value={cpass}
                isShow={showpass}
                handleshowPass={() => setshowpass(!showpass)}
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

          <p className="mt-5 text-[14px] sm:text-[18px]">
            By signing up, you confirm that you've read and accepted our{" "}
            <span className="underline text-[#4F46E5] cursor-pointer text-[14px] sm:text-[18px">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="underline text-[#4F46E5] cursor-pointer text-[14px] sm:text-[18px">
              Privacy Policy
            </span>
          </p>
        </div>
        <div className="h-[40px]">
          <Button2
            show={show}
            text1={loading ? "Loading..." : "Sign Up"}
            onclick={doSignup}
          />
        </div>
        <div className="flex items-center justify-center gap-3 mt-6 w-[80%] m-[auto]">
          <hr className="h-[1.5px] bg-[#87909E]  flex-1 " />
          <p className="text-[14px] sm:text-[18px] flex-2 text-center">
            Or sign up with
          </p>
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
