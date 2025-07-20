import React from "react";
import Image from "next/image";

/**
 * Re-usable horizontal feature card.
 *
 * Props:
 *  imgSrc        – required – path inside `/public` for the icon image
 *  title         – required – card heading
 *  description   – required – card body text
 *  outerColor    – optional – hex/rgb background of outer circle
 *  innerColor    – optional – hex/rgb background of inner circle
 *  gradientFrom  – optional – start color for card bg gradient
 *  gradientTo    – optional – end color for card bg gradient
 */

const HorizontalCard = ({
  imgSrc,
  title,
  description,
  outerColor = "#DAF9E2",
  innerColor = "#80F8A0",
  gradientFrom = "#EDFAF0",
  gradientTo = "#FBFBFB",
}) => {
  return (
    <div
      style={{ background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})` }}
      className="border border-[#E7E9E7] rounded-2xl md:w-[360px] w-[300px] shadow-md p-[24px] flex items-start space-x-4"
    >
      {/* Icon */}
      <div
        style={{ backgroundColor: outerColor }}
        className="flex-shrink-0 w-[74px] h-[74px] rounded-full flex items-center justify-center"
      >
        <div
          style={{ backgroundColor: innerColor }}
          className="w-[54px] h-[54px] rounded-full flex items-center justify-center"
        >
          <Image src={imgSrc} alt={title} width={28} height={28} />
        </div>
      </div>

      {/* Text */}
      <div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default HorizontalCard;