import React, { useEffect, useState } from "react";
import { Input, Inputpass } from "../../components/UI/Input";
import { Button2, Button3 } from "../../components/UI/Button";
import img from "../../images/authimg/gimage.png";
import { useNavigate } from "react-router-dom";
import abs1 from "../../images/authimg/abs.png";
import abs3 from "../../images/authimg/abs1.png";
import abs2 from "../../images/authimg/abs2.png";
import { alertActions } from "../../components/component/alertActions";
import { signIn } from "../../services/apiservices";

function Signin() {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [acc, setacc] = useState({ email: "", password: "" });
  const [loading, setloading] = useState(false);

  const [errmess, seterrmess] = useState({
    email: "",
    pass: "",
  });
  const [showpass, setshowpass] = useState(false);

  const nav = useNavigate();

  const doAccsignup = () => {};

  const doChange = () => {};

  const signInacc = async () => {
    setloading(true);
    const logindet = {
      email,
      password: pass,
      token: "",
    };

    try {
      const login = await signIn(logindet);

      if (login.status == 200) {
        alertActions.success("Login successful");

        console.log(login);
        localStorage.setItem("token", login?.data?.token);
        const loginuser = login?.data?.user;
        localStorage.setItem("paid", JSON.stringify({ paid: false }));
        localStorage.setItem("account", JSON.stringify(loginuser));
        nav("/program", { replace: true });
        setloading(false);
      }
    } catch (error: any) {
      if (
        error?.response?.data?.message == "Username or Password don't match"
      ) {
        alertActions.error("Username or Password don't match");
      } else {
        alertActions.error("Something went wrong");
      }
      setloading(false);
    }
  };

  const doSignup = () => {
    nav("/signup", { replace: true });
  };

  useEffect(() => {
    // const userAcc = JSON.parse(localStorage.getItem("account") || "{}");
    // setacc(userAcc);
  }, []);

  const validateField = (e: any) => {
    let { name, value } = e.target;
    seterrmess((prev: any) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
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
          <h1 className="text-[18px] sm:text-[24px] text-[#4F46E5]">Sign In</h1>
          <p className=" text-[14px] sm:text-[18px] mt-4 ">
            Not Registered?{" "}
            <span
              className="underline text-[#4F46E5] cursor-pointer text-[14px] sm:text-[18px]"
              onClick={doSignup}
            >
              Sign Up
            </span>
          </p>
        </div>
        <div>
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
          <p className="mt-1 text-[#E83636] text-right cursor-pointer">
            Forgot password?
          </p>
        </div>
        <div className="h-[40px] mt-4">
          <Button2
            text1={loading ? "Loading..." : "Sign In"}
            onclick={signInacc}
          />
        </div>
        <div className="flex items-center justify-center gap-3  mt-6 w-[80%] m-[auto]">
          <hr className="h-[1.5px] bg-[#87909E]  flex-1 " />
          <p className="text-[14px] sm:text-[18px] flex-2 text-center">
            Or sign in with
          </p>
          <hr className="h-[1.5px] bg-[#87909E]  flex-1" />
        </div>
        <div className="h-[40px] mt-6 mb-16">
          <Button3
            text1="Continue with Google"
            onclick={doAccsignup}
            variant="n"
            image={img}
          />
        </div>
      </div>
    </div>
  );
}

export default Signin;
