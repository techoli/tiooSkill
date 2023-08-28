import React from "react";

function DummySlideBtn() {
  return (
    <div className="w-full flex justify-center mt-5">
      {[1, 2, 3, 4, 5].map((el, ind) => (
        <button
          className={`h-2 w-2 mx-1 rounded-full transition-colors bg-[#4F46E5] ${
            ind !== 0 && `bg-[#E3E2FF]`
          }
            `}
        ></button>
      ))}
    </div>
  );
}

export default DummySlideBtn;
