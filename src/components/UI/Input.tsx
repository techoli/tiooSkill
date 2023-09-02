import React from "react";
interface input {
  value: string;
  onchange: () => void;
  name: string;
  label: string;
}

export const Input: React.FC<input> = ({ value, onchange, name, label }) => {
  return (
    <div className="mt-3">
      <label className="">{label}</label>
      <input
        value={value}
        onChange={onchange}
        name={name}
        className="w-full border-[#c7ced8] border-2   rounded-[8px] h-[40px]"
      />
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
    <div className="mt-3">
      <label className="">{label}</label>
      <input
        value={value}
        onChange={onchange}
        name={name}
        className="w-full border-[#c7ced8] border-2  rounded-[8px] h-[200px]"
      />
    </div>
  );
};

// export default Input;
