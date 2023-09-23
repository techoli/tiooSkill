import React, { useState } from "react";
import { DOB, Input, Selects } from "../../components/UI/Input";
import { Button2 } from "../../components/UI/Button";

function KYC() {
  const [show, setshow] = useState(false);
  return (
    <div className="relative w-full px-20">
      <div className="flex w-[90%] gap-10 m-auto">
        <div className="bg-[#FFF] w-[30%] h-[390px]"></div>
        <div className="bg-[#FFF] p-5 w-[50%]">
          <p className="text-[24px]">KYC</p>

          <Selects name="b" label="Gender" />
          <DOB
            label="Date of birth"
            onchange={() => {}}
            name="d"
            value=""
            onblur={() => setshow(true)}
          />
          <Input name="addres" label="Address" />
          <Selects name="b" label="Nationality" />
          <Selects name="b" label="Qualification" />
          <div className="flex justify-end w-full mt-4">
            <div className="w-[100px] h-[40px]">
              {" "}
              <Button2 variant="default" text1="Save" onclick={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KYC;
