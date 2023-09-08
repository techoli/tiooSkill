import React, { useState, useEffect } from "react";
import { Button2 } from "../../../../../components/UI/Button";
import { COURSES } from "../../../../../data/data";
import CenterModal from "../../../../../components/component/CenterModal";
import PaymentModal from "./PaymentModal";

function Courses() {
  const user = JSON.parse(localStorage.getItem("login") || "{}");

  const [active, setActive] = useState(false);
  const [gotten, setgotten] = useState(false);
  const [haspaid, sethaspaid] = useState(true);
  const [loadmore, setloadmore] = useState(6);

  const doAction = () => {
    // user.paid = true;
    // localStorage.setItem("account", JSON.stringify(user));
    setActive(true);
  };
  // useEffect(() => {
  //   user.paid = false;
  //   localStorage.setItem("account", JSON.stringify(user));
  // }, []);

  const doLoadmore = () => {};
  return (
    <>
      <div className="mt-10 ww-full">
        <div className="flex justify-between">
          <p className="text-[18px]">Your Courses (12)</p>
          <div className="h-[45px]">
            <Button2
              variant={!user?.paid ? "default" : "secondary"}
              text1={!user?.paid ? "Make Payment" : "Start Learning"}
              onclick={doAction}
            />
          </div>
        </div>
        <div className="grid grid-cols-[repeat(3,1fr)] gap-5">
          {COURSES.slice(0, loadmore).map((item) => (
            <div className="min-w-[352px]   bg-[#FFF] rounded-[8px] relative mt-8 shadowc h-[319px]">
              <div className="w-full h-[50%]">
                <img className="w-full rounded-t-[8px]" src={item.img} />
              </div>
              <div className="relative flex flex-col justify-between  p-4 h-[50%]">
                <h1 className=" text-[18px] ">{item.heading}</h1>
                {/* <p className=" text-[14px] ">{item.text}</p> */}
                {gotten && (
                  <button className="  border-[#4F46E5] border-[1px] w-[160px] h-[50px] rounded-[8px] text-[#4F46E5]">
                    View curriculum
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <div
          className={`flex items-center justify-start w-full mt-8 gap-72 mb-7 ${
            !user?.paid ? `justify-center` : `justify-start`
          }`}
        >
          {(gotten || user?.paid) && (
            <p className="underline text-[#4F46E5]">
              Download entire curriculum
            </p>
          )}
          <div className="h-[40px]">
            <Button2
              onclick={() => setloadmore(12)}
              text1="Load More"
              variant="secondary"
            />
          </div>
        </div>
      </div>
      <CenterModal
        variant={"small"}
        isOpen={active}
        onClose={() => setActive(false)}
      >
        <PaymentModal
          close={() => setActive(false)}
          setpurchased={() => setgotten(!gotten)}
          // purchased={() => setpur(true)}
        />
      </CenterModal>
    </>
  );
}

export default Courses;
