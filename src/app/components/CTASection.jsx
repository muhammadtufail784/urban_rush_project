"use client";
import Image from "next/image";
import React from "react";

const CTASection = () => {
  return (
    <section className="py-14 bg-[#F6F6F6]" >
      <div className="max-w-7xl mx-auto px-4">
        <div   style={{
    backgroundImage: "url('/bluegradient.png'), url('/greengradient.png')",
    backgroundPosition: 'left top, right top',
  }} className="rounded-[40px] bg-no-repeat  border border-[#E5E7EB] flex flex-col items-center text-center md:py-24 p-6 md:p-0  md:px-32">
          {/* badge */}
          <span className="inline-flex bg-[#EAFCF5] items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-900 mb-6">
            <Image src="/star.svg" width={24} height={24} alt="Best Delivery App" />
            <span>Best Delivery App</span>
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight md:leading-[1.2] max-w-3xl mb-6">
            Start Delivering with <br className="hidden md:block" /> UrbanRush
          </h2>
          <p className="text-lg text-gray-800 max-w-xl mb-10">
            Skip the stress — book a driver and get your items delivered without lifting a finger.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#" className="inline-block">
              <Image src="/apple.png" width={160} height={48} alt="Download on App Store" />
            </a>
            <a href="#" className="inline-block">
              <Image src="/playstore.png" width={160} height={48} alt="Get it on Playstore" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 