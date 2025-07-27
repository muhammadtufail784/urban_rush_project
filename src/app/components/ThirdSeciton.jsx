import React from 'react'
import StepCard from './StepCard'   

const ThirdSeciton = () => {
  return (
    <section id="how" className="py-24 bg-gradient-to-br from-[#EAF7FE] via-white to-[#E9FAEB] bg-no-repeat"
 style={{
  backgroundImage: "url('/bluegradient.png'), url('/greengradient.png')",
  backgroundPosition: 'left top, right top',
}}

>
  
  <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">How It Works?</h2>
  <div className="flex flex-col md:flex-row items-center justify-center gap-8">
    <StepCard
      stepNumber="1"
      title="Book Your Delivery"
      description="Enter pickup & drop-off locations, and other details to book your delivery."
      imgSrc="/deliverycard.png"
      imgClassName=" bottom-0 md:left-[22px] left-[1px] h-[330px]"
    />
    <StepCard
      stepNumber="2"
      title="Driver on the Way"
      description="Get matched instantly—track ETA in real time."
      imgSrc="/map.png"
      imgClassName=" bottom-0 left-1/2 -translate-x-1/2 h-[330px] w-[273px]"
    />
    <StepCard
      stepNumber="3"
      title="Delivered & Done"
      description="Rate your driver; payment is processed only after delivery."
      imgSrc="/deliverydone.png"
      imgClassName=" bottom-0 right-6"
    />
  </div>
</section>
  )
}

export default ThirdSeciton