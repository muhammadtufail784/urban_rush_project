import React, { useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-white rounded-[24px] border border-gray-200 overflow-hidden">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-[24px] text-left"
      >
        <span className="font-medium text-lg text-gray-900 cursor-pointer border-red-500" >{question}</span>
        <p className="w-[42px] h-[42px] rounded-full bg-[#FAFAFA] flex items-center justify-center">

        <span className="flex items-center justify-center w-[32px] h-[32px] rounded-full bg-[#EBEBEB]">
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
            </svg>
          )}
        </span>
        </p>

      </button>
      {open && (
        <div className="pt-0 px-6 pb-6 text-gray-700 text-base">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FaqItem; 