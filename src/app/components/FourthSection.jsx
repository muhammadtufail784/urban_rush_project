import React from 'react'
import Image from 'next/image'

const FourthSection = () => {
  return (
    <section className="py-[42px] bg-[#F6F6F6]">
  <div className="max-w-7xl mx-auto bg-white rounded-3xl flex flex-col md:flex-row items-center gap-12">
    {/* Left content */}
    <div className="flex-1 order-2 md:order-1 w-full md:pl-[129px] p-[20px] md:p-0">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Send with UrbanRush</h2>
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        Deliver anything, anytime with trusted drivers <br /> across South Africa — fast, safe, and hassle-free.
      </p>

      {/* Bullet list */}
      <ul className="space-y-4 mb-10">
        {[
          {
            text: "Instantly matched with nearby drivers.",
          },
          {
            text: "Track your delivery in real time, live.",
          },
          {
            text: "Pay only for what you move — no hidden fees.",
          },
        ].map((item, idx) => (
          <li key={idx} className="flex items-start space-x-4">
            <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#05A3E4] flex items-center  justify-center">
              <Image src="/shield-tick.svg" alt="check" width={20} height={20} />
            </span>
            <p className="text-base text-gray-800 mt-[5px] ">{item.text}</p>
          </li>
        ))}
      </ul>

      {/* Store buttons */}
      <div className="flex space-x-4">
      <a href="#" className="">
      <Image src="/apple.svg" alt="Appstore" width={100} height={100} />
      </a>
      <a href="#" className="">
      <Image src="/playstore.svg" alt="Playstore" width={100} height={100} />
      </a>
      </div>
    </div>

    {/* Right image */}
    <div className="flex-1 order-1 md:order-2 relative w-full max-w-md pr-[52px]">
          <Image src="/greenbg.png" alt="Courier" width={400} height={500} className="absolute  z-10    rotate-12 " />
      <Image src="/man.png" alt="Courier" width={400} height={500} className=" z-50 w-full h-auto object-contain" />
    </div>
  </div>
</section>
  )
}

export default FourthSection