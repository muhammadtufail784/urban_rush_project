"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const FirstSection = () => {
    const [open, setOpen] = useState(false);
  return (
    <div   className=" bg-white  bg-no-repeat -mt-[100px] pt-[100px] animate-slide-up"
    style={{
      backgroundImage: "url('/bluegradient.png'), url('/greengradient.png')",
      backgroundPosition: 'left top, right top',
    }}>
        
  <section className=" py-16 px-4 md:px-20 text-center ">
    {/* <!-- Icons Row --> */}
    <div className="flex justify-center space-x-4 mb-6">
      <div className='flex items-center justify-center w-[80px] h-[80px] bg-[#F3FBF6] border border-[#EBEDED] rounded-lg p-2'>
      <Image src="/Group.svg" alt="Group" width={48} height={24} className="" />
      </div>
      <div className='flex items-center justify-center w-[80px] h-[80px] bg-[#F3FBF6] border border-[#EBEDED] rounded-lg p-2'>
      <Image src="/Group (1).svg" alt="Group" width={48} height={24} className="" />  
      </div>
      <div className='flex items-center justify-center w-[80px] h-[80px] bg-[#F3FBF6] border border-[#EBEDED] rounded-lg p-2'>
      <Image src="/Group (2).svg" alt="Group" width={48} height={24} className="" />
      </div>
    </div>
  
    {/* <!-- Headline --> */}
    <h2 className="animate-slide-u md:text-[79px] text-[40px] md:leading-[102px] leading-[40px] tracking-[0.5%] font-[800] font-rethink font-extrabold md:text-5xl font-bold mb-4 text-gray-900">
      Anything You Need, <br />
      Delivered Fast ⚡🚚
    </h2>
  
    {/* <!-- Subtext --> */}
    <p className="animate-slide-u text-gray-600 text-lg max-w-2xl mx-auto mb-10" style={{animationDelay: '0.2s'}}>
      Instant pickup and delivery of hardware, construction materials, rubble, even bathtubs—right from your favorite store to your door.
    </p>
  
    {/* <!-- Phone Image --> */}
    <div className="flex justify-center mt-[] animate-float">
      <Image src="/khangullkhan.svg" alt="App Preview" width={250} height={569} className="w-[769px]  h-[569px]  drop-shadow-2xl" />
    </div>
  </section>
  
  </div>
  )
}

export default FirstSection