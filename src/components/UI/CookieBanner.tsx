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
      className={`justify-between flex-col sm:flex-row flex px-2 sm:px-32 py-2 z-50 fixed w-full h-[200px] sm:h-[150px] bg-[#FFF] bottom-0 gap-5 sm:gap-2 ${
        !showcook && `hidden`
      }`}
    >
      <div className="w-full sm:w-[55%] h-full">
        <h1 className="text-[14px] sm:text-[16px] mb-2">
          Your Privacy Is Important to us
        </h1>
        <p className="sm:text-[14px] text-[12px]">
          We use cookies to personalize content and ads, to provide social media
          features and to analyze our traffic. By clicking “Accept All Cookies”
          you agree that we may also use cookies to help us analyze our web page
          flow, customize our content for marketing purposes, and measure
          performance and functionality.
        </p>
      </div>
      <div className="border border-gray flex  w-full sm:w-[40%] gap-3 sm:gap-10 h-full items-center">
        <div className="h-[50px] flex-1 w-full">
          <Button2 text1="Accept all cookies" onclick={doAction} />
        </div>
        <div className="h-[50px] flex-1 w-full">
          <Button2 text1="Reject" onclick={doAction} variant="white" />
        </div>
      </div>
    </div>
  );
}

export default Cookie;
