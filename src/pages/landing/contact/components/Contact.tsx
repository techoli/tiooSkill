import React from "react";
import { Input, Tesxtarea } from "../../../../components/UI/Input";
import { Button } from "../../../../components/UI/Button";

const Contact = () => {
  const doChange = () => {};
  const doAction = () => {};
  return (
    <div className="bg-[#FFF]  absolute w-[95%] sm:w-[540px]  right-2 sm:right-[100px] top-[100px] sm:top-[150px] p-5 rounded-[8px] shadow-lg">
      <h1 className="text-[24px]">Contact Us</h1>
      <p className="text-[16px]">
        We are here to answer any questions or comments, suggestions or just a
        hello, do reach out. We’d love to hear from you.
      </p>
      <Input label="Full Name" name="fullname" value="" onchange={doChange} />
      <Input label="Email" name="email" value="" onchange={doChange} />
      <Input label="Phone" name="phone" value="" onchange={doChange} />
      <Tesxtarea label="Message" name="message" value="" onchange={doChange} />
      <div className="flex justify-end w-full mt-2">
        <div className="w-[200px]  ">
          <Button text1="Send" onclick={doAction} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
