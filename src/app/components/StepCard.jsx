import React from "react";
import Image from "next/image";

const StepCard = ({
  stepNumber,
  title,
  description,
  imgSrc,
  imgClassName = "rounded-lg absolute bottom-0 left-6", // default placement
  bgColor = "#E8F5FC", // default light blue
}) => {
  return (
    <div
    //   style={{ backgroundColor: bgColor }}
      className="rounded-2xl md:w-[360px]  w-[300px] border-[9px] overflow-hidden relative border-[#FFFFFF33] h-[484px] px-8 py-4 flex flex-col shadow-inner bg-[#7E7D7D17] bg-opacity-[9%]"
    >
      <h3 className="text-2xl font-semibold mb-4">{stepNumber}</h3>
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-gray-700 text-sm mb-6 flex-1">{description}</p>
      {imgSrc && (
        <div className="mt-auto">
          <Image src={imgSrc} alt={title} width={320} height={240} className={`${imgClassName} absolute`}   />
        </div>
      )}
    </div>
  );
};

export default StepCard; 