"use client";
import Image from "next/image";
import React from "react";

const Footer = () => {
  // social icons below rendered manually for custom hover behaviour

  return (
    <>
    <footer className="bg-white pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & tagline */}
        <div>
         <Image src="/logo.svg" alt="logo" width={100} height={100} />
          <p className="text-gray-700 max-w-xs">
            Earn on your own schedule by delivering heavy.
          </p>
        </div>

        <div className="md:block hidden">
            
        </div>

        {/* Earn */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Earn with UrbanRush</h3>
          <a
            href="#"
            className="inline-block bg-black text-white px-6 py-3 rounded-2xl hover:opacity-90"
          >
            Join as a Driver
          </a>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Contact Us</h3>
          <p className="flex items-center space-x-2 text-gray-700">
           <Image src="/sms.svg" alt="mail" width={24} height={24} />
            <span>abc@gmail.com</span>
          </p>
          <p className="flex items-center space-x-2 text-gray-700">
            <Image src="/call-incoming.svg" alt="phone" width={24} height={24} />
            <span>+787655754</span>
          </p>
        </div>
      </div>

      {/* bottom */}
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-gray-700 text-sm">Copyright © 2025 UrbanRush. All Rights Reserved.</p>
        <div className="flex items-center justify-center space-x-6">
          {/* Facebook */}
          <div className="flex items-center justify-center group w-[54px] h-[54px] rounded-full bg-gray-100  text-gray-700 hover:bg-black  hover:text-white transition">

          <a href="#" aria-label="facebook" className="">
            <Image src="/facebook.svg" alt="facebook" width={20} height={20} className="group-hover:hidden block w-6 h-6 m-[10px]" />
            <Image src="/facebook_white.svg" alt="facebook" width={20} height={20} className="group-hover:block hidden w-6 h-6 m-[10px]" />
          </a>
          </div>
          {/* Instagram */}
          <div className="flex items-center justify-center group w-[54px] h-[54px] rounded-full bg-gray-100  text-gray-700 hover:bg-black hover:text-white transition">

          <a href="#" aria-label="instagram" className="">
            <Image src="/instagram.svg" alt="instagram" width={24} height={24} className="group-hover:hidden block m-[10px]" />
            <Image src="/instagram_white.svg" alt="instagram" width={24} height={24} className="group-hover:block hidden m-[10px]" />
          </a>
          </div>
          {/* Twitter/X */}
          <div className="flex items-center justify-center group w-[54px] h-[54px] rounded-full bg-gray-100  text-gray-700 hover:bg-black hover:text-white transition">

          <a href="#" aria-label="twitter" className="">
            <Image src="/x.svg" alt="twitter" width={24} height={24} className="group-hover:hidden block m-[10px]" />
            <Image src="/x_white.svg" alt="twitter" width={24} height={24} className="group-hover:block hidden m-[10px]" />
          </a>
          </div>
          {/* LinkedIn */}
              <div className="flex items-center justify-center group w-[54px] h-[54px] rounded-full bg-gray-100  text-gray-700 hover:bg-black hover:text-white transition">

          <a href="#" aria-label="linkedin" className="">
            <Image src="/linkedin.svg" alt="linkedin" width={24} height={24} className="group-hover:hidden block m-[10px]" />
            <Image src="/linkedin_white.svg" alt="linkedin" width={24} height={24} className="group-hover:block hidden m-[10px]" />
          </a>
          </div>
        </div>
      </div>
    </footer>

<footer>
    
</footer>

    </>
  );
};

export default Footer; 