import React from 'react'
import Horizentalcard from './horizentalcard'
import Image from 'next/image'  

const SecondSection = () => {
  return (
    <div id="why" className="  bg-[#F6F6F6]">
  <h2 className="text-4xl md:text-5xl font-bold text-center md:mb-16 mb-[16px] pt-[16px]  ">Why urbanRUSH?</h2>
  <div className="flex flex-wrap justify-center gap-8 items-center">
    {/* Left column */}
    <div className="space-y-8 md:order-1 order-1">

<Horizentalcard
  imgSrc="/truck-tick.svg"
  title="Heavy-Duty Hauls"
  description="Our drivers handle tiles, bricks, rubble & bulky freight."
  outerColor="#DAF9E2"
  innerColor="#80F8A0"
  gradientFrom="#EDFAF0"
  gradientTo="#FBFBFB"
/>


      {/* Real-Time Tracking */}
      <div className="md:!ml-[32px] !ml-[10px] ">
      <Horizentalcard
  imgSrc="/smart-car.svg"
  title="Real-Time Tracking"
  description="Watch your delivery live on the map, from pickup to drop-off."
  outerColor="#D7EDF7"
  innerColor="#05A3E4"
  gradientFrom="#E3F2F8"
  gradientTo="#FBFBFB"
/>
</div>


    </div>

    {/* Center phone */}
    <div className="flex justify-center md:order-2 order-3">
      <Image src="/iPhoneMockup.png" alt="Phone mockup" width={300} height={684} className="" />
    </div>

    {/* Right column */}
    <div className="space-y-8 md:order-3 order-2">
      {/* Instant Matching */}
      <div className="md:ml-[32px] !ml-[10px]">

      <Horizentalcard 
    imgSrc="/halmat.svg"
  title="Instant Matching"
  description="Nearby drivers accept your request within seconds."
  outerColor="#D7EDF7"
  innerColor="#05A3E4"
  gradientFrom="#E3F2F8"
  gradientTo="#FBFBFB"
/>
      </div>


      {/* Secure & Reliable */}
      <Horizentalcard
  imgSrc="/shield-tick.svg"
  title="Secure & Reliable"
  description="All drivers are vetted, insured, and rated by customers."
  outerColor="#C8FBD4"
  innerColor="#80F8A0"
  gradientFrom="#EDFAF0"
  gradientTo="#FBFBFB"
/>

    </div>
  </div>
</div>
  )
}

export default SecondSection