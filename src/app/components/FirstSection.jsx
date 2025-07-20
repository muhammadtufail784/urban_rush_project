"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const FirstSection = () => {
    const [open, setOpen] = useState(false);
  return (
    <div   className=" bg-white  bg-no-repeat -mt-[100px] pt-[100px]"
    style={{
      backgroundImage: "url('/bluegradient.png'), url('/greengradient.png')",
      backgroundPosition: 'left top, right top',
    }}>
        
  <section className=" py-16 px-4 md:px-20 text-center">
    {/* <!-- Icons Row --> */}
    <div className="flex justify-center space-x-4 mb-6">
      <Image src="/Group.png" alt="Group" width={48} height={24} className="bg-white rounded-lg shadow-md p-2" />
      <Image src="/Group (1).png" alt="Group" width={48} height={24} className="bg-white rounded-lg shadow-md p-2" />
      <Image src="/Group (2).png" alt="Group" width={48} height={24} className="bg-white rounded-lg shadow-md p-2" />
    </div>
  
    {/* <!-- Headline --> */}
    <h2 className="md:text-[79px] text-[40px] md:leading-[102px] leading-[40px] tracking-[0.5%] font-[800] font-rethink font-extrabold md:text-5xl font-bold mb-4 text-gray-900">
      Anything You Need, <br />
      Delivered Fast ⚡🚚
    </h2>
  
    {/* <!-- Subtext --> */}
    <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
      Instant pickup and delivery of hardware, construction materials, rubble, even bathtubs—right from your favorite store to your door.
    </p>
  
    {/* <!-- Phone Image --> */}
    <div className="flex justify-center mt-[]">
      <Image src="/Mockup 1.png" alt="App Preview" width={250} height={569} className="w-[48.06rem] md:w-[320px]  drop-shadow-2xl" />
    </div>
  </section>
  
  </div>
  )
}

export default FirstSection