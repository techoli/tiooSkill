import React from "react";
import PageLayout from "../../../layouts/PageLayout";
import DashLayout from "../../../layouts/DashLayout";
import { useNavigate } from "react-router-dom";

function Program() {
  const nav = useNavigate();
  const doAction = () => {
    nav("/dashboard", { replace: true });
  };
  return (
    <PageLayout needfooter={false}>
      <DashLayout>
        <div className="py-3 mt-24">
          <div className="h-full">
            <p className="text-[24px] text-center mb-3">
              Pick a program below and start learning!
            </p>
          </div>
          <hr className=" h-[2px] gradient2" />
          <div className="w-full mt-10 ">
            <div
              className=" cursor-pointer h-[300px] w-[300px] px-5 flex justify-center programbg py-10 rounded-[8px] border border-gray-500"
              onClick={doAction}
            >
              <p className="text-[20px] text-center text-white underline">
                Consumate Product Management
              </p>
            </div>
          </div>
        </div>
      </DashLayout>
    </PageLayout>
  );
}

export default Program;
