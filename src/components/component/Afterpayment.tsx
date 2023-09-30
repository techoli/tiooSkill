import React, { useEffect } from "react";
import { getToken, getuser, saveSub } from "../../services/apiservices";
import { useNavigate } from "react-router-dom";
import Dashboard from "../../pages/dashboard/program/home";

function Afterpayment() {
  const user = JSON.parse(localStorage.getItem("account") || "{}");
  const nav = useNavigate();
  useEffect(() => {
    const dojob = async () => {
      try {
        const dosub = await saveSub(
          {
            amount: 15000,
            status: "paid",
          },

          getToken
        );
        console.log(dosub);
        console.log(getToken);
        //   console.log(token);

        const resubmituser = await getuser(user.id, getToken);

        console.log(resubmituser);
        localStorage.setItem("account", JSON.stringify(resubmituser.data.data));
      } catch (error) {
        console.log(error);
      }
      // window.location.href = "/dashboard";
      //   nav("/");
    };
    dojob();
  }, []);

  return <Dashboard />;
}

export default Afterpayment;
