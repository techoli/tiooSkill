import React, { useEffect, useState } from "react";
import { Button2 } from "./Button";

function Cookie() {
  const [showcook, setShowcook] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowcook(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  const doAction = () => {
    setShowcook(!showcook);
  };
  return (
    // <div className="w-full h-[100vh] absolutr">
    <div
      className={`justify-between flex px-36 py-5 z-50 fixed w-full h-[150px] bg-[#FFF] bottom-0 ${
        !showcook && `hidden`
      }`}
    >
      <div className="w-[55%] h-full">
        <h1 className="text-[16px]">Your Privacy Is Important to us</h1>
        <p className="text-[14px]">
          We use cookies to personalize content and ads, to provide social media
          features and to analyze our traffic. By clicking “Accept All Cookies”
          you agree that we may also use cookies to help us analyze our web page
          flow, customize our content for marketing purposes, and measure
          performance and functionality.
        </p>
      </div>
      <div className="flex w-[40%] gap-10 h-full items-center">
        <div className="h-[40px]">
          <Button2 text1="Accept all cookies" onclick={doAction} />
        </div>
        <div className="h-[40px]">
          <Button2 text1="Reject" onclick={doAction} variant="white" />
        </div>
      </div>
    </div>
  );
}

export default Cookie;
