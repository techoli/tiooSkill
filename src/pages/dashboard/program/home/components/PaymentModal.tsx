import React, { useState } from "react";
import { IoMdClose, IoIosWarning } from "react-icons/io";
import { AiOutlineWarning } from "react-icons/ai";

import { title } from "process";
import { Button } from "../../../../../components/UI/Button";
import { useNavigate } from "react-router-dom";

interface CourseModalProps {
  close: () => void;
  item?: any;
  title?: string;
  aliasname?: string;
  handleDelete?: any;
  setpurchased: () => void;
  // purchased:()=>void
}

const PaymentModal: React.FC<CourseModalProps> = ({
  close,
  item,
  title,
  aliasname,
  handleDelete,
  setpurchased,
}) => {
  const [sdescription, setsdescription] = useState("");
  const [naming, setnaming] = useState("");
  const [loading, setloading] = useState(false);
  const [full, setFull] = useState(false);
  const [part, setpart] = useState(false);
  const user = JSON.parse(localStorage.getItem("login") || "{}");

  const nav = useNavigate();
  const doAction2 = () => {
    user.paid = true;
    localStorage.setItem("login", JSON.stringify(user));
    nav("/dashboard");
    close();
    setpurchased();
  };
  const toggleRadio = (val: string) => {
    if (val == "full") {
      setFull(true);
      setpart(false);
    } else {
      setpart(true);
      setFull(false);
    }
  };
  const doAction = () => {
    setloading(true);
    console.log("first");
    // Replace 'your_file_url' with the actual URL of the file you want to download.
    const fileUrl = "./pass.pdf";

    // Create an anchor element to trigger the download.
    const link = document.createElement("a");
    link.href = "./tioo.pdf";

    // Specify the download attribute and file name.
    link.setAttribute("download", "tioo.pdf");

    // Simulate a click event on the anchor element to start the download.
    link.click();
    setloading(false);
  };
  return (
    <div className="h-[324]">
      <div className="flex w-full items-center justify-between border-b-[1px] py-4 px-[24px]">
        <h3 className=" text-[24px] ">Make payment</h3>
        <div className="cursor-pointer" onClick={close}>
          <IoMdClose className="text-[22px] text-[#545454]" />
        </div>
      </div>
      {/* <a href="../../.."></a> */}

      <div className="w-full p-[24px]">
        <p className="text-[#87909E] mb-3">
          Make your payment now and get started
        </p>
        <p className="text-[#4F46E5] text-[24px]">N15,000</p>
        <p className="text-[24px] mt-10 mb-2">How do you want to pay?</p>
        <div>
          <div
            className="flex gap-2 mb-5 cursor-pointer"
            onClick={() => toggleRadio("full")}
          >
            <input
              className="h-[28px] w-[28px]"
              type="radio"
              id="huey"
              name="drone"
              value="full"
              checked={full}
            />
            <div className="w-full">
              <p className="">Make Full payment</p>
              <p className="text-[#87909E] text-[14px]">
                Make a full payment now and get set!
              </p>
            </div>
          </div>

          <div
            className="flex gap-2 cursor-pointer"
            onClick={() => toggleRadio("part")}
          >
            <input
              className="h-[28px] w-[28px]"
              type="radio"
              id="huey"
              name="drone"
              value="part"
              checked={part}
            />
            <div className="w-full">
              <p className="">Pay in parts</p>
              <p className="text-[#87909E] text-[14px]">
                Pay N7,500 now, and N7,500 will be charged automatically before
                you complete your courses.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-8 w-full items-center justify-between border-t-[1px] py-4 px-[24px]">
        <div className="cursor-pointer h-[40px]">
          <button
            onClick={doAction2}
            className={`rounded-[8px] w-full h-full ${
              full || part
                ? `bg-[#4F46E5] text-white`
                : `bg-[#F4F4F5] text-[gray] cursor-not-allowed`
            }`}
          >
            Make payment
          </button>
          {/* <Button text1="Make payment" onclick={doAction} /> */}
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
