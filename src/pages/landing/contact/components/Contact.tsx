import React, { useState } from "react";
import { Input, Tesxtarea } from "../../../../components/UI/Input";
import { Button } from "../../../../components/UI/Button";
import { contactUs } from "../../../../services/apiservices";
import { alertActions } from "../../../../components/component/alertActions";

const Contact = () => {
  const [fname, setfname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [mess, setmess] = useState("");
  const [loading, setloading] = useState(false);
  const doChange = () => {};
  const doAction = async () => {
    setloading(true);
    try {
      const contactObj = {
        email,
        message: mess,
      };
      const contact = await contactUs(contactObj);
      if (contact.status == 200) {
        setloading(false);
        alertActions.success("Message sent successfully");
        setemail("");
        setphone("");
        setfname("");
        setmess("");
      }
    } catch (error) {
      alertActions.error("Something went wrong");
      setloading(false);
    }
  };
  return (
    <div className="bg-[#FFF]  absolute w-[95%] sm:w-[540px]  right-2 sm:right-[100px] top-[100px] sm:top-[150px] p-5 rounded-[8px] shadow-lg">
      <h1 className="text-[24px]">Contact Us</h1>
      <p className="text-[16px]">
        We are here to answer any questions or comments, suggestions or just a
        hello, do reach out. We’d love to hear from you.
      </p>
      <Input
        label="Full Name"
        name="fullname"
        value={fname}
        onchange={(e) => setfname(e.target.value)}
      />
      <Input
        label="Email"
        name="email"
        value={email}
        onchange={(e) => setemail(e.target.value)}
      />
      <Input
        label="Phone"
        name="phone"
        value={phone}
        onchange={(e) => setphone(e.target.value)}
      />
      <Tesxtarea
        label="Message"
        name="message"
        value={mess}
        onchange={(e) => setmess(e.target.value)}
      />
      <div className="flex justify-end w-full mt-2">
        <div className="w-[200px]  ">
          <Button text1={loading ? "Sending..." : "Send"} onclick={doAction} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
