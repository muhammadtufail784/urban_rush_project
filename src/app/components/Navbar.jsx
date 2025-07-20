"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const FirstSection = () => {
    const [open, setOpen] = useState(false);
  return (
    <div   className="   bg-no-repeat"
>
        
     <nav className="sticky top-0 z-50  backdrop-blur-md border-b border-gray-200 py-2.5" >
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image src="/logo.svg" alt="logo" width={100} height={100} />
          </a>

          <div className="flex items-center lg:order-2">
            {/* App badges on large screens */}
            <div className="hidden lg:flex space-x-2 mr-4">
              <Image src="/apple.png" alt="apple" width={120} height={40} />
              <Image src="/playstore.png" alt="google" width={120} height={40} />
            </div>

            {/* Burger */}
            <button onClick={()=>setOpen(!open)} type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-expanded={open}>
              <span className="sr-only">Open main menu</span>
              {open ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
              )}
            </button>
          </div>

          {/* Links */}
          <div className={`${open? 'block':'hidden'} items-center justify-between w-full lg:flex lg:w-auto lg:order-1`} id="mobile-menu">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {['Home','Why urbanRUSH?','How It Works?','Join as a Driver','Contact us'].map((item,i)=>(
                <li key={i}><a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0" onClick={()=>setOpen(false)}>{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
  </div>
  )
}

export default FirstSection