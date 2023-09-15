import React, { useState } from "react";
import { IoMdClose, IoIosWarning } from "react-icons/io";
import { AiOutlineWarning } from "react-icons/ai";

import { title } from "process";
import { Button } from "../../../../../components/UI/Button";
import { useNavigate } from "react-router-dom";

interface CurriculumModalProps {
  close: () => void;
  item?: any;
  title?: string;
  aliasname?: string;
  tid: number;
}
const CurriculumModal: React.FC<CurriculumModalProps> = ({
  close,
  item,
  title,
  aliasname,
  tid,
}) => {
  console.log(item);
  return (
    <div className="h-[324]">
      <div className="flex w-full items-center justify-between border-b-[1px] py-4 px-[24px]">
        <h3 className=" text-[24px] ">Curriculum</h3>
        <div className="cursor-pointer" onClick={close}>
          <IoMdClose className="text-[22px] text-[#545454]" />
        </div>
      </div>

      <div className="w-full px-5 mb-5 ">
        {item && item?.curriculum?.length > 0 ? (
          item?.curriculum?.map((items: any, index: any) => (
            <div key={items.id} className=" text-[#4F46E5]">
              <div className="flex gap-1 mt-5 ">
                <p className="text-[#4F46E5]">{`${item.id}.${index + 1}`}</p>
                <p className="text-[#4F46E5]">{items.pointname}</p>
              </div>
              <ul style={{ listStyleType: "disc" }} className=" text-[#4F46E5]">
                {items?.subpoints?.map((subitem: any) => (
                  <li className="text-[12px] mt-1 ml-7 text-[#4F46E5]">
                    {subitem}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No Curriculum</p>
        )}
      </div>
    </div>
  );
};

export default CurriculumModal;
