import React from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import log1 from "../../images/navimg/logobg.png";
import log2 from "../../images/navimg/logomd.png";
import log3 from "../../images/navimg/logosm.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

import imm from "../../images/navimg/imm.png";
import { alertActions } from "./alertActions";
import { SAVESUB_URL } from "../../services/url";
import { getToken, getuser, saveSub } from "../../services/apiservices";
const user = JSON.parse(localStorage.getItem("account") || "{}");

interface payment {
  amt: number;
  email: string;
  cname?: string;
  full: any;
  part: any;
}

export const Payment: React.FC<payment> = ({
  amt,
  email,
  cname,
  full,
  part,
}) => {
  const nav = useNavigate();

  const config: any = {
    public_key: "FLWPUBK_TEST-3be9712248722ceefc75988f260aff50-X",
    tx_ref: Date.now(),
    amount: amt,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phone_number: "070********",
      name: cname,
    },
    customizations: {
      title: "CICD",
      description: "Payment for items in cart",
      //   logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
      logo: imm,
    },
  };

  const fwConfig = {
    ...config,
    text: "Make Payment",
    callback: async (response: any) => {
      //   user.paid = true;
      // localStorage.setItem("paid", JSON.stringify({ paid: true }));
      // window.location.reload();
      window.location.href = "/dashboard";
      nav("/dashboard");

      try {
        await saveSub(
          {
            amount: 15000,
            status: "paid",
          },
          getToken
        );
        const resubmituser = await getuser(user.id, getToken);
        console.log(resubmituser);
        localStorage.setItem("account", JSON.stringify(resubmituser.data));
      } catch (error) {
        console.log(error);
      }

      setTimeout(() => {
        closePaymentModal(); // this will close the modal programmatically
      }, 2000);

      console.log(response);
    },
    onClose: () => {},
  };

  return (
    <div className="h-full">
      <FlutterWaveButton
        {...fwConfig}
        className={`rounded-[8px] w-full h-full ${
          full || part
            ? `bg-[#4F46E5] text-white`
            : `bg-[#F4F4F5] text-[gray] cursor-not-allowed`
        }`}
      />
    </div>
  );
};
