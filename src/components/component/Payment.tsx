import React from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import log1 from "../../images/navimg/logobg.png";
import log2 from "../../images/navimg/logomd.png";
import log3 from "../../images/navimg/logosm.png";
import imm from "../../images/navimg/imm.png";

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
    callback: (response: any) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div className="App">
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
