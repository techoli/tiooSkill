import React, { useState } from "react";
import { IoMdClose, IoIosWarning } from "react-icons/io";
import { AiOutlineWarning } from "react-icons/ai";

import { title } from "process";
import { Button } from "../../../../components/UI/Button";
import { Input } from "../../../../components/UI/Input";
// import pdffile from "/pass.pdf";

interface CourseModalProps {
  close: () => void;
  item?: any;
  title?: string;
  aliasname?: string;
  handleDelete?: any;
}

const CourseModal: React.FC<CourseModalProps> = ({
  close,
  item,
  title,
  aliasname,
  handleDelete,
}) => {
  const [sdescription, setsdescription] = useState("");
  const [naming, setnaming] = useState("");
  const [loading, setloading] = useState(false);
  const doChange = () => {};
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
        <h3 className=" text-[24px] ">Download Course</h3>
        <div className="cursor-pointer" onClick={close}>
          <IoMdClose className="text-[22px] text-[#545454]" />
        </div>
      </div>
      {/* <a href="../../.."></a> */}

      <div className="w-full p-[24px]">
        <Input
          label="First Name"
          name="firstname"
          value=""
          onchange={doChange}
        />
        <Input
          label="Last Name"
          name="firstname"
          value=""
          onchange={doChange}
        />
        <Input label="Email" name="firstname" value="" onchange={doChange} />
        <Input
          label="Whatsapp Number"
          name="firstname"
          value=""
          onchange={doChange}
        />
      </div>

      <div className="p-[24px] w-full">
        <Button
          text1={loading ? "Downloading..." : "Download"}
          onclick={doAction}
        />
      </div>
    </div>
  );
};

export default CourseModal;
