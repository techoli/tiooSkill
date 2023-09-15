import React from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineVisibility } from "react-icons/md";
interface input {
  value: string;
  onchange: (a: any) => void;
  onblur?: (a: any) => void;
  name: string;
  label: string;
  isShow?: any;
  handleshowPass?: () => void;
}

export const Input: React.FC<input> = ({
  onblur,
  value,
  onchange,
  name,
  label,
}) => {
  return (
    <div className="mt-5">
      <label className="">{label}</label>
      <input
        value={value}
        onBlur={onblur}
        onChange={onchange}
        name={name}
        className="w-full border-[#c7ced8] border-2   rounded-[8px] h-[40px] p-3"
      />
    </div>
  );
};
export const Inputpass: React.FC<input> = ({
  onblur,
  value,
  onchange,
  name,
  label,
  isShow,
  handleshowPass,
}) => {
  return (
    <div className="relative mt-5 ">
      <label className="">{label}</label>
      <input
        type={isShow ? "text" : "password"}
        value={value}
        onBlur={onblur}
        onChange={onchange}
        name={name}
        className="w-full border-[#c7ced8] border-2   rounded-[8px] h-[40px] p-3"
      />
      {isShow ? (
        <MdOutlineVisibility
          className="absolute right-3 top-[30px] cursor-pointer h-[24px] w-[24px]"
          onClick={handleshowPass}
        />
      ) : (
        <AiOutlineEyeInvisible
          className="absolute right-3 top-[30px] cursor-pointer h-[24px] w-[24px]"
          onClick={handleshowPass}
        />
      )}
    </div>
  );
};
export const Tesxtarea: React.FC<input> = ({
  value,
  onchange,
  name,
  label,
}) => {
  return (
    <div className="mt-3 ">
      <label className="">{label}</label>
      <input
        value={value}
        onChange={onchange}
        name={name}
        className="w-full border-[#c7ced8] border-2  rounded-[8px] h-[200px] p-3"
      />
    </div>
  );
};

// export default Input;
